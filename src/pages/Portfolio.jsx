import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import {
    ChevronRight, TrendingUp, ArrowRight, BarChart3,
    Globe, Users, DollarSign, Target, Zap, Search,
    Share2, Mail, FileText, MousePointerClick
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from '../utils/animationVariants'

/* ───────── DATA ───────── */

const whyItMatters = [
    {
        icon: Globe,
        value: 5.3,
        suffix: 'B+',
        label: 'Internet Users Worldwide',
        description: 'Over 5.3 billion people use the internet daily — your audience is online.',
        color: 'from-blue-500 to-cyan-400',
    },
    {
        icon: DollarSign,
        value: 740,
        suffix: 'B+',
        label: 'Global Digital Ad Spend',
        description: 'Businesses invest over $740 billion annually in digital advertising.',
        color: 'from-emerald-500 to-green-400',
    },
    {
        icon: Users,
        value: 71,
        suffix: '%',
        label: 'Consumers Prefer Digital',
        description: '71% of consumers are more likely to purchase based on social media referrals.',
        color: 'from-violet-500 to-purple-400',
    },
    {
        icon: TrendingUp,
        value: 3,
        suffix: 'x',
        label: 'Higher ROI than Traditional',
        description: 'Digital marketing delivers 3x more leads per dollar compared to traditional marketing.',
        color: 'from-orange-500 to-amber-400',
    },
]

// Global Digital Ad Spending (in billions USD) — industry approximations
const growthData = [
    { year: '2019', value: 325, color: '#60a5fa' },
    { year: '2020', value: 378, color: '#3b82f6' },
    { year: '2021', value: 455, color: '#2563eb' },
    { year: '2022', value: 522, color: '#1d4ed8' },
    { year: '2023', value: 601, color: '#1e40af' },
    { year: '2024', value: 680, color: '#7c3aed' },
    { year: '2025', value: 740, color: '#6d28d9' },
    { year: '2026', value: 836, color: '#5b21b6' },
]

const channelEffectiveness = [
    { channel: 'SEO', percentage: 92, icon: Search, color: 'from-blue-500 to-blue-600' },
    { channel: 'Email Marketing', percentage: 88, icon: Mail, color: 'from-emerald-500 to-emerald-600' },
    { channel: 'Content Marketing', percentage: 85, icon: FileText, color: 'from-violet-500 to-violet-600' },
    { channel: 'Social Media', percentage: 82, icon: Share2, color: 'from-pink-500 to-pink-600' },
    { channel: 'PPC / Paid Ads', percentage: 78, icon: MousePointerClick, color: 'from-amber-500 to-amber-600' },
]

const caseStudies = [
    {
        title: 'E-commerce Revenue Growth',
        client: 'Fashion Retailer',
        problem: 'Low online visibility and declining website traffic despite having quality products. The brand relied heavily on foot traffic and had no digital presence.',
        solution: 'Implemented comprehensive SEO, Google Ads, and social media strategy with focus on branded content, influencer partnerships, and retargeting campaigns.',
        results: [
            { metric: 'Revenue Increase', value: '320%' },
            { metric: 'Organic Traffic', value: '+450%' },
            { metric: 'Conversion Rate', value: '7.2%' },
            { metric: 'Return on Ad Spend', value: '5.4x' },
        ],
        duration: '6 months',
    },
    {
        title: 'Local Business Expansion',
        client: 'Restaurant Chain',
        problem: 'Recently opened 3 new locations but struggling to build local awareness and foot traffic. Google Maps listing had minimal reviews and poor ranking.',
        solution: 'Local SEO optimization, Google My Business management, geo-targeted social media campaigns, and a review generation strategy.',
        results: [
            { metric: 'Local Visibility', value: '+280%' },
            { metric: 'Online Orders', value: '+190%' },
            { metric: 'Google Reviews', value: '4.8★' },
            { metric: 'New Customers', value: '+150/mo' },
        ],
        duration: '4 months',
    },
    {
        title: 'B2B Lead Generation',
        client: 'SaaS Startup',
        problem: 'Struggling to generate qualified B2B leads. Cold outreach was ineffective and the sales pipeline was running dry with high customer acquisition costs.',
        solution: 'LinkedIn thought leadership strategy, targeted content marketing with whitepapers and webinars, combined with SEO-optimized landing pages and retargeting funnels.',
        results: [
            { metric: 'Qualified Leads', value: '+340%' },
            { metric: 'Cost per Lead', value: '-62%' },
            { metric: 'LinkedIn Followers', value: '+8K' },
            { metric: 'Demo Bookings', value: '+200%' },
        ],
        duration: '5 months',
    },
    {
        title: 'Healthcare Brand Awareness',
        client: 'Multi-Specialty Clinic',
        problem: 'New clinic in a competitive market with zero brand recognition. Patients were choosing established competitors due to lack of trust and online visibility.',
        solution: 'Built authority through educational health blogs, doctor video series on social, Google Ads for high-intent medical keywords, and patient testimonial campaigns.',
        results: [
            { metric: 'Website Traffic', value: '+520%' },
            { metric: 'Appointment Bookings', value: '+310%' },
            { metric: 'Brand Searches', value: '+180%' },
            { metric: 'Patient Reviews', value: '4.9★' },
        ],
        duration: '8 months',
    },
]

/* ───────── SUB-COMPONENTS ───────── */

function StatCard({ icon: Icon, value, suffix, label, description, color, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <motion.div
            ref={ref}
            variants={staggerItem}
            whileHover={{ y: -6 }}
            className="group relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
        >
            {/* Gradient accent */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />

            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl sm:text-4xl font-heading font-bold gradient-text mb-2">
                {inView ? <CountUp end={value} duration={2.5} decimals={value % 1 !== 0 ? 1 : 0} /> : '0'}{suffix}
            </div>
            <h3 className="text-base font-heading font-semibold text-gray-900 dark:text-white mb-2">{label}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
        </motion.div>
    )
}

function GrowthChart() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
    const maxVal = Math.max(...growthData.map(d => d.value))

    return (
        <div ref={ref} className="w-full">
            {/* Chart */}
            <div className="relative bg-white dark:bg-dark-100 rounded-2xl border border-gray-200/60 dark:border-white/5 p-4 sm:p-6 lg:p-8 shadow-sm">
                <div className="flex items-end justify-between gap-2 sm:gap-3 lg:gap-5" style={{ height: 'clamp(200px, 35vw, 320px)' }}>
                    {growthData.map((d, i) => {
                        const heightPct = (d.value / maxVal) * 100
                        return (
                            <div key={d.year} className="flex-1 flex flex-col items-center justify-end h-full group">
                                {/* Value label */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                                    className="text-[10px] sm:text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1 sm:mb-2"
                                >
                                    ${d.value}B
                                </motion.span>

                                {/* Bar */}
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={inView ? { height: `${heightPct}%` } : {}}
                                    transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                                    className="w-full rounded-t-lg sm:rounded-t-xl group-hover:opacity-90 transition-opacity relative"
                                    style={{ backgroundColor: d.color, minWidth: '20px' }}
                                >
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 rounded-t-lg sm:rounded-t-xl bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                                </motion.div>

                                {/* Year label */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : {}}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-400 mt-2 sm:mt-3"
                                >
                                    {d.year}
                                </motion.span>
                            </div>
                        )
                    })}
                </div>

                {/* Y-axis label */}
                <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
                    Global Digital Advertising Spend (USD Billions) — Source: Industry Reports
                </p>
            </div>
        </div>
    )
}

function ChannelBar({ channel, percentage, icon: Icon, color, index }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <motion.div
            ref={ref}
            variants={staggerItem}
            className="group"
        >
            <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-sm sm:text-base font-heading font-semibold text-gray-900 dark:text-white flex-1 min-w-0">
                    {channel}
                </span>
                <span className="text-sm sm:text-base font-heading font-bold gradient-text flex-shrink-0">
                    {inView ? <CountUp end={percentage} duration={2} /> : 0}%
                </span>
            </div>
            <div className="h-3 sm:h-4 rounded-full bg-gray-100 dark:bg-dark-200 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${percentage}%` } : {}}
                    transition={{ duration: 1.2, delay: index * 0.15, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
                >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/25 to-white/0" />
                </motion.div>
            </div>
        </motion.div>
    )
}

/* ───────── MAIN PAGE ───────── */

export default function Portfolio() {
    return (
        <div className="overflow-hidden pt-20">
            {/* Page Header */}
            <section className="py-12 sm:py-16 lg:py-20 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span className="text-primary-600 dark:text-primary-400">Case Studies</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Case Studies & <span className="gradient-text">Insights</span>
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            Discover why digital marketing is essential, explore industry growth trends, and see real results from our campaigns.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Why Digital Marketing Matters ── */}
            <section className="py-16 sm:py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-12 sm:mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            Why It Matters
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Why <span className="gradient-text">Digital Marketing</span> is Essential
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            In today's connected world, digital marketing is no longer optional — it's the primary way businesses reach, engage, and convert their audience.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {whyItMatters.map((item, i) => (
                            <StatCard key={item.label} {...item} index={i} />
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* ── Growth of Digital Marketing ── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-center">
                        <AnimatedSection variants={fadeInLeft} className="lg:col-span-2">
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                                Industry Growth
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                                The <span className="gradient-text">Explosive Growth</span> of Digital Marketing
                            </h2>
                            <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                <p>
                                    Global digital ad spending has more than doubled since 2019, surpassing <strong className="text-gray-900 dark:text-white">$740 billion in 2025</strong> and projected to hit $836B by 2026.
                                </p>
                                <p>
                                    This explosive growth is driven by the shift to mobile, social commerce, AI-powered targeting, and the increasing time consumers spend online.
                                </p>
                                <p>
                                    Businesses that invest in digital marketing today position themselves for <strong className="text-gray-900 dark:text-white">compounding returns</strong> as the ecosystem matures.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variants={fadeInRight} className="lg:col-span-3">
                            <GrowthChart />
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ── Channel Effectiveness ── */}
            <section className="py-16 sm:py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <AnimatedSection variants={fadeInLeft} className="order-2 lg:order-1">
                            <div className="p-5 sm:p-8 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm">
                                <AnimatedSection variants={staggerContainer} className="space-y-5 sm:space-y-6">
                                    {channelEffectiveness.map((ch, i) => (
                                        <ChannelBar key={ch.channel} {...ch} index={i} />
                                    ))}
                                </AnimatedSection>
                                <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500 mt-5 sm:mt-6 text-center">
                                    Effectiveness score based on ROI, reach & engagement metrics — Industry Benchmarks 2025
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variants={fadeInRight} className="order-1 lg:order-2">
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                                Channel Comparison
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                                Which Channels <span className="gradient-text">Perform Best?</span>
                            </h2>
                            <div className="space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                <p>
                                    Not all digital channels are equal. <strong className="text-gray-900 dark:text-white">SEO leads the pack</strong> with a 92% effectiveness score, delivering consistent long-term organic traffic and trust.
                                </p>
                                <p>
                                    Email marketing follows closely at 88%, offering the highest direct ROI of any channel. Content marketing and social media round out the top performers.
                                </p>
                                <p>
                                    A successful strategy combines <strong className="text-gray-900 dark:text-white">multiple channels</strong> working together — our clients see the best results from integrated, cross-channel campaigns.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* ── Case Studies ── */}
            <section className="py-16 sm:py-20 lg:py-28 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-12 sm:mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            Success Stories
                        </span>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Real <span className="gradient-text">Results</span> We've Delivered
                        </h2>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Real results from real businesses. See how our strategies have driven measurable growth across industries.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="space-y-6 sm:space-y-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.title}
                                variants={staggerItem}
                                className="p-5 sm:p-8 lg:p-10 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm hover:shadow-lg transition-shadow duration-500"
                            >
                                {/* Header */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25 flex-shrink-0">
                                            <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 dark:text-white">{study.title}</h3>
                                            <p className="text-sm text-primary-500">{study.client}</p>
                                        </div>
                                    </div>
                                    <span className="sm:ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 w-fit">
                                        <Zap className="w-3 h-3" /> {study.duration}
                                    </span>
                                </div>

                                {/* Content Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-semibold text-red-500 dark:text-red-400 uppercase tracking-wider mb-2">Problem</h4>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{study.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wider mb-2">Solution</h4>
                                        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{study.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs sm:text-sm font-semibold text-accent-green uppercase tracking-wider mb-3">Results</h4>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                            {study.results.map((r) => (
                                                <div key={r.metric}>
                                                    <p className="text-base sm:text-lg font-heading font-bold gradient-text">{r.value}</p>
                                                    <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400">{r.metric}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="py-16 sm:py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection variants={fadeInUp}>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Want Results Like These?
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help your business achieve similar growth. Book your free consultation today.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 btn-glow"
                        >
                            Start Your Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
