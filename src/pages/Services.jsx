import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Share2, Search, MousePointerClick, Globe, FileText, Mail,
    ChevronRight, ArrowRight, Check,
    MessageSquare, Target, Rocket, BarChart3, FileCheck
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import {
    fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem
} from '../utils/animationVariants'

const servicesData = [
    {
        icon: Share2,
        title: 'Social Media Marketing',
        description: 'Build a powerful social media presence that engages your audience and drives conversions. We manage your profiles, create compelling content, and run targeted ad campaigns.',
        whyImportant: [
            '3.6+ billion people use social media worldwide',
            'Builds brand awareness and loyalty',
            'Direct channel to connect with customers',
            'Cost-effective marketing channel',
        ],
        whatWeDo: [
            'Platform strategy & management (Instagram, Facebook, LinkedIn, Twitter)',
            'Content creation (graphics, videos, stories, reels)',
            'Paid social advertising & optimization',
            'Community management & engagement',
            'Analytics & monthly reporting',
        ],
    },
    {
        icon: Search,
        title: 'SEO (Search Engine Optimization)',
        description: 'Get found on Google when it matters most. Our comprehensive SEO strategies drive organic traffic and improve your search engine rankings for targeted keywords.',
        whyImportant: [
            '93% of online experiences begin with a search engine',
            'SEO leads have a 14.6% close rate',
            'Long-term, sustainable traffic source',
            'Builds credibility and trust',
        ],
        whatWeDo: [
            'Keyword research & strategy',
            'On-page SEO optimization (meta tags, content, structure)',
            'Technical SEO (site speed, mobile, schema)',
            'Link building & off-page SEO',
            'Local SEO for businesses targeting local customers',
        ],
    },
    {
        icon: MousePointerClick,
        title: 'Google Ads / PPC',
        description: 'Get instant visibility at the top of search results with targeted pay-per-click campaigns. We maximize your ad spend to deliver the highest possible ROI.',
        whyImportant: [
            'Immediate results and traffic',
            'Precise targeting by location, demographics, and interests',
            'Full control over budget and bidding',
            'Measurable ROI on every rupee spent',
        ],
        whatWeDo: [
            'Google Search & Display campaigns',
            'Shopping ads for e-commerce',
            'Remarketing & retargeting campaigns',
            'Ad copywriting & A/B testing',
            'Bid management & budget optimization',
        ],
    },
    {
        icon: Globe,
        title: 'Website Development',
        description: 'Your website is your digital storefront. We create stunning, fast, and conversion-optimized websites that turn visitors into paying customers.',
        whyImportant: [
            'First impression matters — 94% is design related',
            'Mobile-responsive design is essential',
            'Fast-loading sites rank higher on Google',
            'Your website works for you 24/7',
        ],
        whatWeDo: [
            'Custom website design & development',
            'Landing page creation & optimization',
            'E-commerce website setup (Shopify, WooCommerce)',
            'WordPress development & customization',
            'Website maintenance & support',
        ],
    },
    {
        icon: FileText,
        title: 'Content Marketing',
        description: 'Engage your audience with valuable, relevant content that establishes your expertise and drives organic traffic to your business.',
        whyImportant: [
            'Content marketing generates 3x more leads than traditional marketing',
            'Builds thought leadership and brand authority',
            'Supports SEO strategy with fresh, relevant content',
            'Educates and nurtures potential customers',
        ],
        whatWeDo: [
            'Blog writing & content strategy',
            'Video content production',
            'Infographic design & creation',
            'Social media content creation',
            'Content calendar planning & management',
        ],
    },
    {
        icon: Mail,
        title: 'Email Marketing',
        description: 'Stay connected with your audience through targeted email campaigns that nurture leads, drive sales, and build lasting customer relationships.',
        whyImportant: [
            'Email generates $36 for every $1 spent',
            "Direct access to your audience's inbox",
      'Highly personalizable and segmentable',
            'Automated sequences save time and effort',
        ],
        whatWeDo: [
            'Email list building & segmentation',
            'Newsletter design & creation',
            'Automated drip campaigns & sequences',
            'A/B testing for subject lines & content',
            'Performance tracking & optimization',
        ],
    },
]

const processSteps = [
    { step: '01', icon: MessageSquare, title: 'Consultation', description: 'We begin with a free consultation to understand your business goals, target audience, and current challenges.' },
    { step: '02', icon: Target, title: 'Strategy Development', description: 'Our team develops a customized digital marketing strategy tailored specifically to your business needs.' },
    { step: '03', icon: Rocket, title: 'Implementation', description: 'We execute the strategy across all chosen channels with precision, creativity, and attention to detail.' },
    { step: '04', icon: BarChart3, title: 'Monitoring & Optimization', description: 'Continuous monitoring and data-driven optimization to maximize your campaign performance and ROI.' },
    { step: '05', icon: FileCheck, title: 'Reporting', description: 'Transparent, detailed reports showing your results, key metrics, insights, and recommendations.' },
]

export default function Services() {
    return (
        <div className="overflow-hidden pt-20">
            {/* Page Header */}
            <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span className="text-primary-600 dark:text-primary-400">Services</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            Comprehensive digital marketing solutions designed to help your business grow, attract more customers, and achieve lasting success.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
                    {servicesData.map((service, index) => (
                        <AnimatedSection
                            key={service.title}
                            variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                        >
                            <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                                {/* Content Side */}
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25">
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 dark:text-white">
                                            {service.title}
                                        </h2>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 btn-glow"
                                    >
                                        Get Started <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Info Cards Side */}
                                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                    <div className="p-6 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5">
                                        <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4">
                                            Why It's Important
                                        </h3>
                                        <ul className="space-y-3">
                                            {service.whyImportant.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                    <Check className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-6 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5">
                                        <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4">
                                            What We Do
                                        </h3>
                                        <ul className="space-y-3">
                                            {service.whatWeDo.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400">
                                                    <Check className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 lg:py-28 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            Our Process
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            How We <span className="gradient-text">Work</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Our proven 5-step process ensures your campaigns are strategically planned, expertly executed, and continuously optimized.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                variants={staggerItem}
                                whileHover={{ y: -5 }}
                                className="relative text-center p-6 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 hover:shadow-lg transition-all duration-500"
                            >
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary-300 dark:bg-primary-500/30" />
                                )}
                                <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4 shadow-lg shadow-primary-500/25">
                                    <step.icon className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xs font-semibold text-primary-500 dark:text-primary-400 mb-1 block">Step {step.step}</span>
                                <h3 className="text-sm font-heading font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Pricing Hint CTA */}
            <section className="py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection variants={fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Flexible Pricing for <span className="gradient-text">Every Business</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            We offer customized packages tailored to your business needs and budget. No hidden fees, no long-term contracts — just results.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 btn-glow"
                        >
                            Get a Custom Quote <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
