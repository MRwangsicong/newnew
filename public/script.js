// JavaScript to handle language toggle functionality
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    console.log("Current language:", currentLang);  
    const newLang = currentLang === "zh" ? "en" : "zh";
    document.documentElement.lang = newLang;
    updateText(newLang);
}

function updateText(lang) {
    const texts = {
        zh: {
            title: "AGIBOT 下载",
            evm: "EVM 链（付费）",
            sol: "Solana 链（免费 & 付费）",
            free: "免费版",
            paid: "付费版",
            win: "Windows",
            macIntel: "Mac（Intel 芯片）",
            macArm: "Mac（Apple 芯片）",
            download: "点击下载",
            copyright: "© 2025 AGIBOT. 版权所有。",
            followUs: "关注我们"
        },
        en: {
            title: "AGIBOT Download",
            evm: "EVM Chain (Paid)",
            sol: "Solana Chain (Free & Paid)",
            free: "Free Edition",
            paid: "Paid Edition",
            win: "Windows",
            macIntel: "Mac (Intel)",
            macArm: "Mac (Apple Silicon)",
            download: "Download",
            copyright: "© 2025 AGIBOT. All rights reserved.",
            followUs: "Follow us"
        }
    };

    const t = texts[lang];
    document.title = t.title;
    document.querySelector('#site-title').textContent = "AGIBOT";
    document.querySelector('#evm-title').textContent = t.evm;
    document.querySelector('#sol-title').textContent = t.sol;
    document.querySelector('#free-title').textContent = t.free;
    document.querySelector('#paid-title').textContent = t.paid;
    document.querySelector('#win-text').textContent = t.win;
    document.querySelector('#macIntel-text').textContent = t.macIntel;
    document.querySelector('#macArm-text').textContent = t.macArm;
    document.querySelector('#free-win-text').textContent = t.win;
    document.querySelector('#free-macIntel-text').textContent = t.macIntel;
    document.querySelector('#free-macArm-text').textContent = t.macArm;
    document.querySelector('#paid-win-text').textContent = t.win;
    document.querySelector('#paid-macIntel-text').textContent = t.macIntel;
    document.querySelector('#paid-macArm-text').textContent = t.macArm;
    document.querySelector('#copyright-text').textContent = t.copyright;
    document.querySelector('.language-toggle').textContent = lang === "zh" ? "EN" : "中文";
}
