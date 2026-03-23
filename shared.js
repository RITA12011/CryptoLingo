// =============================================
// CryptoLingo — 共享工具模块
// =============================================
// 所有页面共用的代码：导航、主题、成就、每日任务、笔记
// =============================================

// ===== 导航栏交互 =====
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 40);
});

// 点击式下拉菜单（替代 hover）— 支持多个下拉
document.addEventListener('click', (e) => {
    const allDropdowns = document.querySelectorAll('.nav-dropdown');
    allDropdowns.forEach(dropdown => {
        const menu = dropdown.querySelector('.nav-dropdown-menu');
        if (!menu) return;
        const btn = dropdown.querySelector('.nav-user-btn') || dropdown.querySelector('.nav-link-btn');
        if (btn && btn.contains(e.target)) {
            // Toggle this dropdown, close others
            const wasOpen = menu.classList.contains('open');
            allDropdowns.forEach(d => {
                const m = d.querySelector('.nav-dropdown-menu');
                if (m) m.classList.remove('open');
            });
            if (!wasOpen) menu.classList.add('open');
            e.stopPropagation();
            return;
        }
        // Click outside → close
        if (!dropdown.contains(e.target)) {
            menu.classList.remove('open');
        }
    });
});

// ===== 主题切换 =====
function toggleTheme() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('cl-theme', isDark ? 'light' : 'dark');
}

(function initTheme() {
    const t = localStorage.getItem('cl-theme') || 'light';
    document.documentElement.setAttribute('data-theme', t);
})();

// ===== 页面过渡动画 =====
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('page-enter');
});

// ===== 动态 Footer 年份 =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.footer-bottom p').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/© \d{4}/, `© ${new Date().getFullYear()}`);
    });
});

// ===== 小图标 SVG =====
const CLIcon = {
    flame:   '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1C8 1 3 6 3 10a5 5 0 0010 0C13 6 8 1 8 1z"/></svg>',
    bolt:    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 1L4 9h4l-1 6 5-8H8l1-6z"/></svg>',
    gem:     '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5l5 9 5-9M1 5h14l-2-3H3L1 5z"/></svg>',
    crown:   '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 12h12l1-7-4 3-3-5-3 5-4-3 1 7z"/></svg>',
    trophy:  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 2h6v5a3 3 0 01-6 0V2zM3 2H5M11 2h2M3 2v3a2 2 0 002 2M13 2v3a2 2 0 01-2 2M6 12h4M8 9v3"/></svg>',
    book:    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 2h4l2 1 2-1h4v11h-4l-2 1-2-1H2V2z"/><path d="M8 3v11"/></svg>',
    books:   '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="2" width="4" height="12" rx="0.5"/><rect x="6" y="1" width="4" height="13" rx="0.5"/><rect x="11" y="3" width="4" height="11" rx="0.5"/></svg>',
    grad:    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 6l7-3 7 3-7 3-7-3z"/><path d="M4 7.5v4l4 2 4-2v-4"/></svg>',
    brain:   '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 14V8M5 4a3 3 0 013-3 3 3 0 013 3M4 7a3 3 0 00-1 4 3 3 0 003 2M12 7a3 3 0 011 4 3 3 0 01-3 2"/></svg>',
    sprout:  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 14V7M5 7c0-3 3-5 3-5s3 2 3 5M3 11c2-1 5-1 5-1M13 11c-2-1-5-1-5-1"/></svg>',
    tree:    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 14v-4M4 10l4-8 4 8H4z"/></svg>',
    palette: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><circle cx="6" cy="5" r="1" fill="currentColor"/><circle cx="10" cy="6" r="1" fill="currentColor"/><circle cx="5" cy="9" r="1" fill="currentColor"/></svg>',
    perfect: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8l2 2 4-4"/></svg>',
    up:      '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 8l4-4 4 4"/></svg>',
    check:   '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 6l3 3 5-5"/></svg>',
    star:    '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M7 1l1.8 3.6L13 5.3l-2.8 2.7.7 3.9L7 9.8 3.1 11.9l.7-3.9L1 5.3l4.2-.7L7 1z"/></svg>',
    starFill:'<svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" stroke="currentColor" stroke-width="0.5"><path d="M7 1l1.8 3.6L13 5.3l-2.8 2.7.7 3.9L7 9.8 3.1 11.9l.7-3.9L1 5.3l4.2-.7L7 1z"/></svg>',
    note:    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 2h7l3 3v9H3V2z"/><path d="M10 2v3h3"/><path d="M5 8h6M5 11h4"/></svg>',
    rising:  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 13l4-5 3 3 5-7"/><path d="M11 4h3v3"/></svg>',
    party:   '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 14l3-8 5 5-8 3z"/><path d="M7 3l1 2M11 5l2 1M10 1l.5 1.5M13 3l1 .5"/><circle cx="5" cy="5" r="0.5" fill="currentColor"/><circle cx="12" cy="8" r="0.5" fill="currentColor"/></svg>',
    stable:  '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M5 8l2 2 4-4"/></svg>',
};

