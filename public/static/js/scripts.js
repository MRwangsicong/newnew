import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "header": {
        "twitter": "Twitter",
        "github": "GitHub",
        "telegram": "Telegram",
        "download": "Download",
        "language": "EN"
      },
      "home": {
        "title": "Are you struggling to find blockchain tools?",
        "description": "Maybe you've heard the rumors and they're getting louder. AIGbot is developed by top programmers in the cryptocurrency space. We focus on service and user experience. The goal is to solve the troubles of crypto enthusiasts.",
        "twitter": "Twitter",
        "telegram": "Telegram"
      },
      "whatIs": {
        "title": "What is AGIBOT",
        "description": "AGI Bot is a Token batch fast only trading Robot."
      },
      "aboutUs": {
        "title": "Would you like to get to know us better?",
        "description": "Many Bots are unable to meet the needs of crypto enthusiasts as well as adapt to changes in the market. For this reason, many missed opportunities. Let's solve these troubles.",
        "stability": "Stability",
        "stabilityDesc": "Our project is built on a solid foundation, offering stability and reliability in an otherwise unpredictable landscape.",
        "security": "Security",
        "securityDesc": "AIGbot puts the safety of your money first. AIGbot is independent of your local computer; that's why we don't do webside!",
        "trustworthiness": "Trustworthiness",
        "trustworthinessDesc": "Comprehensive. We started with the Solana Market Value Management bot. Of course, we go beyond that."
      },
      "roadmap": {
        "title": "Roadmap",
        "stageOne": "STAGE ONE\nWeb launch\nTelegram launch\nMarket Value Management bot\nLaunched on Solana",
        "stageTwo": "STAGE TWO\nFormation of the invitation mechanism\nImprovement of Solana Market Value Management bot\nRelease of EVM Market Value Management bot",
        "stageThree": "STAGE THREE\nCustomized versions of the robot according to customer needs\nAggregation of all robot functions on the market",
        "stageFour": "STAGE FOUR\nMore EVM support"
      },
      "footer": {
        "copyright": "© 2024 AgiBot - All Rights Reserved"
      }
    }
  },
  zh: {
    translation: {
      "header": {
        "twitter": "推特",
        "github": "GitHub",
        "telegram": "Telegram",
        "download": "下载",
        "language": "中文"
      },
      "home": {
        "title": "你是否在寻找区块链工具？",
        "description": "也许你已经听到了这些传闻，而且声音越来越大。AIGbot 是由加密货币领域的顶级程序员开发的。我们专注于服务和用户体验。目标是解决加密爱好者的烦恼。",
        "twitter": "推特",
        "telegram": "Telegram"
      },
      "whatIs": {
        "title": "AGIBOT 是什么",
        "description": "AGI Bot 是一种仅限于 Token 批量快速交易的机器人。"
      },
      "aboutUs": {
        "title": "你想更好地了解我们吗？",
        "description": "许多机器人无法满足加密爱好者的需求，也无法及时适应市场变化。因此，很多机会被错过了。让我们解决这些烦恼。",
        "stability": "稳定性",
        "stabilityDesc": "我们的项目建立在坚实的基础上，提供稳定性和可靠性，在一个不可预测的环境中。",
        "security": "安全性",
        "securityDesc": "AIGbot 以你的资金安全为首要任务。AIGbot 独立于你的本地计算机，这就是为什么我们不做网站！",
        "trustworthiness": "可信赖性",
        "trustworthinessDesc": "综合性的。我们从 Solana 市场价值管理机器人开始。当然，我们超越了这一点。"
      },
      "roadmap": {
        "title": "路线图",
        "stageOne": "阶段一\n网站启动\nTelegram 启动\n市场价值管理机器人\n在 Solana 上推出",
        "stageTwo": "阶段二\n邀请机制的形成\n改进 Solana 市场价值管理机器人\n发布 EVM 市场价值管理机器人",
        "stageThree": "阶段三\n根据客户需求定制机器人的版本\n以及市场上所有机器人的功能聚合",
        "stageFour": "阶段四\n更多 EVM 支持"
      },
      "footer": {
        "copyright": "© 2024 AgiBot - 保留所有权利"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // 默认语言
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
