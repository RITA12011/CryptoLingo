// ===== CryptoLingo Auth Module =====
// 依赖：firebase-app-compat.js, firebase-auth-compat.js（在 HTML 中先于此文件加载）

// ── Firebase 配置 ──
const firebaseConfig = {
    apiKey: "AIzaSyBNeujFUdO6c5TS-C02B8NUdPf4q453tJE",
    authDomain: "cryptolingo-d6267.firebaseapp.com",
    projectId: "cryptolingo-d6267",
    storageBucket: "cryptolingo-d6267.firebasestorage.app",
    messagingSenderId: "800646639833",
    appId: "1:800646639833:web:b3cf9554b5457686780ec8"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ── 认证管理对象 ──
const CLAuth = {
    currentUser: null,
    _readyFired: false,

    // 返回用户命名空间键：uid::cl-wordbook
    // 登出后仍返回用户数据键（只读），避免数据丢失
    _lastUid: null,
    userKey(baseKey) {
        if (this.currentUser) {
            this._lastUid = this.currentUser.uid;
            return this.currentUser.uid + '::' + baseKey;
        }
        if (this._lastUid) return this._lastUid + '::' + baseKey;
        return baseKey;
    },

    // 更新导航栏：未登录显示「登录」，已登录显示邮箱+退出
    updateNavbar() {
        const btn = document.querySelector('.nav-user-btn');
        if (!btn) return;
        const menu = btn.parentElement.querySelector('.nav-dropdown-menu');
        if (!menu) return;

        const userIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';

        if (this.currentUser) {
            const email = this.currentUser.email;
            btn.innerHTML = userIcon;
            btn.title = email;
            menu.innerHTML =
                '<a href="wordbook.html">单词本</a>' +
                '<a href="dashboard.html">仪表盘</a>' +
                '<a href="#" onclick="CLAuth.logout();return false;" class="nav-logout-link">退出登录</a>';
        } else {
            btn.innerHTML = userIcon;
            btn.title = '';
            menu.innerHTML =
                '<a href="login.html">登录 / 注册</a>' +
                '<a href="wordbook.html">单词本</a>' +
                '<a href="dashboard.html">仪表盘</a>';
        }
    },

    // 登出
    async logout() {
        try {
            await auth.signOut();
        } catch(e) {
            console.error('Logout failed:', e);
        }
        window.location.reload();
    },

    // 首次登录迁移匿名数据到用户命名空间
    migrateLocalStorage(uid) {
        const flag = uid + '::cl-migrated';
        if (localStorage.getItem(flag)) return;

        ['cl-wordbook', 'cl-progress', 'cl-checkin', 'cl-streak', 'cl-read-mode', 'cl-quiz-scores'].forEach(key => {
            const val = localStorage.getItem(key);
            if (val !== null) {
                localStorage.setItem(uid + '::' + key, val);
            }
        });
        localStorage.setItem(flag, '1');
    }
};

// ── 监听认证状态 ──
auth.onAuthStateChanged(user => {
    CLAuth.currentUser = user;
    if (user) {
        CLAuth._lastUid = user.uid;
        CLAuth.migrateLocalStorage(user.uid);
    }
    CLAuth.updateNavbar();
    window.dispatchEvent(new CustomEvent('cl-auth-ready', { detail: { uid: user ? user.uid : null } }));
});