// ===== 成就/徽章系统 =====
const CLAchievements = {
    STORAGE_KEY: 'cl-achievements',

    definitions: [
        // 打卡成就
        { id: 'streak_3',   icon: CLIcon.flame,   title: '三天小将',     desc: '连续学习 3 天',         condition: (s) => s.streak >= 3 },
        { id: 'streak_7',   icon: CLIcon.bolt,    title: '一周达人',     desc: '连续学习 7 天',         condition: (s) => s.streak >= 7 },
        { id: 'streak_14',  icon: CLIcon.gem,     title: '两周先锋',     desc: '连续学习 14 天',        condition: (s) => s.streak >= 14 },
        { id: 'streak_30',  icon: CLIcon.crown,   title: '月度王者',     desc: '连续学习 30 天',        condition: (s) => s.streak >= 30 },
        { id: 'streak_100', icon: CLIcon.trophy,  title: '百日传奇',     desc: '连续学习 100 天',       condition: (s) => s.streak >= 100 },
        // 词汇成就
        { id: 'words_10',   icon: CLIcon.book,    title: '初识词海',     desc: '收藏 10 个词汇',        condition: (s) => s.words >= 10 },
        { id: 'words_50',   icon: CLIcon.books,   title: '词汇达人',     desc: '收藏 50 个词汇',        condition: (s) => s.words >= 50 },
        { id: 'words_100',  icon: CLIcon.grad,    title: '词汇大师',     desc: '收藏 100 个词汇',       condition: (s) => s.words >= 100 },
        { id: 'words_500',  icon: CLIcon.brain,   title: '词汇百科',     desc: '收藏 500 个词汇',       condition: (s) => s.words >= 500 },
        // 学习成就
        { id: 'total_7',    icon: CLIcon.sprout,  title: '萌芽学员',     desc: '累计学习 7 天',         condition: (s) => s.totalDays >= 7 },
        { id: 'total_30',   icon: CLIcon.tree,    title: '稳定学员',     desc: '累计学习 30 天',        condition: (s) => s.totalDays >= 30 },
        { id: 'first_share',icon: CLIcon.palette, title: '初次分享',     desc: '生成第一张分享卡片',    condition: (s) => s.shares >= 1 },
        { id: 'quiz_100',   icon: CLIcon.perfect, title: '满分选手',     desc: '测验获得 100 分',       condition: (s) => s.perfectQuiz },
    ],

    _key() {
        return typeof CLAuth !== 'undefined' && CLAuth.currentUser ? CLAuth.userKey(this.STORAGE_KEY) : this.STORAGE_KEY;
    },

    _get() {
        return JSON.parse(localStorage.getItem(this._key()) || '{}');
    },

    _save(data) {
        localStorage.setItem(this._key(), JSON.stringify(data));
    },

    unlock(id) {
        const data = this._get();
        if (!data[id]) {
            data[id] = { unlockedAt: Date.now() };
            this._save(data);
            this._showToast(id);
            return true;
        }
        return false;
    },

    isUnlocked(id) {
        return !!this._get()[id];
    },

    getUnlocked() {
        const data = this._get();
        return this.definitions.filter(d => data[d.id]);
    },

    getLocked() {
        const data = this._get();
        return this.definitions.filter(d => !data[d.id]);
    },

    // 检查并解锁成就
    check(stats) {
        this.definitions.forEach(d => {
            if (!this.isUnlocked(d.id) && d.condition(stats)) {
                this.unlock(d.id);
            }
        });
    },

    // 成就解锁 Toast 通知
    _showToast(id) {
        const def = this.definitions.find(d => d.id === id);
        if (!def) return;

        const toast = document.createElement('div');
        toast.className = 'achievement-toast';
        toast.innerHTML = `
            <div class="achievement-toast-icon">${def.icon}</div>
            <div class="achievement-toast-info">
                <div class="achievement-toast-title">成就解锁！</div>
                <div class="achievement-toast-name">${def.title}</div>
                <div class="achievement-toast-desc">${def.desc}</div>
            </div>
        `;
        document.body.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3500);
    }
};

