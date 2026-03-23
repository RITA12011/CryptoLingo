// CryptoLingo 日常英语对话数据
const dialogs = {
    "exchange": [
        {
            id: "ex-001",
            scene: "在交易所注册账户",
            sceneEn: "Registering an Exchange Account",
            category: "exchange",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "User", en: "Hi, I'd like to create an account on your exchange.", zh: "你好，我想在你们交易所创建一个账户。" },
                { speaker: "B", role: "Support", en: "Welcome! Could you please provide your email address to get started?", zh: "欢迎！请问您能提供邮箱地址来开始注册吗？" },
                { speaker: "A", role: "User", en: "Sure, it's john@email.com. Do I need to verify my identity?", zh: "好的，是 john@email.com。我需要验证身份吗？" },
                { speaker: "B", role: "Support", en: "Yes, we require KYC verification for all accounts. You'll need a government-issued ID and a selfie.", zh: "是的，我们所有账户都需要 KYC 验证。您需要准备一张政府颁发的证件和一张自拍照。" },
                { speaker: "A", role: "User", en: "How long does the verification process usually take?", zh: "验证过程通常需要多长时间？" },
                { speaker: "B", role: "Support", en: "It typically takes 24 to 48 hours. You'll receive an email once it's approved.", zh: "通常需要 24 到 48 小时。审核通过后您会收到邮件通知。" }
            ],
            keyPhrases: [
                { en: "I'd like to...", zh: "我想要...", usage: "礼貌地表达需求，比 I want to 更正式" },
                { en: "Could you please...?", zh: "您能...吗？", usage: "礼貌的请求句式" },
                { en: "KYC verification", zh: "身份验证（Know Your Customer）", usage: "交易所常见术语" },
                { en: "government-issued ID", zh: "政府颁发的证件", usage: "指护照、身份证等官方证件" }
            ],
            cultureTip: "在英语客服对话中，使用 'I'd like to' 比 'I want to' 更礼貌。提出请求时加上 'please' 是基本礼仪。",
            cultureTipEn: "Using 'I'd like to' is more polite than 'I want to' in customer service. Adding 'please' when making requests is basic courtesy."
        },
        {
            id: "ex-002",
            scene: "咨询交易手续费",
            sceneEn: "Asking About Trading Fees",
            category: "exchange",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "User", en: "I have a question about your fee structure. What are the trading fees for spot trading?", zh: "我想咨询一下你们的费用结构。现货交易的手续费是多少？" },
                { speaker: "B", role: "Support", en: "Our standard maker fee is 0.1% and the taker fee is also 0.1%. However, if you hold our native token, you can get a 25% discount.", zh: "我们的标准 maker 费率是 0.1%，taker 费率也是 0.1%。但如果您持有我们的平台币，可以享受 25% 的折扣。" },
                { speaker: "A", role: "User", en: "That sounds great. Are there any withdrawal fees as well?", zh: "听起来不错。提现也有手续费吗？" },
                { speaker: "B", role: "Support", en: "Yes, withdrawal fees vary depending on the network. For example, withdrawing USDT via TRC-20 costs 1 USDT, while ERC-20 costs around 5 USDT.", zh: "是的，提现手续费取决于网络。例如，通过 TRC-20 提取 USDT 费用是 1 USDT，而 ERC-20 大约 5 USDT。" },
                { speaker: "A", role: "User", en: "I see. Is there a minimum deposit requirement?", zh: "明白了。有最低存款要求吗？" },
                { speaker: "B", role: "Support", en: "No minimum deposit, but each coin has a minimum withdrawal amount. You can check the details on our fee schedule page.", zh: "没有最低存款要求，但每种币有最低提现金额。您可以在我们的费率说明页面查看详情。" }
            ],
            keyPhrases: [
                { en: "fee structure", zh: "费用结构", usage: "询问服务费用时的正式说法" },
                { en: "maker / taker fee", zh: "挂单/吃单手续费", usage: "交易所核心费率术语" },
                { en: "native token", zh: "平台币/原生代币", usage: "交易所自己发行的代币" },
                { en: "withdrawal fee", zh: "提现手续费", usage: "将资产从交易所转出的费用" }
            ],
            cultureTip: "在英语中，讨论费用时常用 'fee structure' 这个词组，而不是直接问 'how much money'。这样显得更专业。",
            cultureTipEn: "In English, 'fee structure' is the professional way to ask about costs, rather than directly asking 'how much money'."
        },
        {
            id: "ex-003",
            scene: "新用户首次存入加密货币",
            sceneEn: "New User Depositing Crypto for the First Time",
            category: "exchange",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "NewUser", en: "Hi, I just signed up. How do I deposit Bitcoin into my account?", zh: "你好，我刚注册。我怎么把比特币存入我的账户？" },
                { speaker: "B", role: "Support", en: "Welcome! Go to your wallet page and click on Deposit. Then select Bitcoin.", zh: "欢迎！请进入你的钱包页面，点击「充值」，然后选择比特币。" },
                { speaker: "A", role: "NewUser", en: "I see a long address and a QR code. Do I send my Bitcoin to that address?", zh: "我看到一个很长的地址和一个二维码。我把比特币发到那个地址吗？" },
                { speaker: "B", role: "Support", en: "Yes, that is your deposit address. Copy it carefully and paste it into your sending wallet.", zh: "是的，那是你的充值地址。仔细复制并粘贴到你的发送钱包中。" },
                { speaker: "A", role: "NewUser", en: "How long does it take to arrive?", zh: "多久能到账？" },
                { speaker: "B", role: "Support", en: "Usually about 30 minutes after the network confirms the transaction.", zh: "通常在网络确认交易后大约30分钟到账。" }
            ],
            keyPhrases: [
                { en: "deposit", zh: "充值/存入「, usage: 」指将加密货币转入交易所账户的操作", usage: undefined },
                { en: "deposit address", zh: "充值地址「, usage: 」交易所为用户生成的接收加密货币的唯一地址", usage: undefined },
                { en: "network confirmation", zh: "网络确认「, usage: 」区块链网络验证交易的过程", usage: undefined }
            ],
            cultureTip: "在加密货币领域，一定要仔细核对充值地址，发错地址可能导致资金永久丢失。",
            cultureTipEn: "In the crypto world, always double-check your deposit address. Sending funds to the wrong address can result in permanent loss."
        },
        {
            id: "ex-004",
            scene: "第一次下单购买加密货币",
            sceneEn: "Placing a First Buy Order",
            category: "exchange",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Beginner", en: "I want to buy some Ethereum. Where do I start?", zh: "我想买一些以太坊。从哪里开始？" },
                { speaker: "B", role: "Guide", en: "Go to the trading page and search for the ETH/USDT pair.", zh: "去交易页面，搜索ETH/USDT交易对。" },
                { speaker: "A", role: "Beginner", en: "I found it. Should I use a market order or a limit order?", zh: "我找到了。我应该用市价单还是限价单？" },
                { speaker: "B", role: "Guide", en: "For your first time, a market order is the easiest. Just enter the amount and click Buy.", zh: "第一次的话，市价单最简单。输入数量然后点击购买就行。" },
                { speaker: "A", role: "Beginner", en: "Done! I can see the Ethereum in my account now.", zh: "好了！我现在能在账户里看到以太坊了。" }
            ],
            keyPhrases: [
                { en: "market order", zh: "市价单「, usage: 」以当前市场价格立即成交的订单", usage: undefined },
                { en: "limit order", zh: "限价单「, usage: 」设定一个价格，当市场达到该价格时才成交的订单", usage: undefined },
                { en: "trading pair", zh: "交易对「, usage: 」两种可以互相交易的加密货币组合，如ETH/USDT", usage: undefined }
            ],
            cultureTip: "新手建议先用小额资金熟悉交易流程，不要一开始就投入大量资金。",
            cultureTipEn: "Beginners should start with small amounts to get familiar with the trading process before committing large sums."
        },
        {
            id: "ex-005",
            scene: "查看账户余额和资产分布",
            sceneEn: "Checking Account Balance and Asset Distribution",
            category: "exchange",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "User", en: "How can I check my total balance on the exchange?", zh: "我怎么查看我在交易所的总余额？" },
                { speaker: "B", role: "Support", en: "Click on the Assets tab at the top. It will show all your holdings.", zh: "点击顶部的「资产」选项卡，会显示你所有的持仓。" },
                { speaker: "A", role: "User", en: "I see different sections: spot account, funding account. What is the difference?", zh: "我看到不同的部分：现货账户、资金账户。有什么区别？" },
                { speaker: "B", role: "Support", en: "Your funding account holds assets for deposits and withdrawals. Your spot account is for trading.", zh: "资金账户用于充值和提现。现货账户用于交易。" },
                { speaker: "A", role: "User", en: "Can I move assets between them?", zh: "我可以在它们之间转移资产吗？" },
                { speaker: "B", role: "Support", en: "Yes, use the Transfer button to move funds between accounts instantly.", zh: "可以，使用「划转」按钮可以在账户之间即时转移资金。" }
            ],
            keyPhrases: [
                { en: "spot account", zh: "现货账户「, usage: 」用于现货交易的账户", usage: undefined },
                { en: "funding account", zh: "资金账户「, usage: 」用于充值、提现等资金操作的账户", usage: undefined },
                { en: "transfer", zh: "划转「, usage: 」在交易所内部不同账户之间转移资产", usage: undefined },
                { en: "holdings", zh: "持仓「, usage: 」当前持有的所有加密资产", usage: undefined }
            ],
            cultureTip: "大多数交易所会将资产分成多个账户类型，交易前需要先将资金划转到对应的账户。",
            cultureTipEn: "Most exchanges separate assets into different account types. You need to transfer funds to the correct account before trading."
        },
        {
            id: "ex-006",
            scene: "忘记密码后重置账户密码",
            sceneEn: "Resetting Account Password After Forgetting It",
            category: "exchange",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "User", en: "I forgot my password and cannot log in. What should I do?", zh: "我忘记密码了，登不进去。我该怎么办？" },
                { speaker: "B", role: "Support", en: "No worries. Click on Forgot Password on the login page.", zh: "别担心。在登录页面点击「忘记密码」。" },
                { speaker: "A", role: "User", en: "It is asking me to verify my email. I just received a verification code.", zh: "它让我验证邮箱。我刚收到了一个验证码。" },
                { speaker: "B", role: "Support", en: "Enter the code, then set a new password. Make sure it has at least 8 characters with numbers and letters.", zh: "输入验证码，然后设置新密码。确保密码至少8个字符，包含数字和字母。" },
                { speaker: "A", role: "User", en: "All done. I can log in again. Thank you!", zh: "都搞定了。我又能登录了。谢谢！" }
            ],
            keyPhrases: [
                { en: "forgot password", zh: "忘记密码「, usage: 」用于触发密码重置流程的功能入口", usage: undefined },
                { en: "verification code", zh: "验证码「, usage: 」通过邮件或短信发送的一次性安全验证码", usage: undefined },
                { en: "two-factor authentication", zh: "两步验证/双重认证「, usage: 」额外的安全层，通常需要手机验证", usage: undefined }
            ],
            cultureTip: "为了账户安全，强烈建议开启两步验证（2FA），避免仅靠密码保护账户。",
            cultureTipEn: "For account security, it is strongly recommended to enable two-factor authentication (2FA) instead of relying on a password alone."
        },
        {
            id: "ex-007",
            scene: "了解交易对的基本概念",
            sceneEn: "Understanding the Basics of Trading Pairs",
            category: "exchange",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Student", en: "I keep seeing things like BTC/USDT and ETH/BTC. What do these mean?", zh: "我一直看到BTC/USDT和ETH/BTC这样的东西。这些是什么意思？" },
                { speaker: "B", role: "Mentor", en: "Those are trading pairs. The first one is the asset you buy or sell, and the second is what you pay with.", zh: "那些是交易对。第一个是你买入或卖出的资产，第二个是你用来支付的资产。" },
                { speaker: "A", role: "Student", en: "So BTC/USDT means I use USDT to buy Bitcoin?", zh: "所以BTC/USDT的意思是我用USDT买比特币？" },
                { speaker: "B", role: "Mentor", en: "Exactly. USDT is the quote currency, and BTC is the base currency.", zh: "没错。USDT是计价货币，BTC是基础货币。" },
                { speaker: "A", role: "Student", en: "What if I want to trade Ethereum for Bitcoin directly?", zh: "如果我想直接用以太坊换比特币呢？" },
                { speaker: "B", role: "Mentor", en: "Then you would look for the ETH/BTC pair. You sell ETH to get BTC in that market.", zh: "那你就找ETH/BTC交易对。在那个市场里你卖出ETH来获得BTC。" }
            ],
            keyPhrases: [
                { en: "base currency", zh: "基础货币「, usage: 」交易对中排在前面的货币，是你要买卖的对象", usage: undefined },
                { en: "quote currency", zh: "计价货币「, usage: 」交易对中排在后面的货币，用于定价和支付", usage: undefined },
                { en: "trading pair", zh: "交易对「, usage: 」由两种资产组成的可交易市场", usage: undefined },
                { en: "stablecoin", zh: "稳定币「, usage: 」与法定货币挂钩的加密货币，如USDT", usage: undefined }
            ],
            cultureTip: "USDT（泰达币）是最常用的稳定币交易对，适合新手作为入门的计价货币使用。",
            cultureTipEn: "USDT (Tether) is the most commonly used stablecoin in trading pairs and is a good starting point for beginners."
        },
        {
            id: "ex-008",
            scene: "设置限价单进行精确交易",
            sceneEn: "Setting Limit Orders for Precise Trading",
            category: "exchange",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Trader", en: "I want to buy Bitcoin, but the current price is too high. Can I set a lower price?", zh: "我想买比特币，但现在价格太高了。我能设一个更低的价格吗？" },
                { speaker: "B", role: "Advisor", en: "Yes, you can place a limit order. Set the price you are willing to pay and the amount you want.", zh: "可以，你可以下一个限价单。设定你愿意支付的价格和想要的数量。" },
                { speaker: "A", role: "Trader", en: "What happens if the price never drops to my limit?", zh: "如果价格一直没跌到我的限价怎么办？" },
                { speaker: "B", role: "Advisor", en: "The order will stay open until it is filled or you cancel it. Some traders also set an expiration time.", zh: "订单会一直挂着，直到成交或者你取消它。有些交易者还会设定过期时间。" },
                { speaker: "A", role: "Trader", en: "Can I place multiple limit orders at different prices?", zh: "我能在不同价格设置多个限价单吗？" },
                { speaker: "B", role: "Advisor", en: "Absolutely. That strategy is called laddering. It helps you get a better average entry price.", zh: "当然可以。那个策略叫阶梯挂单。它帮助你获得更好的平均入场价格。" }
            ],
            keyPhrases: [
                { en: "limit order", zh: "限价单「, usage: 」在指定价格挂单等待成交的订单类型", usage: undefined },
                { en: "open order", zh: "挂单/未成交订单「, usage: 」已提交但尚未成交的订单", usage: undefined },
                { en: "laddering", zh: "阶梯挂单「, usage: 」在不同价位设置多个订单以分散建仓的策略", usage: undefined },
                { en: "average entry price", zh: "平均入场价格「, usage: 」多次买入后计算的平均持仓成本", usage: undefined }
            ],
            cultureTip: "限价单不保证成交，但能让你以理想价格买入。耐心是交易中的重要品质。",
            cultureTipEn: "Limit orders are not guaranteed to fill, but they let you buy at your desired price. Patience is an important quality in trading."
        },
        {
            id: "ex-009",
            scene: "使用止损单管理风险",
            sceneEn: "Using Stop-Loss Orders to Manage Risk",
            category: "exchange",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Trader", en: "I bought ETH at 3,000 dollars. How do I protect myself if the price drops?", zh: "我在3000美元买了ETH。如果价格下跌，我怎么保护自己？" },
                { speaker: "B", role: "RiskAdvisor", en: "You should set a stop-loss order. Choose a price below your entry where you want to exit automatically.", zh: "你应该设置一个止损单。选择一个低于你入场价的价格，到那个价格时自动卖出。" },
                { speaker: "A", role: "Trader", en: "Where should I set it? I do not want to lose more than 10 percent.", zh: "我应该设在哪里？我不想亏损超过10%。" },
                { speaker: "B", role: "RiskAdvisor", en: "Then set your stop-loss at 2,700 dollars. If ETH drops to that level, it will trigger a sell order.", zh: "那就把止损设在2700美元。如果ETH跌到那个水平，就会触发卖出订单。" },
                { speaker: "A", role: "Trader", en: "Is there a risk that my stop-loss will not execute at exactly that price?", zh: "有没有可能我的止损不会在那个精确价格成交？" },
                { speaker: "B", role: "RiskAdvisor", en: "Yes, in a fast-moving market you may experience slippage. The actual sell price could be slightly lower.", zh: "有可能，在快速波动的市场中你可能会遇到滑点。实际卖出价格可能会略低一些。" }
            ],
            keyPhrases: [
                { en: "stop-loss order", zh: "止损单「, usage: 」当价格达到预设水平时自动触发的卖出订单，用于限制亏损", usage: undefined },
                { en: "slippage", zh: "滑点「, usage: 」预期成交价格与实际成交价格之间的差异", usage: undefined },
                { en: "entry price", zh: "入场价格「, usage: 」最初买入资产时的价格", usage: undefined },
                { en: "trigger", zh: "触发「, usage: 」当条件满足时自动执行订单", usage: undefined }
            ],
            cultureTip: "专业交易者通常在每笔交易前就设定好止损位，这是风险管理的基本原则。",
            cultureTipEn: "Professional traders usually set their stop-loss levels before entering any trade. This is a fundamental principle of risk management."
        },
        {
            id: "ex-010",
            scene: "了解杠杆交易的基础知识",
            sceneEn: "Learning the Basics of Margin Trading",
            category: "exchange",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Learner", en: "I have heard about margin trading. How does it work?", zh: "我听说过杠杆交易。它是怎么运作的？" },
                { speaker: "B", role: "Instructor", en: "Margin trading lets you borrow funds to trade with more than your own balance. For example, 5x leverage means you control 5 times your capital.", zh: "杠杆交易让你借入资金，用超过自己余额的金额进行交易。比如5倍杠杆意味着你控制5倍于你本金的资金。" },
                { speaker: "A", role: "Learner", en: "So I can make bigger profits?", zh: "那我能赚更多利润？" },
                { speaker: "B", role: "Instructor", en: "Yes, but the losses are also amplified. If the market moves 10 percent against you with 5x leverage, you lose 50 percent of your margin.", zh: "是的，但亏损也会放大。如果市场朝不利方向波动10%，在5倍杠杆下你会亏损保证金的50%。" },
                { speaker: "A", role: "Learner", en: "That sounds risky. What happens if I lose too much?", zh: "听起来很危险。如果我亏损太多会怎样？" },
                { speaker: "B", role: "Instructor", en: "If your margin balance falls below the maintenance level, the exchange will liquidate your position to cover the debt.", zh: "如果你的保证金余额低于维持水平，交易所会强制平仓来偿还债务。" }
            ],
            keyPhrases: [
                { en: "margin trading", zh: "杠杆交易/保证金交易「, usage: 」借入资金进行交易，放大收益和风险", usage: undefined },
                { en: "leverage", zh: "杠杆倍数「, usage: 」借贷资金与自有资金的比例", usage: undefined },
                { en: "liquidation", zh: "强制平仓/爆仓「, usage: 」当亏损达到一定程度时交易所强制关闭仓位", usage: undefined },
                { en: "maintenance margin", zh: "维持保证金「, usage: 」保持仓位所需的最低保证金水平", usage: undefined }
            ],
            cultureTip: "杠杆交易是一把双刃剑。许多新手因为不了解风险而在杠杆交易中遭受重大损失，建议充分学习后再使用。",
            cultureTipEn: "Margin trading is a double-edged sword. Many beginners suffer significant losses from leveraged trading due to a lack of understanding. Study thoroughly before using it."
        },
        {
            id: "ex-011",
            scene: "学习看懂K线图和基本技术指标",
            sceneEn: "Learning to Read Candlestick Charts and Basic Technical Indicators",
            category: "exchange",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Beginner", en: "The trading chart looks confusing. What do all these green and red bars mean?", zh: "交易图表看起来很复杂。这些绿色和红色的柱子是什么意思？" },
                { speaker: "B", role: "Analyst", en: "Those are candlesticks. Green means the price went up during that period, and red means it went down.", zh: "那些是K线。绿色表示那个时间段内价格上涨，红色表示下跌。" },
                { speaker: "A", role: "Beginner", en: "What about the thin lines above and below each bar?", zh: "每根柱子上下的细线是什么？" },
                { speaker: "B", role: "Analyst", en: "Those are called wicks or shadows. They show the highest and lowest prices reached during that period.", zh: "那些叫做影线。它们显示那个时间段内达到的最高和最低价格。" },
                { speaker: "A", role: "Beginner", en: "And the wavy line that runs across the chart?", zh: "还有那条穿过图表的波浪线呢？" },
                { speaker: "B", role: "Analyst", en: "That is a moving average. It smooths out price data to show the overall trend direction.", zh: "那是移动平均线。它平滑价格数据来显示整体趋势方向。" }
            ],
            keyPhrases: [
                { en: "candlestick", zh: "K线/蜡烛图「, usage: 」显示一定时间内开盘价、收盘价、最高价和最低价的图表元素", usage: undefined },
                { en: "wick/shadow", zh: "影线", usage: "K线上下的细线，表示最高价和最低价" },
                { en: "moving average", zh: "移动平均线「, usage: 」计算一定周期内平均价格的技术指标，用于判断趋势", usage: undefined },
                { en: "trend", zh: "趋势「, usage: 」价格在一段时间内的整体运动方向", usage: undefined }
            ],
            cultureTip: "在中国市场中，红色通常代表上涨（因为红色象征喜庆），而西方市场中绿色代表上涨。不同交易所的颜色设定可能不同。",
            cultureTipEn: "In Chinese markets, red typically represents a price increase (as red symbolizes prosperity), while Western markets use green for gains. Color settings may vary across exchanges."
        },
        {
            id: "ex-012",
            scene: "比较不同交易所的优缺点",
            sceneEn: "Comparing Pros and Cons of Different Exchanges",
            category: "exchange",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Researcher", en: "I am trying to choose between a few exchanges. What should I compare?", zh: "我在几个交易所之间犹豫不决。我应该比较什么？" },
                { speaker: "B", role: "ExpertUser", en: "Look at trading fees first. Some charge 0.1 percent per trade, while others charge much more.", zh: "首先看交易手续费。有些收取每笔交易0.1%，而其他的可能收得更多。" },
                { speaker: "A", role: "Researcher", en: "What about security? I have heard stories about exchanges getting hacked.", zh: "安全性呢？我听说过交易所被黑客攻击的事。" },
                { speaker: "B", role: "ExpertUser", en: "Check if they use cold storage for most assets, offer insurance funds, and have a clean security track record.", zh: "看看他们是否对大部分资产使用冷存储、提供保险基金，以及是否有良好的安全记录。" },
                { speaker: "A", role: "Researcher", en: "Does trading volume matter?", zh: "交易量重要吗？" },
                { speaker: "B", role: "ExpertUser", en: "Very much. Higher volume means better liquidity, tighter spreads, and your orders will fill faster.", zh: "非常重要。更高的交易量意味着更好的流动性、更小的价差，你的订单也会更快成交。" }
            ],
            keyPhrases: [
                { en: "trading fees", zh: "交易手续费「, usage: 」每笔交易中交易所收取的费用", usage: undefined },
                { en: "cold storage", zh: "冷存储「, usage: 」将加密资产离线保存的安全方式", usage: undefined },
                { en: "liquidity", zh: "流动性「, usage: 」市场中资产能够快速买卖的程度", usage: undefined },
                { en: "spread", zh: "价差/点差「, usage: 」买入价和卖出价之间的差额", usage: undefined }
            ],
            cultureTip: "选择交易所时除了功能和费用，还要考虑该交易所是否在你所在的地区合法运营，以及是否支持你的本地货币。",
            cultureTipEn: "When choosing an exchange, beyond features and fees, consider whether it operates legally in your region and supports your local currency."
        },
        {
            id: "ex-013",
            scene: "通过API进行程序化交易",
            sceneEn: "Programmatic Trading via API",
            category: "exchange",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Developer", en: "I want to automate my trading strategy. How do I connect to the exchange API?", zh: "我想把我的交易策略自动化。我怎么连接交易所的API？" },
                { speaker: "B", role: "SeniorDev", en: "First, generate an API key and secret in your account settings. Make sure to enable only the permissions you need.", zh: "首先，在你的账户设置中生成API密钥和密钥。确保只启用你需要的权限。" },
                { speaker: "A", role: "Developer", en: "Should I use the REST API or the WebSocket connection for real-time data?", zh: "我应该用REST API还是WebSocket连接来获取实时数据？" },
                { speaker: "B", role: "SeniorDev", en: "Use the REST API for placing orders and checking balances. Use WebSocket for streaming market data and order updates.", zh: "用REST API来下单和查看余额。用WebSocket来获取实时市场数据和订单更新。" },
                { speaker: "A", role: "Developer", en: "What about rate limits? I do not want my bot to get blocked.", zh: "速率限制呢？我不想让我的机器人被封禁。" },
                { speaker: "B", role: "SeniorDev", en: "Most exchanges allow around 10 requests per second. Implement exponential backoff and cache data locally to stay within limits.", zh: "大多数交易所允许每秒大约10个请求。实现指数退避并在本地缓存数据，以保持在限制范围内。" }
            ],
            keyPhrases: [
                { en: "API key", zh: "API密钥「, usage: 」用于程序化访问交易所的身份验证凭证", usage: undefined },
                { en: "WebSocket", zh: "WebSocket连接「, usage: 」用于实时双向数据传输的网络协议", usage: undefined },
                { en: "rate limit", zh: "速率限制「, usage: 」交易所对API请求频率的限制", usage: undefined },
                { en: "exponential backoff", zh: "指数退避「, usage: 」一种在请求失败后逐步增加等待时间的重试策略", usage: undefined }
            ],
            cultureTip: "API交易时务必将密钥保存在安全的环境变量中，永远不要将其硬编码在代码中或上传到公共代码仓库。",
            cultureTipEn: "When trading via API, always store your keys in secure environment variables. Never hardcode them in your source code or upload them to public repositories."
        },
        {
            id: "ex-014",
            scene: "讨论期货合约和期权交易",
            sceneEn: "Discussing Futures Contracts and Options Trading",
            category: "exchange",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "AdvancedTrader", en: "I have been trading spot for a year. I want to explore perpetual futures. How are they different?", zh: "我做了一年现货交易。我想研究永续合约。它们有什么不同？" },
                { speaker: "B", role: "DerivativesExpert", en: "Perpetual futures have no expiration date, unlike traditional futures. They use a funding rate mechanism to keep the price close to spot.", zh: "永续合约没有到期日，不像传统期货。它们使用资金费率机制来保持价格接近现货。" },
                { speaker: "A", role: "AdvancedTrader", en: "What about options? I hear they can be used to hedge my portfolio.", zh: "期权呢？我听说可以用来对冲投资组合。" },
                { speaker: "B", role: "DerivativesExpert", en: "Yes, buying put options gives you the right to sell at a specific price, acting as insurance against a downturn.", zh: "是的，购买看跌期权给你在特定价格卖出的权利，相当于对市场下跌的保险。" },
                { speaker: "A", role: "AdvancedTrader", en: "How is the premium calculated for crypto options?", zh: "加密货币期权的权利金是怎么计算的？" },
                { speaker: "B", role: "DerivativesExpert", en: "It depends on factors like implied volatility, time to expiration, and the distance between the strike price and current price.", zh: "这取决于隐含波动率、到期时间以及行权价与当前价格之间的距离等因素。" }
            ],
            keyPhrases: [
                { en: "perpetual futures", zh: "永续合约「, usage: 」没有到期日的期货合约，加密货币市场中最常见的衍生品", usage: undefined },
                { en: "funding rate", zh: "资金费率「, usage: 」多空双方定期支付的费用，用于锚定永续合约价格与现货价格", usage: undefined },
                { en: "put option", zh: "看跌期权「, usage: 」给予持有者在特定价格卖出资产的权利", usage: undefined },
                { en: "implied volatility", zh: "隐含波动率「, usage: 」市场对未来价格波动的预期，影响期权定价", usage: undefined }
            ],
            cultureTip: "衍生品交易的风险远高于现货交易。在进入这个市场之前，建议先用模拟账户练习，充分理解各种合约的结算机制。",
            cultureTipEn: "Derivatives trading carries much higher risk than spot trading. Before entering this market, practice with a demo account and fully understand the settlement mechanisms of each contract type."
        },
        {
            id: "ex-015",
            scene: "分析强制平仓风险和仓位管理",
            sceneEn: "Analyzing Liquidation Risks and Position Management",
            category: "exchange",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "MarginTrader", en: "I got liquidated last night during a flash crash. I lost my entire margin. How do I prevent this?", zh: "我昨晚在闪崩中被强制平仓了。我整个保证金都亏完了。怎么防止这种情况？" },
                { speaker: "B", role: "RiskManager", en: "First, never use more than 3 to 5 percent of your total portfolio on a single leveraged position.", zh: "首先，单个杠杆仓位不要使用超过你总资金的3%到5%。" },
                { speaker: "A", role: "MarginTrader", en: "I was using 20x leverage. Was that too aggressive?", zh: "我用的是20倍杠杆。是不是太激进了？" },
                { speaker: "B", role: "RiskManager", en: "For most traders, anything above 5x is extremely risky. At 20x, a mere 5 percent move against you triggers liquidation.", zh: "对大多数交易者来说，超过5倍就极其危险了。在20倍杠杆下，仅仅5%的反向波动就会触发强制平仓。" },
                { speaker: "A", role: "MarginTrader", en: "Should I add more margin to lower my liquidation price?", zh: "我应该追加保证金来降低平仓价格吗？" },
                { speaker: "B", role: "RiskManager", en: "That is one approach, but be careful. Adding margin to a losing position can lead to even greater losses. It is often better to reduce your position size instead.", zh: "这是一种方法，但要小心。给亏损仓位追加保证金可能导致更大的损失。通常减少仓位大小是更好的选择。" }
            ],
            keyPhrases: [
                { en: "liquidation", zh: "强制平仓/爆仓「, usage: 」当保证金不足以维持仓位时交易所强制关闭的操作", usage: undefined },
                { en: "flash crash", zh: "闪崩「, usage: 」价格在极短时间内大幅下跌的现象", usage: undefined },
                { en: "position sizing", zh: "仓位管理「, usage: 」根据风险承受能力确定每笔交易投入资金比例的策略", usage: undefined },
                { en: "liquidation price", zh: "强平价格「, usage: 」触发强制平仓的价格水平", usage: undefined }
            ],
            cultureTip: "在币圈有句话叫「杠杆害人」。许多经验丰富的交易者建议将杠杆控制在3倍以内，宁可赚得少也不要冒爆仓的风险。",
            cultureTipEn: "There is a saying in the crypto community: leverage kills. Many experienced traders recommend keeping leverage below 3x - it is better to earn less than to risk total liquidation."
        },
        {
            id: "ex-016",
            scene: "讨论市场操纵行为和识别方法",
            sceneEn: "Discussing Market Manipulation and How to Identify It",
            category: "exchange",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "InvestigativeTrader", en: "I noticed a sudden spike in volume right before a big price move. Could that be market manipulation?", zh: "我注意到在大幅价格波动之前成交量突然飙升。这可能是市场操纵吗？" },
                { speaker: "B", role: "ComplianceOfficer", en: "It could be. Common tactics include wash trading, spoofing, and pump-and-dump schemes. Each leaves different footprints on the order book.", zh: "有可能。常见的手法包括刷量交易、幌骗和拉高抛售。每种手法在订单簿上留下不同的痕迹。" },
                { speaker: "A", role: "InvestigativeTrader", en: "How can I tell if the volume is genuine or if it is wash trading?", zh: "我怎么判断成交量是真实的还是刷量交易？" },
                { speaker: "B", role: "ComplianceOfficer", en: "Look for volume that appears without any corresponding price movement. Also compare the reported volume across multiple data aggregators.", zh: "注意那些出现了大量交易但价格却没有相应变化的情况。同时在多个数据聚合平台上比较报告的交易量。" },
                { speaker: "A", role: "InvestigativeTrader", en: "What about those large buy walls that suddenly disappear?", zh: "那些突然消失的大额买单墙呢？" },
                { speaker: "B", role: "ComplianceOfficer", en: "That is spoofing. Traders place large orders they never intend to fill, just to create a false impression of demand. It is illegal in regulated markets.", zh: "那就是幌骗。交易者挂出他们从未打算成交的大额订单，只是为了制造虚假的需求印象。在受监管的市场中这是违法的。" }
            ],
            keyPhrases: [
                { en: "wash trading", zh: "刷量交易「, usage: 」同一实体同时买卖以制造虚假交易量的行为", usage: undefined },
                { en: "spoofing", zh: "幌骗「, usage: 」挂出不打算成交的大额订单来误导其他交易者的行为", usage: undefined },
                { en: "pump and dump", zh: "拉高抛售「, usage: 」人为抬高价格后在高位抛售获利的操纵手法", usage: undefined },
                { en: "order book", zh: "订单簿/盘口「, usage: 」显示所有挂单买卖价格和数量的列表", usage: undefined }
            ],
            cultureTip: "加密货币市场的监管仍在发展中。相比传统金融市场，操纵行为更难被追查和处罚。投资者应保持警惕，避免跟风追涨。",
            cultureTipEn: "Crypto market regulation is still evolving. Compared to traditional finance, manipulation is harder to track and penalize. Investors should stay vigilant and avoid chasing hype."
        },
        {
            id: "ex-017",
            scene: "讨论交易所合规性和监管要求",
            sceneEn: "Discussing Exchange Regulatory Compliance Requirements",
            category: "exchange",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "InstitutionalClient", en: "Our fund needs to use an exchange that meets regulatory standards. What compliance features should we look for?", zh: "我们基金需要使用符合监管标准的交易所。我们应该关注哪些合规功能？" },
                { speaker: "B", role: "ComplianceDirector", en: "Look for exchanges with proper licensing, mandatory KYC and AML procedures, and regular third-party audits of their reserves.", zh: "寻找拥有合规牌照、强制KYC和反洗钱程序、并定期进行第三方储备审计的交易所。" },
                { speaker: "A", role: "InstitutionalClient", en: "We also need to report all transactions for tax purposes. Does the exchange provide detailed trade history exports?", zh: "我们还需要为税务目的报告所有交易。交易所提供详细的交易历史导出吗？" },
                { speaker: "B", role: "ComplianceDirector", en: "Most regulated exchanges offer CSV or API-based trade history exports. Some even integrate directly with tax reporting software.", zh: "大多数受监管的交易所提供CSV或基于API的交易历史导出。有些甚至直接与税务报告软件集成。" },
                { speaker: "A", role: "InstitutionalClient", en: "What about the segregation of client funds? We need assurance that our assets are not mixed with the company funds.", zh: "客户资金隔离呢？我们需要确保我们的资产没有与公司资金混在一起。" },
                { speaker: "B", role: "ComplianceDirector", en: "That is critical. Look for exchanges that publish proof-of-reserves reports and keep client assets in segregated custodial accounts backed by qualified custodians.", zh: "这一点至关重要。寻找发布储备证明报告的交易所，并将客户资产保存在由合格托管人支持的隔离托管账户中。" }
            ],
            keyPhrases: [
                { en: "KYC (Know Your Customer)", zh: "了解你的客户「, usage: 」交易所验证用户身份的强制性流程", usage: undefined },
                { en: "AML (Anti-Money Laundering)", zh: "反洗钱「, usage: 」防止非法资金通过交易所流通的合规措施", usage: undefined },
                { en: "proof of reserves", zh: "储备证明「, usage: 」交易所公开证明其持有足够资产来覆盖客户存款的审计报告", usage: undefined },
                { en: "segregated accounts", zh: "隔离账户「, usage: 」将客户资金与公司运营资金分开存放的账户制度", usage: undefined }
            ],
            cultureTip: "FTX事件后，储备证明和资金隔离成为选择交易所的关键考量因素。机构投资者应优先选择持有多个司法管辖区牌照的交易所。",
            cultureTipEn: "After the FTX incident, proof of reserves and fund segregation became critical factors in choosing an exchange. Institutional investors should prioritize exchanges licensed in multiple jurisdictions."
        }
    ],
    "wallet": [
        {
            id: "wa-001",
            scene: "请求帮助转账",
            sceneEn: "Getting Help with a Transfer",
            category: "wallet",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "User", en: "Hey, I'm trying to send some ETH to my friend's wallet, but I'm not sure how to do it.", zh: "嘿，我想给朋友的钱包转一些 ETH，但不太确定怎么操作。" },
                { speaker: "B", role: "Friend", en: "No problem! First, you need to copy your friend's wallet address. Make sure it starts with '0x'.", zh: "没问题！首先你需要复制朋友的钱包地址，确保它以 '0x' 开头。" },
                { speaker: "A", role: "User", en: "Got it. I've pasted the address. Now it's asking me to set the gas fee. What should I choose?", zh: "好的，我已经粘贴了地址。现在它让我设置 gas 费。我应该选什么？" },
                { speaker: "B", role: "Friend", en: "For a regular transfer, the standard gas fee is fine. If you're not in a rush, you can even pick the slow option to save a few bucks.", zh: "普通转账的话，标准 gas 费就行。如果不着急，你甚至可以选慢速来省一点钱。" },
                { speaker: "A", role: "User", en: "Okay, done! How long will it take to arrive?", zh: "好了，完成了！需要多久才能到账？" },
                { speaker: "B", role: "Friend", en: "Usually just a few minutes on Ethereum. You can track it on Etherscan with the transaction hash.", zh: "在以太坊上通常只需要几分钟。你可以用交易哈希在 Etherscan 上追踪。" }
            ],
            keyPhrases: [
                { en: "wallet address", zh: "钱包地址", usage: "接收加密货币的唯一标识" },
                { en: "gas fee", zh: "Gas 费用", usage: "以太坊网络上的交易手续费" },
                { en: "transaction hash", zh: "交易哈希", usage: "每笔交易的唯一标识符，用于追踪" },
                { en: "I'm not in a rush", zh: "我不着急", usage: "表达不紧迫的口语说法" }
            ],
            cultureTip: "朋友之间的对话通常更随意。'Got it' 是常用的口语表达，表示理解了。'A few bucks' 是 'a little money' 的口语说法。",
            cultureTipEn: "'Got it' is a casual way to say 'I understand'. 'A few bucks' informally means 'a small amount of money'."
        },
        {
            id: "wa-002",
            scene: "备份助记词",
            sceneEn: "Backing Up Your Seed Phrase",
            category: "wallet",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Beginner", en: "I just set up my MetaMask wallet. It showed me a 12-word seed phrase. What am I supposed to do with it?", zh: "我刚设置好 MetaMask 钱包。它给了我一个 12 个词的助记词。我应该怎么处理？" },
                { speaker: "B", role: "Mentor", en: "That's your recovery phrase. It's extremely important — write it down on paper and store it somewhere safe. Never save it digitally.", zh: "那是你的恢复短语。这非常重要——把它写在纸上，存放在安全的地方。千万不要以数字方式保存。" },
                { speaker: "A", role: "Beginner", en: "Why not save it in my notes app or take a screenshot?", zh: "为什么不能保存在备忘录里或者截图呢？" },
                { speaker: "B", role: "Mentor", en: "Because if your phone gets hacked or someone accesses your cloud storage, they can steal all your crypto. The seed phrase gives full control over your wallet.", zh: "因为如果你的手机被黑客攻击或者有人访问了你的云存储，他们就能偷走你所有的加密货币。助记词可以完全控制你的钱包。" },
                { speaker: "A", role: "Beginner", en: "That's scary. What if I lose the paper?", zh: "太吓人了。如果纸丢了怎么办？" },
                { speaker: "B", role: "Mentor", en: "Some people keep multiple copies in different secure locations, like a safe or a safety deposit box. Just make sure no one else can access them.", zh: "有些人会在不同的安全位置保存多份副本，比如保险箱或银行保管箱。只要确保其他人无法接触到就好。" }
            ],
            keyPhrases: [
                { en: "seed phrase / recovery phrase", zh: "助记词/恢复短语", usage: "钱包备份的核心安全机制" },
                { en: "full control over", zh: "完全控制", usage: "强调权限范围" },
                { en: "safety deposit box", zh: "银行保管箱", usage: "银行提供的安全存储服务" },
                { en: "What am I supposed to do with...?", zh: "我应该怎么处理...？", usage: "询问某物用途的常用句式" }
            ],
            cultureTip: "在加密圈，'Not your keys, not your coins'（不掌握私钥，就不拥有币）是一句经典格言。安全意识是最重要的话题之一。",
            cultureTipEn: "'Not your keys, not your coins' is a famous crypto saying. Security awareness is one of the most important topics in the space."
        },
        {
            id: "wa-003",
            scene: "设置硬件钱包",
            sceneEn: "Setting Up a Hardware Wallet",
            category: "wallet",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Buyer", en: "I just got my Ledger hardware wallet. How do I set it up?", zh: "我刚收到我的 Ledger 硬件钱包。怎么设置？" },
                { speaker: "B", role: "Guide", en: "First, download the Ledger Live app from the official website. Never download from third-party sources.", zh: "首先，从官方网站下载 Ledger Live 应用。千万不要从第三方来源下载。" },
                { speaker: "A", role: "Buyer", en: "Got it. It is now asking me to set a PIN code.", zh: "好的。它现在要求我设置一个 PIN 码。" },
                { speaker: "B", role: "Guide", en: "Choose a strong PIN that you can remember. After that, it will generate your 24-word recovery phrase.", zh: "选一个你能记住的强 PIN 码。之后，它会生成你的 24 个单词的恢复短语。" },
                { speaker: "A", role: "Buyer", en: "Should I write the recovery phrase on the card that came in the box?", zh: "我应该把恢复短语写在盒子里附带的卡片上吗？" },
                { speaker: "B", role: "Guide", en: "Yes, use the provided recovery sheet. Write clearly and store it in a safe place, separate from the device.", zh: "是的，用附带的恢复表。写清楚并存放在安全的地方，与设备分开保管。" }
            ],
            keyPhrases: [
                { en: "hardware wallet", zh: "硬件钱包", usage: "离线存储私钥的物理设备，安全性最高" },
                { en: "PIN code", zh: "PIN 码", usage: "硬件钱包的数字密码" },
                { en: "recovery phrase", zh: "恢复短语", usage: "用于恢复钱包的单词序列" },
                { en: "third-party sources", zh: "第三方来源", usage: "非官方的下载渠道，可能存在安全风险" }
            ],
            cultureTip: "购买硬件钱包时，务必从官方渠道购买。二手或第三方渠道的设备可能已被篡改，存在严重安全隐患。",
            cultureTipEn: "Always buy hardware wallets from official channels. Second-hand or third-party devices may have been tampered with, posing serious security risks."
        },
        {
            id: "wa-004",
            scene: "了解热钱包与冷钱包的区别",
            sceneEn: "Understanding Hot vs Cold Wallets",
            category: "wallet",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Newbie", en: "What is the difference between a hot wallet and a cold wallet?", zh: "热钱包和冷钱包有什么区别？" },
                { speaker: "B", role: "Expert", en: "A hot wallet is connected to the internet, like MetaMask. A cold wallet is offline, like a Ledger.", zh: "热钱包连接互联网，比如 MetaMask。冷钱包是离线的，比如 Ledger。" },
                { speaker: "A", role: "Newbie", en: "Which one is safer?", zh: "哪个更安全？" },
                { speaker: "B", role: "Expert", en: "Cold wallets are much safer since they cannot be hacked remotely. But hot wallets are more convenient for daily use.", zh: "冷钱包安全得多，因为它们不会被远程入侵。但热钱包日常使用更方便。" },
                { speaker: "A", role: "Newbie", en: "So should I use both?", zh: "那我应该两个都用吗？" },
                { speaker: "B", role: "Expert", en: "Exactly. Keep most of your funds in a cold wallet and only a small amount in a hot wallet for trading.", zh: "没错。把大部分资金放在冷钱包里，只在热钱包里放少量用于交易。" }
            ],
            keyPhrases: [
                { en: "hot wallet", zh: "热钱包", usage: "连接互联网的钱包，方便但安全性较低" },
                { en: "cold wallet", zh: "冷钱包", usage: "离线存储的钱包，安全性高" },
                { en: "hacked remotely", zh: "被远程入侵", usage: "通过网络被黑客攻击" }
            ],
            cultureTip: "在加密圈有句话：「大额存冷，小额用热」。合理分配资产在不同类型的钱包中是安全管理的基本原则。",
            cultureTipEn: "A common crypto principle: store large holdings cold, keep small amounts hot. Properly distributing assets across wallet types is fundamental to security management."
        },
        {
            id: "wa-005",
            scene: "在手机上安装移动钱包",
            sceneEn: "Installing a Mobile Wallet",
            category: "wallet",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "User", en: "I want to use crypto on my phone. Which mobile wallet do you recommend?", zh: "我想在手机上使用加密货币。你推荐哪个移动钱包？" },
                { speaker: "B", role: "Helper", en: "Trust Wallet is a popular choice. It supports many different blockchains.", zh: "Trust Wallet 是一个热门选择。它支持很多不同的区块链。" },
                { speaker: "A", role: "User", en: "Is it free to download?", zh: "下载免费吗？" },
                { speaker: "B", role: "Helper", en: "Yes, it is completely free. Just make sure to download it from the official app store.", zh: "是的，完全免费。只要确保从官方应用商店下载。" },
                { speaker: "A", role: "User", en: "Can I receive crypto from my friends with it?", zh: "我可以用它接收朋友发来的加密货币吗？" },
                { speaker: "B", role: "Helper", en: "Of course. Just share your wallet address or QR code with them.", zh: "当然可以。只要把你的钱包地址或二维码分享给他们就行。" }
            ],
            keyPhrases: [
                { en: "mobile wallet", zh: "移动钱包", usage: "安装在手机上的加密钱包应用" },
                { en: "app store", zh: "应用商店", usage: "下载应用的官方平台" },
                { en: "QR code", zh: "二维码", usage: "扫描即可获取钱包地址的图形码" }
            ],
            cultureTip: "移动钱包虽然方便，但要注意开启手机的生物识别锁（指纹/面部识别）来增加一层安全保障。",
            cultureTipEn: "While mobile wallets are convenient, enable biometric locks (fingerprint/face ID) on your phone for an extra layer of security."
        },
        {
            id: "wa-006",
            scene: "理解不同的钱包地址格式",
            sceneEn: "Understanding Different Wallet Address Formats",
            category: "wallet",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Beginner", en: "My friend sent me a Bitcoin address but it looks different from my Ethereum address. Why?", zh: "我朋友发给我一个比特币地址，但它看起来和我的以太坊地址不一样。为什么？" },
                { speaker: "B", role: "Tutor", en: "Different blockchains use different address formats. Bitcoin addresses usually start with 1, 3, or bc1.", zh: "不同的区块链使用不同的地址格式。比特币地址通常以 1、3 或 bc1 开头。" },
                { speaker: "A", role: "Beginner", en: "And Ethereum addresses always start with 0x, right?", zh: "而以太坊地址总是以 0x 开头，对吧？" },
                { speaker: "B", role: "Tutor", en: "Correct. Never send Bitcoin to an Ethereum address or vice versa. Your funds could be lost forever.", zh: "正确。永远不要把比特币发到以太坊地址，反之亦然。你的资金可能永远丢失。" }
            ],
            keyPhrases: [
                { en: "address format", zh: "地址格式", usage: "不同区块链的地址有不同的格式规则" },
                { en: "vice versa", zh: "反之亦然", usage: "表示反过来也一样的常用表达" },
                { en: "lost forever", zh: "永远丢失", usage: "发错链的资产通常无法找回" }
            ],
            cultureTip: "转账前一定要仔细核对地址格式是否匹配目标区块链。很多新手因发错链而永久丢失资产。",
            cultureTipEn: "Always double-check that the address format matches the target blockchain before transferring. Many newcomers permanently lose assets by sending to the wrong chain."
        },
        {
            id: "wa-007",
            scene: "恢复丢失的钱包",
            sceneEn: "Recovering a Lost Wallet",
            category: "wallet",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "PanickedUser", en: "I lost my phone and my crypto wallet was on it. Is my money gone?", zh: "我手机丢了，我的加密钱包在上面。我的钱没了吗？" },
                { speaker: "B", role: "Advisor", en: "Do not worry. If you have your seed phrase, you can restore your wallet on a new device.", zh: "不要担心。如果你有助记词，可以在新设备上恢复你的钱包。" },
                { speaker: "A", role: "PanickedUser", en: "Yes, I wrote it down on paper like you told me. What do I do next?", zh: "是的，我按你说的写在纸上了。接下来怎么做？" },
                { speaker: "B", role: "Advisor", en: "Download the same wallet app on your new phone. Choose the option to restore an existing wallet and enter your seed phrase.", zh: "在新手机上下载同一个钱包应用。选择恢复已有钱包的选项，然后输入你的助记词。" },
                { speaker: "A", role: "PanickedUser", en: "That is a relief. I thought everything was lost.", zh: "太让人松了口气了。我以为一切都没了。" }
            ],
            keyPhrases: [
                { en: "restore your wallet", zh: "恢复你的钱包", usage: "使用助记词在新设备上重建钱包" },
                { en: "seed phrase", zh: "助记词", usage: "钱包恢复的唯一凭证" },
                { en: "That is a relief", zh: "太让人松了口气了", usage: "表达解除担忧后的轻松" }
            ],
            cultureTip: "助记词就是你的资产。只要助记词安全，即使设备丢失或损坏，资产都可以完整恢复。",
            cultureTipEn: "Your seed phrase IS your assets. As long as the seed phrase is safe, assets can be fully recovered even if your device is lost or damaged."
        },
        {
            id: "wa-008",
            scene: "连接钱包到去中心化应用",
            sceneEn: "Connecting Wallet to a dApp",
            category: "wallet",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "User", en: "I want to use Uniswap to swap some tokens. How do I connect my wallet?", zh: "我想用 Uniswap 兑换一些代币。怎么连接我的钱包？" },
                { speaker: "B", role: "Guide", en: "Click the Connect Wallet button on the top right. It will show you a list of supported wallets.", zh: "点击右上角的连接钱包按钮。它会显示一个支持的钱包列表。" },
                { speaker: "A", role: "User", en: "I see MetaMask, WalletConnect, and Coinbase Wallet. I will choose MetaMask.", zh: "我看到 MetaMask、WalletConnect 和 Coinbase Wallet。我选 MetaMask。" },
                { speaker: "B", role: "Guide", en: "A pop-up will appear asking you to approve the connection. Check the URL carefully before approving.", zh: "会弹出一个窗口要求你批准连接。批准前仔细检查 URL。" },
                { speaker: "A", role: "User", en: "It says it wants to view my account address. Is that safe?", zh: "它说要查看我的账户地址。这安全吗？" },
                { speaker: "B", role: "Guide", en: "Yes, viewing your address is fine. But never approve a request that asks for your private key or seed phrase.", zh: "是的，查看地址是没问题的。但永远不要批准要求你提供私钥或助记词的请求。" }
            ],
            keyPhrases: [
                { en: "Connect Wallet", zh: "连接钱包", usage: "将钱包与 dApp 建立连接的操作" },
                { en: "approve the connection", zh: "批准连接", usage: "授权 dApp 访问你的钱包信息" },
                { en: "private key", zh: "私钥", usage: "控制钱包资产的核心密钥，绝不可泄露" }
            ],
            cultureTip: "连接钱包到 dApp 时，始终检查网址是否正确。钓鱼网站会模仿知名 dApp 的界面来窃取资产。",
            cultureTipEn: "Always verify the URL when connecting your wallet to a dApp. Phishing sites mimic well-known dApps to steal assets."
        },
        {
            id: "wa-009",
            scene: "管理代币授权",
            sceneEn: "Managing Token Approvals",
            category: "wallet",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "DeFiUser", en: "I noticed a transaction in my wallet that says token approval. What does that mean?", zh: "我注意到钱包里有一笔交易写着代币授权。这是什么意思？" },
                { speaker: "B", role: "SecurityExpert", en: "When you interact with a DeFi protocol, it asks for permission to spend your tokens. That is a token approval.", zh: "当你与 DeFi 协议交互时，它会请求花费你代币的权限。这就是代币授权。" },
                { speaker: "A", role: "DeFiUser", en: "Is it dangerous to have too many approvals?", zh: "有太多授权危险吗？" },
                { speaker: "B", role: "SecurityExpert", en: "Yes. If a protocol gets hacked, attackers can drain your approved tokens. You should revoke unused approvals regularly.", zh: "是的。如果协议被黑客攻击，攻击者可以转走你已授权的代币。你应该定期撤销不用的授权。" },
                { speaker: "A", role: "DeFiUser", en: "How do I check and revoke approvals?", zh: "我怎么检查和撤销授权？" },
                { speaker: "B", role: "SecurityExpert", en: "Use tools like Revoke.cash or the approval checker in your wallet. They show all active approvals and let you revoke them.", zh: "使用 Revoke.cash 之类的工具或钱包里的授权检查器。它们会显示所有活跃的授权并让你撤销。" }
            ],
            keyPhrases: [
                { en: "token approval", zh: "代币授权", usage: "允许智能合约花费你代币的权限" },
                { en: "revoke", zh: "撤销", usage: "取消之前授予的权限" },
                { en: "drain your tokens", zh: "转走你的代币", usage: "黑客通过授权漏洞窃取代币" }
            ],
            cultureTip: "定期检查和清理代币授权是 DeFi 用户的好习惯。很多安全事件都是因为用户忘记撤销对已被攻击协议的授权。",
            cultureTipEn: "Regularly reviewing and cleaning up token approvals is good practice for DeFi users. Many security incidents occur because users forget to revoke approvals for compromised protocols."
        },
        {
            id: "wa-010",
            scene: "使用多签钱包",
            sceneEn: "Using a Multi-Signature Wallet",
            category: "wallet",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "TeamLead", en: "Our project treasury needs better security. I think we should use a multi-sig wallet.", zh: "我们项目的资金库需要更好的安全性。我觉得应该用多签钱包。" },
                { speaker: "B", role: "Developer", en: "Good idea. A multi-sig requires multiple people to approve a transaction before it goes through.", zh: "好主意。多签要求多个人批准交易后才能执行。" },
                { speaker: "A", role: "TeamLead", en: "What setup do you recommend? How many signers should we have?", zh: "你推荐什么配置？应该有多少签名者？" },
                { speaker: "B", role: "Developer", en: "A 3-of-5 setup is common. That means any 3 out of 5 key holders must approve each transaction.", zh: "3/5 配置比较常见。意思是 5 个密钥持有者中任意 3 个必须批准每笔交易。" },
                { speaker: "A", role: "TeamLead", en: "What if one person loses their key?", zh: "如果有人丢了密钥怎么办？" },
                { speaker: "B", role: "Developer", en: "That is why we use 3-of-5 instead of 5-of-5. We can still operate even if two people lose access.", zh: "这就是为什么用 3/5 而不是 5/5。即使两个人失去访问权限，我们仍然可以操作。" }
            ],
            keyPhrases: [
                { en: "multi-sig wallet", zh: "多签钱包", usage: "需要多个签名才能执行交易的钱包" },
                { en: "3-of-5 setup", zh: "3/5 配置", usage: "5 个签名者中需要 3 个批准的设置" },
                { en: "key holder", zh: "密钥持有者", usage: "拥有签名权限的人" }
            ],
            cultureTip: "多签钱包是管理团队资金的行业标准。顶级 DeFi 协议的资金库通常都采用多签来防止单点故障。",
            cultureTipEn: "Multi-sig wallets are the industry standard for managing team funds. Top DeFi protocol treasuries typically use multi-sig to prevent single points of failure."
        },
        {
            id: "wa-011",
            scene: "钱包与 DeFi 协议交互",
            sceneEn: "Wallet Interaction with DeFi Protocols",
            category: "wallet",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Investor", en: "I want to provide liquidity on Aave. What do I need to do in my wallet?", zh: "我想在 Aave 上提供流动性。我的钱包需要做什么？" },
                { speaker: "B", role: "DeFiMentor", en: "First, make sure you have enough ETH for gas fees, plus the tokens you want to supply.", zh: "首先，确保你有足够的 ETH 支付 gas 费，加上你要提供的代币。" },
                { speaker: "A", role: "Investor", en: "I have USDC ready. Will there be multiple transactions to sign?", zh: "我准备好了 USDC。需要签名多笔交易吗？" },
                { speaker: "B", role: "DeFiMentor", en: "Yes, usually two. First you approve the protocol to use your USDC, then you confirm the supply transaction.", zh: "是的，通常两笔。首先授权协议使用你的 USDC，然后确认供应交易。" },
                { speaker: "A", role: "Investor", en: "I see the approval pop-up. It is asking for an unlimited amount. Should I allow that?", zh: "我看到授权弹窗了。它要求无限额度。我应该允许吗？" },
                { speaker: "B", role: "DeFiMentor", en: "For safety, set a custom approval amount instead of unlimited. You can always approve more later.", zh: "为了安全，设置自定义授权额度而不是无限。之后随时可以再增加授权。" }
            ],
            keyPhrases: [
                { en: "provide liquidity", zh: "提供流动性", usage: "向 DeFi 协议存入资金以赚取收益" },
                { en: "gas fees", zh: "gas 费", usage: "在区块链上执行操作需要支付的费用" },
                { en: "unlimited approval", zh: "无限授权", usage: "授权协议花费你任意数量的代币" },
                { en: "custom approval amount", zh: "自定义授权额度", usage: "只授权特定数量的代币使用权限" }
            ],
            cultureTip: "与 DeFi 协议交互时，建议使用自定义授权额度而非无限授权。虽然每次需要重新授权比较麻烦，但能大大降低风险。",
            cultureTipEn: "When interacting with DeFi protocols, use custom approval amounts instead of unlimited. Though re-approving each time is less convenient, it significantly reduces risk."
        },
        {
            id: "wa-012",
            scene: "识别钱包钓鱼攻击",
            sceneEn: "Identifying Wallet Phishing Attacks",
            category: "wallet",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Victim", en: "Someone messaged me saying I won a crypto airdrop. They sent me a link to claim it.", zh: "有人给我发消息说我赢了一个加密空投。他们发了一个链接让我领取。" },
                { speaker: "B", role: "SecurityAdvisor", en: "That is almost certainly a phishing scam. Legitimate projects never send private messages asking you to connect your wallet.", zh: "那几乎可以肯定是钓鱼骗局。正规项目从不发私信要求你连接钱包。" },
                { speaker: "A", role: "Victim", en: "But the website looks exactly like the real project page.", zh: "但那个网站看起来和真正的项目页面一模一样。" },
                { speaker: "B", role: "SecurityAdvisor", en: "Scammers clone websites easily. Always check the URL character by character. Even one different letter means it is fake.", zh: "骗子很容易克隆网站。一定要逐个字符检查 URL。哪怕一个字母不同都说明是假的。" },
                { speaker: "A", role: "Victim", en: "I almost connected my wallet. Thank you for the warning.", zh: "我差点就连接钱包了。谢谢你的提醒。" },
                { speaker: "B", role: "SecurityAdvisor", en: "Remember: if something sounds too good to be true, it probably is. Always verify through official channels.", zh: "记住：如果某件事听起来好得不真实，那很可能就是假的。始终通过官方渠道验证。" }
            ],
            keyPhrases: [
                { en: "phishing scam", zh: "钓鱼骗局", usage: "通过伪造网站或消息窃取信息的诈骗" },
                { en: "clone websites", zh: "克隆网站", usage: "完全复制正规网站外观的假冒网站" },
                { en: "too good to be true", zh: "好得不真实", usage: "形容可能是骗局的过于诱人的报价" }
            ],
            cultureTip: "在加密世界中，最常见的安全威胁是社会工程学攻击而非技术攻击。保持警惕和怀疑是保护资产的第一道防线。",
            cultureTipEn: "In the crypto world, the most common security threats are social engineering attacks rather than technical ones. Staying vigilant and skeptical is the first line of defense."
        },
        {
            id: "wa-013",
            scene: "管理多链资产",
            sceneEn: "Managing Multi-Chain Assets",
            category: "wallet",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Trader", en: "I have assets across Ethereum, BSC, Polygon, and Arbitrum. Managing them is getting complicated.", zh: "我在以太坊、BSC、Polygon 和 Arbitrum 上都有资产。管理起来越来越复杂了。" },
                { speaker: "B", role: "PowerUser", en: "You should use a portfolio tracker like DeBank or Zapper. They aggregate your positions across all chains.", zh: "你应该用 DeBank 或 Zapper 之类的投资组合追踪工具。它们会汇总你在所有链上的仓位。" },
                { speaker: "A", role: "Trader", en: "What about bridging assets between chains? I need to move some USDC from Ethereum to Arbitrum.", zh: "跨链转移资产呢？我需要把一些 USDC 从以太坊转到 Arbitrum。" },
                { speaker: "B", role: "PowerUser", en: "Use the official Arbitrum bridge or a third-party aggregator like Li.Fi. Always compare fees and transfer times.", zh: "用 Arbitrum 官方桥或者 Li.Fi 之类的第三方聚合器。一定要比较手续费和转账时间。" },
                { speaker: "A", role: "Trader", en: "Is there any risk of losing funds during the bridging process?", zh: "跨链过程中有丢失资金的风险吗？" },
                { speaker: "B", role: "PowerUser", en: "Bridge exploits have happened before. Stick to well-audited bridges and start with small amounts to test.", zh: "桥被攻击的事件以前发生过。坚持使用经过审计的桥，先用小额测试。" }
            ],
            keyPhrases: [
                { en: "portfolio tracker", zh: "投资组合追踪器", usage: "汇总显示你在各链上资产的工具" },
                { en: "bridge", zh: "跨链桥", usage: "在不同区块链之间转移资产的工具" },
                { en: "bridge exploit", zh: "跨链桥攻击", usage: "利用桥的漏洞窃取资产的安全事件" },
                { en: "well-audited", zh: "经过充分审计的", usage: "由专业安全公司审查过的" }
            ],
            cultureTip: "跨链桥是 DeFi 中风险最高的环节之一。历史上多起重大安全事件（如 Ronin Bridge、Wormhole）都与桥有关，总损失超过数十亿美元。",
            cultureTipEn: "Cross-chain bridges are among the highest-risk components in DeFi. Multiple major security incidents (like Ronin Bridge, Wormhole) involved bridges, with total losses exceeding billions."
        },
        {
            id: "wa-014",
            scene: "智能合约钱包与 EOA 对比",
            sceneEn: "Smart Contract Wallets vs EOAs",
            category: "wallet",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Developer", en: "I have been reading about account abstraction. What are the advantages of smart contract wallets over regular EOAs?", zh: "我一直在研究账户抽象。智能合约钱包比普通 EOA 有什么优势？" },
                { speaker: "B", role: "Architect", en: "Smart contract wallets support features like social recovery, spending limits, and batched transactions. EOAs cannot do any of that.", zh: "智能合约钱包支持社交恢复、消费限额和批量交易等功能。EOA 做不到这些。" },
                { speaker: "A", role: "Developer", en: "Social recovery sounds interesting. How does it work?", zh: "社交恢复听起来很有意思。它是怎么工作的？" },
                { speaker: "B", role: "Architect", en: "You designate trusted guardians. If you lose access, a majority of guardians can approve a new signing key for you.", zh: "你指定可信的守护者。如果你失去访问权限，大多数守护者可以为你批准一个新的签名密钥。" },
                { speaker: "A", role: "Developer", en: "That solves the seed phrase problem. What about gas fees for smart contract wallets?", zh: "这解决了助记词问题。智能合约钱包的 gas 费怎么样？" },
                { speaker: "B", role: "Architect", en: "They are slightly higher because of the contract execution overhead. But with ERC-4337, paymasters can sponsor gas, so users can pay in any token or even for free.", zh: "因为合约执行的开销会稍高一些。但有了 ERC-4337，支付者可以赞助 gas，用户可以用任何代币支付甚至免费。" }
            ],
            keyPhrases: [
                { en: "account abstraction", zh: "账户抽象", usage: "将钱包功能从协议层移到智能合约层的技术" },
                { en: "social recovery", zh: "社交恢复", usage: "通过受信任的人帮助恢复钱包访问" },
                { en: "EOA (Externally Owned Account)", zh: "外部拥有账户", usage: "由私钥直接控制的传统以太坊账户" },
                { en: "paymaster", zh: "支付者", usage: "ERC-4337 中代付 gas 费的角色" }
            ],
            cultureTip: "账户抽象被认为是改善加密货币用户体验的关键技术。它能让普通用户像使用传统应用一样使用区块链，无需理解 gas 和私钥。",
            cultureTipEn: "Account abstraction is considered key to improving crypto UX. It enables ordinary users to use blockchain like traditional apps, without understanding gas and private keys."
        },
        {
            id: "wa-015",
            scene: "企业级钱包安全方案",
            sceneEn: "Enterprise-Grade Wallet Security",
            category: "wallet",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "CTO", en: "We are managing over 100 million in digital assets. Our current wallet setup is not robust enough.", zh: "我们管理着超过 1 亿美元的数字资产。目前的钱包配置不够健壮。" },
                { speaker: "B", role: "SecurityConsultant", en: "For that amount, you need institutional-grade custody. Consider using MPC technology combined with hardware security modules.", zh: "对于这个金额，你需要机构级托管。考虑使用 MPC 技术结合硬件安全模块。" },
                { speaker: "A", role: "CTO", en: "How does MPC differ from traditional multi-sig?", zh: "MPC 和传统多签有什么区别？" },
                { speaker: "B", role: "SecurityConsultant", en: "MPC distributes key shares across multiple parties. No single party ever holds the complete private key, and it works across any blockchain.", zh: "MPC 将密钥分片分布在多方之间。没有任何一方持有完整的私钥，而且它适用于任何区块链。" },
                { speaker: "A", role: "CTO", en: "What about regulatory compliance? We need audit trails for every transaction.", zh: "监管合规方面呢？我们需要每笔交易的审计记录。" },
                { speaker: "B", role: "SecurityConsultant", en: "Enterprise custody platforms like Fireblocks provide complete audit logs, policy engines, and role-based access control.", zh: "像 Fireblocks 这样的企业托管平台提供完整的审计日志、策略引擎和基于角色的访问控制。" }
            ],
            keyPhrases: [
                { en: "MPC (Multi-Party Computation)", zh: "多方计算", usage: "将密钥分散到多方的密码学技术" },
                { en: "institutional custody", zh: "机构托管", usage: "为大型机构提供的专业资产保管服务" },
                { en: "HSM (Hardware Security Module)", zh: "硬件安全模块", usage: "专门用于密钥管理的安全硬件" },
                { en: "audit trail", zh: "审计记录", usage: "记录所有操作以供合规审查" }
            ],
            cultureTip: "随着加密行业走向成熟，机构级安全已成为管理大额资产的标配。传统金融机构进入加密领域时，对安全和合规的要求极高。",
            cultureTipEn: "As the crypto industry matures, institutional-grade security has become standard for managing large assets. Traditional financial institutions entering crypto have extremely high security and compliance requirements."
        },
        {
            id: "wa-016",
            scene: "处理 DeFi 钱包交互故障",
            sceneEn: "Troubleshooting DeFi Wallet Interactions",
            category: "wallet",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "FrustratedUser", en: "My transaction has been pending for over an hour. The gas price spiked right after I submitted it.", zh: "我的交易已经挂起超过一小时了。提交后 gas 价格突然飙升了。" },
                { speaker: "B", role: "TechSupport", en: "You can speed it up by sending a replacement transaction with the same nonce but a higher gas price.", zh: "你可以通过发送一笔相同 nonce 但更高 gas 价格的替换交易来加速。" },
                { speaker: "A", role: "FrustratedUser", en: "What if I want to cancel it instead?", zh: "如果我想取消呢？" },
                { speaker: "B", role: "TechSupport", en: "Send a zero-value transaction to your own address using the same nonce. That will replace the stuck transaction.", zh: "向你自己的地址发送一笔零值交易，使用相同的 nonce。这会替换掉卡住的交易。" },
                { speaker: "A", role: "FrustratedUser", en: "I also got a weird error: out of gas. What does that mean?", zh: "我还遇到一个奇怪的错误：out of gas。这是什么意思？" },
                { speaker: "B", role: "TechSupport", en: "It means the gas limit you set was too low for the transaction complexity. Try increasing the gas limit by 20 to 30 percent.", zh: "说明你设置的 gas 上限对于交易复杂度来说太低了。试着把 gas 上限提高 20% 到 30%。" }
            ],
            keyPhrases: [
                { en: "nonce", zh: "交易序号", usage: "每个账户的交易计数器，用于排序交易" },
                { en: "replacement transaction", zh: "替换交易", usage: "使用相同 nonce 覆盖已有交易的方法" },
                { en: "gas limit", zh: "gas 上限", usage: "交易允许消耗的最大计算量" },
                { en: "out of gas", zh: "gas 不足", usage: "交易执行时 gas 耗尽导致的失败" }
            ],
            cultureTip: "链上交易一旦确认就不可逆转，但在确认前可以通过 nonce 替换来修改或取消。理解 nonce 机制是高级用户的必备知识。",
            cultureTipEn: "On-chain transactions are irreversible once confirmed, but can be modified or cancelled via nonce replacement before confirmation. Understanding the nonce mechanism is essential knowledge for advanced users."
        },
        {
            id: "wa-017",
            scene: "使用钱包进行链上签名验证",
            sceneEn: "Using Wallet for On-Chain Signature Verification",
            category: "wallet",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "ProjectManager", en: "We need users to prove wallet ownership without making a transaction. How can we do that?", zh: "我们需要用户证明钱包所有权，但不做交易。怎么实现？" },
                { speaker: "B", role: "BlockchainDev", en: "Use message signing. The user signs a message with their private key, and you verify the signature on your backend.", zh: "用消息签名。用户用私钥签名一条消息，你在后端验证签名。" },
                { speaker: "A", role: "ProjectManager", en: "Is this the same as Sign In With Ethereum?", zh: "这和「用以太坊登录」是一回事吗？" },
                { speaker: "B", role: "BlockchainDev", en: "Exactly. SIWE is a standardized way to authenticate users using their wallet. It follows the EIP-4361 specification.", zh: "正是。SIWE 是使用钱包验证用户的标准化方式。它遵循 EIP-4361 规范。" },
                { speaker: "A", role: "ProjectManager", en: "Does signing a message cost any gas?", zh: "签名消息需要 gas 费吗？" },
                { speaker: "B", role: "BlockchainDev", en: "No, message signing is completely free. It is an off-chain operation. Only transactions that change blockchain state cost gas.", zh: "不需要，消息签名完全免费。它是链下操作。只有改变区块链状态的交易才需要 gas。" }
            ],
            keyPhrases: [
                { en: "message signing", zh: "消息签名", usage: "用私钥对消息进行数字签名以证明身份" },
                { en: "SIWE (Sign In With Ethereum)", zh: "用以太坊登录", usage: "使用钱包进行身份验证的标准协议" },
                { en: "off-chain operation", zh: "链下操作", usage: "不在区块链上执行、不消耗 gas 的操作" },
                { en: "EIP-4361", zh: "EIP-4361 标准", usage: "以太坊改进提案中关于钱包登录的规范" }
            ],
            cultureTip: "钱包签名验证正在成为 Web3 身份验证的标准方式，取代传统的用户名密码体系。它实现了真正的「用户拥有自己的身份」。",
            cultureTipEn: "Wallet signature verification is becoming the standard for Web3 authentication, replacing traditional username-password systems. It achieves true user-owned identity."
        }
    ],
    "community": [
        {
            id: "cm-001",
            scene: "在 Discord 社群提问",
            sceneEn: "Asking Questions in a Discord Server",
            category: "community",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Member", en: "Hey everyone! I'm new here. I just aped into this project — super bullish! Where can I learn more about the roadmap?", zh: "大家好！我是新来的。我刚冲了这个项目——非常看好！在哪里可以了解更多路线图的信息？" },
                { speaker: "B", role: "Mod", en: "Welcome aboard! You can check out the #roadmap channel. We also have weekly AMAs every Thursday where the team shares updates.", zh: "欢迎加入！你可以看看 #roadmap 频道。我们每周四还有 AMA 活动，团队会分享最新进展。" },
                { speaker: "A", role: "Member", en: "Awesome, thanks! Is there a way to get the OG role? I've been following since day one.", zh: "太好了，谢谢！有没有办法获得 OG 角色？我从第一天就开始关注了。" },
                { speaker: "B", role: "Mod", en: "Sure! Drop your wallet address in #verify and we'll check your on-chain activity. OG holders get early access to new features.", zh: "当然！在 #verify 频道发一下你的钱包地址，我们会检查你的链上活动。OG 持有者可以优先体验新功能。" },
                { speaker: "A", role: "Member", en: "LFG! This community is really something.", zh: "冲冲冲！这个社区真不错。" }
            ],
            keyPhrases: [
                { en: "aped into", zh: "冲了/重仓买入", usage: "crypto 圈俚语，指不做太多研究就买入" },
                { en: "bullish", zh: "看涨/看好", usage: "对某项目持乐观态度" },
                { en: "AMA (Ask Me Anything)", zh: "公开问答活动", usage: "项目方与社区互动的常见形式" },
                { en: "LFG (Let's F***ing Go)", zh: "冲！", usage: "crypto 社区表达兴奋的缩写" }
            ],
            cultureTip: "Crypto Discord 社群有独特的文化。'LFG'、'gm'（good morning）、'wagmi'（we're all gonna make it）都是常见缩写。语气可以很随意甚至夸张。",
            cultureTipEn: "Crypto Discord communities have unique slang. 'LFG', 'gm' (good morning), 'wagmi' (we're all gonna make it) are common. The tone is often casual and hype-driven."
        },
        {
            id: "cm-002",
            scene: "讨论项目治理提案",
            sceneEn: "Discussing a Governance Proposal",
            category: "community",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Member", en: "Have you guys seen Proposal #47? They want to reduce the staking rewards from 12% to 8% APY.", zh: "你们看到提案 #47 了吗？他们要把质押奖励从 12% 降到 8% 年化收益。" },
                { speaker: "B", role: "Member2", en: "Yeah, I read through it. The rationale is that the current emission rate is inflationary and unsustainable long-term.", zh: "是的，我看了。理由是目前的排放率是通胀性的，长期不可持续。" },
                { speaker: "A", role: "Member", en: "That makes sense from a tokenomics perspective, but it might push some liquidity providers to other protocols.", zh: "从代币经济学角度来看这有道理，但可能会把一些流动性提供者推向其他协议。" },
                { speaker: "B", role: "Member2", en: "True. The proposal also includes a vesting schedule for large stakers to prevent a mass exodus. I think it's a reasonable compromise.", zh: "确实。提案还包括为大额质押者设置锁仓计划，防止大规模撤离。我觉得这是个合理的折中。" },
                { speaker: "A", role: "Member", en: "Fair point. I'll vote in favor then. When's the snapshot?", zh: "有道理。那我会投赞成票。快照什么时候？" },
                { speaker: "B", role: "Member2", en: "Voting opens next Monday and closes Friday. Make sure your tokens are in your wallet before the snapshot.", zh: "投票下周一开始，周五结束。确保在快照之前你的代币在钱包里。" }
            ],
            keyPhrases: [
                { en: "APY (Annual Percentage Yield)", zh: "年化收益率", usage: "DeFi 中衡量回报的标准指标" },
                { en: "emission rate", zh: "排放率", usage: "代币释放速度" },
                { en: "vesting schedule", zh: "锁仓计划", usage: "代币逐步释放的时间表" },
                { en: "snapshot", zh: "快照", usage: "记录某一时刻持币情况，用于治理投票" }
            ],
            cultureTip: "DAO（去中心化自治组织）治理讨论通常比较理性和专业。参与者会从经济模型、可持续性等角度分析，而不只是情绪化的看涨看跌。",
            cultureTipEn: "DAO governance discussions are typically rational and professional. Participants analyze from economic models and sustainability perspectives, not just emotional bull/bear sentiment."
        },
        {
            id: "cm-003",
            scene: "加入 Telegram 加密社群",
            sceneEn: "Joining a Crypto Telegram Group",
            category: "community",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Newcomer", en: "Hi everyone! I just joined this Telegram group. Is this where people discuss Bitcoin?", zh: "大家好！我刚加入这个 Telegram 群。这里是讨论比特币的地方吗？" },
                { speaker: "B", role: "Moderator", en: "Welcome! Yes, this is our main crypto discussion group. Please read the pinned rules first.", zh: "欢迎！是的，这是我们的主要加密货币讨论群。请先阅读置顶规则。" },
                { speaker: "A", role: "Newcomer", en: "Got it. Are there any channels for beginners like me?", zh: "明白了。有适合像我这样的新手的频道吗？" },
                { speaker: "B", role: "Moderator", en: "Sure! We have a beginner-friendly channel. I will send you the invite link.", zh: "当然有！我们有一个新手友好的频道。我把邀请链接发给你。" },
                { speaker: "A", role: "Newcomer", en: "Thank you so much! I look forward to learning from everyone here.", zh: "非常感谢！我期待在这里向大家学习。" }
            ],
            keyPhrases: [
                { en: "Telegram group", zh: "Telegram 群组", usage: "加密社区最常用的即时通讯群聊" },
                { en: "pinned rules", zh: "置顶规则", usage: "群组中固定在顶部的行为准则" },
                { en: "invite link", zh: "邀请链接", usage: "用于邀请他人加入群组的链接" }
            ],
            cultureTip: "加入新的加密货币社群时，先阅读群规是基本礼仪。避免发送无关广告或来路不明的链接。",
            cultureTipEn: "When joining a new crypto community, reading the group rules first is basic etiquette. Avoid posting irrelevant ads or suspicious links."
        },
        {
            id: "cm-004",
            scene: "在 Twitter/X 上讨论加密趋势",
            sceneEn: "Discussing Crypto Trends on Twitter/X",
            category: "community",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "CryptoFan", en: "Did you see the trending hashtag about Ethereum on X today?", zh: "你看到今天 X 上以太坊的热门话题标签了吗？" },
                { speaker: "B", role: "Friend", en: "Yes! Everyone is talking about the upcoming upgrade. The timeline is full of it.", zh: "看到了！大家都在讨论即将到来的升级。时间线上全是这个。" },
                { speaker: "A", role: "CryptoFan", en: "I retweeted a good thread that explains the changes in simple terms.", zh: "我转发了一个用简单语言解释这些变化的好帖子。" },
                { speaker: "B", role: "Friend", en: "Send me the link. I want to bookmark it for later.", zh: "把链接发给我。我想收藏起来以后看。" },
                { speaker: "A", role: "CryptoFan", en: "Sure. Also, be careful of fake accounts replying with scam links.", zh: "好的。另外，小心那些用诈骗链接回复的假账号。" }
            ],
            keyPhrases: [
                { en: "trending hashtag", zh: "热门话题标签", usage: "社交媒体上被大量讨论的话题标记" },
                { en: "retweet", zh: "转发/转推", usage: "在 X 平台上分享他人的帖子" },
                { en: "thread", zh: "帖子串/推文串", usage: "一系列相关联的连续帖子" },
                { en: "scam links", zh: "诈骗链接", usage: "伪装成正规网站的欺诈性链接" }
            ],
            cultureTip: "在 X（推特）上讨论加密货币时，要警惕假冒知名人士的账号，它们经常在热门帖子下发送钓鱼链接。",
            cultureTipEn: "When discussing crypto on X (Twitter), beware of accounts impersonating well-known figures. They often post phishing links under popular tweets."
        },
        {
            id: "cm-005",
            scene: "在 Reddit 加密论坛发帖",
            sceneEn: "Posting on a Reddit Crypto Forum",
            category: "community",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Redditor", en: "I want to post a question on the cryptocurrency subreddit. How do I get enough karma?", zh: "我想在加密货币子版块发帖提问。怎么才能获得足够的 karma？" },
                { speaker: "B", role: "ExperiencedUser", en: "You need to comment on other posts first. Helpful comments will earn you upvotes.", zh: "你需要先在其他帖子下评论。有帮助的评论会为你赢得点赞。" },
                { speaker: "A", role: "Redditor", en: "I see. Is there a minimum karma requirement to post?", zh: "我明白了。发帖有最低 karma 要求吗？" },
                { speaker: "B", role: "ExperiencedUser", en: "Yes, each subreddit has its own rules. Check the sidebar for details.", zh: "是的，每个子版块都有自己的规则。查看侧边栏了解详情。" }
            ],
            keyPhrases: [
                { en: "subreddit", zh: "子版块", usage: "Reddit 上按主题分类的讨论区" },
                { en: "karma", zh: "karma 值/声望值", usage: "Reddit 用户通过获得点赞积累的信誉分数" },
                { en: "upvote", zh: "点赞/投票支持", usage: "对有价值的内容表示认可" }
            ],
            cultureTip: "Reddit 的加密货币社区重视高质量的讨论，发帖前搜索是否已有类似问题是良好的社区习惯。",
            cultureTipEn: "Reddit crypto communities value quality discussions. Searching for similar questions before posting is good community practice."
        },
        {
            id: "cm-006",
            scene: "参与加密货币空投活动",
            sceneEn: "Participating in a Crypto Airdrop",
            category: "community",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "CryptoUser", en: "I heard there is a new token airdrop happening. How do I participate?", zh: "我听说有一个新的代币空投活动。我怎么参与？" },
                { speaker: "B", role: "Helper", en: "First, connect your wallet on their official website. Make sure it is the real site.", zh: "首先，在他们的官方网站上连接钱包。确保是真正的官网。" },
                { speaker: "A", role: "CryptoUser", en: "What tasks do I need to complete to qualify?", zh: "我需要完成什么任务才能获得资格？" },
                { speaker: "B", role: "Helper", en: "Usually you need to follow their social accounts, join their Discord, and share a post.", zh: "通常你需要关注他们的社交账号、加入他们的 Discord，然后分享一个帖子。" },
                { speaker: "A", role: "CryptoUser", en: "Is there a deadline for the airdrop?", zh: "空投有截止日期吗？" },
                { speaker: "B", role: "Helper", en: "Yes, the snapshot is next Friday. Complete all tasks before then.", zh: "有的，快照时间是下周五。在那之前完成所有任务。" }
            ],
            keyPhrases: [
                { en: "airdrop", zh: "空投", usage: "项目方免费向用户分发代币的活动" },
                { en: "connect your wallet", zh: "连接钱包", usage: "将加密钱包与网站进行授权连接" },
                { en: "snapshot", zh: "快照", usage: "在特定时间点记录链上状态以确定空投资格" },
                { en: "qualify", zh: "获得资格", usage: "满足参与活动所需的条件" }
            ],
            cultureTip: "参与空投时务必验证官方链接，许多诈骗者会伪造空投页面来窃取用户的钱包资产。",
            cultureTipEn: "Always verify official links when participating in airdrops. Many scammers create fake airdrop pages to steal wallet assets."
        },
        {
            id: "cm-007",
            scene: "收听加密货币播客",
            sceneEn: "Listening to Crypto Podcasts",
            category: "community",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Listener", en: "Can you recommend a good crypto podcast for beginners?", zh: "你能推荐一个适合新手的加密货币播客吗？" },
                { speaker: "B", role: "PodcastFan", en: "Sure! Some focus on market analysis, others on blockchain technology. What interests you more?", zh: "当然！有些侧重市场分析，有些侧重区块链技术。你对哪个更感兴趣？" },
                { speaker: "A", role: "Listener", en: "I prefer something that explains concepts in simple terms.", zh: "我更喜欢用简单语言解释概念的那种。" },
                { speaker: "B", role: "PodcastFan", en: "Then I suggest shows that do weekly market recaps. They are easy to follow and great for learning.", zh: "那我建议听做每周市场回顾的节目。它们容易跟上，很适合学习。" },
                { speaker: "A", role: "Listener", en: "Great. Where can I find them? On Spotify or YouTube?", zh: "太好了。在哪里能找到？Spotify 还是 YouTube？" },
                { speaker: "B", role: "PodcastFan", en: "Both! Most crypto podcasts publish on all major platforms.", zh: "都有！大多数加密货币播客在所有主要平台上都会发布。" }
            ],
            keyPhrases: [
                { en: "crypto podcast", zh: "加密货币播客", usage: "专注于加密货币话题的音频或视频节目" },
                { en: "market analysis", zh: "市场分析", usage: "对加密市场价格和趋势的专业解读" },
                { en: "weekly recap", zh: "每周回顾", usage: "总结一周重要事件和市场动态的节目" }
            ],
            cultureTip: "加密货币播客是学习行业知识的好方式，但要注意区分客观分析和带有利益关系的推广内容。",
            cultureTipEn: "Crypto podcasts are a great way to learn, but distinguish objective analysis from promotional content with conflicts of interest."
        },
        {
            id: "cm-008",
            scene: "加入一个 DAO 组织",
            sceneEn: "Joining a DAO Organization",
            category: "community",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Applicant", en: "I would like to join your DAO. What is the process for becoming a member?", zh: "我想加入你们的 DAO。成为成员的流程是什么？" },
                { speaker: "B", role: "DAOMember", en: "You need to hold at least 100 of our governance tokens. Then you can submit a membership proposal.", zh: "你需要持有至少 100 个我们的治理代币。然后你可以提交成员提案。" },
                { speaker: "A", role: "Applicant", en: "Once I am a member, what kind of decisions can I vote on?", zh: "一旦成为成员，我可以对什么样的决策进行投票？" },
                { speaker: "B", role: "DAOMember", en: "Everything from treasury allocation to protocol upgrades. Each token equals one vote.", zh: "从财库分配到协议升级的所有事务。每个代币等于一票。" },
                { speaker: "A", role: "Applicant", en: "That sounds truly decentralized. How active is the community in governance?", zh: "这听起来真正去中心化。社区在治理方面活跃吗？" },
                { speaker: "B", role: "DAOMember", en: "Very active. We have weekly governance calls and discussions on our forum.", zh: "非常活跃。我们每周有治理电话会议和论坛讨论。" }
            ],
            keyPhrases: [
                { en: "DAO", zh: "去中心化自治组织", usage: "由智能合约和社区投票管理的组织形式" },
                { en: "governance token", zh: "治理代币", usage: "赋予持有者投票权的代币" },
                { en: "treasury allocation", zh: "财库分配", usage: "决定组织资金如何使用和分配" },
                { en: "membership proposal", zh: "成员提案", usage: "申请加入 DAO 所提交的正式提议" }
            ],
            cultureTip: "DAO 治理强调透明和社区参与，积极参与讨论和投票是成为有价值社区成员的关键。",
            cultureTipEn: "DAO governance emphasizes transparency and community participation. Active engagement in discussions and voting is key to being a valued community member."
        },
        {
            id: "cm-009",
            scene: "处理社区中的 FUD",
            sceneEn: "Handling FUD in the Community",
            category: "community",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "ConcernedMember", en: "People are spreading rumors that the project is a scam. Should I sell my tokens?", zh: "有人在散布谣言说这个项目是骗局。我应该卖掉代币吗？" },
                { speaker: "B", role: "ExperiencedTrader", en: "Do not panic. First, check if the FUD is based on facts or just emotions.", zh: "不要恐慌。首先，检查这些 FUD 是基于事实还是仅仅是情绪。" },
                { speaker: "A", role: "ConcernedMember", en: "How can I tell the difference between legitimate concerns and pure FUD?", zh: "我怎么区分合理的担忧和纯粹的 FUD？" },
                { speaker: "B", role: "ExperiencedTrader", en: "Look at the project updates, check on-chain data, and see if the team is still active on GitHub.", zh: "查看项目更新，检查链上数据，看看团队在 GitHub 上是否仍然活跃。" },
                { speaker: "A", role: "ConcernedMember", en: "The team just posted a detailed response addressing every concern. That is reassuring.", zh: "团队刚发布了详细回应，解答了每个疑虑。这让人放心。" },
                { speaker: "B", role: "ExperiencedTrader", en: "Exactly. Transparent teams that address FUD directly are usually trustworthy.", zh: "没错。直接回应 FUD 的透明团队通常是值得信赖的。" }
            ],
            keyPhrases: [
                { en: "FUD", zh: "恐惧、不确定和怀疑", usage: "指散布负面信息以引起市场恐慌的行为" },
                { en: "on-chain data", zh: "链上数据", usage: "记录在区块链上的可验证的交易和活动数据" },
                { en: "transparent team", zh: "透明团队", usage: "公开信息、积极沟通的项目团队" }
            ],
            cultureTip: "在加密社区中，DYOR（自己做研究）是应对 FUD 的核心原则，不要盲目跟随他人的恐慌情绪做决策。",
            cultureTipEn: "In the crypto community, DYOR (Do Your Own Research) is the core principle for dealing with FUD. Never make decisions based solely on others' panic."
        },
        {
            id: "cm-010",
            scene: "NFT 社区活动与展览",
            sceneEn: "NFT Community Events and Exhibitions",
            category: "community",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Collector", en: "Are you going to the NFT community showcase this weekend?", zh: "你这周末去 NFT 社区展览吗？" },
                { speaker: "B", role: "Artist", en: "Yes! I am exhibiting three of my digital art pieces. It is my first gallery show.", zh: "去！我要展出三件数字艺术作品。这是我第一次画廊展出。" },
                { speaker: "A", role: "Collector", en: "That is amazing. Will there be a live minting event too?", zh: "太棒了。会有现场铸造活动吗？" },
                { speaker: "B", role: "Artist", en: "Yes, attendees can mint exclusive NFTs at the event. There will also be panel discussions.", zh: "是的，参加者可以在活动中铸造独家 NFT。还会有小组讨论。" },
                { speaker: "A", role: "Collector", en: "I heard some well-known collectors will be there. Great networking opportunity.", zh: "我听说一些知名收藏家会到场。很好的社交机会。" }
            ],
            keyPhrases: [
                { en: "live minting", zh: "现场铸造", usage: "在活动现场实时创建和发行 NFT" },
                { en: "digital art", zh: "数字艺术", usage: "以数字形式创作的艺术作品" },
                { en: "panel discussion", zh: "小组讨论", usage: "专家或嘉宾围绕特定话题进行的公开讨论" },
                { en: "networking", zh: "社交/建立人脉", usage: "在行业活动中与他人建立联系" }
            ],
            cultureTip: "NFT 社区活动是连接数字世界和现实世界的桥梁，许多重要的合作和交易都始于线下的面对面交流。",
            cultureTipEn: "NFT community events bridge the digital and physical worlds. Many important collaborations and deals begin with face-to-face interactions at offline events."
        },
        {
            id: "cm-011",
            scene: "社区投票决定项目方向",
            sceneEn: "Community Voting on Project Direction",
            category: "community",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "TokenHolder", en: "A new governance proposal just went live. Have you read it yet?", zh: "一个新的治理提案刚刚上线了。你读了吗？" },
                { speaker: "B", role: "ActiveVoter", en: "Yes, it proposes allocating 10% of the treasury to a developer grant program.", zh: "读了，它提议将财库的 10% 分配给开发者资助计划。" },
                { speaker: "A", role: "TokenHolder", en: "That sounds beneficial. How do I cast my vote?", zh: "听起来很有益。我怎么投票？" },
                { speaker: "B", role: "ActiveVoter", en: "Go to the governance portal, connect your wallet, and select your choice. Voting ends in 48 hours.", zh: "去治理门户网站，连接你的钱包，然后选择你的选项。投票 48 小时后结束。" },
                { speaker: "A", role: "TokenHolder", en: "Does the number of tokens I hold affect my voting power?", zh: "我持有的代币数量会影响我的投票权重吗？" },
                { speaker: "B", role: "ActiveVoter", en: "Yes, it is token-weighted. But some DAOs are exploring quadratic voting for fairness.", zh: "是的，是代币加权的。但一些 DAO 正在探索二次方投票以实现公平。" }
            ],
            keyPhrases: [
                { en: "governance proposal", zh: "治理提案", usage: "提交给社区投票表决的正式建议" },
                { en: "developer grant", zh: "开发者资助", usage: "为开发者提供的资金支持计划" },
                { en: "token-weighted voting", zh: "代币加权投票", usage: "投票权重与持有代币数量成正比的方式" },
                { en: "quadratic voting", zh: "二次方投票", usage: "一种减少大户垄断、更公平的投票机制" }
            ],
            cultureTip: "链上治理投票是 Web3 民主的核心，即使持有少量代币也应积极参与投票，每一票都对社区的未来产生影响。",
            cultureTipEn: "On-chain governance voting is central to Web3 democracy. Even with a small holding, every vote impacts the community future."
        },
        {
            id: "cm-012",
            scene: "管理加密社区频道",
            sceneEn: "Moderating a Crypto Community Channel",
            category: "community",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "NewMod", en: "I was just promoted to moderator. Any tips for managing the community?", zh: "我刚被提升为管理员。有什么管理社区的建议吗？" },
                { speaker: "B", role: "SeniorMod", en: "The most important thing is to be fair and consistent. Apply the rules equally to everyone.", zh: "最重要的是公平和一致。对所有人平等地执行规则。" },
                { speaker: "A", role: "NewMod", en: "How should I handle users who keep shilling random tokens?", zh: "我应该怎么处理那些不断推销随机代币的用户？" },
                { speaker: "B", role: "SeniorMod", en: "Give them a warning first. If they continue, mute them for 24 hours. Repeat offenders get banned.", zh: "先给他们一个警告。如果继续的话，禁言 24 小时。屡犯者直接封禁。" },
                { speaker: "A", role: "NewMod", en: "What about users who are just having a bad day and being rude?", zh: "那些只是心情不好而态度粗鲁的用户呢？" },
                { speaker: "B", role: "SeniorMod", en: "Try to de-escalate first. A calm private message often works better than a public warning.", zh: "先试着缓和局面。冷静的私信通常比公开警告更有效。" }
            ],
            keyPhrases: [
                { en: "moderator", zh: "管理员/版主", usage: "负责维护社区秩序的人" },
                { en: "shilling", zh: "推销/喊单", usage: "过度推广某个代币以吸引他人购买" },
                { en: "de-escalate", zh: "缓和局面", usage: "通过沟通降低冲突的紧张程度" }
            ],
            cultureTip: "好的社区管理员不仅要维护规则，还要营造积极的讨论氛围。过度严厉和过度宽松都会伤害社区发展。",
            cultureTipEn: "Good moderators enforce rules and foster positive discussion. Being too strict or too lenient both harm community growth."
        },
        {
            id: "cm-013",
            scene: "组织线下加密聚会",
            sceneEn: "Organizing a Local Crypto Meetup",
            category: "community",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Organizer", en: "I am planning a crypto meetup next month. Would you like to help organize it?", zh: "我计划下个月举办一次加密货币聚会。你想帮忙组织吗？" },
                { speaker: "B", role: "CoOrganizer", en: "Absolutely! Do we have a venue yet? We should find a space for at least 50 people.", zh: "当然！我们有场地了吗？应该找一个至少能容纳 50 人的地方。" },
                { speaker: "A", role: "Organizer", en: "I contacted a coworking space downtown. They offer event hosting with AV equipment included.", zh: "我联系了市中心的一个共享办公空间。他们提供包含音视频设备的活动场地。" },
                { speaker: "B", role: "CoOrganizer", en: "Perfect. We should have presentations, open networking, and maybe a live demo.", zh: "完美。我们应该安排演讲、开放社交环节，也许还可以加一个现场演示。" },
                { speaker: "A", role: "Organizer", en: "I will reach out to local blockchain developers for talks. Can you handle the marketing?", zh: "我会联系本地区块链开发者来演讲。你能负责宣传吗？" },
                { speaker: "B", role: "CoOrganizer", en: "Sure. I will create an event page and promote it across our social channels.", zh: "没问题。我会创建一个活动页面，在我们的社交渠道推广。" }
            ],
            keyPhrases: [
                { en: "meetup", zh: "聚会/见面会", usage: "志同道合的人组织的线下交流活动" },
                { en: "venue", zh: "场地", usage: "举办活动的物理场所" },
                { en: "networking", zh: "社交/建立人脉", usage: "在活动中与他人建立联系" },
                { en: "live demo", zh: "现场演示", usage: "当场展示产品或技术的环节" }
            ],
            cultureTip: "线下加密聚会是建立本地社区的重要方式。成功的活动通常兼顾教育内容和社交互动。",
            cultureTipEn: "Offline crypto meetups are vital for building local communities. Successful events balance educational content with social interaction."
        },
        {
            id: "cm-014",
            scene: "讨论加密 KOL 的观点",
            sceneEn: "Discussing Crypto Influencer Opinions",
            category: "community",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Follower", en: "That well-known crypto influencer just predicted Bitcoin will reach 200K by year end. What do you think?", zh: "那个知名加密 KOL 刚预测比特币年底会达到 20 万美元。你怎么看？" },
                { speaker: "B", role: "Skeptic", en: "I take influencer predictions with a grain of salt. Many of them have undisclosed financial interests.", zh: "我对 KOL 的预测持保留态度。他们中很多人有未披露的经济利益。" },
                { speaker: "A", role: "Follower", en: "That is a good point. But this person has been right about several moves before.", zh: "说得有道理。但这个人之前对几次走势的判断是正确的。" },
                { speaker: "B", role: "Skeptic", en: "Survivorship bias. You only remember the correct calls. Nobody tracks how many times they were wrong.", zh: "这是幸存者偏差。你只记得正确的预测。没人追踪他们错了多少次。" },
                { speaker: "A", role: "Follower", en: "So how should I use influencer content in my research?", zh: "那我应该如何在研究中利用 KOL 的内容？" },
                { speaker: "B", role: "Skeptic", en: "Treat it as one data point among many. Cross-reference with on-chain metrics and your own analysis.", zh: "把它当作众多数据点中的一个。与链上指标和你自己的分析交叉验证。" }
            ],
            keyPhrases: [
                { en: "crypto influencer / KOL", zh: "加密货币影响力人物/KOL", usage: "在社交媒体上影响市场情绪的人" },
                { en: "survivorship bias", zh: "幸存者偏差", usage: "只关注成功案例而忽略失败案例的认知偏差" },
                { en: "undisclosed financial interests", zh: "未披露的经济利益", usage: "推广者与被推广项目之间隐藏的利益关系" },
                { en: "cross-reference", zh: "交叉验证", usage: "通过多个独立来源核实信息" }
            ],
            cultureTip: "加密领域的 KOL 文化非常盛行，但许多所谓的「免费建议」背后可能隐藏着付费推广。独立思考是保护自己的最佳策略。",
            cultureTipEn: "KOL culture is prevalent in crypto, but many so-called free recommendations may be paid promotions. Independent thinking is your best protective strategy."
        },
        {
            id: "cm-015",
            scene: "参加区块链黑客松组队",
            sceneEn: "Forming a Blockchain Hackathon Team",
            category: "community",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Developer", en: "There is a blockchain hackathon next month with a 50K prize pool. Want to form a team?", zh: "下个月有一个区块链黑客松，奖金池 5 万美元。想组队吗？" },
                { speaker: "B", role: "Designer", en: "I am in! What roles do we still need?", zh: "我加入！我们还需要什么角色？" },
                { speaker: "A", role: "Developer", en: "I can handle smart contract development. We need a frontend developer and someone for the pitch deck.", zh: "我可以负责智能合约开发。我们需要一个前端开发者和一个做路演 PPT 的人。" },
                { speaker: "B", role: "Designer", en: "I will handle UI/UX design and the presentation. Let me ask my friend who does React.", zh: "我来负责 UI/UX 设计和展示。让我问问我做 React 的朋友。" },
                { speaker: "A", role: "Developer", en: "Great. The theme is decentralized identity solutions. Let us brainstorm ideas this week.", zh: "太好了。主题是去中心化身份解决方案。我们这周头脑风暴一下创意。" },
                { speaker: "B", role: "Designer", en: "I have ideas around self-sovereign identity for underbanked communities. Let us set up a call.", zh: "我有一些关于服务不足社区自主权身份的想法。我们安排一个电话讨论。" }
            ],
            keyPhrases: [
                { en: "hackathon", zh: "黑客松/编程马拉松", usage: "在限定时间内团队合作开发项目的竞赛" },
                { en: "prize pool", zh: "奖金池", usage: "比赛中为获胜者准备的总奖金" },
                { en: "pitch deck", zh: "路演 PPT/演示文稿", usage: "向评委展示项目的简短演示" },
                { en: "self-sovereign identity", zh: "自主权身份", usage: "用户完全控制自己数字身份的系统" }
            ],
            cultureTip: "区块链黑客松不仅是技术竞赛，更是社区建设和人脉拓展的绝佳机会。许多成功的 Web3 项目都起源于黑客松。",
            cultureTipEn: "Blockchain hackathons are not just competitions but excellent opportunities for community building. Many successful Web3 projects originated from hackathons."
        },
        {
            id: "cm-016",
            scene: "跨链社区协作讨论",
            sceneEn: "Cross-Chain Community Collaboration Discussion",
            category: "community",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "ChainAdvocate", en: "Our community should collaborate with the Polkadot ecosystem. Interoperability is the future.", zh: "我们的社区应该与 Polkadot 生态系统合作。互操作性是未来的方向。" },
                { speaker: "B", role: "CommunityLead", en: "I agree. Tribalism between chains is holding the entire industry back.", zh: "我同意。链之间的部落主义正在阻碍整个行业的发展。" },
                { speaker: "A", role: "ChainAdvocate", en: "We could start with a joint AMA session between both communities.", zh: "我们可以从两个社区的联合 AMA 会议开始。" },
                { speaker: "B", role: "CommunityLead", en: "Good idea. We could also propose a cross-chain grant for developers building bridges.", zh: "好主意。我们还可以为构建跨链桥的开发者提议一个跨链资助。" },
                { speaker: "A", role: "ChainAdvocate", en: "The technical working group should draft a proposal. We need buy-in from both governance bodies.", zh: "技术工作组应该起草一份提案。我们需要两个治理机构的支持。" },
                { speaker: "B", role: "CommunityLead", en: "Let me coordinate with their community manager. Building trust between communities takes time but it is worth it.", zh: "让我和他们的社区经理协调。在社区之间建立信任需要时间，但值得。" }
            ],
            keyPhrases: [
                { en: "interoperability", zh: "互操作性", usage: "不同区块链之间相互通信和交互的能力" },
                { en: "tribalism", zh: "部落主义", usage: "对特定链的盲目忠诚和排斥其他链" },
                { en: "cross-chain bridge", zh: "跨链桥", usage: "连接不同区块链的技术" },
                { en: "buy-in", zh: "支持/认可", usage: "获得相关方的同意和支持" }
            ],
            cultureTip: "加密社区中的「链战」虽然常见，但行业领袖越来越倡导跨链合作，认为协作共赢比零和竞争更有利于行业发展。",
            cultureTipEn: "While chain wars are common, industry leaders increasingly advocate cross-chain collaboration, viewing cooperative growth as more beneficial than zero-sum competition."
        },
        {
            id: "cm-017",
            scene: "社区危机管理与漏洞披露",
            sceneEn: "Community Crisis Management and Vulnerability Disclosure",
            category: "community",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Researcher", en: "I discovered a critical vulnerability in the protocol. I reported it through the bug bounty program.", zh: "我在协议中发现了一个严重漏洞。我已经通过漏洞赏金计划提交了报告。" },
                { speaker: "B", role: "ProjectLead", en: "Thank you for the responsible disclosure. Our team is reviewing it now. We will patch it within 24 hours.", zh: "感谢你的负责任披露。团队正在审查。我们会在 24 小时内修复。" },
                { speaker: "A", role: "Researcher", en: "I suggest coordinating the public announcement carefully. We do not want unnecessary panic.", zh: "我建议仔细协调公开声明。我们不想引起不必要的恐慌。" },
                { speaker: "B", role: "ProjectLead", en: "Agreed. We will deploy the fix first, then publish a transparent post-mortem.", zh: "同意。我们会先部署修复，然后发布一份透明的事后分析报告。" },
                { speaker: "A", role: "Researcher", en: "The community will appreciate the transparency. How much is the bounty for this severity level?", zh: "社区会感谢这种透明度的。这个严重程度的赏金是多少？" },
                { speaker: "B", role: "ProjectLead", en: "For critical vulnerabilities, the reward is up to 100K. Your finding potentially saved millions in user funds.", zh: "对于严重漏洞，奖励最高 10 万美元。你的发现可能挽救了数百万美元的用户资金。" }
            ],
            keyPhrases: [
                { en: "bug bounty program", zh: "漏洞赏金计划", usage: "项目方为发现安全漏洞的研究者提供奖励的计划" },
                { en: "responsible disclosure", zh: "负责任披露", usage: "在公开漏洞前先通知项目方并给予修复时间" },
                { en: "post-mortem", zh: "事后分析报告", usage: "对安全事件进行全面回顾和总结的报告" },
                { en: "patch", zh: "补丁/修复", usage: "修复软件漏洞的代码更新" }
            ],
            cultureTip: "在 Web3 安全领域，「负责任披露」是社区公认的最佳实践。白帽黑客通过漏洞赏金计划合法获取报酬，同时保护用户资产安全。",
            cultureTipEn: "In Web3 security, responsible disclosure is a recognized best practice. White-hat hackers earn rewards through bug bounty programs while protecting user assets."
        }
    ],
    "meeting": [
        {
            id: "mt-001",
            scene: "项目路演 / Pitch",
            sceneEn: "Project Pitch to Investors",
            category: "meeting",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Founder", en: "Thank you for taking the time today. I'd like to walk you through our decentralized lending protocol.", zh: "感谢您今天抽出时间。我想向您介绍我们的去中心化借贷协议。" },
                { speaker: "B", role: "Investor", en: "Sure, go ahead. What problem are you solving?", zh: "好的，请讲。你们在解决什么问题？" },
                { speaker: "A", role: "Founder", en: "Current DeFi lending platforms require over-collateralization, which limits capital efficiency. Our protocol introduces credit scoring on-chain, enabling under-collateralized loans.", zh: "目前的 DeFi 借贷平台要求超额抵押，这限制了资本效率。我们的协议引入了链上信用评分，实现不足额抵押贷款。" },
                { speaker: "B", role: "Investor", en: "Interesting. How do you handle default risk without full collateral?", zh: "有意思。没有完全抵押的情况下你们怎么处理违约风险？" },
                { speaker: "A", role: "Founder", en: "We use a combination of on-chain reputation data, a mutual insurance pool, and progressive liquidation. Our backtesting shows a default rate under 2%.", zh: "我们结合链上声誉数据、互助保险池和渐进式清算。我们的回测显示违约率低于 2%。" },
                { speaker: "B", role: "Investor", en: "What's your current traction? Any live metrics?", zh: "你们目前的进展怎么样？有实际数据吗？" },
                { speaker: "A", role: "Founder", en: "We launched on testnet three months ago. We have over 10,000 active users and $50 million in TVL on our beta. Mainnet launch is scheduled for Q2.", zh: "我们三个月前在测试网上线。Beta 版有超过 1 万活跃用户和 5000 万美元的 TVL。主网计划在第二季度上线。" }
            ],
            keyPhrases: [
                { en: "walk you through", zh: "向您介绍/带您了解", usage: "商务演讲中引导听众的常用说法" },
                { en: "over-collateralization", zh: "超额抵押", usage: "DeFi 借贷的核心概念" },
                { en: "TVL (Total Value Locked)", zh: "总锁仓量", usage: "衡量 DeFi 协议规模的关键指标" },
                { en: "traction", zh: "进展/吸引力", usage: "投资人常问的项目实际成果" }
            ],
            cultureTip: "在向投资人做 Pitch 时，清晰简洁最重要。先说要解决的问题，再讲解决方案，最后展示数据。避免过多技术细节，除非对方主动询问。",
            cultureTipEn: "When pitching to investors, clarity is key. Lead with the problem, then the solution, then metrics. Avoid excessive technical details unless asked."
        },
        {
            id: "mt-002",
            scene: "在加密货币线下聚会上自我介绍",
            sceneEn: "Introducing Yourself at a Crypto Meetup",
            category: "meeting",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Newcomer", en: "Hi there! I am new to the crypto space. My name is Kevin.", zh: "你好！我是加密货币领域的新人。我叫Kevin。" },
                { speaker: "B", role: "Organizer", en: "Welcome, Kevin! I am the organizer of this meetup. What brings you here today?", zh: "欢迎你，Kevin！我是这次聚会的组织者。是什么让你来参加今天的活动？" },
                { speaker: "A", role: "Newcomer", en: "I have been reading about Bitcoin and Ethereum, and I want to learn more from the community.", zh: "我一直在阅读关于比特币和以太坊的资料，想从社区中学到更多。" },
                { speaker: "B", role: "Organizer", en: "That is great! We have a beginner-friendly session starting in ten minutes. You should definitely join.", zh: "太好了！我们有一个适合初学者的环节，十分钟后开始。你一定要来参加。" },
                { speaker: "A", role: "Newcomer", en: "Sounds perfect. Is there a group chat I can join to stay connected?", zh: "听起来太好了。有没有我可以加入的群聊，方便保持联系？" },
                { speaker: "B", role: "Organizer", en: "Absolutely! Scan this QR code and you will be added to our Telegram group.", zh: "当然！扫描这个二维码，你就会被加入我们的Telegram群。" }
            ],
            keyPhrases: [
                { en: "new to the crypto space", zh: "加密货币领域的新人", usage: "用于表示自己刚进入某个领域" },
                { en: "What brings you here?", zh: "是什么让你来这里？", usage: "用于礼貌地询问对方参加活动的原因" },
                { en: "beginner-friendly session", zh: "适合初学者的环节", usage: "用于描述面向新手的活动或课程" },
                { en: "stay connected", zh: "保持联系", usage: "用于表示希望在活动后继续交流" }
            ],
            cultureTip: "在加密货币聚会上，主动自我介绍并表达学习意愿是很受欢迎的。大多数社区成员都乐意帮助新人。",
            cultureTipEn: "At crypto meetups, proactively introducing yourself and expressing a willingness to learn is well received. Most community members are happy to help newcomers."
        },
        {
            id: "mt-003",
            scene: "参加区块链工作坊",
            sceneEn: "Attending a Blockchain Workshop",
            category: "meeting",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Attendee", en: "Excuse me, is this the workshop on how to set up a crypto wallet?", zh: "请问，这是关于如何设置加密钱包的工作坊吗？" },
                { speaker: "B", role: "Instructor", en: "Yes, it is! Please take a seat. We will start in a few minutes.", zh: "是的！请找个位置坐下。我们几分钟后就开始。" },
                { speaker: "A", role: "Attendee", en: "Will we be using a real wallet or a test environment?", zh: "我们会使用真正的钱包还是测试环境？" },
                { speaker: "B", role: "Instructor", en: "We will use a testnet so you do not need to worry about losing any real funds.", zh: "我们会使用测试网，所以你不用担心损失任何真实资金。" },
                { speaker: "A", role: "Attendee", en: "That is reassuring. Do I need to download any software beforehand?", zh: "那就放心了。我需要提前下载什么软件吗？" },
                { speaker: "B", role: "Instructor", en: "Just make sure you have MetaMask installed on your browser. I will walk you through the rest.", zh: "只要确保你的浏览器安装了MetaMask就行。其他的我会一步步带你操作。" }
            ],
            keyPhrases: [
                { en: "set up a wallet", zh: "设置钱包", usage: "用于描述创建和配置加密货币钱包的过程" },
                { en: "testnet", zh: "测试网", usage: "用于指代区块链的测试网络，不涉及真实资金" },
                { en: "walk you through", zh: "一步步带你操作", usage: "用于表示详细指导某人完成一个流程" }
            ],
            cultureTip: "参加工作坊时，提前确认所需工具和软件是一个好习惯。这样可以确保活动期间不会因为技术问题而耽误时间。",
            cultureTipEn: "When attending a workshop, it is good practice to confirm the required tools and software in advance. This ensures you do not lose time to technical issues during the event."
        },
        {
            id: "mt-004",
            scene: "向演讲者提问",
            sceneEn: "Asking a Speaker a Question at a Conference",
            category: "meeting",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Audience", en: "Thank you for the presentation. I have a quick question about DeFi yields.", zh: "感谢您的演讲。我有一个关于DeFi收益的简短问题。" },
                { speaker: "B", role: "Speaker", en: "Of course! Go ahead and ask.", zh: "当然！请说。" },
                { speaker: "A", role: "Audience", en: "How do you evaluate whether a yield farming opportunity is sustainable or just a short-term incentive?", zh: "您如何评估一个收益耕作机会是可持续的，还是只是短期激励？" },
                { speaker: "B", role: "Speaker", en: "Great question. I always look at the protocol revenue first. If the yield comes from real fees, it is more likely to last.", zh: "很好的问题。我总是先看协议收入。如果收益来自真实手续费，那它更有可能持续。" },
                { speaker: "A", role: "Audience", en: "That makes a lot of sense. Could you recommend any tools for tracking protocol revenue?", zh: "很有道理。您能推荐一些追踪协议收入的工具吗？" },
                { speaker: "B", role: "Speaker", en: "Sure. Token Terminal and DeFi Llama are both excellent resources for that kind of data.", zh: "当然。Token Terminal和DeFi Llama都是获取这类数据的优秀资源。" }
            ],
            keyPhrases: [
                { en: "yield farming", zh: "收益耕作", usage: "用于指代通过提供流动性来赚取加密货币收益的策略" },
                { en: "protocol revenue", zh: "协议收入", usage: "用于指代去中心化协议产生的实际收入" },
                { en: "short-term incentive", zh: "短期激励", usage: "用于描述为吸引用户而提供的临时性奖励" },
                { en: "That makes a lot of sense", zh: "很有道理", usage: "用于表示对对方观点的认同和理解" }
            ],
            cultureTip: "在会议上提问时，先感谢演讲者并简要说明你的问题方向，这样会显得更专业、更有礼貌。",
            cultureTipEn: "When asking questions at a conference, thanking the speaker first and briefly framing your question shows professionalism and courtesy."
        },
        {
            id: "mt-005",
            scene: "在会议上建立人脉",
            sceneEn: "Networking at a Conference",
            category: "meeting",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Developer", en: "Hey, I really enjoyed your talk on Layer 2 solutions. I am a smart contract developer at a DeFi startup.", zh: "嘿，我非常喜欢你关于Layer 2解决方案的演讲。我是一家DeFi初创公司的智能合约开发者。" },
                { speaker: "B", role: "Researcher", en: "Thanks! That means a lot. What chain are you building on?", zh: "谢谢！这对我来说意义很大。你们在哪条链上开发？" },
                { speaker: "A", role: "Developer", en: "We are currently on Ethereum, but we are exploring Arbitrum for lower gas fees.", zh: "我们目前在以太坊上，但正在探索Arbitrum以降低Gas费用。" },
                { speaker: "B", role: "Researcher", en: "That is a smart move. I have done a lot of research on rollup economics. Maybe we could collaborate.", zh: "那是个明智的选择。我对Rollup经济学做了很多研究。也许我们可以合作。" },
                { speaker: "A", role: "Developer", en: "I would love that. Let me share my contact info with you.", zh: "那太好了。让我和你分享一下我的联系方式。" }
            ],
            keyPhrases: [
                { en: "Layer 2 solutions", zh: "Layer 2解决方案", usage: "用于指代建立在主链之上的扩容技术" },
                { en: "gas fees", zh: "Gas费用", usage: "用于指代在区块链上执行交易所需支付的费用" },
                { en: "collaborate", zh: "合作", usage: "用于表达与他人共同工作或研究的意愿" }
            ],
            cultureTip: "会议上的社交互动是建立长期职业关系的重要途径。在交流时提到具体的共同兴趣点，能让对话更有针对性。",
            cultureTipEn: "Networking at conferences is a key way to build long-term professional relationships. Mentioning specific shared interests makes the conversation more focused and memorable."
        },
        {
            id: "mt-006",
            scene: "加入线上研讨会",
            sceneEn: "Joining an Online Webinar",
            category: "meeting",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Participant", en: "Hi, I just joined the webinar. Can everyone hear me okay?", zh: "你好，我刚加入研讨会。大家能听到我说话吗？" },
                { speaker: "B", role: "Host", en: "Yes, we can hear you clearly. Welcome! Please keep your mic muted when you are not speaking.", zh: "是的，我们能清楚地听到你。欢迎！请在不发言时保持麦克风静音。" },
                { speaker: "A", role: "Participant", en: "Got it. Will there be a recording available after the session?", zh: "明白了。会议结束后会有录像可以观看吗？" },
                { speaker: "B", role: "Host", en: "Yes, we will share the recording and the slide deck in the follow-up email.", zh: "是的，我们会在后续的邮件中分享录像和演示文稿。" },
                { speaker: "A", role: "Participant", en: "Perfect. I also have a question about the agenda. Will there be a Q and A segment?", zh: "太好了。我还有一个关于议程的问题。会有问答环节吗？" },
                { speaker: "B", role: "Host", en: "Absolutely. We have reserved the last fifteen minutes for open Q and A.", zh: "当然。我们为开放式问答保留了最后十五分钟。" }
            ],
            keyPhrases: [
                { en: "keep your mic muted", zh: "保持麦克风静音", usage: "用于提醒参会者在不发言时关闭麦克风" },
                { en: "slide deck", zh: "演示文稿", usage: "用于指代演讲或报告中使用的幻灯片文件" },
                { en: "Q and A segment", zh: "问答环节", usage: "用于指代会议中专门用于提问和回答的时间段" },
                { en: "follow-up email", zh: "后续邮件", usage: "用于指代会议结束后发送的包含相关资料的邮件" }
            ],
            cultureTip: "参加线上会议时，提前测试音频和视频设备是基本礼仪。及时静音也能避免背景噪音干扰其他参会者。",
            cultureTipEn: "When joining an online meeting, testing your audio and video equipment in advance is basic etiquette. Muting promptly also prevents background noise from disturbing other participants."
        },
        {
            id: "mt-007",
            scene: "向团队汇报项目进展",
            sceneEn: "Presenting Project Updates to the Team",
            category: "meeting",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "ProjectLead", en: "Alright team, let me walk you through the progress this week on the DEX aggregator.", zh: "好的团队，让我带大家看看这周DEX聚合器的进展。" },
                { speaker: "B", role: "Engineer", en: "Before we start, I want to flag that we hit a blocker with the price oracle integration.", zh: "在我们开始之前，我想提醒一下，我们在价格预言机集成上遇到了阻碍。" },
                { speaker: "A", role: "ProjectLead", en: "Thanks for raising that. Can you elaborate on what the issue is?", zh: "感谢你提出这个问题。你能详细说明一下是什么问题吗？" },
                { speaker: "B", role: "Engineer", en: "The Chainlink feed we are using has a latency issue on Polygon. We are getting stale prices during high-traffic periods.", zh: "我们使用的Chainlink数据源在Polygon上有延迟问题。在高流量时段，我们获取到的是过时的价格。" },
                { speaker: "A", role: "ProjectLead", en: "That is a critical issue. Let us schedule a separate deep-dive session to explore alternative oracle solutions.", zh: "这是一个关键问题。让我们安排一个单独的深入讨论会来探索替代的预言机方案。" },
                { speaker: "B", role: "Engineer", en: "Agreed. I will prepare a comparison of Chainlink, Pyth, and API3 by tomorrow.", zh: "同意。我会在明天之前准备好Chainlink、Pyth和API3的对比分析。" }
            ],
            keyPhrases: [
                { en: "flag a blocker", zh: "提出阻碍性问题", usage: "用于在会议中正式提出阻碍项目进展的问题" },
                { en: "price oracle", zh: "价格预言机", usage: "用于指代为智能合约提供外部价格数据的服务" },
                { en: "stale prices", zh: "过时的价格", usage: "用于描述由于延迟而不再准确的价格数据" },
                { en: "deep-dive session", zh: "深入讨论会", usage: "用于指代针对特定话题进行详细分析的专题会议" }
            ],
            cultureTip: "在团队会议中，及时提出问题和风险比隐瞒更受重视。透明沟通是高效团队协作的基础。",
            cultureTipEn: "In team meetings, raising issues and risks promptly is valued more than concealing them. Transparent communication is the foundation of effective team collaboration."
        },
        {
            id: "mt-008",
            scene: "讨论路线图优先级",
            sceneEn: "Discussing Roadmap Priorities",
            category: "meeting",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "ProductManager", en: "We need to finalize the Q2 roadmap today. There are three major features on the table.", zh: "我们今天需要敲定第二季度的路线图。目前有三个主要功能需要讨论。" },
                { speaker: "B", role: "CTO", en: "I think cross-chain bridging should be our top priority. The community has been requesting it for months.", zh: "我认为跨链桥接应该是我们的首要优先级。社区已经请求这个功能好几个月了。" },
                { speaker: "A", role: "ProductManager", en: "I agree it is important, but our analytics show that the mobile wallet redesign could drive more user retention.", zh: "我同意它很重要，但我们的数据分析显示，移动钱包的重新设计可能会带来更多的用户留存。" },
                { speaker: "B", role: "CTO", en: "Fair point. What if we run both in parallel? We could assign the bridge to the backend team and the wallet redesign to the frontend team.", zh: "有道理。如果我们同时推进两个项目呢？我们可以让后端团队负责桥接，前端团队负责钱包重新设计。" },
                { speaker: "A", role: "ProductManager", en: "That could work, but we need to make sure we do not overextend our resources. Let me check the capacity plan.", zh: "那可以，但我们需要确保不会过度消耗资源。让我检查一下产能计划。" }
            ],
            keyPhrases: [
                { en: "finalize the roadmap", zh: "敲定路线图", usage: "用于表示完成产品发展计划的最终确认" },
                { en: "cross-chain bridging", zh: "跨链桥接", usage: "用于指代在不同区块链之间转移资产的技术" },
                { en: "user retention", zh: "用户留存", usage: "用于描述产品保持用户持续使用的能力" },
                { en: "overextend our resources", zh: "过度消耗资源", usage: "用于警示团队不要超出可用资源的限制" }
            ],
            cultureTip: "讨论优先级时，用数据支持你的观点比仅凭直觉更有说服力。在科技团队中，数据驱动的决策是标准做法。",
            cultureTipEn: "When discussing priorities, supporting your arguments with data is more persuasive than relying on intuition alone. In tech teams, data-driven decision-making is standard practice."
        },
        {
            id: "mt-009",
            scene: "谈判合作伙伴关系",
            sceneEn: "Negotiating a Partnership",
            category: "meeting",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "BizDev", en: "We believe integrating your liquidity protocol into our platform would be mutually beneficial.", zh: "我们认为将你们的流动性协议集成到我们的平台将是互利共赢的。" },
                { speaker: "B", role: "PartnerRep", en: "We are open to the idea. What kind of integration are you proposing?", zh: "我们对此持开放态度。你们提议的是什么样的集成方式？" },
                { speaker: "A", role: "BizDev", en: "A full SDK integration with co-marketing efforts. We would feature your protocol in our app and share transaction volume data.", zh: "一个完整的SDK集成加上联合营销。我们会在应用中推荐你们的协议，并共享交易量数据。" },
                { speaker: "B", role: "PartnerRep", en: "That sounds promising. However, we would need to discuss revenue sharing terms. Our standard is a seventy-thirty split.", zh: "听起来很有前景。但是，我们需要讨论收入分成条款。我们的标准是七三分成。" },
                { speaker: "A", role: "BizDev", en: "We were thinking of a fifty-fifty split given the user base we are bringing to the table. Can we find a middle ground?", zh: "考虑到我们带来的用户基础，我们考虑的是五五分成。我们能否找到一个折中方案？" },
                { speaker: "B", role: "PartnerRep", en: "Let us start with a three-month pilot at sixty-forty in your favor, and then reassess based on the actual metrics.", zh: "让我们先以六四分成（有利于你们方）进行三个月的试点，然后根据实际数据重新评估。" }
            ],
            keyPhrases: [
                { en: "mutually beneficial", zh: "互利共赢的", usage: "用于强调合作对双方都有利" },
                { en: "revenue sharing", zh: "收入分成", usage: "用于指代合作双方按比例分配收入的安排" },
                { en: "find a middle ground", zh: "找到折中方案", usage: "用于表示寻求双方都能接受的妥协方案" },
                { en: "pilot program", zh: "试点项目", usage: "用于指代在全面推广之前进行的小规模测试合作" }
            ],
            cultureTip: "在商业谈判中，提出试点方案往往比直接要求长期承诺更容易被接受。这为双方提供了一个低风险的评估机会。",
            cultureTipEn: "In business negotiations, proposing a pilot program is often more acceptable than demanding a long-term commitment right away. It gives both sides a low-risk opportunity to evaluate the partnership."
        },
        {
            id: "mt-010",
            scene: "Web3产品的冲刺规划",
            sceneEn: "Sprint Planning for a Web3 Product",
            category: "meeting",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "ScrumMaster", en: "Let us kick off sprint planning for the next two weeks. We have eighteen story points carried over from last sprint.", zh: "让我们开始接下来两周的冲刺规划。上个冲刺有十八个故事点遗留下来。" },
                { speaker: "B", role: "Developer", en: "Most of those carry-over points are from the staking module. We underestimated the complexity of the reward calculation logic.", zh: "大部分遗留点数来自质押模块。我们低估了奖励计算逻辑的复杂性。" },
                { speaker: "A", role: "ScrumMaster", en: "Understood. Should we break that epic down into smaller tasks to improve our estimation accuracy?", zh: "明白了。我们是否应该把那个史诗任务拆分成更小的任务来提高估算准确性？" },
                { speaker: "B", role: "Developer", en: "Definitely. I suggest we separate the on-chain reward distribution from the off-chain analytics dashboard.", zh: "当然。我建议我们把链上奖励分配和链下数据分析面板分开。" },
                { speaker: "A", role: "ScrumMaster", en: "Good call. Let us also add a spike for researching gas optimization on the reward claim function.", zh: "好主意。让我们也加一个技术调研任务，研究奖励领取功能的Gas优化。" }
            ],
            keyPhrases: [
                { en: "story points", zh: "故事点", usage: "用于敏捷开发中衡量任务复杂度的单位" },
                { en: "carry-over", zh: "遗留", usage: "用于指代上一个冲刺未完成而顺延到当前冲刺的任务" },
                { en: "break down an epic", zh: "拆分史诗任务", usage: "用于将大型功能需求分解为更小的可管理任务" },
                { en: "spike", zh: "技术调研任务", usage: "用于指代专门用于研究和探索技术方案的任务" }
            ],
            cultureTip: "在敏捷开发中，诚实地评估上一个冲刺的问题是改进的关键。承认低估了任务复杂性不是失败，而是团队学习的一部分。",
            cultureTipEn: "In agile development, honestly evaluating issues from the previous sprint is key to improvement. Admitting that task complexity was underestimated is not a failure but part of the team learning process."
        },
        {
            id: "mt-011",
            scene: "审查智能合约审计结果",
            sceneEn: "Reviewing Smart Contract Audit Results",
            category: "meeting",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "LeadDev", en: "The audit firm has submitted their final report. There are two critical findings and five medium-severity issues.", zh: "审计公司已经提交了最终报告。有两个严重发现和五个中等严重性的问题。" },
                { speaker: "B", role: "SecurityEngineer", en: "What are the critical findings? We need to address those before the mainnet launch.", zh: "严重发现是什么？我们需要在主网上线之前解决这些问题。" },
                { speaker: "A", role: "LeadDev", en: "The first one is a reentrancy vulnerability in the withdrawal function. The second is an unchecked return value in the token transfer logic.", zh: "第一个是提款功能中的重入漏洞。第二个是代币转账逻辑中未检查的返回值。" },
                { speaker: "B", role: "SecurityEngineer", en: "The reentrancy fix is straightforward. We can implement the checks-effects-interactions pattern. The unchecked return value will require more careful refactoring.", zh: "重入漏洞的修复比较简单。我们可以实施检查-生效-交互模式。未检查的返回值则需要更仔细的重构。" },
                { speaker: "A", role: "LeadDev", en: "Agreed. Let us target a re-audit within two weeks. I will coordinate with the audit firm on their availability.", zh: "同意。让我们争取在两周内完成重新审计。我会和审计公司协调他们的时间。" },
                { speaker: "B", role: "SecurityEngineer", en: "I will also set up a bug bounty program on Immunefi as an additional layer of security.", zh: "我还会在Immunefi上建立一个漏洞赏金计划，作为额外的安全层。" }
            ],
            keyPhrases: [
                { en: "reentrancy vulnerability", zh: "重入漏洞", usage: "用于指代一种常见的智能合约安全漏洞" },
                { en: "checks-effects-interactions pattern", zh: "检查-生效-交互模式", usage: "用于描述防止重入攻击的标准编程模式" },
                { en: "re-audit", zh: "重新审计", usage: "用于指代在修复问题后再次进行的安全审查" },
                { en: "bug bounty program", zh: "漏洞赏金计划", usage: "用于指代奖励外部安全研究人员发现漏洞的项目" }
            ],
            cultureTip: "智能合约审计是Web3项目上线前的必要步骤。认真对待审计发现并及时修复是对用户资金安全负责的表现。",
            cultureTipEn: "Smart contract auditing is a necessary step before launching a Web3 project. Taking audit findings seriously and fixing them promptly demonstrates responsibility for user fund safety."
        },
        {
            id: "mt-012",
            scene: "加密基金董事会会议",
            sceneEn: "Board Meeting for a Crypto Fund",
            category: "meeting",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Chairman", en: "Let us begin with the quarterly performance review. Our fund returned twelve percent this quarter, outperforming the benchmark by three hundred basis points.", zh: "让我们从季度业绩回顾开始。我们的基金本季度回报率为百分之十二，超出基准三百个基点。" },
                { speaker: "B", role: "BoardMember", en: "Impressive results. However, I notice our exposure to mid-cap altcoins has increased significantly. What is the risk management rationale behind that?", zh: "令人印象深刻的成绩。不过，我注意到我们对中市值山寨币的敞口显著增加。背后的风险管理逻辑是什么？" },
                { speaker: "A", role: "Chairman", en: "Our thesis is that the upcoming Ethereum upgrade cycle will disproportionately benefit infrastructure tokens. We have strict stop-loss parameters in place.", zh: "我们的投资论点是，即将到来的以太坊升级周期将不成比例地惠及基础设施代币。我们已经设置了严格的止损参数。" },
                { speaker: "B", role: "BoardMember", en: "I would like to see a stress test scenario where ETH drops forty percent. How would our portfolio hold up under those conditions?", zh: "我想看一下ETH下跌百分之四十的压力测试场景。在这种条件下，我们的投资组合表现如何？" },
                { speaker: "A", role: "Chairman", en: "We ran that simulation last week. The maximum drawdown would be approximately twenty-two percent, which is within our risk tolerance framework.", zh: "我们上周运行了那个模拟。最大回撤大约为百分之二十二，在我们的风险承受框架之内。" },
                { speaker: "B", role: "BoardMember", en: "Good. I also recommend we increase our allocation to stablecoin yield strategies as a hedge against further macro uncertainty.", zh: "很好。我还建议我们增加对稳定币收益策略的配置，以对冲进一步的宏观不确定性。" }
            ],
            keyPhrases: [
                { en: "basis points", zh: "基点", usage: "金融术语，一个基点等于百分之零点零一，用于精确描述收益率差异" },
                { en: "stress test scenario", zh: "压力测试场景", usage: "用于模拟极端市场条件下投资组合的表现" },
                { en: "maximum drawdown", zh: "最大回撤", usage: "用于衡量投资组合从峰值到谷值的最大损失幅度" },
                { en: "risk tolerance framework", zh: "风险承受框架", usage: "用于指代组织预先设定的可接受风险水平的标准体系" }
            ],
            cultureTip: "在董事会会议上，用量化数据回应质疑比定性描述更有说服力。投资委员会成员期望看到具体的数字和模拟结果。",
            cultureTipEn: "At board meetings, responding to challenges with quantitative data is more persuasive than qualitative descriptions. Investment committee members expect to see specific numbers and simulation results."
        },
        {
            id: "mt-013",
            scene: "风险投资尽职调查会议",
            sceneEn: "VC Due Diligence Session",
            category: "meeting",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "VCPartner", en: "We have reviewed your pitch deck and on-chain metrics. Your TVL growth is impressive, but we need to understand your moat. What prevents a fork from replicating your protocol?", zh: "我们已经审查了你们的融资演示文稿和链上指标。你们的TVL增长令人印象深刻，但我们需要了解你们的护城河。是什么阻止分叉复制你们的协议？" },
                { speaker: "B", role: "Founder", en: "Our competitive advantage lies in three areas: proprietary MEV protection algorithms, exclusive partnerships with top market makers, and a network effect with over two hundred thousand active wallets.", zh: "我们的竞争优势在三个方面：专有的MEV保护算法、与顶级做市商的独家合作伙伴关系，以及超过二十万活跃钱包的网络效应。" },
                { speaker: "A", role: "VCPartner", en: "Walk me through your token economics. How do you prevent sell pressure after the cliff period ends for early investors?", zh: "请详细介绍你们的代币经济学。在早期投资者的锁定期结束后，你们如何防止抛售压力？" },
                { speaker: "B", role: "Founder", en: "We have implemented a graduated vesting schedule with staking incentives. Early investors who stake their unlocked tokens receive boosted governance rights and fee-sharing rewards.", zh: "我们实施了分阶段归属计划并配合质押激励。锁定期后选择质押的早期投资者将获得增强的治理权和手续费分成奖励。" },
                { speaker: "A", role: "VCPartner", en: "What is your burn rate, and how long does your current runway last without additional funding?", zh: "你们的资金消耗率是多少？在没有额外融资的情况下，目前的资金能维持多久？" },
                { speaker: "B", role: "Founder", en: "Our monthly burn is approximately three hundred and fifty thousand dollars. With our current treasury, we have a runway of twenty-four months. Additionally, protocol fees are now covering about forty percent of operational costs.", zh: "我们每月的消耗大约为三十五万美元。以目前的资金储备，我们有二十四个月的运营跑道。此外，协议费用现在已覆盖约百分之四十的运营成本。" }
            ],
            keyPhrases: [
                { en: "competitive moat", zh: "竞争护城河", usage: "用于描述使项目难以被竞争者复制的独特优势" },
                { en: "graduated vesting schedule", zh: "分阶段归属计划", usage: "用于指代代币按时间逐步解锁的安排" },
                { en: "burn rate", zh: "资金消耗率", usage: "用于衡量公司每月花费的运营资金量" },
                { en: "runway", zh: "运营跑道", usage: "用于指代在不获得新融资的情况下公司能维持运营的时间" }
            ],
            cultureTip: "在VC尽职调查中，透明坦诚地回答问题比过度包装更能赢得投资人的信任。投资人对风险有充分的认知，他们更看重创始人的诚信和应对挑战的能力。",
            cultureTipEn: "In VC due diligence sessions, answering questions with transparency and honesty earns more investor trust than over-polishing. Investors are well aware of risks and value founder integrity and the ability to handle challenges."
        },
        {
            id: "mt-014",
            scene: "跨链互操作性讨论",
            sceneEn: "Cross-Chain Interoperability Discussion",
            category: "meeting",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "ProtocolArchitect", en: "Our current bridging solution relies on a trusted multisig, which is a single point of failure. We need to move toward a trustless architecture.", zh: "我们目前的桥接解决方案依赖于一个受信任的多签，这是单点故障。我们需要转向无信任架构。" },
                { speaker: "B", role: "ResearchLead", en: "I have been evaluating three approaches: optimistic verification with fraud proofs, ZK-based validity proofs, and a hybrid model using light client verification.", zh: "我一直在评估三种方案：基于欺诈证明的乐观验证、基于ZK的有效性证明，以及使用轻客户端验证的混合模型。" },
                { speaker: "A", role: "ProtocolArchitect", en: "ZK proofs offer the strongest security guarantees, but the proving time and computational overhead are still significant. What are the latest benchmarks?", zh: "ZK证明提供最强的安全保证，但证明时间和计算开销仍然很大。最新的基准测试数据是什么？" },
                { speaker: "B", role: "ResearchLead", en: "With recursive proof composition, we can now generate a cross-chain state proof in under ninety seconds. The on-chain verification cost is approximately three hundred thousand gas on Ethereum.", zh: "通过递归证明组合，我们现在可以在九十秒内生成跨链状态证明。以太坊上的链上验证成本大约为三十万Gas。" },
                { speaker: "A", role: "ProtocolArchitect", en: "That is a viable trade-off for high-value transfers. Could we implement a tiered system where small transfers use optimistic verification and large transfers require ZK proofs?", zh: "对于高价值转账来说，这是一个可行的权衡。我们能否实施一个分层系统，小额转账使用乐观验证，大额转账要求ZK证明？" },
                { speaker: "B", role: "ResearchLead", en: "That is an elegant solution. We could set the threshold dynamically based on network congestion and bridge TVL. I will draft an architecture proposal by next week.", zh: "那是一个优雅的解决方案。我们可以根据网络拥堵情况和桥接TVL动态设置阈值。我会在下周之前起草一份架构提案。" }
            ],
            keyPhrases: [
                { en: "single point of failure", zh: "单点故障", usage: "用于描述系统中一旦出问题就会导致整体故障的薄弱环节" },
                { en: "ZK validity proofs", zh: "ZK有效性证明", usage: "用于指代使用零知识证明技术来验证跨链交易正确性的方法" },
                { en: "recursive proof composition", zh: "递归证明组合", usage: "用于描述将多个证明合并为一个更紧凑证明的高级密码学技术" },
                { en: "tiered system", zh: "分层系统", usage: "用于指代根据不同条件应用不同处理方式的分级架构" }
            ],
            cultureTip: "在技术讨论中，提出折中方案往往比坚持单一方案更能推动共识。好的架构师善于在安全性、性能和成本之间找到平衡。",
            cultureTipEn: "In technical discussions, proposing a hybrid or compromise solution often drives consensus more effectively than insisting on a single approach. Good architects excel at balancing security, performance, and cost."
        },
        {
            id: "mt-015",
            scene: "监管策略会议",
            sceneEn: "Regulatory Strategy Meeting",
            category: "meeting",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "GeneralCounsel", en: "The SEC has issued new guidance on token classifications. We need to reassess whether our governance token could be deemed a security under the updated Howey Test framework.", zh: "SEC发布了关于代币分类的新指导意见。我们需要重新评估我们的治理代币是否会在更新的豪威测试框架下被认定为证券。" },
                { speaker: "B", role: "CEO", en: "What specific aspects of the new guidance are concerning for our token structure?", zh: "新指导意见中哪些具体方面对我们的代币结构构成关注？" },
                { speaker: "A", role: "GeneralCounsel", en: "The emphasis on whether token holders have a reasonable expectation of profit derived from the efforts of a centralized team. Given that our DAO is not fully decentralized yet, this is a gray area.", zh: "重点在于代币持有者是否有合理的利润预期，且该预期来源于中心化团队的努力。鉴于我们的DAO尚未完全去中心化，这是一个灰色地带。" },
                { speaker: "B", role: "CEO", en: "What steps can we take to mitigate this regulatory risk while maintaining operational efficiency?", zh: "我们可以采取哪些措施来降低这一监管风险，同时保持运营效率？" },
                { speaker: "A", role: "GeneralCounsel", en: "I recommend a progressive decentralization strategy. We should transfer more governance authority to token holders, establish an independent foundation, and reduce the control of the core team over protocol parameters.", zh: "我建议采取渐进式去中心化策略。我们应该将更多治理权移交给代币持有者，建立独立基金会，并减少核心团队对协议参数的控制。" },
                { speaker: "B", role: "CEO", en: "Let us also engage a specialized crypto regulatory firm to provide a formal legal opinion. We should be proactive rather than reactive on compliance.", zh: "让我们同时聘请一家专门的加密监管律所提供正式的法律意见。在合规方面，我们应该主动出击而不是被动应对。" }
            ],
            keyPhrases: [
                { en: "Howey Test", zh: "豪威测试", usage: "用于指代美国法律中判断某资产是否为证券的标准测试" },
                { en: "progressive decentralization", zh: "渐进式去中心化", usage: "用于描述逐步将控制权从核心团队转移到社区的策略" },
                { en: "regulatory risk", zh: "监管风险", usage: "用于指代因法规变化而可能对项目产生不利影响的风险" },
                { en: "proactive rather than reactive", zh: "主动出击而不是被动应对", usage: "用于强调提前采取措施应对潜在问题而不是等问题出现再处理" }
            ],
            cultureTip: "在加密货币行业，监管环境变化迅速。保持与专业律师的密切合作，并积极参与行业政策讨论，是降低法律风险的关键策略。",
            cultureTipEn: "In the crypto industry, the regulatory landscape changes rapidly. Maintaining close collaboration with specialized lawyers and actively participating in policy discussions are key strategies for reducing legal risk."
        },
        {
            id: "mt-016",
            scene: "协议漏洞事后分析",
            sceneEn: "Post-Mortem Analysis of a Protocol Exploit",
            category: "meeting",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "IncidentCommander", en: "This post-mortem covers the flash loan exploit that occurred forty-eight hours ago. Total funds drained were approximately four point two million dollars from the lending pool.", zh: "这次事后分析涵盖了四十八小时前发生的闪电贷攻击。从借贷池中被抽走的总资金约为四百二十万美元。" },
                { speaker: "B", role: "SecurityLead", en: "Our initial analysis shows the attacker exploited a price manipulation vulnerability in our oracle update mechanism. They used a flash loan to temporarily inflate the collateral value, borrowed against it, and then let the price revert.", zh: "我们的初步分析显示，攻击者利用了我们预言机更新机制中的价格操纵漏洞。他们使用闪电贷临时拉高抵押品价值，以此为依据借款，然后让价格回落。" },
                { speaker: "A", role: "IncidentCommander", en: "Why did our circuit breaker not trigger? We had safeguards in place for exactly this type of scenario.", zh: "为什么我们的熔断机制没有触发？我们针对这种场景设置了安全措施。" },
                { speaker: "B", role: "SecurityLead", en: "The circuit breaker threshold was set at a fifteen percent price deviation within a single block. The attacker spread the manipulation across three consecutive blocks, keeping each individual block under the threshold.", zh: "熔断阈值被设置为单个区块内百分之十五的价格偏差。攻击者将操纵分散在三个连续区块中，使每个单独区块都低于阈值。" },
                { speaker: "A", role: "IncidentCommander", en: "We need a comprehensive remediation plan. What are the immediate action items?", zh: "我们需要一个全面的修复计划。目前最紧迫的行动事项是什么？" },
                { speaker: "B", role: "SecurityLead", en: "Three priorities: first, implement a time-weighted average price oracle with multi-block validation. Second, add a global rate limiter on borrowing that triggers across rolling time windows. Third, establish a war room protocol so our response time for future incidents drops below thirty minutes.", zh: "三个优先事项：第一，实施带多区块验证的时间加权平均价格预言机。第二，增加一个基于滚动时间窗口触发的全局借贷速率限制器。第三，建立作战室协议，使我们对未来事件的响应时间降低到三十分钟以内。" }
            ],
            keyPhrases: [
                { en: "flash loan exploit", zh: "闪电贷攻击", usage: "用于指代利用无抵押即时贷款进行的攻击行为" },
                { en: "circuit breaker", zh: "熔断机制", usage: "用于指代在检测到异常活动时自动暂停协议的安全机制" },
                { en: "time-weighted average price", zh: "时间加权平均价格", usage: "用于指代基于一段时间内的价格平均值而非瞬时价格的定价方法" },
                { en: "war room protocol", zh: "作战室协议", usage: "用于指代在紧急事件中协调团队快速响应的标准操作流程" }
            ],
            cultureTip: "事后分析会议的目的是学习和改进，而不是追究责任。在安全事件中保持冷静、系统性地分析根本原因，是专业安全团队的标志。",
            cultureTipEn: "The purpose of a post-mortem meeting is to learn and improve, not to assign blame. Remaining calm and systematically analyzing root causes during security incidents is the hallmark of a professional security team."
        }
    ],
    "job": [
        {
            id: "jb-001",
            scene: "Web3 工作面试",
            sceneEn: "Web3 Job Interview",
            category: "job",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Interviewer", en: "Thanks for coming in. Can you tell me about your experience with smart contract development?", zh: "感谢你来面试。能介绍一下你的智能合约开发经验吗？" },
                { speaker: "B", role: "Candidate", en: "Absolutely. I've been writing Solidity for about two years. I contributed to three DeFi protocols and my most recent project was an NFT marketplace on Polygon.", zh: "当然。我写 Solidity 大约两年了。我参与过三个 DeFi 协议，最近的项目是 Polygon 上的 NFT 交易市场。" },
                { speaker: "A", role: "Interviewer", en: "Great. How do you approach security in your contracts? Have you dealt with any audits?", zh: "很好。你在合约安全方面是怎么做的？有过审计经验吗？" },
                { speaker: "B", role: "Candidate", en: "Security is my top priority. I follow the checks-effects-interactions pattern, use OpenZeppelin's audited libraries, and I've been through two formal audits with Trail of Bits.", zh: "安全是我的首要考虑。我遵循 checks-effects-interactions 模式，使用 OpenZeppelin 审计过的库，并且和 Trail of Bits 做过两次正式审计。" },
                { speaker: "A", role: "Interviewer", en: "Solid. One last question — why do you want to join our team specifically?", zh: "很扎实。最后一个问题——你为什么特别想加入我们团队？" },
                { speaker: "B", role: "Candidate", en: "I've been following your project since the whitepaper. Your approach to on-chain governance really resonates with me, and I want to be part of building something that gives users real ownership.", zh: "我从白皮书阶段就一直关注你们的项目。你们的链上治理方案真的很打动我，我想参与构建一个给用户真正所有权的产品。" }
            ],
            keyPhrases: [
                { en: "Can you tell me about...?", zh: "能介绍一下...吗？", usage: "面试中最常见的开场提问" },
                { en: "checks-effects-interactions pattern", zh: "检查-生效-交互模式", usage: "Solidity 安全编程的最佳实践" },
                { en: "formal audit", zh: "正式审计", usage: "由专业安全公司进行的代码审查" },
                { en: "resonates with me", zh: "与我产生共鸣", usage: "表达认同和热情的优雅说法" }
            ],
            cultureTip: "英语面试中，用具体的项目和数据来支撑你的回答比泛泛而谈更有说服力。'Show, don't tell'（展示而非空谈）是核心原则。",
            cultureTipEn: "In English interviews, backing your answers with specific projects and data is more persuasive than general claims. 'Show, don't tell' is the core principle."
        },
        {
            id: "jb-002",
            scene: "浏览Web3招聘网站",
            sceneEn: "Browsing Web3 Job Listings",
            category: "job",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Job Seeker", en: "I have been looking at Web3 job boards like CryptoJobsList. There are so many openings!", zh: "我一直在看CryptoJobsList这样的Web3招聘网站。有好多职位空缺！" },
                { speaker: "B", role: "Friend", en: "That is great. What kind of roles are you interested in?", zh: "太好了。你对什么类型的职位感兴趣？" },
                { speaker: "A", role: "Job Seeker", en: "I am looking for community manager or marketing roles. I do not have a coding background.", zh: "我在找社区经理或市场营销的职位。我没有编程背景。" },
                { speaker: "B", role: "Friend", en: "You do not need to be a developer. Many Web3 companies need people for business development and content creation too.", zh: "你不需要是开发者。很多Web3公司也需要商务拓展和内容创作方面的人才。" },
                { speaker: "A", role: "Job Seeker", en: "Good to know. Should I filter by remote positions only?", zh: "很高兴知道这些。我应该只筛选远程职位吗？" },
                { speaker: "B", role: "Friend", en: "Most Web3 jobs are remote-first, so you will have plenty of options.", zh: "大多数Web3工作都是远程优先的，所以你会有很多选择。" }
            ],
            keyPhrases: [
                { en: "job board", zh: "招聘网站", usage: "指专门发布工作机会的在线平台" },
                { en: "remote-first", zh: "远程优先", usage: "指公司默认以远程办公为主的工作模式" },
                { en: "business development", zh: "商务拓展", usage: "指负责公司业务增长和合作关系的岗位" }
            ],
            cultureTip: "Web3行业的招聘网站与传统招聘平台不同，CryptoJobsList、Web3.career等是专门面向区块链行业的招聘平台，求职者应关注这些垂直渠道。",
            cultureTipEn: "Web3 job boards differ from traditional platforms. Sites like CryptoJobsList and Web3.career are specialized for blockchain roles, and job seekers should focus on these vertical channels."
        },
        {
            id: "jb-003",
            scene: "撰写加密货币行业简历",
            sceneEn: "Writing a Crypto Resume",
            category: "job",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Job Seeker", en: "I need help updating my resume for crypto jobs. What should I highlight?", zh: "我需要帮忙更新我的加密行业简历。我应该突出什么？" },
                { speaker: "B", role: "Career Advisor", en: "First, list any blockchain-related projects you have worked on, even personal ones.", zh: "首先，列出你参与过的任何区块链相关项目，即使是个人项目也可以。" },
                { speaker: "A", role: "Job Seeker", en: "I contributed to a DeFi protocol and wrote some Solidity smart contracts.", zh: "我为一个DeFi协议做过贡献，还写过一些Solidity智能合约。" },
                { speaker: "B", role: "Career Advisor", en: "Perfect. Include your GitHub profile and any on-chain contributions. Employers in crypto value open-source work.", zh: "很好。附上你的GitHub主页和任何链上贡献。加密行业的雇主很看重开源工作。" },
                { speaker: "A", role: "Job Seeker", en: "Should I mention my traditional finance experience too?", zh: "我也应该提到我的传统金融经验吗？" },
                { speaker: "B", role: "Career Advisor", en: "Absolutely. Traditional finance experience is a big plus in DeFi. It shows you understand both worlds.", zh: "当然。传统金融经验在DeFi领域是一大加分项。这说明你了解两个世界。" }
            ],
            keyPhrases: [
                { en: "on-chain contributions", zh: "链上贡献", usage: "指在区块链上可验证的工作成果，如部署合约、治理投票等" },
                { en: "open-source work", zh: "开源工作", usage: "指公开代码库的协作开发，在Web3中尤为重要" },
                { en: "DeFi protocol", zh: "DeFi协议", usage: "指去中心化金融协议，如借贷、交易等平台" },
                { en: "smart contracts", zh: "智能合约", usage: "指部署在区块链上自动执行的程序代码" }
            ],
            cultureTip: "在加密行业，简历中的GitHub活跃度和链上贡献记录往往比传统学历更有说服力。雇主更关注你实际做过什么，而非你的学校背景。",
            cultureTipEn: "In the crypto industry, GitHub activity and on-chain contribution records are often more persuasive than traditional degrees. Employers care more about what you have actually built than your academic background."
        },
        {
            id: "jb-004",
            scene: "询问远程工作政策",
            sceneEn: "Asking About Remote Work Policy",
            category: "job",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Candidate", en: "I would like to learn more about your remote work policy. Is the team fully distributed?", zh: "我想了解更多关于你们远程工作政策的信息。团队是完全分布式的吗？" },
                { speaker: "B", role: "HR Manager", en: "Yes, we are a fully remote company with team members across 15 countries.", zh: "是的，我们是一家完全远程的公司，团队成员分布在15个国家。" },
                { speaker: "A", role: "Candidate", en: "How do you handle time zone differences for meetings?", zh: "你们如何处理会议的时区差异？" },
                { speaker: "B", role: "HR Manager", en: "We have a few overlapping hours for sync meetings, but most communication is asynchronous through Discord and Notion.", zh: "我们有几个重叠的工作时间用于同步会议，但大部分沟通是通过Discord和Notion异步进行的。" },
                { speaker: "A", role: "Candidate", en: "That sounds flexible. Do you provide any home office equipment?", zh: "听起来很灵活。你们提供居家办公设备吗？" },
                { speaker: "B", role: "HR Manager", en: "We offer a one-time stipend for setting up your workspace and a monthly internet allowance.", zh: "我们提供一次性的办公环境搭建补贴和每月的网络津贴。" }
            ],
            keyPhrases: [
                { en: "fully distributed", zh: "完全分布式", usage: "指团队成员在不同地点远程工作，没有集中办公室" },
                { en: "asynchronous communication", zh: "异步沟通", usage: "指不要求实时回复的沟通方式，适合跨时区团队" },
                { en: "stipend", zh: "补贴/津贴", usage: "指公司为特定用途提供的额外资金支持" }
            ],
            cultureTip: "加密行业是远程办公的先驱之一。很多Web3公司甚至没有实体办公室，使用Discord作为主要沟通工具。异步工作文化在这个行业非常普遍。",
            cultureTipEn: "The crypto industry is a pioneer of remote work. Many Web3 companies do not even have physical offices and use Discord as their primary communication tool. Asynchronous work culture is very common in this industry."
        },
        {
            id: "jb-005",
            scene: "加密创业公司的第一天",
            sceneEn: "First Day at a Crypto Startup",
            category: "job",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "New Employee", en: "Hi, today is my first day. I am excited to join the team!", zh: "你好，今天是我的第一天。我很高兴加入团队！" },
                { speaker: "B", role: "Team Lead", en: "Welcome aboard! Let me walk you through our onboarding process. First, we will set up your wallet and Discord access.", zh: "欢迎加入！让我带你了解我们的入职流程。首先，我们会帮你设置钱包和Discord权限。" },
                { speaker: "A", role: "New Employee", en: "Sounds good. I already have a MetaMask wallet. Should I use that one?", zh: "好的。我已经有一个MetaMask钱包了。我应该用那个吗？" },
                { speaker: "B", role: "Team Lead", en: "We recommend creating a separate work wallet for security purposes. Never mix personal and work wallets.", zh: "出于安全考虑，我们建议创建一个单独的工作钱包。永远不要混用个人钱包和工作钱包。" },
                { speaker: "A", role: "New Employee", en: "Got it. What tools does the team use for project management?", zh: "明白了。团队使用什么项目管理工具？" },
                { speaker: "B", role: "Team Lead", en: "We use Linear for task tracking and GitHub for code reviews. You will get invites to everything by end of day.", zh: "我们使用Linear进行任务跟踪，GitHub进行代码审查。今天下班前你会收到所有邀请。" }
            ],
            keyPhrases: [
                { en: "onboarding process", zh: "入职流程", usage: "指新员工加入公司后的引导和培训过程" },
                { en: "work wallet", zh: "工作钱包", usage: "指专门用于工作相关交易的加密钱包，与个人钱包分开" },
                { en: "code reviews", zh: "代码审查", usage: "指团队成员互相检查代码质量的协作流程" }
            ],
            cultureTip: "在加密创业公司入职时，设置加密钱包是标准流程的一部分。保持工作钱包和个人钱包分开是重要的安全实践，也是行业标准。",
            cultureTipEn: "Setting up a crypto wallet is a standard part of onboarding at a crypto startup. Keeping work and personal wallets separate is an important security practice and an industry standard."
        },
        {
            id: "jb-006",
            scene: "了解加密货币薪酬和代币补偿",
            sceneEn: "Understanding Crypto Salary and Token Compensation",
            category: "job",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Candidate", en: "Can you explain the compensation structure? I see the offer mentions both salary and tokens.", zh: "你能解释一下薪酬结构吗？我看到录用通知上提到了工资和代币。" },
                { speaker: "B", role: "HR Manager", en: "Sure. You will receive a base salary in USD or stablecoin, plus a token allocation that vests over four years.", zh: "当然。你将获得以美元或稳定币支付的基本工资，加上四年归属期的代币分配。" },
                { speaker: "A", role: "Candidate", en: "What does token vesting mean exactly?", zh: "代币归属具体是什么意思？" },
                { speaker: "B", role: "HR Manager", en: "It means you earn your tokens gradually. There is usually a one-year cliff, then monthly vesting after that.", zh: "意思是你逐步获得代币。通常有一年的锁定期，之后按月归属。" },
                { speaker: "A", role: "Candidate", en: "Can I choose to receive more of my salary in tokens instead of fiat?", zh: "我可以选择更多地以代币而非法币形式领取工资吗？" },
                { speaker: "B", role: "HR Manager", en: "Yes, some team members opt for a higher token ratio. Just keep in mind that token value can be volatile.", zh: "可以，一些团队成员选择更高的代币比例。但请记住代币价值可能会波动。" }
            ],
            keyPhrases: [
                { en: "token vesting", zh: "代币归属", usage: "指代币按预定时间表逐步解锁发放的机制" },
                { en: "cliff period", zh: "锁定期", usage: "指在此期间内不会获得任何代币的初始等待期" },
                { en: "stablecoin", zh: "稳定币", usage: "指与法币挂钩、价格稳定的加密货币，如USDC" },
                { en: "volatile", zh: "波动的", usage: "形容价格变化剧烈、不稳定的市场状态" }
            ],
            cultureTip: "加密行业的薪酬通常由法币（或稳定币）基本工资和项目代币组成。代币部分可能带来高回报，但也有归零风险。求职者应充分了解代币经济学再做决定。",
            cultureTipEn: "Crypto compensation typically consists of fiat (or stablecoin) base salary and project tokens. The token portion may yield high returns but also carries the risk of going to zero. Job seekers should fully understand the tokenomics before deciding."
        },
        {
            id: "jb-007",
            scene: "区块链开发者技术面试",
            sceneEn: "Technical Interview for Blockchain Developer",
            category: "job",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Interviewer", en: "Can you explain the difference between delegatecall and a regular call in Solidity?", zh: "你能解释一下Solidity中delegatecall和普通call的区别吗？" },
                { speaker: "B", role: "Candidate", en: "Sure. With delegatecall, the code of the target contract is executed in the context of the calling contract. The storage, msg.sender, and msg.value all remain the same.", zh: "当然。使用delegatecall时，目标合约的代码在调用合约的上下文中执行。存储、msg.sender和msg.value都保持不变。" },
                { speaker: "A", role: "Interviewer", en: "Good. Now, what are the main security risks associated with delegatecall?", zh: "很好。那么，delegatecall的主要安全风险是什么？" },
                { speaker: "B", role: "Candidate", en: "The biggest risk is storage collision. If the storage layouts do not match between the proxy and implementation contracts, it can lead to critical bugs or exploits.", zh: "最大的风险是存储冲突。如果代理合约和实现合约之间的存储布局不匹配，可能导致严重的漏洞或被利用。" },
                { speaker: "A", role: "Interviewer", en: "Excellent. How would you design an upgradeable smart contract system?", zh: "非常好。你会如何设计一个可升级的智能合约系统？" },
                { speaker: "B", role: "Candidate", en: "I would use the transparent proxy pattern or UUPS. Both separate the logic from the storage, allowing the implementation to be swapped without losing state.", zh: "我会使用透明代理模式或UUPS模式。两者都将逻辑与存储分离，允许在不丢失状态的情况下替换实现。" }
            ],
            keyPhrases: [
                { en: "delegatecall", zh: "委托调用", usage: "Solidity中一种特殊的调用方式，在调用者的上下文中执行目标合约代码" },
                { en: "storage collision", zh: "存储冲突", usage: "指代理模式中存储布局不匹配导致的数据覆盖问题" },
                { en: "proxy pattern", zh: "代理模式", usage: "一种智能合约设计模式，通过代理合约实现合约可升级性" },
                { en: "upgradeable contract", zh: "可升级合约", usage: "指可以在不丢失状态的情况下更新逻辑的智能合约架构" }
            ],
            cultureTip: "区块链开发面试通常包含深入的技术问题，涉及智能合约安全、Gas优化和协议设计。面试官特别关注候选人对安全漏洞的理解，因为链上代码一旦部署就不可更改。",
            cultureTipEn: "Blockchain developer interviews typically include deep technical questions about smart contract security, gas optimization, and protocol design. Interviewers pay special attention to candidates understanding of security vulnerabilities, since on-chain code is immutable once deployed."
        },
        {
            id: "jb-008",
            scene: "协商股权和代币分配",
            sceneEn: "Negotiating Equity and Token Allocation",
            category: "job",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Candidate", en: "I would like to discuss the token allocation in more detail. The current offer is 0.5% of the total supply. Is there room for negotiation?", zh: "我想更详细地讨论代币分配。目前的报价是总供应量的0.5%。有协商空间吗？" },
                { speaker: "B", role: "CEO", en: "We can be flexible. What number did you have in mind?", zh: "我们可以灵活处理。你心目中的数字是多少？" },
                { speaker: "A", role: "Candidate", en: "Given my experience leading protocol development, I was hoping for closer to 1%. I would also like to understand the vesting schedule better.", zh: "考虑到我领导协议开发的经验，我希望能接近1%。我也想更好地了解归属时间表。" },
                { speaker: "B", role: "CEO", en: "We can offer 0.8% with a four-year vest and a one-year cliff. We also have performance-based token bonuses each quarter.", zh: "我们可以提供0.8%，四年归属期加一年锁定期。我们每季度还有基于绩效的代币奖金。" },
                { speaker: "A", role: "Candidate", en: "That sounds reasonable. What happens to unvested tokens if the project gets acquired?", zh: "听起来合理。如果项目被收购，未归属的代币会怎样？" },
                { speaker: "B", role: "CEO", en: "We have an acceleration clause. In the event of an acquisition, 50% of your unvested tokens vest immediately.", zh: "我们有加速条款。在被收购的情况下，你50%的未归属代币会立即归属。" }
            ],
            keyPhrases: [
                { en: "token allocation", zh: "代币分配", usage: "指分配给团队成员的项目代币数量占总供应量的百分比" },
                { en: "vesting schedule", zh: "归属时间表", usage: "指代币或股权逐步解锁的时间安排" },
                { en: "acceleration clause", zh: "加速条款", usage: "指在特定事件（如收购）发生时，加快代币归属的合同条款" },
                { en: "performance-based bonus", zh: "绩效奖金", usage: "指根据工作表现发放的额外奖励" }
            ],
            cultureTip: "在加密行业协商代币分配时，了解代币经济学非常重要。需要关注代币总供应量、解锁时间表、是否有回购条款以及收购时的加速归属条款。这些条件直接影响你的实际收入。",
            cultureTipEn: "When negotiating token allocation in crypto, understanding tokenomics is crucial. Pay attention to total token supply, unlock schedules, buyback clauses, and acceleration provisions during acquisitions. These terms directly impact your actual earnings."
        },
        {
            id: "jb-009",
            scene: "讨论DAO的工作文化",
            sceneEn: "Discussing Work Culture at a DAO",
            category: "job",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "New Contributor", en: "I am curious about how decisions are made here. Is there a traditional management hierarchy?", zh: "我很好奇这里是如何做决策的。有传统的管理层级结构吗？" },
                { speaker: "B", role: "DAO Core Member", en: "Not exactly. We operate as a DAO, so major decisions go through governance proposals and token holder votes.", zh: "不完全是。我们以DAO的形式运作，所以重大决策需要通过治理提案和代币持有者投票。" },
                { speaker: "A", role: "New Contributor", en: "How do contributors get compensated? Is there a fixed salary structure?", zh: "贡献者是如何获得报酬的？有固定的薪资结构吗？" },
                { speaker: "B", role: "DAO Core Member", en: "It depends on the workstream. Some contributors receive monthly grants, while others get paid per deliverable through bounty programs.", zh: "这取决于工作流。一些贡献者获得月度资助，而其他人通过赏金计划按交付成果获得报酬。" },
                { speaker: "A", role: "New Contributor", en: "That is very different from my previous corporate job. How do I get started?", zh: "这和我之前的企业工作很不一样。我该如何开始？" },
                { speaker: "B", role: "DAO Core Member", en: "Jump into our Discord, introduce yourself, and pick up some small bounties first. Reputation is everything in a DAO — you build trust through consistent contributions.", zh: "加入我们的Discord，做个自我介绍，先接一些小的赏金任务。在DAO中，声誉就是一切——你通过持续的贡献来建立信任。" }
            ],
            keyPhrases: [
                { en: "governance proposal", zh: "治理提案", usage: "指DAO中提交给代币持有者投票的决策方案" },
                { en: "bounty program", zh: "赏金计划", usage: "指为完成特定任务或项目提供奖励的机制" },
                { en: "workstream", zh: "工作流", usage: "指DAO中按功能或项目划分的工作组" },
                { en: "reputation", zh: "声誉", usage: "在DAO中指通过贡献积累的社区信任和影响力" }
            ],
            cultureTip: "DAO的工作方式与传统公司截然不同。没有老板，没有固定工时，贡献者的收入与交付成果直接挂钩。建立社区声誉是获得更多机会的关键，新人应从小任务开始逐步建立信任。",
            cultureTipEn: "Working in a DAO is fundamentally different from a traditional company. There is no boss, no fixed hours, and contributor income is directly tied to deliverables. Building community reputation is key to more opportunities — newcomers should start small and gradually build trust."
        },
        {
            id: "jb-010",
            scene: "自由职业智能合约开发",
            sceneEn: "Freelance Smart Contract Work",
            category: "job",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Project Owner", en: "We need a Solidity developer to build and audit a staking contract. Are you available for freelance work?", zh: "我们需要一个Solidity开发者来构建和审计一个质押合约。你有时间做自由职业项目吗？" },
                { speaker: "B", role: "Freelancer", en: "Yes, I am available. Can you share the specifications? I will need to understand the staking mechanism and reward distribution logic.", zh: "是的，我有时间。你能分享一下规格说明吗？我需要了解质押机制和奖励分配逻辑。" },
                { speaker: "A", role: "Project Owner", en: "Sure. We want users to stake our token and earn yield. The APY should be dynamically adjusted based on total staked amount.", zh: "当然。我们希望用户质押我们的代币并获得收益。年化收益率应根据总质押量动态调整。" },
                { speaker: "B", role: "Freelancer", en: "Understood. My rate is 200 USDC per hour, and I estimate this will take about three weeks. I will also include a comprehensive test suite.", zh: "明白了。我的费率是每小时200 USDC，我估计这大概需要三周时间。我还会包含一套全面的测试用例。" },
                { speaker: "A", role: "Project Owner", en: "Can we set up milestone-based payments through an escrow smart contract?", zh: "我们可以通过托管智能合约设置基于里程碑的付款吗？" },
                { speaker: "B", role: "Freelancer", en: "Absolutely. Using an escrow contract protects both of us. I will deliver the contract code, tests, and audit report at each milestone.", zh: "完全可以。使用托管合约对双方都有保护。我会在每个里程碑交付合约代码、测试和审计报告。" }
            ],
            keyPhrases: [
                { en: "staking contract", zh: "质押合约", usage: "指允许用户锁定代币以获得奖励的智能合约" },
                { en: "escrow smart contract", zh: "托管智能合约", usage: "指自动管理付款条件的合约，在满足条件后才释放资金" },
                { en: "milestone-based payments", zh: "基于里程碑的付款", usage: "指按项目进度节点分阶段付款的方式" }
            ],
            cultureTip: "在Web3自由职业中，使用托管智能合约进行付款越来越普遍。这种去信任化的支付方式保护了双方利益。同时，以稳定币（如USDC）计价可以避免加密货币价格波动带来的风险。",
            cultureTipEn: "Using escrow smart contracts for payments is increasingly common in Web3 freelancing. This trustless payment method protects both parties. Pricing in stablecoins like USDC also avoids risks from crypto price volatility."
        },
        {
            id: "jb-011",
            scene: "从Web2转型到Web3",
            sceneEn: "Transitioning from Web2 to Web3",
            category: "job",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Web2 Developer", en: "I have been a backend developer for eight years. I want to transition into Web3, but I am not sure where to start.", zh: "我做了八年后端开发。我想转型到Web3，但不确定从哪里开始。" },
                { speaker: "B", role: "Web3 Mentor", en: "Your backend experience is actually very valuable. Many Web3 projects need developers who understand system architecture and databases.", zh: "你的后端经验其实非常有价值。很多Web3项目需要懂系统架构和数据库的开发者。" },
                { speaker: "A", role: "Web2 Developer", en: "Should I start learning Solidity right away, or are there other paths?", zh: "我应该立刻开始学Solidity，还是有其他路径？" },
                { speaker: "B", role: "Web3 Mentor", en: "Solidity is one option, but you could also look into Rust for Solana development, or focus on building indexers and backend infrastructure.", zh: "Solidity是一个选项，但你也可以考虑学习Rust做Solana开发，或者专注于构建索引器和后端基础设施。" },
                { speaker: "A", role: "Web2 Developer", en: "What about the pay gap? Will I need to take a pay cut when switching?", zh: "薪资差距怎么样？转型时我需要降薪吗？" },
                { speaker: "B", role: "Web3 Mentor", en: "Not necessarily. Experienced Web2 developers are in high demand. Many companies will match or even exceed your current compensation, especially with token packages.", zh: "不一定。有经验的Web2开发者需求量很大。很多公司会匹配甚至超过你目前的薪酬，特别是加上代币包。" }
            ],
            keyPhrases: [
                { en: "transition", zh: "转型", usage: "指从一个职业领域转换到另一个领域的过程" },
                { en: "indexer", zh: "索引器", usage: "指用于查询和组织区块链数据的后端服务，如The Graph" },
                { en: "backend infrastructure", zh: "后端基础设施", usage: "指支撑应用运行的服务器端系统和服务" },
                { en: "token package", zh: "代币包", usage: "指作为薪酬组成部分的代币分配方案" }
            ],
            cultureTip: "从Web2到Web3的转型并不意味着一切从零开始。传统开发经验在Web3中非常抢手，特别是系统设计、安全性和可扩展性方面的知识。许多顶级Web3项目的核心团队都有丰富的Web2背景。",
            cultureTipEn: "Transitioning from Web2 to Web3 does not mean starting from scratch. Traditional development experience is highly sought after in Web3, especially knowledge of system design, security, and scalability. Many top Web3 projects have core teams with extensive Web2 backgrounds."
        },
        {
            id: "jb-012",
            scene: "DeFi协议CTO面试",
            sceneEn: "CTO Interview for a DeFi Protocol",
            category: "job",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Board Member", en: "As CTO, you would be responsible for a protocol managing over two billion dollars in total value locked. How would you approach security at that scale?", zh: "作为CTO，你将负责一个管理着超过20亿美元总锁仓量的协议。你会如何在这个规模上处理安全问题？" },
                { speaker: "B", role: "CTO Candidate", en: "Security would be my top priority. I would implement a multi-layered approach: formal verification of all critical contracts, continuous auditing with at least three independent firms, and a robust bug bounty program with tiered rewards.", zh: "安全将是我的首要任务。我会实施多层方法：对所有关键合约进行形式化验证，与至少三家独立公司持续审计，以及设立分级奖励的健全漏洞赏金计划。" },
                { speaker: "A", role: "Board Member", en: "We have experienced a governance attack before. How would you prevent that from happening again?", zh: "我们之前经历过一次治理攻击。你会如何防止这种情况再次发生？" },
                { speaker: "B", role: "CTO Candidate", en: "I would introduce time-locked governance with mandatory delay periods, implement vote escrow mechanisms to align long-term incentives, and establish a security council with emergency veto power for suspicious proposals.", zh: "我会引入带有强制延迟期的时间锁治理，实施投票托管机制以对齐长期激励，并建立一个对可疑提案拥有紧急否决权的安全委员会。" },
                { speaker: "A", role: "Board Member", en: "Impressive. What is your vision for scaling the protocol to handle ten times the current transaction volume?", zh: "很有见地。你对将协议扩展到处理当前十倍交易量有什么愿景？" },
                { speaker: "B", role: "CTO Candidate", en: "I would pursue a hybrid approach — deploying on multiple Layer 2 rollups for throughput while maintaining settlement on Ethereum mainnet for security. We should also explore intent-based architectures to optimize execution.", zh: "我会采用混合方法——在多个Layer 2 rollup上部署以提高吞吐量，同时在以太坊主网上保持结算以确保安全性。我们还应该探索基于意图的架构来优化执行。" }
            ],
            keyPhrases: [
                { en: "total value locked (TVL)", zh: "总锁仓量", usage: "指DeFi协议中锁定的所有资产的总价值，是衡量协议规模的关键指标" },
                { en: "formal verification", zh: "形式化验证", usage: "指用数学方法证明智能合约正确性的高级安全技术" },
                { en: "vote escrow", zh: "投票托管", usage: "指锁定代币以获得治理投票权的机制，激励长期参与" },
                { en: "Layer 2 rollup", zh: "二层扩展方案", usage: "指在以太坊主链之上运行的扩容解决方案，提高交易吞吐量" }
            ],
            cultureTip: "DeFi协议的CTO面试极其重视安全思维。管理数十亿美元资产的协议需要候选人具备应对黑客攻击、治理攻击和系统故障的实战经验。面试中展示对过去安全事件的深入了解非常重要。",
            cultureTipEn: "CTO interviews for DeFi protocols place extreme emphasis on security mindset. Protocols managing billions of dollars need candidates with hands-on experience dealing with hacks, governance attacks, and system failures. Demonstrating deep knowledge of past security incidents is crucial in interviews."
        },
        {
            id: "jb-013",
            scene: "领导分布式工程团队",
            sceneEn: "Leading a Distributed Engineering Team",
            category: "job",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "VP of Engineering", en: "Our engineering team has grown to 40 developers across 12 time zones. We are struggling with coordination. What changes would you recommend?", zh: "我们的工程团队已经增长到40名开发者，分布在12个时区。我们在协调方面遇到了困难。你有什么建议？" },
                { speaker: "B", role: "Engineering Manager", en: "First, I would restructure into autonomous squads of five to seven engineers, each owning a specific domain like smart contracts, frontend, or infrastructure.", zh: "首先，我会重组为五到七人的自治小组，每个小组负责一个特定领域，如智能合约、前端或基础设施。" },
                { speaker: "A", role: "VP of Engineering", en: "How do you maintain code quality and consistent standards across so many autonomous teams?", zh: "你如何在这么多自治团队中保持代码质量和一致的标准？" },
                { speaker: "B", role: "Engineering Manager", en: "I would establish a platform team that maintains shared tooling, CI/CD pipelines, and coding standards. We would also implement architecture decision records so every major choice is documented and searchable.", zh: "我会建立一个平台团队来维护共享工具、CI/CD流水线和编码标准。我们还会实施架构决策记录，让每个重大选择都有文档且可检索。" },
                { speaker: "A", role: "VP of Engineering", en: "What about preventing burnout? Some team members have been working around the clock because of the always-on nature of crypto.", zh: "如何防止倦怠？由于加密行业全天候运行的特性，一些团队成员一直在连轴转。" },
                { speaker: "B", role: "Engineering Manager", en: "That is critical. I would implement strict on-call rotations, mandate async-first communication to eliminate unnecessary meetings, and establish clear boundaries around response time expectations. No one should feel pressured to respond at 3 AM.", zh: "这非常关键。我会实施严格的轮值制度，强制推行异步优先的沟通方式以消除不必要的会议，并就响应时间的期望建立明确的边界。没有人应该感到凌晨三点必须回复的压力。" }
            ],
            keyPhrases: [
                { en: "autonomous squads", zh: "自治小组", usage: "指拥有独立决策权和明确职责范围的小型团队" },
                { en: "architecture decision records", zh: "架构决策记录", usage: "指记录重要技术决策及其理由的文档" },
                { en: "on-call rotation", zh: "轮值制度", usage: "指团队成员轮流负责紧急响应的排班制度" },
                { en: "async-first communication", zh: "异步优先沟通", usage: "指优先使用不要求即时回复的沟通方式，如文档和消息而非会议" }
            ],
            cultureTip: "加密行业7x24小时运转的特性使团队倦怠成为严峻问题。优秀的工程领导者会建立明确的边界和轮值制度，确保团队可持续发展。异步沟通文化和清晰的文档是分布式团队成功的基础。",
            cultureTipEn: "The 24/7 nature of the crypto industry makes team burnout a serious concern. Great engineering leaders establish clear boundaries and rotation schedules to ensure sustainable team health. Async communication culture and clear documentation are foundational to distributed team success."
        },
        {
            id: "jb-014",
            scene: "评估含代币归属条款的工作邀约",
            sceneEn: "Evaluating a Job Offer with Token Vesting",
            category: "job",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Senior Developer", en: "I received two offers. One pays 250K in stablecoins with 0.3% tokens. The other pays 180K but with 1.2% tokens and a shorter vesting period. How should I evaluate these?", zh: "我收到了两份工作邀约。一份付25万稳定币加0.3%代币。另一份付18万但有1.2%代币且归属期更短。我应该如何评估？" },
                { speaker: "B", role: "Crypto Career Advisor", en: "You need to look beyond the surface numbers. What are the fully diluted valuations of both projects? And critically, what percentage of tokens are allocated to the team versus investors and community?", zh: "你需要看到数字表面之下。两个项目的完全稀释估值是多少？更关键的是，分配给团队的代币比例与投资者和社区的比例是多少？" },
                { speaker: "A", role: "Senior Developer", en: "The first project has a 500 million FDV, and the second is at 80 million but growing fast. The second allocates 20% to the team.", zh: "第一个项目的完全稀释估值是5亿，第二个是8000万但增长很快。第二个项目分配了20%给团队。" },
                { speaker: "B", role: "Crypto Career Advisor", en: "At those valuations, your token package for the first offer is worth about 1.5 million, while the second is worth about 960K at current valuation. But if the second project reaches 500 million FDV, your tokens would be worth 6 million.", zh: "按这些估值，你第一份工作的代币包价值约150万美元，而第二份按当前估值约值96万美元。但如果第二个项目达到5亿的FDV，你的代币将价值600万美元。" },
                { speaker: "A", role: "Senior Developer", en: "What about the risk factor? The second project is much earlier stage.", zh: "风险因素呢？第二个项目处于更早期的阶段。" },
                { speaker: "B", role: "Crypto Career Advisor", en: "Exactly. You should apply a discount rate for early-stage risk. Also check the token unlock schedule for investors — if large investor unlocks happen before yours, it could significantly dilute the price before you can sell.", zh: "正是如此。你应该为早期风险设定一个折扣率。还要检查投资者的代币解锁时间表——如果大量投资者解锁发生在你之前，可能在你能出售之前就大幅稀释了价格。" }
            ],
            keyPhrases: [
                { en: "fully diluted valuation (FDV)", zh: "完全稀释估值", usage: "指假设所有代币流通时项目的总市值" },
                { en: "discount rate", zh: "折扣率", usage: "指评估未来收益时考虑风险因素所使用的折减比率" },
                { en: "token unlock schedule", zh: "代币解锁时间表", usage: "指不同持有者群体的代币释放时间安排" },
                { en: "dilution", zh: "稀释", usage: "指因新代币释放导致现有持有者份额价值降低" }
            ],
            cultureTip: "评估加密行业的工作邀约时，仅看代币百分比远远不够。必须结合项目估值、代币经济学、投资者解锁时间表和市场条件做全面评估。很多人因为只看百分比而做出错误的职业决策。建议咨询有经验的加密职业顾问。",
            cultureTipEn: "When evaluating crypto job offers, looking at token percentage alone is far from sufficient. You must consider project valuation, tokenomics, investor unlock schedules, and market conditions holistically. Many people make poor career decisions by focusing only on percentages. Consulting an experienced crypto career advisor is recommended."
        },
        {
            id: "jb-015",
            scene: "在加密行业建立个人品牌",
            sceneEn: "Building a Personal Brand in Crypto",
            category: "job",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Developer", en: "I have noticed that developers with strong personal brands get much better opportunities in crypto. How do I build mine?", zh: "我注意到在加密行业中，拥有强大个人品牌的开发者能获得更好的机会。我该如何建立我的个人品牌？" },
                { speaker: "B", role: "Crypto Influencer", en: "Start by sharing your technical insights publicly. Write deep-dive threads on X about protocol mechanisms, publish audit findings, or create educational content about smart contract patterns.", zh: "从公开分享你的技术见解开始。在X上写关于协议机制的深度分析帖子，发布审计发现，或创建关于智能合约模式的教育内容。" },
                { speaker: "A", role: "Developer", en: "I am a better coder than writer. Is there an alternative approach?", zh: "我的编码能力比写作强。有其他方法吗？" },
                { speaker: "B", role: "Crypto Influencer", en: "Absolutely. Ship open-source tools that solve real problems. Developers who build widely-used libraries or security tools become highly respected. Your code becomes your resume.", zh: "当然有。发布解决实际问题的开源工具。构建被广泛使用的库或安全工具的开发者会获得很高的声誉。你的代码就是你的简历。" },
                { speaker: "A", role: "Developer", en: "What about speaking at conferences? Does that still matter in Web3?", zh: "在会议上演讲呢？在Web3中这还重要吗？" },
                { speaker: "B", role: "Crypto Influencer", en: "Conference talks are incredibly valuable for establishing credibility. Events like ETHDenver and Devcon are where hiring managers and founders scout talent. One well-received talk can open doors that years of job applications cannot.", zh: "会议演讲对建立信誉非常有价值。像ETHDenver和Devcon这样的活动是招聘经理和创始人物色人才的地方。一场受好评的演讲可以打开多年求职申请都打不开的大门。" }
            ],
            keyPhrases: [
                { en: "personal brand", zh: "个人品牌", usage: "指通过持续输出建立的个人专业形象和行业影响力" },
                { en: "deep-dive thread", zh: "深度分析帖子", usage: "指在社交媒体上发布的详细技术分析系列帖文" },
                { en: "open-source tools", zh: "开源工具", usage: "指公开源代码供社区自由使用和改进的软件工具" },
                { en: "scout talent", zh: "物色人才", usage: "指主动寻找和发掘优秀候选人的行为" }
            ],
            cultureTip: "在加密行业，个人品牌建设比传统行业更为重要。由于行业去中心化和透明的特性，你的公开贡献（代码、文章、演讲）直接构成了你的职业声誉。很多顶级机会不会公开招聘，而是直接联系有影响力的开发者。",
            cultureTipEn: "Personal branding is more important in crypto than in traditional industries. Due to the decentralized and transparent nature of the industry, your public contributions — code, articles, talks — directly form your professional reputation. Many top opportunities are never posted publicly but go directly to influential developers."
        },
        {
            id: "jb-016",
            scene: "创办加密创业公司路演",
            sceneEn: "Founding a Crypto Startup Pitch",
            category: "job",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Founder", en: "We are building a decentralized derivatives protocol that enables permissionless trading of any real-world asset on-chain. Our testnet has processed over 50 million dollars in notional volume.", zh: "我们正在构建一个去中心化衍生品协议，可以实现任何现实世界资产的无许可链上交易。我们的测试网已经处理了超过5000万美元的名义交易量。" },
                { speaker: "B", role: "VC Partner", en: "Interesting. The RWA derivatives space is competitive. What is your moat compared to established protocols like GMX or dYdX?", zh: "很有意思。RWA衍生品领域竞争激烈。与GMX或dYdX等成熟协议相比，你们的护城河是什么？" },
                { speaker: "A", role: "Founder", en: "Our key differentiator is our novel oracle design. We aggregate data from multiple sources using a ZK-proof verification layer, which gives us sub-second price feeds without sacrificing decentralization.", zh: "我们的关键差异化在于新颖的预言机设计。我们使用ZK证明验证层聚合多个数据源，在不牺牲去中心化的情况下实现亚秒级价格馈送。" },
                { speaker: "B", role: "VC Partner", en: "What does your team look like? Building a derivatives protocol requires deep expertise in both finance and cryptography.", zh: "你的团队是什么样的？构建衍生品协议需要金融和密码学方面的深厚专业知识。" },
                { speaker: "A", role: "Founder", en: "We have eight engineers — three from traditional quant trading firms, two former security auditors, and three Rust and Solidity specialists. Our chief scientist previously led research at a major ZK rollup project.", zh: "我们有八名工程师——三位来自传统量化交易公司，两位前安全审计员，三位Rust和Solidity专家。我们的首席科学家之前在一个主要的ZK rollup项目领导研究工作。" },
                { speaker: "B", role: "VC Partner", en: "Strong team composition. What are you raising, and what milestones will this round fund?", zh: "团队组成很强。你们要融多少？这轮融资将支撑哪些里程碑？" }
            ],
            keyPhrases: [
                { en: "permissionless trading", zh: "无许可交易", usage: "指无需中介审批即可参与的去中心化交易" },
                { en: "moat", zh: "护城河", usage: "指使竞争对手难以复制的核心竞争优势" },
                { en: "ZK-proof verification", zh: "零知识证明验证", usage: "指使用零知识证明技术验证数据正确性而不泄露底层数据" },
                { en: "notional volume", zh: "名义交易量", usage: "指衍生品合约对应的标的资产的总价值" }
            ],
            cultureTip: "在加密创业公司的融资路演中，投资者最关注三点：团队的技术实力和行业经验、协议的技术差异化（护城河），以及可验证的链上数据（如测试网交易量）。与传统创业不同，加密项目的代码通常是开源的，所以技术创新必须真正有壁垒。",
            cultureTipEn: "In crypto startup fundraising pitches, investors focus on three things: the team's technical strength and industry experience, the protocol's technical differentiation (moat), and verifiable on-chain data such as testnet volume. Unlike traditional startups, crypto project code is usually open source, so technical innovation must have genuine barriers to entry."
        }
    ],
    "casual": [
        {
            id: "cs-001",
            scene: "给朋友解释什么是区块链",
            sceneEn: "Explaining Blockchain to a Friend",
            category: "casual",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Friend", en: "So you keep talking about crypto. What exactly is a blockchain?", zh: "你老是说 crypto。区块链到底是什么？" },
                { speaker: "B", role: "You", en: "Think of it as a shared notebook that everyone can read, but no one can erase. Every transaction gets recorded permanently.", zh: "你可以把它想象成一个共享笔记本，所有人都能看，但没人能擦除。每笔交易都会被永久记录。" },
                { speaker: "A", role: "Friend", en: "But who's in charge of this notebook?", zh: "但谁来管理这个笔记本呢？" },
                { speaker: "B", role: "You", en: "That's the cool part — nobody and everybody. Thousands of computers around the world keep identical copies. They all verify each other.", zh: "这就是最酷的地方——没有人管，又人人都管。全世界成千上万台电脑都保存着完全相同的副本，它们互相验证。" },
                { speaker: "A", role: "Friend", en: "That actually makes sense. But why should I care?", zh: "这确实说得通。但我为什么要关心这个？" },
                { speaker: "B", role: "You", en: "Imagine being able to send money to anyone in the world, instantly, without a bank taking a cut. Or truly owning digital items. That's what blockchain enables.", zh: "想象一下，你可以向世界上任何人即时转账，不用银行抽成。或者真正拥有数字物品。这就是区块链能实现的。" }
            ],
            keyPhrases: [
                { en: "Think of it as...", zh: "把它想象成...", usage: "用类比来解释复杂概念" },
                { en: "That's the cool part", zh: "这就是最酷的地方", usage: "口语中引出亮点" },
                { en: "taking a cut", zh: "抽成/收取费用", usage: "描述中间商收费的口语说法" },
                { en: "Why should I care?", zh: "这跟我有什么关系？", usage: "直接但常见的口语反问" }
            ],
            cultureTip: "向非技术背景的朋友解释 crypto 时，使用类比（analogy）比术语更有效。'Think of it as...' 和 'Imagine...' 是很好的开场方式。",
            cultureTipEn: "When explaining crypto to non-tech friends, analogies work better than jargon. 'Think of it as...' and 'Imagine...' are great openers."
        },
        {
            id: "cs-002",
            scene: "聊加密货币行情",
            sceneEn: "Chatting About Crypto Market",
            category: "casual",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "You", en: "Did you see Bitcoin's price action today? It broke through the $100K resistance level!", zh: "你看到今天比特币的价格走势了吗？突破了 10 万美元的阻力位！" },
                { speaker: "B", role: "Friend", en: "Yeah! I saw it pumping during lunch. My portfolio is up 15% this week. Finally back in the green!", zh: "看到了！午饭时看到它在涨。我的投资组合这周涨了 15%。终于回本了！" },
                { speaker: "A", role: "You", en: "Nice! Are you thinking of taking some profits, or are you holding long-term?", zh: "不错！你打算套点利润出来，还是长期持有？" },
                { speaker: "B", role: "Friend", en: "Honestly, I learned my lesson last bull run. I'm going to DCA out — sell a little bit each week. No more getting greedy.", zh: "说实话，上一轮牛市我学到了教训。我打算分批卖出——每周卖一点。不再贪了。" },
                { speaker: "A", role: "You", en: "Smart move. 'Be fearful when others are greedy.' Buffett was right about that one.", zh: "明智之举。'在别人贪婪时恐惧。'巴菲特说这话是对的。" },
                { speaker: "B", role: "Friend", en: "Exactly. WAGMI, but only if we manage risk properly.", zh: "没错。我们都会成功的，但前提是正确管理风险。" }
            ],
            keyPhrases: [
                { en: "price action", zh: "价格走势", usage: "描述价格变动的技术分析术语" },
                { en: "resistance level", zh: "阻力位", usage: "技术分析中的价格关卡" },
                { en: "back in the green", zh: "回本/转盈", usage: "从亏损转为盈利" },
                { en: "DCA out (Dollar-Cost Average out)", zh: "分批卖出", usage: "分散风险的退出策略" },
                { en: "taking profits", zh: "止盈/套利", usage: "卖出部分持仓锁定收益" }
            ],
            cultureTip: "和朋友聊行情时英语很随意。'Pumping'（暴涨）、'back in the green'（回本）、'WAGMI'（我们都会成功）都是 crypto 圈高频口语。",
            cultureTipEn: "Chatting about markets with friends is very casual. 'Pumping', 'back in the green', 'WAGMI' are high-frequency crypto slang."
        },
        {
            id: "cs-003",
            scene: "在家向父母解释比特币",
            sceneEn: "Explaining Bitcoin to Parents at Home",
            category: "casual",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Son", en: "Mom, Dad, have you ever heard of Bitcoin?", zh: "妈，爸，你们听说过比特币吗？" },
                { speaker: "B", role: "Mom", en: "Is that the internet money? I saw it on the news.", zh: "是那个网络货币吗？我在新闻上看到过。" },
                { speaker: "A", role: "Son", en: "Yeah, it is like digital gold. No bank or government controls it.", zh: "对，它就像数字黄金。没有银行或政府控制它。" },
                { speaker: "B", role: "Mom", en: "But if nobody controls it, is it safe?", zh: "但如果没人控制它，安全吗？" },
                { speaker: "A", role: "Son", en: "It runs on a technology called blockchain. Every transaction is recorded and cannot be changed.", zh: "它运行在一种叫区块链的技术上。每笔交易都被记录下来，无法更改。" },
                { speaker: "B", role: "Mom", en: "That sounds interesting. But please do not put all your savings into it!", zh: "听起来挺有意思的。但是你千万别把所有积蓄都投进去！" }
            ],
            keyPhrases: [
                { en: "digital gold", zh: "数字黄金「, usage: 」比喻比特币像黄金一样具有保值功能", usage: undefined },
                { en: "blockchain", zh: "区块链「, usage: 」比特币底层的分布式账本技术", usage: undefined },
                { en: "no bank or government controls it", zh: "没有银行或政府控制它「, usage: 」解释去中心化的概念", usage: undefined }
            ],
            cultureTip: "在向长辈解释加密货币时，用他们熟悉的概念做类比（如「数字黄金」）更容易被理解和接受。",
            cultureTipEn: "When explaining crypto to older family members, using familiar analogies like 'digital gold' makes the concept much easier to understand and accept."
        },
        {
            id: "cs-004",
            scene: "教朋友如何购买加密货币",
            sceneEn: "Showing a Friend How to Buy Crypto",
            category: "casual",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Friend", en: "I want to buy some crypto. Where do I even start?", zh: "我想买一些加密货币。我该从哪里开始呢？" },
                { speaker: "B", role: "You", en: "First, you need to download an exchange app like Coinbase or Binance.", zh: "首先，你需要下载一个交易所应用，比如Coinbase或者币安。" },
                { speaker: "A", role: "Friend", en: "Okay, then what? Do I just use my credit card?", zh: "好的，然后呢？我直接用信用卡吗？" },
                { speaker: "B", role: "You", en: "You can, but I recommend linking your bank account. The fees are lower that way.", zh: "可以，但我建议你绑定银行账户。那样手续费更低。" },
                { speaker: "A", role: "Friend", en: "How much should I buy for my first time?", zh: "第一次买的话，应该买多少？" },
                { speaker: "B", role: "You", en: "Start small. Only invest what you can afford to lose. Maybe fifty to a hundred dollars.", zh: "从小额开始。只投资你能承受得起损失的金额。大概五十到一百美元吧。" }
            ],
            keyPhrases: [
                { en: "exchange app", zh: "交易所应用「, usage: 」指用于买卖加密货币的平台应用程序", usage: undefined },
                { en: "link your bank account", zh: "绑定银行账户「, usage: 」将银行账户连接到交易平台以便充值", usage: undefined },
                { en: "fees", zh: "手续费「, usage: 」交易时平台收取的服务费用", usage: undefined },
                { en: "only invest what you can afford to lose", zh: "只投资你能承受得起损失的金额「, usage: 」加密圈中常见的投资建议", usage: undefined }
            ],
            cultureTip: "在加密社区中，「Only invest what you can afford to lose」 是最常见的新手建议，体现了社区对风险管理的重视。",
            cultureTipEn: "In the crypto community, 'Only invest what you can afford to lose' is the most common advice for newcomers, reflecting the community's emphasis on risk management."
        },
        {
            id: "cs-005",
            scene: "晚餐时讨论加密货币新闻",
            sceneEn: "Discussing Crypto News at Dinner",
            category: "casual",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Brother", en: "Did you see the news? Bitcoin just hit a new all-time high!", zh: "你看新闻了吗？比特币刚刚创了历史新高！" },
                { speaker: "B", role: "Sister", en: "Really? I thought it crashed last month. How does it go up so fast?", zh: "真的吗？我以为它上个月暴跌了。怎么涨这么快？" },
                { speaker: "A", role: "Brother", en: "That is how crypto works. It is very volatile. Big drops, big recoveries.", zh: "加密货币就是这样的。波动非常大。大跌之后大涨。" },
                { speaker: "B", role: "Sister", en: "Sounds stressful. Do you check the price every day?", zh: "听起来压力好大。你每天都看价格吗？" },
                { speaker: "A", role: "Brother", en: "I used to, but now I just hold and try not to look too often.", zh: "我以前会，但现在我就拿着不动，尽量不去看。" }
            ],
            keyPhrases: [
                { en: "all-time high", zh: "历史新高「, usage: 」指资产价格达到有史以来的最高点", usage: undefined },
                { en: "volatile", zh: "波动大的「, usage: 」形容价格变化剧烈且不可预测", usage: undefined },
                { en: "hold", zh: "持有（不卖）「, usage: 」长期持有加密货币，也常写作HODL", usage: undefined }
            ],
            cultureTip: "加密圈中 「HODL」 一词源于一位交易者拼错的 「hold」，后来成为了长期持有策略的代名词。",
            cultureTipEn: "The term 'HODL' in crypto originated from a trader's misspelling of 'hold' and has since become synonymous with the long-term holding strategy."
        },
        {
            id: "cs-006",
            scene: "将加密货币与股票进行比较",
            sceneEn: "Comparing Crypto to Stocks",
            category: "casual",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "Colleague", en: "Why do you invest in crypto instead of stocks? Stocks seem safer.", zh: "你为什么投资加密货币而不是股票？股票看起来更安全。" },
                { speaker: "B", role: "You", en: "Stocks are great, but crypto trades 24/7. There is no market close.", zh: "股票很好，但加密货币24小时全天候交易。没有收盘时间。" },
                { speaker: "A", role: "Colleague", en: "That sounds exhausting. Does it ever take a break?", zh: "听起来好累。它有休息的时候吗？" },
                { speaker: "B", role: "You", en: "Never. But the upside is you do not have to wait for a broker. You control your own assets.", zh: "从来没有。但好处是你不用等经纪人。你自己控制自己的资产。" },
                { speaker: "A", role: "Colleague", en: "I guess that is appealing. But I still like having FDIC insurance on my bank account.", zh: "我觉得这确实有吸引力。但我还是喜欢银行账户有联邦存款保险。" }
            ],
            keyPhrases: [
                { en: "trades 24/7", zh: "全天候交易「, usage: 」加密市场不像股市那样有开盘和收盘时间", usage: undefined },
                { en: "broker", zh: "经纪人「, usage: 」传统金融中帮助客户进行交易的中间人", usage: undefined },
                { en: "control your own assets", zh: "自己控制自己的资产「, usage: 」指通过私钥自主管理资产，无需第三方托管", usage: undefined },
                { en: "FDIC insurance", zh: "联邦存款保险「, usage: 」美国银行账户的存款保障机制", usage: undefined }
            ],
            cultureTip: "加密货币和股票的比较是日常生活中最常见的话题之一。了解两者的区别有助于向非币圈人士解释加密投资的优劣势。",
            cultureTipEn: "Comparing crypto to stocks is one of the most common everyday topics. Understanding the differences helps explain the pros and cons of crypto investing to people outside the space."
        },
        {
            id: "cs-007",
            scene: "跟朋友说起加密货币大会",
            sceneEn: "Telling Someone About a Crypto Conference",
            category: "casual",
            difficulty: "初级",
            lines: [
                { speaker: "A", role: "You", en: "I am going to a crypto conference next week. It is going to be huge!", zh: "我下周要去参加一个加密货币大会。规模会很大！" },
                { speaker: "B", role: "Friend", en: "A crypto conference? What do people even do there?", zh: "加密货币大会？人们在那里都干什么？" },
                { speaker: "A", role: "You", en: "There are talks, panels, and workshops. You can also network with builders and investors.", zh: "有演讲、圆桌讨论和工作坊。你还可以跟开发者和投资人社交。" },
                { speaker: "B", role: "Friend", en: "That actually sounds fun. Are there any famous speakers?", zh: "听起来还挺有意思的。有什么知名的演讲者吗？" },
                { speaker: "A", role: "You", en: "Yeah, the founder of Ethereum is giving a keynote. It is a big deal.", zh: "有啊，以太坊的创始人会做主题演讲。这可是件大事。" }
            ],
            keyPhrases: [
                { en: "crypto conference", zh: "加密货币大会「, usage: 」加密行业的大型聚会活动", usage: undefined },
                { en: "network with builders and investors", zh: "跟开发者和投资人社交「, usage: 」在行业活动中建立人脉关系", usage: undefined },
                { en: "keynote", zh: "主题演讲「, usage: 」会议中最重要的演讲，通常由重要人物发表", usage: undefined }
            ],
            cultureTip: "加密货币大会不仅是学习的地方，更是建立人脉的重要场合。很多合作和投资机会都是在这些活动的社交环节中产生的。",
            cultureTipEn: "Crypto conferences are not just for learning — they are crucial networking events. Many partnerships and investment opportunities arise during the social portions of these events."
        },
        {
            id: "cs-008",
            scene: "和朋友争论模因币和蓝筹币的优劣",
            sceneEn: "Debating Meme Coins vs Blue Chips with Friends",
            category: "casual",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Mike", en: "I made three times my money on a meme coin last week. Blue chips are too slow.", zh: "我上周在一个模因币上赚了三倍。蓝筹币太慢了。" },
                { speaker: "B", role: "Sarah", en: "Sure, but for every meme coin winner, there are a hundred people who got rugged.", zh: "那倒是，但每一个靠模因币赚钱的人背后，有一百个被割韭菜的。" },
                { speaker: "A", role: "Mike", en: "You just have to get in early and know when to take profits.", zh: "你只要早点入场，知道什么时候止盈就行了。" },
                { speaker: "B", role: "Sarah", en: "That is what everyone says until they are the one holding the bag. I will stick with ETH and BTC.", zh: "每个人都这么说，直到自己成了那个接盘的人。我还是拿着ETH和BTC吧。" },
                { speaker: "A", role: "Mike", en: "Fair enough. But at least throw a small percentage at moonshots. You never know.", zh: "说得也是。但至少拿一小部分去博一博那些有暴涨潜力的币。你永远不知道会怎样。" }
            ],
            keyPhrases: [
                { en: "meme coin", zh: "模因币「, usage: 」以网络文化或梗为主题的加密货币，通常投机性强", usage: undefined },
                { en: "got rugged", zh: "被割韭菜/被跑路「, usage: 」指项目方卷款跑路，投资者蒙受损失", usage: undefined },
                { en: "take profits", zh: "止盈/获利了结「, usage: 」在盈利时卖出部分或全部资产", usage: undefined },
                { en: "holding the bag", zh: "接盘/套牢「, usage: 」指在价格下跌后仍持有亏损资产", usage: undefined }
            ],
            cultureTip: "加密社区中关于模因币和蓝筹币的争论非常普遍。模因币代表高风险高回报的投机心态，而蓝筹币代表更稳健的投资策略。",
            cultureTipEn: "The debate between meme coins and blue chips is extremely common in the crypto community. Meme coins represent a high-risk, high-reward speculative mindset, while blue chips represent a more conservative investment strategy."
        },
        {
            id: "cs-009",
            scene: "计划参加 ETHDenver 大会",
            sceneEn: "Planning to Attend ETHDenver",
            category: "casual",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Dev", en: "Are you going to ETHDenver this year? I heard they have over ten thousand attendees now.", zh: "你今年去ETHDenver吗？我听说现在参加人数超过一万了。" },
                { speaker: "B", role: "Friend", en: "I am thinking about it. Is it worth the trip? Denver in February is freezing.", zh: "我在考虑。值得去一趟吗？二月份的丹佛冷得要命。" },
                { speaker: "A", role: "Dev", en: "Absolutely. The hackathon alone is worth it. Last year someone won fifty thousand dollars building a DeFi protocol.", zh: "绝对值得。光是黑客松就值回票价了。去年有人做了一个DeFi协议赢了五万美元。" },
                { speaker: "B", role: "Friend", en: "That is wild. What about the side events? I heard the parties are legendary.", zh: "太疯狂了。周边活动怎么样？我听说那些派对都很有名。" },
                { speaker: "A", role: "Dev", en: "Oh yeah, the side events are where the real networking happens. You meet VCs, founders, and core devs.", zh: "没错，周边活动才是真正社交的地方。你能遇到风投、创始人和核心开发者。" },
                { speaker: "B", role: "Friend", en: "Alright, I am in. Let me book my flights before prices go up.", zh: "好吧，我去。让我在机票涨价之前赶紧订票。" }
            ],
            keyPhrases: [
                { en: "hackathon", zh: "黑客松「, usage: 」开发者在限定时间内集中编程并竞赛的活动", usage: undefined },
                { en: "DeFi protocol", zh: "去中心化金融协议「, usage: 」基于区块链的去中心化金融应用", usage: undefined },
                { en: "side events", zh: "周边活动「, usage: 」主会议之外的附属社交活动和派对", usage: undefined },
                { en: "VCs", zh: "风险投资人「, usage: 」投资初创企业和新兴项目的资本方", usage: undefined }
            ],
            cultureTip: "ETHDenver 是全球最大的以太坊社区活动之一，每年二月在丹佛举办。它以其包容的社区文化和高质量的黑客松而闻名。",
            cultureTipEn: "ETHDenver is one of the largest Ethereum community events in the world, held every February in Denver. It is known for its inclusive community culture and high-quality hackathon."
        },
        {
            id: "cs-010",
            scene: "和朋友讨论 NFT 艺术",
            sceneEn: "Discussing NFT Art with Friends",
            category: "casual",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Artist", en: "I just minted my first NFT collection. It is a series of generative art pieces.", zh: "我刚刚铸造了我的第一个NFT系列。是一组生成艺术作品。" },
                { speaker: "B", role: "Friend", en: "Nice! What marketplace did you use? OpenSea or something newer?", zh: "不错！你用的什么市场？OpenSea还是什么更新的平台？" },
                { speaker: "A", role: "Artist", en: "I went with a curated platform. The audience there actually appreciates art, not just flipping.", zh: "我选了一个策展平台。那里的观众是真的欣赏艺术，不只是炒来炒去。" },
                { speaker: "B", role: "Friend", en: "Smart move. The flipping culture really hurt a lot of genuine artists.", zh: "明智的选择。炒作文化确实伤害了很多真正的艺术家。" },
                { speaker: "A", role: "Artist", en: "Exactly. Plus, with on-chain royalties, I earn a percentage every time my work is resold.", zh: "没错。而且通过链上版税，每次我的作品被转售时，我都能赚到一定比例。" }
            ],
            keyPhrases: [
                { en: "minted", zh: "铸造「, usage: 」将数字作品上传到区块链并创建NFT的过程", usage: undefined },
                { en: "generative art", zh: "生成艺术「, usage: 」通过算法自动生成的数字艺术作品", usage: undefined },
                { en: "flipping", zh: "炒作/快速转卖「, usage: 」低买高卖以赚取短期差价的行为", usage: undefined },
                { en: "on-chain royalties", zh: "链上版税「, usage: 」通过智能合约在每次转售时自动支付给创作者的费用", usage: undefined }
            ],
            cultureTip: "NFT 艺术市场经历了从狂热到理性的转变。如今，策展型平台（如 SuperRare、Foundation）更受严肃艺术家的青睐，因为它们注重作品质量而非投机。",
            cultureTipEn: "The NFT art market has shifted from hype to maturity. Today, curated platforms like SuperRare and Foundation are preferred by serious artists because they prioritize quality over speculation."
        },
        {
            id: "cs-011",
            scene: "在派对上解释流动性挖矿",
            sceneEn: "Explaining Yield Farming at a Party",
            category: "casual",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "Partygoer", en: "So what is yield farming? You keep mentioning it and I have no idea what it means.", zh: "所以流动性挖矿到底是什么？你一直提到它，但我完全不懂。" },
                { speaker: "B", role: "You", en: "Think of it like this: you lend your crypto to a protocol, and in return, you earn interest plus bonus tokens.", zh: "这样理解吧：你把加密货币借给一个协议，作为回报，你赚取利息加上额外的代币奖励。" },
                { speaker: "A", role: "Partygoer", en: "That sounds too good to be true. What is the catch?", zh: "听起来好得不像是真的。有什么陷阱吗？" },
                { speaker: "B", role: "You", en: "The big risk is called impermanent loss. If the price of your tokens changes a lot, you could end up with less than you started.", zh: "最大的风险叫做无常损失。如果你的代币价格变化很大，你最终可能比开始时还少。" },
                { speaker: "A", role: "Partygoer", en: "So it is not really free money then.", zh: "所以这并不是真正的免费赚钱。" },
                { speaker: "B", role: "You", en: "Nothing in crypto is free. But if you understand the risks, the rewards can be pretty solid.", zh: "加密世界里没有免费的午餐。但如果你了解风险，回报还是相当可观的。" }
            ],
            keyPhrases: [
                { en: "yield farming", zh: "流动性挖矿「, usage: 」通过向DeFi协议提供流动性来获取收益的策略", usage: undefined },
                { en: "bonus tokens", zh: "额外代币奖励「, usage: 」协议为激励用户提供流动性而发放的代币", usage: undefined },
                { en: "impermanent loss", zh: "无常损失「, usage: 」因提供流动性时代币价格变动而产生的潜在损失", usage: undefined }
            ],
            cultureTip: "在社交场合解释DeFi概念时，用日常生活中的类比（如银行存款赚利息）会让复杂的概念更易于理解。",
            cultureTipEn: "When explaining DeFi concepts in social settings, using everyday analogies like earning interest on bank deposits makes complex ideas much more accessible."
        },
        {
            id: "cs-012",
            scene: "报税季抱怨加密货币税务问题",
            sceneEn: "Crypto Tax Season Complaints",
            category: "casual",
            difficulty: "中级",
            lines: [
                { speaker: "A", role: "You", en: "Tax season is killing me. I have hundreds of transactions across five different wallets.", zh: "报税季要把我逼疯了。我在五个不同的钱包里有几百笔交易。" },
                { speaker: "B", role: "Friend", en: "Tell me about it. Did you use a crypto tax tool? They can pull all your data automatically.", zh: "我太理解了。你用加密货币税务工具了吗？它们可以自动提取你所有的数据。" },
                { speaker: "A", role: "You", en: "I tried, but some of my DeFi transactions did not get categorized properly. I had to fix them manually.", zh: "我试了，但有些DeFi交易没有被正确分类。我不得不手动修复。" },
                { speaker: "B", role: "Friend", en: "The worst part is when you have to track the cost basis for tokens you swapped three times.", zh: "最烦的是你还得追踪那些交换了三次的代币的成本基础。" },
                { speaker: "A", role: "You", en: "Exactly. And do not even get me started on airdrops. Are they income? Capital gains? Nobody knows.", zh: "就是啊。空投就更别提了。算收入？还是资本利得？没人说得清。" }
            ],
            keyPhrases: [
                { en: "crypto tax tool", zh: "加密货币税务工具「, usage: 」帮助计算和整理加密货币交易税务信息的软件", usage: undefined },
                { en: "cost basis", zh: "成本基础「, usage: 」资产的原始购买价格，用于计算资本收益或损失", usage: undefined },
                { en: "airdrops", zh: "空投「, usage: 」项目方免费发放代币给符合条件的钱包地址", usage: undefined },
                { en: "capital gains", zh: "资本利得「, usage: 」出售资产时获得的收益，需要缴纳相应税款", usage: undefined }
            ],
            cultureTip: "美国国税局（IRS）将加密货币视为财产而非货币，这意味着每笔交易都可能产生应税事件。加密税务的复杂性是社区中最常见的抱怨之一。",
            cultureTipEn: "The IRS treats cryptocurrency as property rather than currency, meaning every transaction can trigger a taxable event. The complexity of crypto taxes is one of the most common complaints in the community."
        },
        {
            id: "cs-013",
            scene: "关于去中心化的哲学辩论",
            sceneEn: "Philosophical Debate About Decentralization",
            category: "casual",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Idealist", en: "True decentralization means no single entity should have outsized influence over a protocol. Not even the founding team.", zh: "真正的去中心化意味着没有任何单一实体应该对协议拥有过大的影响力。即使是创始团队也不行。" },
                { speaker: "B", role: "Pragmatist", en: "In theory, sure. But in practice, most DAOs are controlled by a handful of whale wallets. Governance is an illusion.", zh: "理论上是这样。但实际上，大多数DAO都被少数巨鲸钱包控制着。治理只是一种幻觉。" },
                { speaker: "A", role: "Idealist", en: "That is a problem of token distribution, not of the concept itself. We need better mechanisms like quadratic voting.", zh: "那是代币分配的问题，不是概念本身的问题。我们需要更好的机制，比如二次方投票。" },
                { speaker: "B", role: "Pragmatist", en: "Quadratic voting still has Sybil attack vulnerabilities. Without reliable identity solutions, someone can just create multiple wallets.", zh: "二次方投票仍然存在女巫攻击漏洞。没有可靠的身份解决方案，有人可以创建多个钱包。" },
                { speaker: "A", role: "Idealist", en: "That is fair. Maybe the answer lies somewhere between full decentralization and progressive decentralization with guardrails.", zh: "说得有道理。也许答案在于完全去中心化和带有防护机制的渐进式去中心化之间。" },
                { speaker: "B", role: "Pragmatist", en: "Now you are talking. Decentralization is a spectrum, not a binary switch. We should optimize for resilience, not purity.", zh: "这才像话。去中心化是一个光谱，不是一个二元开关。我们应该优化韧性，而不是追求纯粹。" }
            ],
            keyPhrases: [
                { en: "outsized influence", zh: "过大的影响力「, usage: 」指某一方在去中心化系统中拥有不成比例的控制权", usage: undefined },
                { en: "quadratic voting", zh: "二次方投票「, usage: 」一种投票机制，投票成本随票数增加而递增，旨在防止财阀统治", usage: undefined },
                { en: "Sybil attack", zh: "女巫攻击「, usage: 」通过创建多个虚假身份来操控去中心化系统的攻击方式", usage: undefined },
                { en: "progressive decentralization", zh: "渐进式去中心化「, usage: 」项目逐步将控制权从团队移交给社区的过程", usage: undefined }
            ],
            cultureTip: "去中心化的程度一直是加密社区中最具争议的话题之一。「去中心化极端主义者「和」实用主义者」之间的辩论反映了理想与现实之间的张力。",
            cultureTipEn: "The degree of decentralization remains one of the most debated topics in crypto. The tension between 'decentralization maximalists' and 'pragmatists' reflects the broader struggle between ideals and practical reality."
        },
        {
            id: "cs-014",
            scene: "分析宏观经济对加密货币的影响",
            sceneEn: "Analyzing Macro Economics Impact on Crypto",
            category: "casual",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Trader", en: "The Fed just signaled another rate pause. What does that mean for crypto markets?", zh: "美联储刚刚释放了又一次暂停加息的信号。这对加密市场意味着什么？" },
                { speaker: "B", role: "Analyst", en: "Historically, a dovish Fed is bullish for risk assets. When interest rates stay low, money flows into speculative markets like crypto.", zh: "从历史上看，鸽派的美联储对风险资产是利好的。当利率保持低位时，资金会流入加密货币等投机市场。" },
                { speaker: "A", role: "Trader", en: "But crypto was supposed to be uncorrelated with traditional markets. That narrative seems dead.", zh: "但加密货币本应和传统市场不相关。那个叙事似乎已经不成立了。" },
                { speaker: "B", role: "Analyst", en: "It died when institutional money entered the space. Now Bitcoin trades more like a leveraged tech stock than digital gold.", zh: "当机构资金进入这个领域时，那个叙事就死了。现在比特币更像一只杠杆科技股，而不是数字黄金。" },
                { speaker: "A", role: "Trader", en: "So we are essentially betting on liquidity cycles now. When the money printer goes on, crypto goes up.", zh: "所以我们现在本质上是在押注流动性周期。当印钞机开动时，加密货币就上涨。" },
                { speaker: "B", role: "Analyst", en: "Pretty much. Keep an eye on the dollar index and global M2 money supply. Those are your leading indicators.", zh: "基本上是这样。关注美元指数和全球M2货币供应量。那些是你的领先指标。" }
            ],
            keyPhrases: [
                { en: "dovish Fed", zh: "鸽派美联储「, usage: 」指美联储倾向于宽松货币政策，如降息或暂停加息", usage: undefined },
                { en: "uncorrelated", zh: "不相关的「, usage: 」指两种资产的价格走势没有统计上的关联", usage: undefined },
                { en: "liquidity cycles", zh: "流动性周期「, usage: 」全球货币供应扩张和收缩的循环模式", usage: undefined },
                { en: "M2 money supply", zh: "M2货币供应量「, usage: 」衡量经济中流通货币总量的指标，包括现金、活期存款和短期存款", usage: undefined }
            ],
            cultureTip: "随着加密市场的成熟，宏观经济分析已成为专业交易者的必备技能。很多加密分析师现在密切关注美联储政策、国债收益率和全球流动性数据。",
            cultureTipEn: "As the crypto market has matured, macroeconomic analysis has become an essential skill for professional traders. Many crypto analysts now closely follow Fed policy, Treasury yields, and global liquidity data."
        },
        {
            id: "cs-015",
            scene: "讨论 AI 与加密货币的融合",
            sceneEn: "Discussing AI and Crypto Convergence",
            category: "casual",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Researcher", en: "The intersection of AI and crypto is fascinating. Imagine autonomous agents that can own wallets and execute transactions.", zh: "AI和加密货币的交叉领域非常迷人。想象一下能拥有钱包并执行交易的自主代理。" },
                { speaker: "B", role: "Engineer", en: "We are already seeing that with AI agents on-chain. Some of them manage treasuries and make governance decisions.", zh: "我们已经在链上看到了这种情况。有些AI代理管理着资金库并做出治理决策。" },
                { speaker: "A", role: "Researcher", en: "The key question is about alignment. How do we ensure an AI agent acts in the best interest of its token holders?", zh: "关键问题在于对齐。我们如何确保AI代理的行为符合其代币持有者的最大利益？" },
                { speaker: "B", role: "Engineer", en: "That is where decentralized compute networks come in. If the AI model runs on a decentralized network, no single party can manipulate its behavior.", zh: "这就是去中心化计算网络的用武之地。如果AI模型在去中心化网络上运行，任何单一方都无法操纵其行为。" },
                { speaker: "A", role: "Researcher", en: "And blockchain provides the perfect audit trail. Every decision the agent makes is transparent and verifiable.", zh: "而且区块链提供了完美的审计追踪。代理所做的每个决策都是透明和可验证的。" }
            ],
            keyPhrases: [
                { en: "autonomous agents", zh: "自主代理「, usage: 」能够独立做出决策和执行操作的AI程序", usage: undefined },
                { en: "alignment", zh: "对齐「, usage: 」确保AI系统的行为与人类意图和利益一致的研究领域", usage: undefined },
                { en: "decentralized compute networks", zh: "去中心化计算网络「, usage: 」分布式的计算资源网络，无需依赖中心化服务器", usage: undefined },
                { en: "audit trail", zh: "审计追踪「, usage: 」记录所有操作和决策的完整历史日志，便于追溯和验证", usage: undefined }
            ],
            cultureTip: "AI与加密的融合是2024-2025年最热门的叙事之一。从去中心化GPU网络到链上AI代理，两个前沿技术的结合正在创造全新的应用场景。",
            cultureTipEn: "The convergence of AI and crypto has been one of the hottest narratives of 2024-2025. From decentralized GPU networks to on-chain AI agents, the combination of these two frontier technologies is creating entirely new use cases."
        },
        {
            id: "cs-016",
            scene: "和律师朋友辩论加密货币监管",
            sceneEn: "Debating Crypto Regulation with a Lawyer Friend",
            category: "casual",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Lawyer", en: "The SEC has been pretty clear that most tokens are securities. The Howey test applies whether you like it or not.", zh: "SEC已经非常明确地表示大多数代币是证券。不管你喜不喜欢，豪威测试都适用。" },
                { speaker: "B", role: "You", en: "But the Howey test was designed in 1946 for orange groves. Applying it to decentralized networks is like fitting a square peg in a round hole.", zh: "但豪威测试是1946年为橘子园设计的。把它应用到去中心化网络上就像把方钉子硬塞进圆孔里。" },
                { speaker: "A", role: "Lawyer", en: "Legal frameworks evolve through application. The principle of investment contracts is technology-agnostic.", zh: "法律框架通过适用而演进。投资合同的原则是不受技术限制的。" },
                { speaker: "B", role: "You", en: "Then explain how a sufficiently decentralized token has a common enterprise. If there is no central team, who is the issuer?", zh: "那你解释一下，一个足够去中心化的代币怎么存在共同事业。如果没有中心化团队，谁是发行者？" },
                { speaker: "A", role: "Lawyer", en: "That is actually the strongest argument your side has. The decentralization defense is legally novel and untested at the Supreme Court level.", zh: "这实际上是你们这方最有力的论点。去中心化辩护在法律上是新颖的，在最高法院层面尚未经过检验。" },
                { speaker: "B", role: "You", en: "Which is exactly why we need new legislation instead of regulation by enforcement. The industry deserves clear rules.", zh: "这正是为什么我们需要新的立法而不是执法式监管。这个行业值得拥有明确的规则。" }
            ],
            keyPhrases: [
                { en: "Howey test", zh: "豪威测试「, usage: 」美国判断某资产是否为证券的法律标准，源自1946年的最高法院判例", usage: undefined },
                { en: "sufficiently decentralized", zh: "足够去中心化", usage: "SEC前官员提出的概念，认为足够去中心化的代币可能不被视为证券" },
                { en: "regulation by enforcement", zh: "执法式监管「, usage: 」通过起诉和处罚而非制定明确规则来监管行业的做法", usage: undefined },
                { en: "common enterprise", zh: "共同事业「, usage: 」豪威测试中的一个要素，指投资者的收益依赖于发起人的努力", usage: undefined }
            ],
            cultureTip: "加密货币的监管之争是美国当前最激烈的政策辩论之一。SEC的「执法式监管」策略受到行业广泛批评，推动了立法改革的呼声。",
            cultureTipEn: "The crypto regulatory battle is one of the most heated policy debates in the US. The SEC's approach of 'regulation by enforcement' has been widely criticized by the industry, fueling calls for legislative reform."
        },
        {
            id: "cs-017",
            scene: "向好奇的工程师解释 MEV",
            sceneEn: "Explaining MEV to a Curious Engineer",
            category: "casual",
            difficulty: "高级",
            lines: [
                { speaker: "A", role: "Engineer", en: "I keep hearing about MEV in Ethereum circles. What exactly is maximal extractable value?", zh: "我在以太坊圈子里不断听到MEV。最大可提取价值到底是什么？" },
                { speaker: "B", role: "Researcher", en: "MEV is the profit that block producers can capture by reordering, inserting, or censoring transactions within a block.", zh: "MEV是区块生产者通过重新排序、插入或审查区块内的交易所能获取的利润。" },
                { speaker: "A", role: "Engineer", en: "So like front-running? That sounds like something that would be illegal in traditional finance.", zh: "就像抢先交易？这听起来在传统金融中是违法的。" },
                { speaker: "B", role: "Researcher", en: "Front-running is one form. There is also sandwich attacks, where a bot places trades before and after your transaction to extract value.", zh: "抢先交易是一种形式。还有三明治攻击，机器人在你的交易前后各放一笔交易来提取价值。" },
                { speaker: "A", role: "Engineer", en: "That is brutal. Is there any way to protect users from this?", zh: "这太残酷了。有什么办法保护用户吗？" },
                { speaker: "B", role: "Researcher", en: "There are solutions like private mempools and MEV-aware protocols. Flashbots built an entire ecosystem around redistributing MEV more fairly.", zh: "有一些解决方案，比如私有内存池和MEV感知协议。Flashbots围绕更公平地重新分配MEV建立了一整个生态系统。" }
            ],
            keyPhrases: [
                { en: "maximal extractable value", zh: "最大可提取价值「, usage: 」区块生产者通过操纵交易排序从中获取的最大利润", usage: undefined },
                { en: "sandwich attack", zh: "三明治攻击「, usage: 」在目标交易前后插入交易以从中获利的MEV提取策略", usage: undefined },
                { en: "private mempool", zh: "私有内存池「, usage: 」将交易发送到私有通道而非公开内存池，以避免被MEV机器人利用", usage: undefined },
                { en: "Flashbots", zh: "Flashbots", usage: "致力于减轻MEV负面影响的研发组织，提供了MEV拍卖等解决方案" }
            ],
            cultureTip: "MEV是以太坊生态中最复杂也最具争议的话题之一。它涉及区块链的核心设计权衡：透明性带来了可利用性，如何在保持开放的同时保护普通用户是一个持续的挑战。",
            cultureTipEn: "MEV is one of the most complex and controversial topics in the Ethereum ecosystem. It touches on a core blockchain design tradeoff: transparency creates exploitability, and protecting ordinary users while maintaining openness remains an ongoing challenge."
        }
    ]
};

// 获取所有类别
function getDialogCategories() {
    return Object.keys(dialogs);
}

// 获取某类别下的所有对话
function getDialogsByCategory(category) {
    if (category === 'all') {
        return Object.values(dialogs).flat();
    }
    return dialogs[category] || [];
}

// 获取所有对话总数
function getDialogCount() {
    return Object.values(dialogs).flat().length;
}

// 类别配置
const dialogCategoryConfig = {
    all:       { label: "全部" },
    exchange:  { label: "◈ 交易所" },
    wallet:    { label: "◇ 钱包" },
    community: { label: "◉ 社群" },
    meeting:   { label: "▣ 会议" },
    job:       { label: "△ 求职" },
    casual:    { label: "○ 日常闲聊" }
};
