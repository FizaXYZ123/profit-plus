// Centralized Assets and Brand Design Tokens
// Sabhi images, colors aur routing links yahan se export honge

export const IMAGES = {
  logo: "/logo.png",
  dashboardScreen: "/dashboard-screen.png",
  gridFloor: "/grid-floor.png",
  gridWebp: "/home-hero-grid.webp",
  favicon: "/favicon.ico",
  networkBanner: "/network-banner.jpg",
  howItWorksBanner: "/how-it-works-banner.webp",
  tradingBotBox: "/trading-bot-box.webp",
  botCardBg: "/bot-card-bg.webp",
  candlestickChart: "/candlestick-chart.webp",
  ninjaTraderLogo: "/ninjatrader-logo.webp",
  kinetickLogo: "/kinetick-logo.webp",
  curvedMonitor: "/curved-monitor.webp",
  contactBgArches: "/contact-bg-arches.webp",
  laptop: "/laptop.png",
  candleSoftware: "/candle-softwear.png",
  candleSoftware2: "/candle-softwear2.png",
  aiBot: "/Ai.png",
} as const;

export const COLORS = {
  // Brand Green Palette
  primary: "#199250",        // Main vibrant green
  primaryDark: "#055027",    // Deep forest green
  primaryLight: "#22c55e",   // Glow green highlight
  accentMint: "#4ade80",     // Mint text & badges
  bgDeep: "#031d0e",         // Dark emerald background
  bgDarker: "#02140a",       // Deep black-green horizon
  bgWhite: "#ffffff",        // Crisp white section background
  cardBg: "rgba(4, 38, 20, 0.75)",
  cardBorder: "rgba(25, 146, 80, 0.35)",

  // UI Accents
  cyanAccent: "#06b6d4",
  amberAccent: "#f59e0b",
  redCandle: "#ef4444",
  greenCandle: "#22c55e",
  textWhite: "#ffffff",
  textMuted: "rgba(209, 250, 229, 0.85)",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Software", href: "/about-software" },
  { label: "About Company", href: "/about" },
  { label: "Success Story", href: "/success-story" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const HERO_CONTENT = {
  title: "Automate Futures Trading. Maximize Every Opportunity.",
  subtitle:
    "Automate and copy trades across accounts with speed and precision.",
  ctaText: "Book Now",
  ctaLink: "/contact",
} as const;

export const HOW_IT_WORKS_CARDS = [
  {
    id: 1,
    title: "Monitor Market Activity",
    description:
      "ProfitPlus keeps track of market movements and trading activity in real time, helping you stay connected without constant screen time.",
    bgColor: "#084523",
    iconType: "monitor",
  },
  {
    id: 2,
    title: "Execute Trades Automatically",
    description:
      "Once your conditions are met, trades are executed and copied across connected accounts quickly and accurately.",
    bgColor: "#0e7f43",
    iconType: "gears",
  },
  {
    id: 3,
    title: "Review Performance",
    description:
      "Access trade history, execution records, and performance insights to evaluate results and refine your strategy.",
    bgColor: "#084523",
    iconType: "analytics",
  },
  {
    id: 4,
    title: "Trade with Greater Efficiency",
    description:
      "Reduce repetitive tasks, manage multiple accounts with ease, and spend more time focusing on your trading goals.",
    bgColor: "#0e7f43",
    iconType: "team",
  },
] as const;

export const HOW_IT_WORKS_STEPS = [
  { id: 1, label: "Monitor Market", active: true },
  { id: 2, label: "Execute Trades", active: false },
  { id: 3, label: "Review", active: false },
  { id: 4, label: "Trade with", active: false },
] as const;

export const WHY_CHOOSE_US_CARDS = [
  {
    id: "monitoring",
    title: "Real-Time Market Monitoring",
    description:
      "Stay connected with live market activity and trade updates. ProfitPlus helps you respond quickly by providing timely information and supporting automated trade execution.",
    iconType: "monitoring",
  },
  {
    id: "automation",
    title: "Smart Trade Automation",
    description:
      "Automate trade execution based on your configured settings and strategy. Reduce repetitive manual tasks while maintaining greater consistency across your accounts.",
    iconType: "automation",
  },
  {
    id: "performance",
    title: "Fast & Reliable Performance",
    description:
      "Built for speed and stability, ProfitPlus executes trades efficiently to help minimize delays and keep your trading workflow running smoothly.",
    iconType: "performance",
  },
  {
    id: "support",
    title: "Dedicated Customer Support",
    description:
      "Get the assistance you need when it matters most. Our support team is here to help with setup, platform guidance, and technical questions so you can trade with confidence.",
    iconType: "support",
  },
] as const;