// ===== 每日任务系统 =====
const CLMissions = {
    STORAGE_KEY: 'cl-missions',

    _key(date) {
        const base = this.STORAGE_KEY + '-' + date;
        return typeof CLAuth !== 'undefined' && CLAuth.currentUser ? CLAuth.userKey(base) : base;
    },

    getMissions(date) {
        const key = this._key(date);
        return JSON.parse(localStorage.getItem(key) || JSON.stringify({
            read: false,      // 阅读 1 篇文章
            collect: 0,       // 收藏 3 个单词
            quiz: false,      // 完成 1 次测验
        }));
    },

    _save(date, data) {
        localStorage.setItem(this._key(date), JSON.stringify(data));
    },

    markRead(date) {
        const m = this.getMissions(date);
        m.read = true;
        this._save(date, m);
    },

    addCollect(date) {
        const m = this.getMissions(date);
        m.collect = (m.collect || 0) + 1;
        this._save(date, m);
    },

    markQuiz(date) {
        const m = this.getMissions(date);
        m.quiz = true;
        this._save(date, m);
    },

    markReview(date) {
        const m = this.getMissions(date);
        m.review = true;
        this._save(date, m);
    },

    isAllComplete(date) {
        const m = this.getMissions(date);
        return m.read && m.collect >= 3 && m.quiz;
    },

    getProgress(date) {
        const m = this.getMissions(date);
        let done = 0;
        if (m.read) done++;
        if (m.collect >= 3) done++;
        if (m.quiz) done++;
        return { done, total: 3, missions: m };
    },

    // 渲染今日任务面板
    render(containerId, date) {
        const el = document.getElementById(containerId);
        if (!el) return;

        const { done, total, missions } = this.getProgress(date);
        const pct = Math.round((done / total) * 100);

        const items = [
            { done: missions.read,        label: '阅读 1 篇文章' },
            { done: missions.collect >= 3, label: `收藏 3 个单词 (${Math.min(missions.collect, 3)}/3)` },
            { done: missions.quiz,         label: '完成 1 次测验' },
        ];

        el.innerHTML = `
            <div class="mission-card">
                <div class="mission-header">
                    <div class="mission-title">
                        Today's Mission
                    </div>
                    <div class="mission-progress-ring">
                        <svg viewBox="0 0 36 36">
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none" stroke="var(--border-color)" stroke-width="3"/>
                            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none" stroke="url(#mission-grad)" stroke-width="3"
                                stroke-dasharray="${pct}, 100" stroke-linecap="round"/>
                            <defs><linearGradient id="mission-grad"><stop offset="0%" stop-color="#4b8df8"/><stop offset="100%" stop-color="#9b6ff6"/></linearGradient></defs>
                        </svg>
                        <span class="mission-pct">${done}/${total}</span>
                    </div>
                </div>
                <div class="mission-list">
                    ${items.map(item => `
                        <div class="mission-item ${item.done ? 'done' : ''}">
                            <span class="mission-check">${item.done ? '&#10003;' : ''}</span>
                            <span class="mission-label">${item.label}</span>
                        </div>
                    `).join('')}
                </div>
                ${done === total ? '<div class="mission-complete">Today\'s missions complete!</div>' : ''}
            </div>
        `;
    }
};

// ===== 用户笔记系统 =====
const CLNotes = {
    STORAGE_KEY: 'cl-notes',

    _key() {
        return typeof CLAuth !== 'undefined' && CLAuth.currentUser ? CLAuth.userKey(this.STORAGE_KEY) : this.STORAGE_KEY;
    },

    _get() {
        return JSON.parse(localStorage.getItem(this._key()) || '{}');
    },

    _save(data) {
        localStorage.setItem(this._key(), JSON.stringify(data));
    },

    // key = "article-{date}-{index}" 或 "word-{word}"
    get(key) {
        return this._get()[key] || '';
    },

    set(key, text) {
        const data = this._get();
        if (text.trim()) {
            data[key] = text;
        } else {
            delete data[key];
        }
        this._save(data);
    },

    getAll() {
        return this._get();
    },

    count() {
        return Object.keys(this._get()).length;
    }
};

// ===== Crypto 热词数据 =====
const cryptoHotWords = [
    { word: 'Restaking', def: '再质押 — 将已质押资产在多个协议中重复质押以获取额外收益', trend: 'hot' },
    { word: 'RWA', def: 'Real World Assets — 现实世界资产上链，如国债、房产代币化', trend: 'hot' },
    { word: 'ZK Proof', def: 'Zero-Knowledge Proof — 零知识证明，在不泄露信息的情况下验证真伪', trend: 'rising' },
    { word: 'Account Abstraction', def: '账户抽象 — 让智能合约充当用户账户，简化钱包体验', trend: 'rising' },
    { word: 'Modular Blockchain', def: '模块化区块链 — 将执行、结算、数据可用性分层处理', trend: 'stable' },
    { word: 'Liquid Staking', def: '流动性质押 — 质押资产同时获得流动性代币用于 DeFi', trend: 'stable' },
    { word: 'Intent-based', def: '意图驱动 — 用户只需表达意图，系统自动寻找最优执行路径', trend: 'hot' },
    { word: 'Data Availability', def: '数据可用性 — 确保区块数据可被验证节点访问的基础层', trend: 'rising' },
];

// ===== PWA Service Worker =====
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}
