import { Component } from "@uitripled/shared";

// Import all animation components
import { ImageSliderCard } from "@uitripled/ui/components/components/cards/image-slider-card";
import { AnimatedCardStack } from "@uitripled/ui/components/components/cards/shadcnui/animated-card-stack";
import { CreditCard } from "@uitripled/ui/components/components/cards/shadcnui/credit-card";
import { DetailTaskCard } from "@uitripled/ui/components/components/cards/shadcnui/detail-task";
import { EcommerceHighlightCard } from "@uitripled/ui/components/components/cards/shadcnui/ecommerce-highlight-card";
import { GlassBlogCard } from "@uitripled/ui/components/components/cards/shadcnui/glass-blog-card";
import { GlassCheckoutCard } from "@uitripled/ui/components/components/cards/shadcnui/glass-checkout-card";
import { GlassOrderSummary } from "@uitripled/ui/components/components/cards/shadcnui/glass-order-summary";
import { GlassWalletCard } from "@uitripled/ui/components/components/cards/shadcnui/glass-wallet-card";
import { HoverExpandCard } from "@uitripled/ui/components/components/cards/shadcnui/hover-expand";
import { ProjectCard } from "@uitripled/ui/components/components/cards/shadcnui/project-card";
import { StaggeredDropdown } from "@uitripled/ui/components/components/dropdown/staggered-items";
import { FadeSlideModal } from "@uitripled/ui/components/components/modal/fade-slide";
import { RippleClickButton } from "@uitripled/ui/components/micro/buttons/ripple-click";
import { ScaleHoverButton } from "@uitripled/ui/components/micro/buttons/scale-hover";
import { ShimmerButton } from "@uitripled/ui/components/micro/buttons/shimmer-button";
import { HeartFavorite } from "@uitripled/ui/components/micro/icons/heart-favorite";
import { PreviewDetailsCard } from "@uitripled/ui/components/micro/links/preview-details-card";
import { ElasticSwitch } from "@uitripled/ui/components/micro/toggles/elastic-switch";
// BaseUI Card Components
import { AnimatedCardStackBaseUI } from "@uitripled/ui/components/components/cards/baseui/animated-card-stack-baseui";
import { CreditCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/credit-card-baseui";
import { DetailTaskCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/detail-task-baseui";
import { EcommerceHighlightCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/ecommerce-highlight-card-baseui";
import { GlassBlogCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/glass-blog-card-baseui";
import { GlassCheckoutCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/glass-checkout-card-baseui";
import { GlassOrderSummaryBaseUI } from "@uitripled/ui/components/components/cards/baseui/glass-order-summary-baseui";
import { GlassWalletCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/glass-wallet-card-baseui";
import { HoverExpandCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/hover-expand-baseui";
import { ProjectCardBaseUI } from "@uitripled/ui/components/components/cards/baseui/project-card-baseui";
import { AIChatInterface } from "@uitripled/ui/components/components/chat/ai-chat-interface";
import { ChatApp } from "@uitripled/ui/components/components/chat/chat-app";
import { Messenger } from "@uitripled/ui/components/components/chat/messenger";
import { FloatingLabelInput } from "@uitripled/ui/components/components/inputs/floating-label-input";
import { AnimatedList } from "@uitripled/ui/components/components/lists/animated-list";
import { NotificationCenter } from "@uitripled/ui/components/components/notifications/notification-center";
import { StocksDashboard } from "@uitripled/ui/components/components/stocks-dashboard/stocks-dashboard";
import { AnimatedTabs } from "@uitripled/ui/components/components/tabs/animated-tabs";
import { WeatherDashboard } from "@uitripled/ui/components/components/weather/weather-dashboard";
import { CashFlowChart } from "@uitripled/ui/data/charts/cash-flow-chart";
import { AnimatedProgress } from "@uitripled/ui/data/progress/animated-progress";
import { GradientAnimation } from "@uitripled/ui/components/decorative/backgrounds/gradient-animation";
import { AboutUsPage } from "@uitripled/ui/components/page/about/about-us-page";
import { StaggeredHero } from "@uitripled/ui/components/page/hero/staggered-text";
import { ToastNotification } from "@uitripled/ui/components/page/notifications/toast-notification";

// NEW: 20 Additional Components
import { AvatarGroup } from "@uitripled/ui/components/avatars/avatar-group";
import { MultipleAccounts } from "@uitripled/ui/components/components/account-switcher/multiple-accounts";
import { GlassAccountSettingsCard } from "@uitripled/ui/components/components/forms/glass-account-settings";
import { GlassForgotPasswordCard } from "@uitripled/ui/components/components/forms/glass-forgot-password";
import { GlassProfileSettingsCard } from "@uitripled/ui/components/components/forms/glass-profile-settings";
import { GlassSignInCard } from "@uitripled/ui/components/components/forms/glass-sign-in";
import { GlassSignUpCard } from "@uitripled/ui/components/components/forms/glass-sign-up";
import { GlassVerificationCodeCard } from "@uitripled/ui/components/components/forms/glass-verification-code";
import { DraggableList } from "@uitripled/ui/components/components/lists/draggable-list";
import { MinimalResume } from "@uitripled/ui/components/components/resumes/shadcnui/minimal-resume";
import { MinimalResumeBaseUI } from "@uitripled/ui/components/components/resumes/baseui/minimal-resume-baseui";
import { ProfessionalResume } from "@uitripled/ui/components/components/resumes/shadcnui/professional-resume";
import { ProfessionalResumeBaseUI } from "@uitripled/ui/components/components/resumes/baseui/professional-resume-baseui";
import { ResumeCard } from "@uitripled/ui/components/components/resumes/shadcnui/resume-card";
import { ResumeCardBaseUI } from "@uitripled/ui/components/components/resumes/baseui/resume-card-baseui";
import { StandardResume } from "@uitripled/ui/components/components/resumes/shadcnui/standard-resume";
import { StandardResumeBaseUI } from "@uitripled/ui/components/components/resumes/baseui/standard-resume-baseui";
import { FloatingGradient } from "@uitripled/ui/components/decorative/background/floating-gradient";
import { AnimatedAccordion } from "@uitripled/ui/components/disclosure/animated-accordion";
import { AnimatedCheckbox } from "@uitripled/ui/components/forms/animated-checkbox";
import { AnimatedRadio } from "@uitripled/ui/components/forms/animated-radio";
import { AnimatedSelect } from "@uitripled/ui/components/forms/animated-select";
import { SimpleCalendar } from "@uitripled/ui/components/forms/simple-calendar";
import { WizardForm } from "@uitripled/ui/components/forms/wizard-form";
import { PasswordInput } from "@uitripled/ui/components/inputs/password-input";
import { AnimatedDialog } from "@uitripled/ui/components/modals/animated-dialog";
import { AnimatedNavbar } from "@uitripled/ui/components/navigation/animated-navbar";
import { AnimatedPagination } from "@uitripled/ui/components/navigation/animated-pagination";
import { AnimatedProfileMenu } from "@uitripled/ui/components/navigation/animated-profile-menu";
import { AnimatedSidebar } from "@uitripled/ui/components/navigation/animated-sidebar";
import { ContextMenu } from "@uitripled/ui/components/navigation/context-menu";
import { CommandPalette } from "@uitripled/ui/components/search/command-palette";
import { MacSearchbar } from "@uitripled/ui/components/search/mac-searchbar";
import { AboutUsSection } from "@uitripled/ui/components/sections/shadcn-ui/about-us-section";
import { BentoGridBlock } from "@uitripled/ui/components/sections/shadcn-ui/bento-grid-block";
import { BlogBlock } from "@uitripled/ui/components/sections/shadcn-ui/blog-block";
import { CinemaTicket } from "@uitripled/ui/components/sections/shadcn-ui/cinema-ticket";
import { ConferenceTicket } from "@uitripled/ui/components/sections/shadcn-ui/conference-ticket";
import { ContactBlock } from "@uitripled/ui/components/sections/shadcn-ui/contact-block";
import { ContactFormSection } from "@uitripled/ui/components/sections/shadcn-ui/contact-form-section";
import { CTABannerSection } from "@uitripled/ui/components/sections/shadcn-ui/cta-banner-section";
import { CTABlock } from "@uitripled/ui/components/sections/shadcn-ui/cta-block";
import { CTAHeroBlock } from "@uitripled/ui/components/sections/shadcn-ui/cta-hero-block";
import { CurrencyConverterCard } from "@uitripled/ui/components/sections/shadcn-ui/currency-converter-card";
import { FAQAccordionBlock } from "@uitripled/ui/components/sections/shadcn-ui/faq-accordion-block";
import { FAQSection } from "@uitripled/ui/components/sections/shadcn-ui/faq-section";
import { FeatureCardsBlock } from "@uitripled/ui/components/sections/shadcn-ui/feature-cards-block";
import { FeatureComparisonBlock } from "@uitripled/ui/components/sections/shadcn-ui/feature-comparison-block";
import { FeatureGridSection } from "@uitripled/ui/components/sections/shadcn-ui/feature-grid-section";
import { FooterBlock } from "@uitripled/ui/components/sections/shadcn-ui/footer-block";
import { GalleryGridBlock } from "@uitripled/ui/components/sections/shadcn-ui/gallery-grid-block";
import { GlassmorphismCTABlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-cta-block";
import { GlassmorphismHeroBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-hero-block";
import { GlassmorphismLaunchTimelineBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-launch-timeline-block";
import { GlassmorphismListenAppBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-listen-app-block";
import { GlassmorphismLogoShowcaseBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-logo-showcase-block";
import { GlassmorphismMinimalMetricsBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-minimal-metrics-block";
import { GlassmorphismPortfolioBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-portfolio-block";
import { GlassmorphismPricingBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-pricing-block";
import { GlassmorphismProductUpdateBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-product-update-block";
import { GlassmorphismStatisticsCard } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-statistics-card";
import { GlassmorphismTestimonialsBlock } from "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-testimonials-block";
import { HeroBlock } from "@uitripled/ui/components/sections/shadcn-ui/hero-block";
import { HeroSection } from "@uitripled/ui/components/sections/shadcn-ui/hero-section";
import { InteractiveLogsTable } from "@uitripled/ui/components/sections/shadcn-ui/interactive-logs-table";
import { N8nWorkflowBlock } from "@uitripled/ui/components/sections/shadcn-ui/n8n-workflow-block";
import { NewHeroSection } from "@uitripled/ui/components/sections/shadcn-ui/new-hero-section";
import { NewsletterSignupBlock } from "@uitripled/ui/components/sections/shadcn-ui/newsletter-signup-block";
import { NotionBlogPage } from "@uitripled/ui/components/sections/shadcn-ui/notion-blog-page";
import { OurServicesSection } from "@uitripled/ui/components/sections/shadcn-ui/our-services-section";
import { PricingSection } from "@uitripled/ui/components/sections/shadcn-ui/pricing-section";
import { ProjectsBlock } from "@uitripled/ui/components/sections/shadcn-ui/projects-block";
import { ScrollReveal } from "@uitripled/ui/components/sections/shadcn-ui/scroll-reveal";
import { ServicesGridBlock } from "@uitripled/ui/components/sections/shadcn-ui/services-grid-block";
import { StatsCounterBlock } from "@uitripled/ui/components/sections/shadcn-ui/stats-counter-block";
import { StatsSection } from "@uitripled/ui/components/sections/shadcn-ui/stats-section";
import { TeamSectionBlock } from "@uitripled/ui/components/sections/shadcn-ui/team-section-block";
import { TestimonialSection } from "@uitripled/ui/components/sections/shadcn-ui/testimonial-section";
import { TestimonialsBlock } from "@uitripled/ui/components/sections/shadcn-ui/testimonials-block";
import { TheaterTicket } from "@uitripled/ui/components/sections/shadcn-ui/theater-ticket";
import { TimelineBlock } from "@uitripled/ui/components/sections/shadcn-ui/timeline-block";
import { AnimatedTooltip } from "@uitripled/ui/components/tooltips/animated-tooltip";

// UI-TripleD Components
import { KanbanBoard } from "@uitripled/ui/components/components/kanban/kanban-board";
import { AIGlowInput } from "@uitripled/ui/components/motion-core/ai-glow-input";
import { AILoadingSkeleton } from "@uitripled/ui/components/motion-core/ai-loading-skeleton";
import { AIResponseTyping } from "@uitripled/ui/components/motion-core/ai-response-typing";
import { AIUnlockAnimation } from "@uitripled/ui/components/motion-core/ai-unlock-animation";
import { AnimatedQuoteBlock } from "@uitripled/ui/components/motion-core/animated-quote-block";
import { AutoRevealingHeading } from "@uitripled/ui/components/motion-core/auto-revealing-heading";
import { ContextMenuBubble } from "@uitripled/ui/components/motion-core/context-menu-bubble";
import { DragToConfirmSlider } from "@uitripled/ui/components/motion-core/drag-to-confirm-slider";
import { DynamicSpotlightCTA } from "@uitripled/ui/components/motion-core/dynamic-spotlight-cta";
import { DynamicTagCloud } from "@uitripled/ui/components/motion-core/dynamic-tag-cloud";
import { ExpandingSearchDock } from "@uitripled/ui/components/motion-core/expanding-search-dock";
import { FloatingInfoPanel } from "@uitripled/ui/components/motion-core/floating-info-panel";
import { FluidModalTransition } from "@uitripled/ui/components/motion-core/fluid-modal-transition";
import { HolographicWall } from "@uitripled/ui/components/motion-core/holographic-wall";
import { InteractiveTimeline } from "@uitripled/ui/components/motion-core/interactive-timeline";
import { MagneticAvatarGroup } from "@uitripled/ui/components/motion-core/magnetic-avatar-group";
import { MoodGradientButton } from "@uitripled/ui/components/motion-core/mood-gradient-button";
import { ReactiveBackgroundGrid } from "@uitripled/ui/components/motion-core/reactive-background-grid";
import { ScrollProgressTracker } from "@uitripled/ui/components/motion-core/scroll-progress-tracker";
import { SmartHoverCard } from "@uitripled/ui/components/motion-core/smart-hover-card";
import { SpotlightSection } from "@uitripled/ui/components/motion-core/spotlight-section";
import { StackedCardCarousel } from "@uitripled/ui/components/motion-core/stacked-card-carousel";
import { SyncedLyricCaptions } from "@uitripled/ui/components/motion-core/synced-lyric-captions";

import { BlogTypography } from "@uitripled/ui/components/components/blog/blog-typography";
import { FloatingChatWidget } from "@uitripled/ui/components/components/chat/floating-chat-widget";
import { CommentThread } from "@uitripled/ui/components/components/comments/comment-thread";
import { CourseContentPage } from "@uitripled/ui/components/components/course-content/course-content-page";
import { NewsFeed } from "@uitripled/ui/components/components/news-feed/news-feed";
import { ProfilePage } from "@uitripled/ui/components/components/profile/profile-page";
import { CardsSlider } from "@uitripled/ui/components/components/sliders/cards-slider";
import { VolumeComponent } from "@uitripled/ui/components/components/sliders/volume-component";
import { DashboardPage } from "@uitripled/ui/components/components/stocks-dashboard/dashboard";
import { LiquidCursor } from "@uitripled/ui/components/liquid-cursor";
import { BrowseFolder } from "@uitripled/ui/components/sections/shadcn-ui/browse-folder";
import { GlowyWavesHero } from "@uitripled/ui/components/sections/shadcn-ui/glowy-waves-hero";
import { WebPerformancePage } from "@uitripled/ui/components/web-performance/web-performance-page";

export const uiComponents: Component[] = [
  {
    id: "conference-ticket",
    name: "Conference Ticket",
    description:
      "Animated conference ticket with glassmorphism effects and holographic details",
    category: "cards",
    tags: ["ticket", "glassmorphism", "animation", "3d", "event"],
    component: ConferenceTicket,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/conference-ticket.tsx",
    duration: "800ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "theater-ticket",
    name: "Theater Ticket",
    description: "Cinematic theater ticket with rip effect and barcode",
    category: "cards",
    tags: ["ticket", "theater", "cinema", "movie", "event"],
    component: TheaterTicket,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/theater-ticket.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "cinema-ticket",
    name: "Cinema Ticket",
    description: "Cinematic theater ticket with rip effect and barcode",
    category: "cards",
    tags: ["ticket", "theater", "cinema", "movie", "event"],
    component: CinemaTicket,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/cinema-ticket.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glass-wallet-card",
    name: "Glass Wallet Card",
    description:
      "Glassmorphism crypto wallet card with balance, trend, and action buttons",
    category: "cards",
    tags: ["wallet", "card", "finance", "glassmorphism", "crypto", "shadcn"],
    component: GlassWalletCard,
    baseuiComponent: GlassWalletCardBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/glass-wallet-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "project-card",
    name: "Project Card",
    description:
      "Glassmorphism project card with links, tags, and hover effects",
    category: "cards",
    tags: ["project", "card", "portfolio", "glassmorphism", "links"],
    component: ProjectCard,
    baseuiComponent: ProjectCardBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/project-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glass-blog-card",
    name: "Glass Blog Card",
    description:
      "Glassmorphism blog card with image zoom, author info, and read action",
    category: "cards",
    tags: ["blog", "card", "content", "glassmorphism", "article", "shadcn"],
    component: GlassBlogCard,
    baseuiComponent: GlassBlogCardBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/glass-blog-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glass-order-summary",
    name: "Glass Order Summary",
    description:
      "Glassmorphism order summary card with item list and checkout button",
    category: "cards",
    tags: ["ecommerce", "card", "summary", "glassmorphism", "cart", "shadcn"],
    component: GlassOrderSummary,
    baseuiComponent: GlassOrderSummaryBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/glass-order-summary.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glass-checkout-card",
    name: "Glass Checkout Card",
    description:
      "Glassmorphism checkout card with payment method selector and input fields",
    category: "cards",
    tags: ["checkout", "card", "payment", "glassmorphism", "form", "shadcn"],
    component: GlassCheckoutCard,
    baseuiComponent: GlassCheckoutCardBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/glass-checkout-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "scale-hover-button",
    name: "Scale Hover Button",
    description: "A button that scales up smoothly on hover",
    category: "microinteractions",
    tags: ["button", "hover", "scale"],
    component: ScaleHoverButton,
    codePath: "@uitripled/ui/components/micro/buttons/scale-hover.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "glowy-waves-hero",
    name: "Glowy Waves Hero",
    description: "Hero section with glowy waves effect",
    category: "blocks",
    tags: ["hero", "landing", "glowy", "waves"],
    component: GlowyWavesHero,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/glowy-waves-hero.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "resume-card",
    name: "Interactive Resume Card",
    description:
      "Professional resume template with animated sections and interactive elements",
    category: "resumes",
    tags: ["resume", "cv", "profile", "card", "animated"],
    component: ResumeCard,
    baseuiComponent: ResumeCardBaseUI,
    codePath: "@uitripled/ui/components/components/resumes/shadcnui/resume-card.tsx",
    duration: "800ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "ripple-click-button",
    name: "Ripple Click Effect",
    description: "Material design inspired ripple effect on click",
    category: "microinteractions",
    tags: ["button", "click", "ripple"],
    component: RippleClickButton,
    codePath: "@uitripled/ui/components/micro/buttons/ripple-click.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "elastic-switch",
    name: "Elastic Toggle Switch",
    description: "Toggle switch with elastic spring animation",
    category: "microinteractions",
    tags: ["toggle", "switch", "spring"],
    component: ElasticSwitch,
    codePath: "@uitripled/ui/components/micro/toggles/elastic-switch.tsx",
    duration: "400ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "heart-favorite",
    name: "Heart Favorite",
    description: "Animated heart icon for like/favorite actions",
    category: "microinteractions",
    tags: ["icon", "favorite", "like"],
    component: HeartFavorite,
    codePath: "@uitripled/ui/components/micro/icons/heart-favorite.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "fade-slide-modal",
    name: "Fade & Slide Modal",
    description: "Modal with fade backdrop and slide-up animation",
    category: "components",
    tags: ["modal", "overlay", "slide"],
    component: FadeSlideModal,
    codePath: "@uitripled/ui/components/components/modal/fade-slide.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "staggered-dropdown",
    name: "Staggered Dropdown",
    description: "Dropdown menu with staggered item animations",
    category: "components",
    tags: ["dropdown", "menu", "stagger"],
    component: StaggeredDropdown,
    codePath: "@uitripled/ui/components/components/dropdown/staggered-items.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "hover-expand-card",
    name: "Hover Expand Card",
    description: "Card that lifts and expands on hover",
    category: "cards",
    tags: ["card", "hover", "lift"],
    component: HoverExpandCard,
    baseuiComponent: HoverExpandCardBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/hover-expand.tsx",
    duration: "250ms",
    easing: "easeInOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "detail-task-card",
    name: "Detail Task Card",
    description:
      "Task management detail panel with animated assignee chips and editor controls",
    category: "cards",
    tags: ["task", "management", "form", "card", "dashboard"],
    component: DetailTaskCard,
    baseuiComponent: DetailTaskCardBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/detail-task.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "ecommerce-highlight-card",
    name: "Ecommerce Highlight Card",
    description:
      "Product spotlight card with blurred border, bundle selector, and fulfillment details",
    category: "cards",
    tags: ["card", "product", "ecommerce", "bundle"],
    component: EcommerceHighlightCard,
    baseuiComponent: EcommerceHighlightCardBaseUI,
    codePath:
      "@uitripled/ui/components/components/cards/shadcnui/ecommerce-highlight-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "notification-center",
    name: "Notification Center",
    description:
      "Multi-variant notification stack with accessible announcements, actions, and motion states",
    category: "components",
    tags: ["notification", "alerts", "toast", "stack", "accessible", "shadcn"],
    component: NotificationCenter,
    codePath: "@uitripled/ui/components/components/notifications/notification-center.tsx",
    duration: "8000ms",
    easing: "spring",
    display: true,
  },
  {
    id: "liquid-cursor",
    name: "Liquid Cursor",
    description: "A liquid-like cursor effect that mixes colors on movement",
    category: "decorative",
    tags: ["cursor", "liquid", "effect", "canvas"],
    component: LiquidCursor,
    codePath: "@uitripled/ui/components/liquid-cursor.tsx",
    duration: "N/A",
    easing: "N/A",
    display: true,
  },
  {
    id: "weather-dashboard",
    name: "Weather Dashboard",
    description:
      "Immersive weather dashboard with hourly charting, weekly outlook, and live air-quality alerts",
    category: "components",
    tags: ["weather", "dashboard", "forecast", "charts", "environment", "data"],
    component: WeatherDashboard,
    codePath: "@uitripled/ui/components/components/weather/weather-dashboard.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "professional-resume",
    name: "Professional Resume",
    description:
      "Clean, formal resume template suitable for corporate applications",
    category: "resumes",
    tags: ["resume", "cv", "professional", "formal", "clean"],
    component: ProfessionalResume,
    baseuiComponent: ProfessionalResumeBaseUI,
    codePath: "@uitripled/ui/components/components/resumes/shadcnui/professional-resume.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "browse-folder",
    name: "Browse Folder",
    description: "Folder browser with animated tabs and content",
    category: "components",
    tags: ["folder", "browser", "tabs", "content"],
    component: BrowseFolder,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/browse-folder.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "staggered-hero",
    name: "Staggered Text Hero",
    description: "Hero section with staggered text reveal",
    category: "page",
    tags: ["hero", "text", "stagger"],
    component: StaggeredHero,
    codePath: "@uitripled/ui/components/page/hero/staggered-text.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "about-us-page",
    name: "About Us Page",
    description:
      "Glassmorphism about page showcasing mission, values, and leadership with motion accents.",
    category: "page",
    tags: ["about", "page", "team", "values"],
    component: AboutUsPage,
    codePath: "@uitripled/ui/components/page/about/about-us-page.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "minimal-resume",
    name: "Minimal Resume",
    description:
      "Vercel-inspired minimal resume with clean typography and grid layout",
    category: "resumes",
    tags: ["resume", "cv", "minimal", "clean", "vercel", "grid"],
    component: MinimalResume,
    baseuiComponent: MinimalResumeBaseUI,
    codePath: "@uitripled/ui/components/components/resumes/shadcnui/minimal-resume.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "standard-resume",
    name: "Standard Resume",
    description:
      "A standard, professional resume layout with a sidebar, suitable for most industries.",
    category: "resumes",
    tags: ["resume", "cv", "standard", "classic", "sidebar"],
    component: StandardResume,
    baseuiComponent: StandardResumeBaseUI,
    codePath: "@uitripled/ui/components/components/resumes/shadcnui/standard-resume.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "shimmer-button",
    name: "Shimmer Button",
    description: "Button with continuous shimmer effect",
    category: "microinteractions",
    tags: ["button", "shimmer", "gradient", "shadcn"],
    component: ShimmerButton,
    codePath: "@uitripled/ui/components/micro/buttons/shimmer-button.tsx",
    duration: "2000ms",
    easing: "linear",
    display: false, // People think its useless
  },
  {
    id: "preview-details-card",
    name: "Preview Details Card",
    description: "Link card that reveals a smooth detail preview box on hover",
    category: "microinteractions",
    tags: ["link", "hover", "preview", "card", "minimal"],
    component: PreviewDetailsCard,
    codePath: "@uitripled/ui/components/micro/links/preview-details-card.tsx",
    duration: "280ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "animated-card-stack",
    name: "Animated Card Stack",
    description: "Stacked cards that expand on hover",
    category: "cards",
    tags: ["card", "stack", "hover", "shadcn"],
    component: AnimatedCardStack,
    baseuiComponent: AnimatedCardStackBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/animated-card-stack.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "credit-card",
    name: "Credit Card",
    description: "3D animated credit card with flip animation to show CVV",
    category: "cards",
    tags: ["card", "3d", "flip", "payment", "credit"],
    component: CreditCard,
    baseuiComponent: CreditCardBaseUI,
    codePath: "@uitripled/ui/components/components/cards/shadcnui/credit-card.tsx",
    duration: "600ms",
    easing: "easeInOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "image-slider-card",
    name: "Accessible Image Slider Card",
    description:
      "Image carousel card with keyboard support, reduced motion handling, and screen reader-friendly labels",
    category: "cards",
    tags: ["carousel", "image", "card", "accessibility", "keyboard"],
    component: ImageSliderCard,
    codePath: "@uitripled/ui/components/components/cards/image-slider-card.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "floating-label-input",
    name: "Floating Label Input",
    description: "Input with animated floating label",
    category: "components",
    tags: ["input", "form", "label", "shadcn"],
    component: FloatingLabelInput,
    codePath: "@uitripled/ui/components/components/inputs/floating-label-input.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // need fixes
  },
  {
    id: "animated-tabs",
    name: "Animated Tabs",
    description: "Tabs with sliding indicator animation",
    category: "components",
    tags: ["tabs", "navigation", "slide", "shadcn"],
    component: AnimatedTabs,
    codePath: "@uitripled/ui/components/components/tabs/animated-tabs.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-list",
    name: "Animated List",
    description: "List with staggered item animations",
    category: "components",
    tags: ["list", "stagger", "checkmarks", "shadcn"],
    component: AnimatedList,
    codePath: "@uitripled/ui/components/components/lists/animated-list.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "chat-app",
    name: "Chat App",
    description: "Fully functional chat interface with animated messages",
    category: "components",
    tags: ["chat", "messages", "messaging", "ui", "shadcn"],
    component: ChatApp,
    codePath: "@uitripled/ui/components/components/chat/chat-app.tsx",
    duration: "300ms",
    easing: "spring",
    display: false,
  },
  {
    id: "messenger",
    name: "Messenger",
    description:
      "Glassmorphism messenger workspace with accessible motion and quick replies",
    category: "components",
    tags: ["chat", "messenger", "communication", "glassmorphism", "shadcn"],
    component: Messenger,
    codePath: "@uitripled/ui/components/components/chat/messenger.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "ai-chat-interface",
    name: "AI Chat Interface",
    description:
      "Chat input with attachments, model selector, and accessible controls",
    category: "components",
    tags: ["chat", "ai", "input", "attachments", "shadcn"],
    component: AIChatInterface,
    codePath: "@uitripled/ui/components/components/chat/ai-chat-interface.tsx",
    duration: "200ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "stocks-dashboard",
    name: "Stocks Dashboard",
    description:
      "Interactive stock portfolio dashboard with status cards, data table, and detailed stock information modal",
    category: "blocks",
    tags: [
      "dashboard",
      "stocks",
      "table",
      "portfolio",
      "data",
      "modal",
      "shadcn",
    ],
    component: StocksDashboard,
    codePath: "@uitripled/ui/components/components/stocks-dashboard/stocks-dashboard.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description:
      "Interactive stock portfolio dashboard with status cards, data table, and detailed stock information modal",
    category: "blocks",
    tags: [
      "dashboard",
      "stocks",
      "table",
      "portfolio",
      "data",
      "modal",
      "shadcn",
    ],
    component: DashboardPage,
    codePath: "@uitripled/ui/components/components/stocks-dashboard/dashboard.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "toast-notification",
    name: "Toast Notification",
    description: "Animated toast notification popup",
    category: "page",
    tags: ["toast", "notification", "alert", "shadcn"],
    component: ToastNotification,
    codePath: "@uitripled/ui/components/page/notifications/toast-notification.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-progress",
    name: "Animated Progress Bar",
    description: "Progress bar with smooth animation",
    category: "data",
    tags: ["progress", "loading", "bar", "shadcn"],
    component: AnimatedProgress,
    codePath: "@uitripled/ui/data/progress/animated-progress.tsx",
    duration: "2000ms",
    easing: "easeOut",
    display: false, // People think its useless
  },
  {
    id: "cash-flow-chart",
    name: "Accessible Cash Flow Chart",
    description:
      "Interactive cash flow bar chart with keyboard focus, tooltips, and screen reader support",
    category: "data",
    tags: ["chart", "bar", "cashflow", "finance", "accessible"],
    component: CashFlowChart,
    codePath: "@uitripled/ui/data/charts/cash-flow-chart.tsx",
    duration: "800ms",
    easing: "easeOut",
    display: true,
    availableIn: ["carbon"],
  },
  {
    id: "gradient-animation",
    name: "Gradient Animation",
    description: "Smoothly transitioning gradient background",
    category: "decorative",
    tags: ["gradient", "background", "color"],
    component: GradientAnimation,
    codePath: "@uitripled/ui/components/decorative/backgrounds/gradient-animation.tsx",
    duration: "10000ms",
    easing: "linear",
    display: true,
  },
  {
    id: "news-feed",
    name: "News Feed",
    description:
      "Interactive news feed with categories, search, and animated cards",
    category: "components",
    tags: ["news", "feed", "list", "cards", "social"],
    component: NewsFeed,
    codePath: "@uitripled/ui/components/components/news-feed/news-feed.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "comment-thread",
    name: "Comment Thread",
    description: "Nested comment thread with rich interactions and animations",
    category: "components",
    tags: ["comments", "thread", "social", "discussion", "feedback"],
    component: CommentThread,
    codePath: "@uitripled/ui/components/components/comments/comment-thread.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "profile-page",
    name: "Profile Page",
    description: "User profile with gradient cover, stats, and posts feed",
    category: "page",
    tags: ["profile", "user", "social", "feed", "cover"],
    component: ProfilePage,
    codePath: "@uitripled/ui/components/components/profile/profile-page.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "web-performance-page",
    name: "Web Performance Page",
    description: "Real-time analysis of web vitals and performance metrics",
    category: "components",
    tags: ["performance", "web vitals", "dashboard", "metrics"],
    component: WebPerformancePage,
    codePath: "@uitripled/ui/components/web-performance/web-performance-page.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "course-content-page",
    name: "Course Content Page",
    description:
      "Interactive course page with video player, instructor details, curriculum sections, and progress tracking",
    category: "components",
    tags: [
      "course",
      "education",
      "video",
      "instructor",
      "curriculum",
      "learning",
      "dashboard",
    ],
    component: CourseContentPage,
    codePath: "@uitripled/ui/components/components/course-content/course-content-page.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "blog-typography",
    name: "Blog Typography",
    description:
      "Beautiful blog post typography with text, links, images, blockquotes, and code examples",
    category: "components",
    tags: [
      "blog",
      "typography",
      "text",
      "article",
      "content",
      "links",
      "images",
    ],
    component: BlogTypography,
    codePath: "@uitripled/ui/components/components/blog/blog-typography.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "password-input",
    name: "Password Input",
    description: "Password input with toggle visibility and strength indicator",
    category: "components",
    tags: ["input", "password", "form", "security", "shadcn"],
    component: PasswordInput,
    codePath: "@uitripled/ui/components/inputs/password-input.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // need fixes
  },
  {
    id: "animated-dialog",
    name: "Animated Dialog",
    description: "Modal dialog with backdrop fade and spring animation",
    category: "components",
    tags: ["modal", "dialog", "overlay", "popup", "shadcn"],
    component: AnimatedDialog,
    codePath: "@uitripled/ui/components/modals/animated-dialog.tsx",
    duration: "300ms",
    easing: "spring",
    display: false,
  },
  {
    id: "animated-tooltip",
    name: "Animated Tooltip",
    description: "Tooltip with delay and slide animation",
    category: "components",
    tags: ["tooltip", "hint", "info", "popup"],
    component: AnimatedTooltip,
    codePath: "@uitripled/ui/components/tooltips/animated-tooltip.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "animated-navbar",
    name: "Animated Navbar",
    description: "Navigation bar with animated underline indicator",
    category: "components",
    tags: ["navigation", "navbar", "menu", "tabs"],
    component: AnimatedNavbar,
    codePath: "@uitripled/ui/components/navigation/animated-navbar.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-profile-menu",
    name: "Animated Profile Menu",
    description:
      "Floating profile avatar that reveals quick action cards with smooth motion",
    category: "components",
    tags: ["profile", "menu", "navigation", "avatar", "shadcn"],
    component: AnimatedProfileMenu,
    codePath: "@uitripled/ui/components/navigation/animated-profile-menu.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "animated-sidebar",
    name: "Animated Sidebar",
    description: "Sidebar with slide-in animation and overlay",
    category: "components",
    tags: ["sidebar", "navigation", "drawer", "menu"],
    component: AnimatedSidebar,
    codePath: "@uitripled/ui/components/navigation/animated-sidebar.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-accordion",
    name: "Animated Accordion",
    description: "Accordion with smooth expand/collapse and rotate arrow",
    category: "components",
    tags: ["accordion", "collapse", "expand", "faq", "shadcn"],
    component: AnimatedAccordion,
    codePath: "@uitripled/ui/components/disclosure/animated-accordion.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "draggable-list",
    name: "Draggable List",
    description: "Reorderable list with drag and drop spring physics",
    category: "components",
    tags: ["list", "drag", "reorder", "sortable"],
    component: DraggableList,
    codePath: "@uitripled/ui/components/components/lists/draggable-list.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "hero-section",
    name: "Hero Section",
    description: "Hero section with staggered text and button reveal",
    category: "page",
    tags: ["hero", "landing", "stagger", "reveal"],
    component: HeroSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/hero-section.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "scroll-reveal",
    name: "Scroll Reveal",
    description:
      "Section that animates into view on scroll with intersection observer",
    category: "page",
    tags: ["scroll", "reveal", "intersection", "fade"],
    component: ScrollReveal,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/scroll-reveal.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "floating-gradient",
    name: "Floating Gradient",
    description: "Animated floating gradient background effect",
    category: "decorative",
    tags: ["gradient", "background", "floating", "animation"],
    component: FloatingGradient,
    codePath: "@uitripled/ui/components/decorative/background/floating-gradient.tsx",
    duration: "8000ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "avatar-group",
    name: "Avatar Group",
    description: "Stacked avatar group with hover reveal and tooltips",
    category: "components",
    tags: ["avatar", "user", "stack", "group", "shadcn"],
    component: AvatarGroup,
    codePath: "@uitripled/ui/components/avatars/avatar-group.tsx",
    duration: "200ms",
    easing: "spring",
    display: true,
  },
  {
    id: "animated-checkbox",
    name: "Animated Checkbox",
    description: "Checkbox with checkmark animation",
    category: "components",
    tags: ["checkbox", "form", "input", "select"],
    component: AnimatedCheckbox,
    codePath: "@uitripled/ui/components/forms/animated-checkbox.tsx",
    duration: "200ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-radio",
    name: "Animated Radio",
    description: "Radio button group with selection ripple",
    category: "components",
    tags: ["radio", "form", "input", "select"],
    component: AnimatedRadio,
    codePath: "@uitripled/ui/components/forms/animated-radio.tsx",
    duration: "200ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-pagination",
    name: "Animated Pagination",
    description: "Pagination with smooth page transition indicator",
    category: "components",
    tags: ["pagination", "pages", "navigation"],
    component: AnimatedPagination,
    codePath: "@uitripled/ui/components/navigation/animated-pagination.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "animated-select",
    name: "Animated Select",
    description: "Select dropdown with smooth open/close animation",
    category: "components",
    tags: ["select", "dropdown", "form", "input", "shadcn"],
    component: AnimatedSelect,
    codePath: "@uitripled/ui/components/forms/animated-select.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "glass-sign-in-card",
    name: "Glass Sign-In Card",
    description:
      "Glassmorphic sign-in panel with social auth buttons and email form",
    category: "components",
    tags: ["auth", "form", "sign-in", "glassmorphism", "shadcn"],
    component: GlassSignInCard,
    codePath: "@uitripled/ui/components/components/forms/glass-sign-in.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "glass-sign-up-card",
    name: "Glass Sign-Up Card",
    description:
      "Glassmorphic sign-up flow with social providers, email fields, and terms checkbox",
    category: "components",
    tags: ["auth", "form", "sign-up", "glassmorphism", "shadcn"],
    component: GlassSignUpCard,
    codePath: "@uitripled/ui/components/components/forms/glass-sign-up.tsx",
    duration: "650ms",
    easing: "spring",
    display: true,
  },
  {
    id: "glass-forgot-password-card",
    name: "Glass Forgot Password Card",
    description:
      "Reset-password screen with glassmorphic styling and status messaging",
    category: "components",
    tags: ["auth", "form", "reset", "password", "glassmorphism"],
    component: GlassForgotPasswordCard,
    codePath: "@uitripled/ui/components/components/forms/glass-forgot-password.tsx",
    duration: "500ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "glass-verification-code-card",
    name: "Glass Verification Code Card",
    description:
      "Verification code entry with glassmorphic inputs, status messaging, and reduced-motion support",
    category: "components",
    tags: ["auth", "verification", "input", "glassmorphism"],
    component: GlassVerificationCodeCard,
    codePath: "@uitripled/ui/components/components/forms/glass-verification-code.tsx",
    duration: "550ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "glass-profile-settings-card",
    name: "Glass Profile Settings Card",
    description:
      "Glassmorphic profile settings form with avatar upload, bio, and notification preferences",
    category: "components",
    tags: ["profile", "settings", "form", "glassmorphism"],
    component: GlassProfileSettingsCard,
    codePath: "@uitripled/ui/components/components/forms/glass-profile-settings.tsx",
    duration: "700ms",
    easing: "spring",
    display: true,
  },
  {
    id: "glass-account-settings-card",
    name: "Glass Account Settings Card",
    description:
      "Account management card with subscription overview and billing actions in glassmorphic style",
    category: "components",
    tags: ["account", "subscription", "billing", "form", "glassmorphism"],
    component: GlassAccountSettingsCard,
    codePath: "@uitripled/ui/components/components/forms/glass-account-settings.tsx",
    duration: "650ms",
    easing: "spring",
    display: true,
  },
  {
    id: "command-palette",
    name: "Command Palette",
    description: "Command palette with search and keyboard navigation",
    category: "components",
    tags: ["command", "search", "keyboard", "shortcuts", "shadcn"],
    component: CommandPalette,
    codePath: "@uitripled/ui/components/search/command-palette.tsx",
    duration: "200ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "multiple-accounts",
    name: "Multiple Accounts Switcher",
    description:
      "Glassmorphic account switcher with animated dropdown and accessible listbox controls",
    category: "components",
    tags: ["accounts", "dropdown", "switcher", "glassmorphism"],
    component: MultipleAccounts,
    codePath: "@uitripled/ui/components/components/account-switcher/multiple-accounts.tsx",
    duration: "350ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "mac-searchbar",
    name: "Mac Searchbar",
    description:
      "Mac-style searchbar with animated dropdown, glassmorphism effects, and smooth transitions",
    category: "components",
    tags: [
      "search",
      "mac",
      "dropdown",
      "glassmorphism",
      "animated",
      "framer-motion",
    ],
    component: MacSearchbar,
    codePath: "@uitripled/ui/components/search/mac-searchbar.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "context-menu",
    name: "Context Menu",
    description: "Right-click context menu with nested items animation",
    category: "components",
    tags: ["menu", "context", "right-click", "dropdown"],
    component: ContextMenu,
    codePath: "@uitripled/ui/components/navigation/context-menu.tsx",
    duration: "150ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "simple-calendar",
    name: "Simple Calendar",
    description: "Calendar picker with date selection animation",
    category: "components",
    tags: ["calendar", "date", "picker", "form", "shadcn"],
    component: SimpleCalendar,
    codePath: "@uitripled/ui/components/forms/simple-calendar.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "wizard-form",
    name: "Wizard Form",
    description:
      "Multi-step wizard form with animated transitions, validation, and progress tracking",
    category: "forms",
    tags: [
      "form",
      "wizard",
      "multi-step",
      "validation",
      "progress",
      "animated",
    ],
    component: WizardForm,
    codePath: "@uitripled/ui/components/forms/wizard-form.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "stats-section",
    name: "Stats Section",
    description: "Animated statistics section with cards and counters",
    category: "page",
    tags: ["stats", "numbers", "metrics", "cards", "shadcn"],
    component: StatsSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/stats-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "testimonial-section",
    name: "Testimonial Section",
    description: "Carousel-style testimonial section with smooth transitions",
    category: "page",
    tags: ["testimonial", "carousel", "reviews", "cards", "shadcn"],
    component: TestimonialSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/testimonial-section.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: false,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "pricing-section",
    name: "Pricing Section",
    description: "Animated pricing cards with hover effects and feature lists",
    category: "page",
    tags: ["pricing", "plans", "cards", "hover", "shadcn"],
    component: PricingSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/pricing-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "feature-grid-section",
    name: "Feature Grid Section",
    description:
      "Animated feature grid with staggered card animations and icon reveals",
    category: "page",
    tags: ["features", "grid", "cards", "stagger", "shadcn"],
    component: FeatureGridSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/feature-grid-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "faq-section",
    name: "FAQ Section",
    description:
      "Animated FAQ section with expandable questions and smooth transitions",
    category: "page",
    tags: ["faq", "accordion", "questions", "expand", "shadcn"],
    component: FAQSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/faq-section.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "cta-banner-section",
    name: "CTA Banner Section",
    description:
      "Animated call-to-action banner with gradient background and button animations",
    category: "page",
    tags: ["cta", "banner", "call-to-action", "buttons", "gradient", "shadcn"],
    component: CTABannerSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/cta-banner-section.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "projects-block",
    name: "Projects Block",
    description:
      "Animated project card with hover effects, image zoom, and link buttons",
    category: "components",
    tags: ["projects", "portfolio", "cards", "hover", "gallery", "shadcn"],
    component: ProjectsBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/projects-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "hero-block",
    name: "Hero Block",
    description:
      "Personal portfolio hero section with animated avatar, staggered text, social links, and scroll indicator",
    category: "blocks",
    tags: ["hero", "portfolio", "landing", "stagger", "social", "shadcn"],
    component: HeroBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/hero-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "testimonials-block",
    name: "Testimonials Block",
    description:
      "Animated testimonials grid with staggered cards, star ratings, and hover effects",
    category: "blocks",
    tags: ["testimonials", "reviews", "cards", "stagger", "ratings", "shadcn"],
    component: TestimonialsBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/testimonials-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "cta-block",
    name: "CTA Block",
    description:
      "Call-to-action section with gradient overlay, animated buttons, and status indicator",
    category: "blocks",
    tags: ["cta", "call-to-action", "banner", "buttons", "gradient", "shadcn"],
    component: CTABlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/cta-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "blog-block",
    name: "Blog Block",
    description:
      "Animated blog posts grid with staggered cards, date/time indicators, and hover effects",
    category: "blocks",
    tags: ["blog", "posts", "cards", "stagger", "articles", "shadcn"],
    component: BlogBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/blog-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: false,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "contact-block",
    name: "Contact Block",
    description:
      "Contact form with animated contact info cards, working hours, and interactive icons",
    category: "blocks",
    tags: ["contact", "form", "email", "phone", "location", "shadcn"],
    component: ContactBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/contact-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "new-hero-section",
    name: "New Hero Section",
    description:
      "Modern hero section with gradient background, animated stats, and call-to-action buttons",
    category: "blocks",
    tags: ["hero", "landing", "cta", "stats", "gradient", "shadcn"],
    component: NewHeroSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/new-hero-section.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "about-us-section",
    name: "About Us",
    description:
      "About us section with value cards, icons, and animated reveal effects",
    category: "blocks",
    tags: ["about", "values", "team", "mission", "cards", "shadcn"],
    component: AboutUsSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/about-us-section.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "contact-form-section",
    name: "Contact Form",
    description:
      "Contact form section with animated inputs, validation, and form handling",
    category: "blocks",
    tags: ["contact", "form", "inputs", "validation", "shadcn"],
    component: ContactFormSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/contact-form-section.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "our-services-section",
    name: "Our Services",
    description:
      "Services section with service cards, badges, icons, and hover animations",
    category: "blocks",
    tags: ["services", "cards", "badges", "icons", "hover", "shadcn"],
    component: OurServicesSection,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/our-services-section.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "smart-hover-card",
    name: "Smart Hover Card",
    description:
      "Card that detects cursor direction and reveals content from that side",
    category: "components",
    tags: ["card", "hover", "directional", "reveal", "smart"],
    component: SmartHoverCard,
    codePath: "@uitripled/ui/components/motion-core/smart-hover-card.tsx",
    duration: "300ms",
    easing: "spring",
    display: false,
  },
  {
    id: "scroll-progress-tracker",
    name: "Scroll Progress Tracker",
    description:
      "Fixed progress bar that follows scroll and glows on section changes",
    category: "page",
    tags: ["scroll", "progress", "tracker", "navigation"],
    component: ScrollProgressTracker,
    codePath: "@uitripled/ui/components/motion-core/scroll-progress-tracker.tsx",
    duration: "continuous",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "stacked-card-carousel",
    name: "Stacked Card Carousel",
    description: "Three stacked cards that shift and tilt dynamically on hover",
    category: "components",
    tags: ["cards", "carousel", "stack", "3d", "hover"],
    component: StackedCardCarousel,
    codePath: "@uitripled/ui/components/motion-core/stacked-card-carousel.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "spotlight-section",
    name: "Spotlight Section",
    description:
      "Container where mouse creates soft radial spotlight following cursor",
    category: "decorative",
    tags: ["spotlight", "cursor", "gradient", "interactive"],
    component: SpotlightSection,
    codePath: "@uitripled/ui/components/motion-core/spotlight-section.tsx",
    duration: "continuous",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "auto-revealing-heading",
    name: "Auto-Revealing Heading",
    description:
      "Heading that reveals each letter/word with staggered motion on scroll",
    category: "page",
    tags: ["heading", "reveal", "stagger", "scroll"],
    component: AutoRevealingHeading,
    codePath: "@uitripled/ui/components/motion-core/auto-revealing-heading.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "interactive-timeline",
    name: "Interactive Timeline",
    description:
      "Vertical timeline where elements animate and connect with lines on scroll",
    category: "components",
    tags: ["timeline", "scroll", "connect", "animate"],
    component: InteractiveTimeline,
    codePath: "@uitripled/ui/components/motion-core/interactive-timeline.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
  },
  {
    id: "dynamic-tag-cloud",
    name: "Dynamic Tag Cloud",
    description:
      "Floating cluster of tags that drift and rearrange when hovered",
    category: "decorative",
    tags: ["tags", "cloud", "float", "drift", "interactive"],
    component: DynamicTagCloud,
    codePath: "@uitripled/ui/components/motion-core/dynamic-tag-cloud.tsx",
    duration: "400ms",
    easing: "spring",
    display: true,
  },
  {
    id: "ai-loading-skeleton",
    name: "AI Loading Skeleton",
    description:
      "Loading state with diagonal shimmer gradient and opacity wave",
    category: "components",
    tags: ["loading", "skeleton", "shimmer", "gradient"],
    component: AILoadingSkeleton,
    codePath: "@uitripled/ui/components/motion-core/ai-loading-skeleton.tsx",
    duration: "1500ms",
    easing: "linear",
    display: true,
  },
  {
    id: "animated-quote-block",
    name: "Animated Quote Block",
    description: "Quote that types itself in, pauses, then subtly breathes",
    category: "decorative",
    tags: ["quote", "typewriter", "breathing", "pulse"],
    component: AnimatedQuoteBlock,
    codePath: "@uitripled/ui/components/motion-core/animated-quote-block.tsx",
    duration: "2000ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "context-menu-bubble",
    name: "Context Menu Bubble",
    description:
      "Right-click reveals circular expanding radial menu with icons",
    category: "components",
    tags: ["context", "menu", "radial", "bubble", "expand"],
    component: ContextMenuBubble,
    codePath: "@uitripled/ui/components/motion-core/context-menu-bubble.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "magnetic-avatar-group",
    name: "Magnetic Avatar Group",
    description: "Stacked avatars that spread apart on hover showing tooltips",
    category: "components",
    tags: ["avatars", "group", "magnetic", "tooltip", "hover"],
    component: MagneticAvatarGroup,
    codePath: "@uitripled/ui/components/motion-core/magnetic-avatar-group.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "drag-to-confirm-slider",
    name: "Drag-to-Confirm Slider",
    description: "Slider that activates action only when fully dragged to end",
    category: "components",
    tags: ["slider", "drag", "confirm", "interactive"],
    component: DragToConfirmSlider,
    codePath: "@uitripled/ui/components/motion-core/drag-to-confirm-slider.tsx",
    duration: "400ms",
    easing: "spring",
    display: false, // need fixes
  },
  {
    id: "expanding-search-dock",
    name: "Expanding Search Dock",
    description: "Minimal search icon that expands into full input with blur",
    category: "components",
    tags: ["search", "expand", "dock", "input", "blur"],
    component: ExpandingSearchDock,
    codePath: "@uitripled/ui/components/motion-core/expanding-search-dock.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "mood-gradient-button",
    name: "Mood Gradient Button",
    description:
      "Button with background gradient that shifts based on hover angle",
    category: "microinteractions",
    tags: ["button", "gradient", "mood", "interactive"],
    component: MoodGradientButton,
    codePath: "@uitripled/ui/components/motion-core/mood-gradient-button.tsx",
    duration: "continuous",
    easing: "easeInOut",
    display: false, // People think its useless
  },
  {
    id: "floating-info-panel",
    name: "Floating Info Panel",
    description:
      "Info tooltip that drifts up/down while fading in/out intermittently",
    category: "decorative",
    tags: ["info", "tooltip", "float", "drift", "fade"],
    component: FloatingInfoPanel,
    codePath: "@uitripled/ui/components/motion-core/floating-info-panel.tsx",
    duration: "4000ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "reactive-background-grid",
    name: "Reactive Background Grid",
    description:
      "Background pattern that reacts to mouse movement and click ripples",
    category: "decorative",
    tags: ["grid", "background", "reactive", "ripple", "interactive"],
    component: ReactiveBackgroundGrid,
    codePath: "@uitripled/ui/components/motion-core/reactive-background-grid.tsx",
    duration: "600ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "fluid-modal-transition",
    name: "Fluid Modal Transition",
    description:
      "Modal that expands smoothly from clicked trigger element using layoutId",
    category: "components",
    tags: ["modal", "transition", "layout", "expand", "fluid"],
    component: FluidModalTransition,
    codePath: "@uitripled/ui/components/motion-core/fluid-modal-transition.tsx",
    duration: "300ms",
    easing: "spring",
    display: false, // People think its useless
  },
  {
    id: "holographic-wall",
    name: "Holographic Wall",
    description:
      "Black wall with Pharaonic hieroglyphs and golden cursor light reflection",
    category: "decorative",
    tags: [
      "holographic",
      "wall",
      "cursor",
      "glow",
      "golden",
      "hieroglyphs",
      "pharaonic",
    ],
    component: HolographicWall,
    codePath: "@uitripled/ui/components/motion-core/holographic-wall.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "dynamic-spotlight-cta",
    name: "Dynamic Spotlight CTA",
    description:
      "Floating spotlight follows cursor to reveal gradient CTA text with premium effects",
    category: "page",
    tags: [
      "cta",
      "spotlight",
      "cursor",
      "gradient",
      "banner",
      "premium",
      "paywall",
    ],
    component: DynamicSpotlightCTA,
    codePath: "@uitripled/ui/components/motion-core/dynamic-spotlight-cta.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
  },
  {
    id: "ai-glow-input",
    name: "AI Glow Input",
    description:
      "Input field with dynamic glow that pulses based on typing speed - smart motion feedback",
    category: "components",
    tags: ["input", "ai", "glow", "typing", "search", "smart", "feedback"],
    component: AIGlowInput,
    codePath: "@uitripled/ui/components/motion-core/ai-glow-input.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "ai-response-typing",
    name: "AI Response Typing Stream",
    description:
      "Character-by-character typing animation with natural pauses and thinking states",
    category: "components",
    tags: [
      "ai",
      "typing",
      "stream",
      "chatbot",
      "response",
      "animation",
      "text",
    ],
    component: AIResponseTyping,
    codePath: "@uitripled/ui/components/motion-core/ai-response-typing.tsx",
    duration: "30ms",
    easing: "linear",
    display: true,
  },
  {
    id: "synced-lyric-captions",
    name: "Synced Lyric Captions",
    description:
      "Bottom-to-top timed captions with play/pause controls and optional audio sync for songs or voiceovers.",
    category: "components",
    tags: [
      "lyrics",
      "captions",
      "audio",
      "script",
      "timeline",
      "framer-motion",
      "text",
    ],
    component: SyncedLyricCaptions,
    codePath: "@uitripled/ui/components/motion-core/synced-lyric-captions.tsx",
    duration: "variable",
    easing: "easeOut",
    display: true,
  },
  {
    id: "ai-unlock-animation",
    name: "AI Unlock Animation",
    description:
      "Premium unlock animation with particles, ripples, and loading states",
    category: "microinteractions",
    tags: ["ai", "unlock", "premium", "activation", "particles", "ripple"],
    component: AIUnlockAnimation,
    codePath: "@uitripled/ui/components/motion-core/ai-unlock-animation.tsx",
    duration: "3000ms",
    easing: "easeInOut",
    display: true,
  },
  {
    id: "team-section-block",
    name: "Team Section Block",
    description:
      "Animated team member cards with avatars, roles, and social links",
    category: "blocks",
    tags: ["team", "members", "cards", "avatars", "social", "about", "shadcn"],
    component: TeamSectionBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/team-section-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "newsletter-signup-block",
    name: "Newsletter Signup Block",
    description:
      "Animated newsletter subscription form with success state and gradient background",
    category: "blocks",
    tags: ["newsletter", "signup", "form", "email", "subscription", "shadcn"],
    component: NewsletterSignupBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/newsletter-signup-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "feature-comparison-block",
    name: "Feature Comparison Table",
    description:
      "Interactive pricing comparison table with animated checkmarks and plan highlights",
    category: "blocks",
    tags: ["comparison", "pricing", "table", "features", "plans", "shadcn"],
    component: FeatureComparisonBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/feature-comparison-block.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "gallery-grid-block",
    name: "Gallery Grid with Lightbox",
    description:
      "Filterable image gallery with animated lightbox and navigation",
    category: "blocks",
    tags: ["gallery", "images", "lightbox", "filter", "portfolio", "shadcn"],
    component: GalleryGridBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/gallery-grid-block.tsx",
    duration: "600ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "footer-block",
    name: "Footer Block",
    description:
      "Comprehensive footer with links, newsletter signup, social icons, and scroll-to-top",
    category: "blocks",
    tags: ["footer", "links", "social", "newsletter", "navigation", "shadcn"],
    component: FooterBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/footer-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "cta-hero-block",
    name: "CTA Hero Block",
    description:
      "Engaging hero section with email signup, video preview, and social proof",
    category: "blocks",
    tags: ["hero", "cta", "email", "video", "landing", "responsive", "shadcn"],
    component: CTAHeroBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/cta-hero-block.tsx",
    duration: "800ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "bento-grid-block",
    name: "Bento Grid Block",
    description:
      "Layered bento grid with imagery, metrics, and smooth motion reveals",
    category: "blocks",
    tags: ["bento", "grid", "layout", "motion", "shadcn"],
    component: BentoGridBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/bento-grid-block.tsx",
    duration: "900ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "services-grid-block",
    name: "Services Grid",
    description:
      "8-column responsive services grid with icons, features, and hover effects",
    category: "blocks",
    tags: ["services", "grid", "features", "icons", "responsive", "shadcn"],
    component: ServicesGridBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/services-grid-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "stats-counter-block",
    name: "Stats Counter Block",
    description:
      "Animated statistics counters with icons and gradient backgrounds",
    category: "blocks",
    tags: [
      "stats",
      "counter",
      "numbers",
      "metrics",
      "animation",
      "responsive",
      "shadcn",
    ],
    component: StatsCounterBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/stats-counter-block.tsx",
    duration: "2000ms",
    easing: "spring",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "notion-blog-page",
    name: "Notion Blog Page",
    description:
      "Notion-style publishing playbook with rich text, toggles, and supporting visuals",
    category: "blocks",
    tags: ["notion", "blog", "page", "writing", "workflow"],
    component: NotionBlogPage,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/notion-blog-page.tsx",
    duration: "variable",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "timeline-block",
    name: "Timeline Block",
    description:
      "Vertical timeline with alternating cards and animated progress line",
    category: "blocks",
    tags: ["timeline", "history", "journey", "events", "responsive", "shadcn"],
    component: TimelineBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/timeline-block.tsx",
    duration: "1500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "faq-accordion-block",
    name: "FAQ Accordion",
    description: "Expandable FAQ section with smooth accordion animations",
    category: "blocks",
    tags: ["faq", "accordion", "questions", "help", "responsive", "shadcn"],
    component: FAQAccordionBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/faq-accordion-block.tsx",
    duration: "300ms",
    easing: "easeInOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-hero-block",
    name: "Glassmorphism Hero",
    description:
      "Modern hero section with glassmorphism effects, animated background orbs, and CTA buttons",
    category: "blocks",
    tags: ["hero", "glassmorphism", "landing", "cta", "gradient", "shadcn"],
    component: GlassmorphismHeroBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-hero-block.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "feature-cards-block",
    name: "Feature Cards Grid",
    description:
      "Three feature cards with icons, hover effects, and glassmorphism styling",
    category: "blocks",
    tags: [
      "features",
      "cards",
      "grid",
      "icons",
      "hover",
      "glassmorphism",
      "shadcn",
    ],
    component: FeatureCardsBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/feature-cards-block.tsx",
    duration: "500ms",
    easing: "easeInOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-cta-block",
    name: "Glassmorphism CTA",
    description:
      "Call-to-action section with glassy card, gradient background, and animated buttons",
    category: "blocks",
    tags: ["cta", "glassmorphism", "gradient", "buttons", "banner", "shadcn"],
    component: GlassmorphismCTABlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-cta-block.tsx",
    duration: "300ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-listen-app-block",
    name: "Glassmorphism Listen App",
    description:
      "Music streaming block with glassmorphism player, curated highlights, and animated controls",
    category: "blocks",
    tags: ["music", "app", "glassmorphism", "player", "audio", "shadcn"],
    component: GlassmorphismListenAppBlock,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-listen-app-block.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-pricing-block",
    name: "Glassmorphism Pricing",
    description:
      "Pricing cards with glassmorphism effects, hover animations, and feature lists",
    category: "blocks",
    tags: ["pricing", "cards", "glassmorphism", "plans", "hover", "shadcn"],
    component: GlassmorphismPricingBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-pricing-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-testimonials-block",
    name: "Glassmorphism Testimonials",
    description:
      "Customer testimonials with glassmorphism cards, star ratings, and hover effects",
    category: "blocks",
    tags: [
      "testimonials",
      "reviews",
      "glassmorphism",
      "cards",
      "ratings",
      "shadcn",
    ],
    component: GlassmorphismTestimonialsBlock,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-testimonials-block.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-launch-timeline-block",
    name: "Glassmorphism Launch Timeline",
    description:
      "Frictionless launch roadmap with staggered motion, glassmorphism milestones, and paired CTA actions",
    category: "blocks",
    tags: ["timeline", "launch", "roadmap", "glassmorphism", "shadcn"],
    component: GlassmorphismLaunchTimelineBlock,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-launch-timeline-block.tsx",
    duration: "800ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-minimal-metrics-block",
    name: "Glassmorphism Minimal Metrics",
    description:
      "Focused metric cards with glass surfaces, subtle motion, and concierge insight CTA banner",
    category: "blocks",
    tags: ["metrics", "stats", "dashboard", "glassmorphism", "shadcn"],
    component: GlassmorphismMinimalMetricsBlock,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-minimal-metrics-block.tsx",
    duration: "750ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-logo-showcase-block",
    name: "Glassmorphism Logo Showcase",
    description:
      "Glassmorphism partner grid with floating motion, brand hints, and collaborative call-to-action",
    category: "blocks",
    tags: ["logos", "partners", "brand", "glassmorphism", "shadcn"],
    component: GlassmorphismLogoShowcaseBlock,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-logo-showcase-block.tsx",
    duration: "850ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-portfolio-block",
    name: "Glassmorphism Portfolio",
    description:
      "Personal portfolio spotlight with profile portrait, narrative highlights, and animated social links",
    category: "blocks",
    tags: [
      "portfolio",
      "profile",
      "glassmorphism",
      "social",
      "personal",
      "shadcn",
    ],
    component: GlassmorphismPortfolioBlock,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-portfolio-block.tsx",
    duration: "650ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-product-update-block",
    name: "Glassmorphism Product Updates",
    description:
      "Multi-state changelog cards with glass overlays, status badges, and GitHub integration banner",
    category: "blocks",
    tags: ["updates", "changelog", "glassmorphism", "news", "shadcn"],
    component: GlassmorphismProductUpdateBlock,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-product-update-block.tsx",
    duration: "700ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "n8n-workflow-block",
    name: "N8N Workflow Block",
    description:
      "Visual workflow automation builder with animated nodes, connections, and real-time execution monitoring",
    category: "blocks",
    tags: [
      "workflow",
      "automation",
      "n8n",
      "nodes",
      "connections",
      "visual",
      "shadcn",
    ],
    component: N8nWorkflowBlock,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/n8n-workflow-block.tsx",
    duration: "600ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "currency-converter-card",
    name: "Currency Converter Card",
    description:
      "Finance conversion widget with animated inputs, simulated exchange updates, and contextual feedback",
    category: "components",
    tags: ["finance", "currency", "converter", "card", "dashboard", "shadcn"],
    component: CurrencyConverterCard,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/currency-converter-card.tsx",
    duration: "400ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "interactive-logs-table",
    name: "Interactive Logs Table",
    description:
      "Observability logs panel with animated filters, search, and expandable rows",
    category: "blocks",
    tags: ["logs", "observability", "filters", "table", "dashboard", "shadcn"],
    component: InteractiveLogsTable,
    codePath: "@uitripled/ui/components/sections/shadcn-ui/interactive-logs-table.tsx",
    duration: "450ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "glassmorphism-statistics-card",
    name: "Glassmorphism Statistics Card",
    description:
      "Interactive statistics card with hover reveal and smooth transitions",
    category: "components",
    tags: ["card", "statistics", "stats", "hover", "shadcn", "glassmorphism"],
    component: GlassmorphismStatisticsCard,
    codePath:
      "@uitripled/ui/components/sections/shadcn-ui/glassmorphism-statistics-card.tsx",
    duration: "500ms",
    easing: "easeOut",
    display: true,
    availableIn: ["shadcnui", "baseui"],
  },
  {
    id: "kanban-board",
    name: "Kanban Board",
    description:
      "Interactive Kanban board with drag-and-drop, glassmorphism styling, and task management features",
    category: "blocks",
    tags: [
      "kanban",
      "board",
      "drag-drop",
      "task",
      "management",
      "glassmorphism",
    ],
    component: KanbanBoard,
    codePath: "@uitripled/ui/components/components/kanban/kanban-board.tsx",
    duration: "N/A",
    easing: "spring",
    display: true,
  },
  {
    id: "floating-chat-widget",
    name: "Floating Chat Widget",
    description:
      "Floating chat widget with AI agent selection dropdown and animations",
    category: "components",
    tags: ["chat", "widget", "floating", "ai", "dropdown", "animated"],
    component: FloatingChatWidget,
    codePath: "@uitripled/ui/components/components/chat/floating-chat-widget.tsx",
    duration: "300ms",
    easing: "spring",
    display: true,
  },
  {
    id: "volume-component",
    name: "Volume Component",
    description:
      "A smooth, draggable volume slider component with framer-motion animations and shadcn styling.",
    category: "components",
    tags: ["volume", "slider", "input", "framer-motion", "shadcn", "draggable"],
    component: VolumeComponent,
    codePath: "@uitripled/ui/components/components/sliders/volume-component.tsx",
    duration: "N/A",
    easing: "spring",
    display: true,
  },
  {
    id: "cards-slider",
    name: "Cards Slider",
    description:
      "Liquid smooth draggable cards slider with shadcn/ui styling and framer-motion animations",
    category: "cards",
    tags: [
      "slider",
      "cards",
      "carousel",
      "framer-motion",
      "shadcn",
      "draggable",
    ],
    component: CardsSlider,
    codePath: "@uitripled/ui/components/components/sliders/cards-slider.tsx",
    duration: "500ms",
    easing: "spring",
    display: true,
  },
];
