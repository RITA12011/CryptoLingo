// =============================================
// CryptoLingo 应用功能模块
// =============================================
// 单词本、进度追踪、打卡、搜索、测验、分享
// =============================================

const CL = {
    // ===== 存储键 =====
    KEYS: {
        WORDBOOK: 'cl-wordbook',
        PROGRESS: 'cl-progress',
        CHECKIN:  'cl-checkin',
        STREAK:   'cl-streak',
        READ_MODE:'cl-read-mode',
        QUIZ_SCORES: 'cl-quiz-scores'
    },

    // ===== 日期工具 =====
    today() {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
    },

    // ===== 单词本 =====
    wordbook: {
        _get() {
            try { return JSON.parse(localStorage.getItem(CLAuth.userKey(CL.KEYS.WORDBOOK)) || '{}'); }
            catch(e) { return {}; }
        },
        _save(data) {
            localStorage.setItem(CLAuth.userKey(CL.KEYS.WORDBOOK), JSON.stringify(data));
        },
        add(word, def, example, exampleZh, source, date) {
            const data = this._get();
            const key = word.toLowerCase();
            data[key] = {
                word, def, example: example || '', exampleZh: exampleZh || '',
                source: source || '', date: date || CL.today(),
                addedAt: Date.now(),
                reviewCount: 0,
                nextReview: Date.now(), // 立即可复习
                level: 0 // 艾宾浩斯等级 0-5
            };
            this._save(data);
            return true;
        },
        remove(word) {
            const data = this._get();
            delete data[word.toLowerCase()];
            this._save(data);
        },
        has(word) {
            return !!this._get()[word.toLowerCase()];
        },
        getAll() {
            return Object.values(this._get()).sort((a, b) => b.addedAt - a.addedAt);
        },
        count() {
            return Object.keys(this._get()).length;
        },
        // 艾宾浩斯复习间隔（分钟）：5min, 30min, 12h, 1d, 2d, 4d
        _intervals: [5, 30, 720, 1440, 2880, 5760],
        markReviewed(word, correct) {
            const data = this._get();
            const key = word.toLowerCase();
            if (!data[key]) return;
            data[key].reviewCount++;
            if (correct) {
                data[key].level = Math.min(data[key].level + 1, 5);
            } else {
                data[key].level = Math.max(data[key].level - 1, 0);
            }
            const interval = this._intervals[data[key].level] * 60 * 1000;
            data[key].nextReview = Date.now() + interval;
            this._save(data);
        },
        getDueWords() {
            const now = Date.now();
            return this.getAll().filter(w => w.nextReview <= now);
        }
    },

    // ===== 阅读进度 =====
    progress: {
        _get() {
            try { return JSON.parse(localStorage.getItem(CLAuth.userKey(CL.KEYS.PROGRESS)) || '{}'); }
            catch(e) { return {}; }
        },
        _save(data) {
            localStorage.setItem(CLAuth.userKey(CL.KEYS.PROGRESS), JSON.stringify(data));
        },
        markRead(date, cardIndex) {
            const data = this._get();
            if (!data[date]) data[date] = [];
            if (!data[date].includes(cardIndex)) {
                data[date].push(cardIndex);
            }
            this._save(data);
        },
        isRead(date, cardIndex) {
            const data = this._get();
            return data[date] && data[date].includes(cardIndex);
        },
        getReadDates() {
            return Object.keys(this._get());
        },
        getReadCount(date) {
            const data = this._get();
            return data[date] ? data[date].length : 0;
        },
        // 生成热力图数据（最近90天）
        getHeatmapData() {
            const data = this._get();
            const result = [];
            const d = new Date();
            for (let i = 89; i >= 0; i--) {
                const date = new Date(d);
                date.setDate(date.getDate() - i);
                const ds = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
                result.push({
                    date: ds,
                    count: data[ds] ? data[ds].length : 0,
                    day: date.getDay(),
                    weekNum: Math.floor(i / 7)
                });
            }
            return result;
        }
    },

    // ===== 每日打卡 =====
    checkin: {
        _get() {
            try { return JSON.parse(localStorage.getItem(CLAuth.userKey(CL.KEYS.CHECKIN)) || '[]'); }
            catch(e) { return []; }
        },
        _save(data) {
            localStorage.setItem(CLAuth.userKey(CL.KEYS.CHECKIN), JSON.stringify(data));
        },
        doCheckin() {
            const data = this._get();
            const today = CL.today();
            if (!data.includes(today)) {
                data.push(today);
                this._save(data);
            }
            this._updateStreak();
            return true;
        },
        isCheckedIn() {
            return this._get().includes(CL.today());
        },
        _updateStreak() {
            let streak = 0;
            const d = new Date();
            const data = new Set(this._get());
            while (true) {
                const ds = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
                if (data.has(ds)) {
                    streak++;
                    d.setDate(d.getDate() - 1);
                } else {
                    break;
                }
            }
            localStorage.setItem(CLAuth.userKey(CL.KEYS.STREAK), streak);
        },
        getStreak() {
            this._updateStreak();
            return parseInt(localStorage.getItem(CLAuth.userKey(CL.KEYS.STREAK)) || '0');
        },
        getTotalDays() {
            return this._get().length;
        }
    },

    // ===== 阅读模式 =====
    readMode: {
        get() {
            return localStorage.getItem(CLAuth.userKey(CL.KEYS.READ_MODE)) || 'bilingual';
        },
        set(mode) {
            localStorage.setItem(CLAuth.userKey(CL.KEYS.READ_MODE), mode);
        }
    },

    // ===== 测验生成 =====
    quiz: {
        // 从词汇列表生成选择题
        generateVocabQuiz(vocabulary, allVocab) {
            const questions = [];
            const shuffled = [...vocabulary].sort(() => Math.random() - 0.5).slice(0, 5);

            shuffled.forEach(v => {
                // 从全库中取干扰项
                const distractors = allVocab
                    .filter(d => d.word.toLowerCase() !== v.word.toLowerCase())
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map(d => d.def);

                const options = [v.def, ...distractors].sort(() => Math.random() - 0.5);

                questions.push({
                    type: 'vocab',
                    question: `"${v.word}" 的含义是？`,
                    options,
                    answer: v.def,
                    word: v.word
                });
            });

            return questions;
        },

        // 从语法列表生成判断题
        generateGrammarQuiz(grammar) {
            if (!grammar || grammar.length === 0) return [];
            const questions = [];

            grammar.forEach(g => {
                questions.push({
                    type: 'grammar',
                    question: `以下句子使用了 "${g.pattern}" 句式，对吗？`,
                    example: g.example,
                    options: ['正确 ✓', '错误 ✗'],
                    answer: '正确 ✓',
                    explanation: g.explanation
                });
            });

            return questions;
        }
    },

    // ===== 全站搜索 =====
    search: {
        query(keyword) {
            if (!keyword || keyword.length < 1) return { articles: [], vocab: [] };
            const kw = keyword.toLowerCase();
            const articles = [];
            const vocab = [];
            const dates = getAllDates();

            dates.forEach(date => {
                const items = getLessons(date);
                items.forEach((item, idx) => {
                    // 搜索文章
                    const plainEn = item.textEn.replace(/<[^>]*>/g, '').toLowerCase();
                    const plainZh = item.textZh.replace(/<[^>]*>/g, '').toLowerCase();
                    const authorMatch = item.author.toLowerCase().includes(kw);
                    const contentMatch = plainEn.includes(kw) || plainZh.includes(kw);

                    if (authorMatch || contentMatch) {
                        articles.push({
                            date, index: idx, author: item.author,
                            title: plainEn.slice(0, 80) + '...',
                            type: item.type, difficulty: item.difficulty
                        });
                    }

                    // 搜索词汇
                    item.vocabulary.forEach(v => {
                        if (v.word.toLowerCase().includes(kw) || v.def.toLowerCase().includes(kw)) {
                            vocab.push({
                                word: v.word, def: v.def,
                                source: item.author, date
                            });
                        }
                    });
                });
            });

            return { articles, vocab };
        }
    },

    // ===== 分享卡片生成（Canvas API）=====
    share: {
        async generateCard(options) {
            const { word, def, example, quote, author, type } = options;
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 500;
            const ctx = canvas.getContext('2d');

            // 背景
            const grad = ctx.createLinearGradient(0, 0, 800, 500);
            grad.addColorStop(0, '#10141e');
            grad.addColorStop(0.5, '#161c2e');
            grad.addColorStop(1, '#1c2236');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 800, 500);

            // 装饰圆
            ctx.beginPath();
            ctx.arc(700, 80, 150, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(75, 141, 248, 0.08)';
            ctx.fill();

            ctx.beginPath();
            ctx.arc(100, 420, 120, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(155, 111, 246, 0.06)';
            ctx.fill();

            // 顶部渐变线
            const lineGrad = ctx.createLinearGradient(60, 0, 740, 0);
            lineGrad.addColorStop(0, '#4b8df8');
            lineGrad.addColorStop(0.5, '#9b6ff6');
            lineGrad.addColorStop(1, '#14c8e0');
            ctx.fillStyle = lineGrad;
            ctx.fillRect(60, 40, 680, 3);

            if (type === 'vocab') {
                // 词汇卡片
                ctx.fillStyle = '#14c8e0';
                ctx.font = 'bold 42px -apple-system, sans-serif';
                ctx.fillText(word, 60, 120);

                ctx.fillStyle = '#9ba8c0';
                ctx.font = '22px -apple-system, sans-serif';
                this._wrapText(ctx, def, 60, 170, 680, 32);

                if (example) {
                    ctx.fillStyle = 'rgba(232, 236, 244, 0.6)';
                    ctx.font = 'italic 20px -apple-system, sans-serif';
                    this._wrapText(ctx, `"${example}"`, 60, 280, 680, 30);
                }
            } else {
                // 金句卡片
                ctx.fillStyle = '#e8ecf4';
                ctx.font = 'italic bold 26px -apple-system, sans-serif';
                this._wrapText(ctx, `"${quote}"`, 60, 110, 680, 38);

                if (author) {
                    ctx.fillStyle = '#4b8df8';
                    ctx.font = '20px -apple-system, sans-serif';
                    ctx.fillText(`— ${author}`, 60, 340);
                }
            }

            // 底部品牌
            ctx.fillStyle = lineGrad;
            ctx.fillRect(60, 430, 680, 1);

            ctx.fillStyle = '#6b7a94';
            ctx.font = '16px -apple-system, sans-serif';
            ctx.fillText('◈ CryptoLingo — 用 Crypto 学英语', 60, 465);

            ctx.fillStyle = '#4b8df8';
            ctx.font = '14px -apple-system, sans-serif';
            ctx.fillText(CL.today(), 640, 465);

            return canvas.toDataURL('image/png');
        },

        _wrapText(ctx, text, x, y, maxW, lineH) {
            // 混合断行：英文按空格断词，中文按字符断
            const tokens = text.match(/[\u4e00-\u9fff]|[^\u4e00-\u9fff\s]+\s?|\s/g) || [text];
            let line = '';
            let curY = y;
            for (let i = 0; i < tokens.length; i++) {
                const test = line + tokens[i];
                if (ctx.measureText(test).width > maxW && line) {
                    ctx.fillText(line, x, curY);
                    line = tokens[i];
                    curY += lineH;
                    if (curY > 420) break;
                } else {
                    line = test;
                }
            }
            if (line) ctx.fillText(line, x, curY);
        },

        // 下载图片
        download(dataUrl, filename) {
            const a = document.createElement('a');
            a.href = dataUrl;
            a.download = filename || 'cryptolingo-share.png';
            a.click();
        }
    },

    // ===== 打卡海报生成 =====
    checkinPoster: {
        async generate() {
            const streak = CL.checkin.getStreak();
            const total = CL.checkin.getTotalDays();
            const wordsLearned = CL.wordbook.count();
            const today = CL.today();

            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');

            // 背景
            const grad = ctx.createLinearGradient(0, 0, 800, 600);
            grad.addColorStop(0, '#10141e');
            grad.addColorStop(1, '#1c2236');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, 800, 600);

            // 大装饰圆
            ctx.beginPath();
            ctx.arc(400, 250, 200, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(75, 141, 248, 0.06)';
            ctx.fill();

            // 顶部渐变线
            const lineGrad = ctx.createLinearGradient(60, 0, 740, 0);
            lineGrad.addColorStop(0, '#4b8df8');
            lineGrad.addColorStop(0.5, '#9b6ff6');
            lineGrad.addColorStop(1, '#14c8e0');
            ctx.fillStyle = lineGrad;
            ctx.fillRect(60, 50, 680, 3);

            // 标题
            ctx.fillStyle = '#e8ecf4';
            ctx.font = 'bold 36px -apple-system, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('CryptoLingo 学习打卡', 400, 110);

            // 日期
            ctx.fillStyle = '#9ba8c0';
            ctx.font = '20px -apple-system, sans-serif';
            ctx.fillText(today, 400, 150);

            // 连续天数（大字）
            const streakGrad = ctx.createLinearGradient(300, 200, 500, 200);
            streakGrad.addColorStop(0, '#4b8df8');
            streakGrad.addColorStop(0.5, '#9b6ff6');
            streakGrad.addColorStop(1, '#14c8e0');
            ctx.fillStyle = streakGrad;
            ctx.font = 'bold 100px -apple-system, sans-serif';
            ctx.fillText(streak, 400, 300);

            ctx.fillStyle = '#9ba8c0';
            ctx.font = '22px -apple-system, sans-serif';
            ctx.fillText('天连续学习', 400, 340);

            // 统计
            ctx.fillStyle = '#6b7a94';
            ctx.font = '18px -apple-system, sans-serif';
            ctx.fillText(`累计打卡 ${total} 天  |  收藏词汇 ${wordsLearned} 个`, 400, 410);

            // 激励语
            let motivation = '坚持就是胜利！';
            if (streak >= 30) motivation = '太强了！一个月不间断！';
            else if (streak >= 14) motivation = '两周达人，继续加油！';
            else if (streak >= 7) motivation = '一周连续打卡，势不可挡！';
            else if (streak >= 3) motivation = '三天连续学习，保持节奏！';

            ctx.fillStyle = '#14c8e0';
            ctx.font = 'bold 20px -apple-system, sans-serif';
            ctx.fillText(motivation, 400, 460);

            // 底部品牌
            ctx.fillStyle = lineGrad;
            ctx.fillRect(60, 520, 680, 1);
            ctx.fillStyle = '#6b7a94';
            ctx.font = '16px -apple-system, sans-serif';
            ctx.fillText('◈ CryptoLingo — 用 Crypto 学英语，每天进步一点点', 400, 560);

            ctx.textAlign = 'left';
            return canvas.toDataURL('image/png');
        }
    }
};
