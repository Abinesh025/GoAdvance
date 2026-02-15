import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight, TrendingUp, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import PortfolioCard from '../components/PortfolioCard'
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animationVariants'

const categories = ['All', 'Social Media', 'SEO', 'Web Design', 'Content', 'PPC']

const projects = [
    {
        title: 'FashionBrand Social Campaign',
        category: 'Social Media',
        description: 'Increased Instagram engagement by 250% through strategic content planning and influencer partnerships.',
        image: null,
    },
    {
        title: 'TechStartup SEO Overhaul',
        category: 'SEO',
        description: 'Achieved first-page rankings for 15+ competitive keywords within 4 months with comprehensive SEO strategy.',
        image: null,
    },
    {
        title: 'Restaurant Website Redesign',
        category: 'Web Design',
        description: 'Modern, mobile-first website redesign that increased online orders by 180% and reduced bounce rate by 40%.',
        image: null,
    },
    {
        title: 'Fitness Studio Content Strategy',
        category: 'Content',
        description: 'Created a content ecosystem across blog, social, and email that drove 300+ new membership inquiries.',
        image: null,
    },
    {
        title: 'E-commerce Google Ads Campaign',
        category: 'PPC',
        description: 'Optimized ad spend to achieve 5x ROAS with targeted Google Shopping and Search campaigns.',
        image: null,
    },
    {
        title: 'Real Estate Social Strategy',
        category: 'Social Media',
        description: 'Built a social presence from scratch reaching 50K+ followers and generating 200+ leads per month.',
        image: null,
    },
    {
        title: 'Healthcare Clinic SEO',
        category: 'SEO',
        description: 'Local SEO strategy that placed the clinic in the top 3 Google Map results for 10+ service keywords.',
        image: null,
    },
    {
        title: 'SaaS Landing Page Design',
        category: 'Web Design',
        description: 'High-converting landing page design with A/B testing that improved conversion rate from 2% to 8.5%.',
        image: null,
    },
    {
        title: 'Travel Blog Content Marketing',
        category: 'Content',
        description: 'Grew organic traffic from 5K to 80K monthly visitors through strategic blog content and SEO optimization.',
        image: null,
    },
]

const caseStudies = [
    {
        title: 'E-commerce Revenue Growth',
        client: 'Fashion Retailer',
        problem: 'Low online visibility and declining website traffic despite having quality products.',
        solution: 'Implemented comprehensive SEO, Google Ads, and social media strategy with focus on branded content.',
        results: [
            { metric: 'Revenue Increase', value: '320%' },
            { metric: 'Organic Traffic', value: '+450%' },
            { metric: 'Conversion Rate', value: '7.2%' },
            { metric: 'Return on Ad Spend', value: '5.4x' },
        ],
    },
    {
        title: 'Local Business Expansion',
        client: 'Restaurant Chain',
        problem: 'Recently opened new locations but struggling to build local awareness and foot traffic.',
        solution: 'Local SEO optimization, Google My Business management, and geo-targeted social media campaigns.',
        results: [
            { metric: 'Local Visibility', value: '+280%' },
            { metric: 'Online Orders', value: '+190%' },
            { metric: 'Google Reviews', value: '4.8★' },
            { metric: 'New Customers', value: '+150/mo' },
        ],
    },
]

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter((p) => p.category === activeCategory)

    return (
        <div className="overflow-hidden pt-20">
            {/* Page Header */}
            <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span className="text-primary-600 dark:text-primary-400">Portfolio</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Our <span className="gradient-text">Work</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            Check out our recent projects and see how we've helped businesses grow their digital presence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Portfolio Grid */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filter Tabs */}
                    <AnimatedSection variants={fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                                        : 'bg-gray-100 dark:bg-dark-200 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-300'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </AnimatedSection>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.title}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <PortfolioCard {...project} index={index} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-20 lg:py-28 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            Success Stories
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Case <span className="gradient-text">Studies</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Real results from real businesses. See how our strategies have driven measurable growth.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="space-y-8">
                        {caseStudies.map((study, index) => (
                            <motion.div
                                key={study.title}
                                variants={staggerItem}
                                className="p-8 lg:p-10 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm"
                            >
                                <div className="flex items-start gap-3 mb-6">
                                    <TrendingUp className="w-6 h-6 text-primary-500 mt-1" />
                                    <div>
                                        <h3 className="text-xl font-heading font-bold text-gray-900 dark:text-white">{study.title}</h3>
                                        <p className="text-sm text-primary-500">{study.client}</p>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    <div>
                                        <h4 className="text-sm font-semibold text-red-500 dark:text-red-400 uppercase tracking-wider mb-2">Problem</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{study.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-primary-500 dark:text-primary-400 uppercase tracking-wider mb-2">Solution</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{study.solution}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-accent-green uppercase tracking-wider mb-3">Results</h4>
                                        <div className="grid grid-cols-2 gap-3">
                                            {study.results.map((r) => (
                                                <div key={r.metric}>
                                                    <p className="text-lg font-heading font-bold gradient-text">{r.value}</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{r.metric}</p>
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

            {/* CTA */}
            <section className="py-20 lg:py-28">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <AnimatedSection variants={fadeInUp}>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Want Results Like These?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can help your business achieve similar growth. Book your free consultation today.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 btn-glow"
                        >
                            Start Your Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
