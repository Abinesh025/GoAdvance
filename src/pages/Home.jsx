import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {
    Share2, Search, MousePointerClick, Globe, FileText, Mail,
    UserRoundCheck,PencilRuler,
    Shield, DollarSign, Users, Headphones, ArrowRight, ChevronDown,
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ServiceCard from '../components/ServiceCard'
import {
    fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem
} from '../utils/animationVariants';
import logo from "../assets/logo.jpeg";

const services = [
    {
        icon: Share2,
        title: 'Social Media Marketing And Handling',
        description: 'Build your brand presence across all social platforms with engaging content and strategic campaigns that drive real engagement.',
    },
    {
        icon: Search,
        title: 'SEO Optimization',
        description: 'Rank higher on Google and drive organic traffic with our proven SEO strategies including on-page, off-page, and technical SEO.',
    },
    {
        icon: PencilRuler,
        title: 'Poster Designs',
        description: 'Creative and eye-catching poster designs that showcase your brand message clearly and attract attention across digital and print platforms.',
    },
    {
        icon: UserRoundCheck,
        title: 'Influencer Marketing',
        description: 'Expand your brand reach by collaborating with trusted influencers who connect your business with the right audience and drive authentic engagement.',
    },
    {
        icon: MousePointerClick,
        title: 'Meta ADS',
        description: 'Get instant visibility with targeted pay-per-click campaigns that deliver measurable ROI and qualified leads to your business.',
    },
    {
        icon: Globe,
        title: 'Website Development',
        description: 'Launch stunning, fast, and responsive websites that convert visitors into customers. Modern design meets powerful functionality.',
    }
]

const whyChooseUs = [
    {
        icon: Shield,
        title: 'Proven Results',
        description: 'Data-driven strategies that have helped businesses increase their online presence by up to 300%.',
    },
    {
        icon: DollarSign,
        title: 'Affordable Pricing',
        description: 'Premium quality digital marketing services at competitive prices that fit every budget.',
    },
    {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Round-the-clock support to ensure your campaigns run smoothly and your questions are answered.',
    },
]


function StatCounter({ value, suffix, label }) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

    return (
        <motion.div ref={ref} variants={staggerItem} className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                {inView ? <CountUp end={value} duration={2.5} /> : '0'}{suffix}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{label}</p>
        </motion.div>
    )
}

export default function Home() {
    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-6"
                            >
                                ⚡ Next-Gen Digital Marketing Agency
                            </motion.span>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-5xl font-heading font-bold leading-tight text-gray-900 dark:text-white mb-6"
                            >
                                Grow Your Business with{' '}
                                <span className="gradient-text">Smart Digital Marketing</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
                            >
                                We help businesses increase online visibility and generate more leads with data-driven strategies that deliver measurable results.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 btn-glow"
                                >
                                    Get In Touch <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    to="/portfolio"
                                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-primary-700 dark:text-gray-300 bg-gray-100 dark:bg-dark-200 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 border-2 border-primary-600 dark:border-white/5 transition-all duration-300"
                                >
                                    View Our Work
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right - Hero Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                            className="hidden lg:block relative"
                        >
                            <div className="relative w-[90%] aspect-square max-w-lg mx-auto">
                                {/* Animated circles */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-primary-200 dark:border-primary-500/20"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                                    className="absolute inset-8 rounded-full border-2 border-dashed border-primary-300 dark:border-primary-400/20"
                                />

                                {/* Center content */}
                                <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-500/20    to-primary-700/20 dark:from-primary-500/10 dark:to-primary-700/10 backdrop-blur-sm flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="text-6xl mb-2 rounded-full border-2 border-solid border-primary-200 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-200 btn-glow pointer">
                                            <img src={logo} alt="Logo" className='rounded-full' width={250} height={250}/>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <motion.div
                                    animate={{ y: [-10, 10, -10] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute top-10 right-10 px-2 py-2 rounded-xl bg-white dark:bg-dark-100 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200/50 dark:border-white/5"
                                >
                                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">📱 Social Media</p>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [10, -10, 10] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute bottom-20 left-0 px-2 py-2 rounded-xl bg-white dark:bg-dark-100 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200/50 dark:border-white/5"
                                >
                                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">🔍 SEO Ready</p>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [-5, 15, -5] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute bottom-20 right-[-8%] px-1 py-2 rounded-xl bg-white dark:bg-dark-100 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200/50 dark:border-white/5"
                                >
                                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">⭐ Influencer Marketing</p>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [-5, 15, -5] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                                    className="absolute top-10 left-10 px-2 py-2 rounded-xl bg-white dark:bg-dark-100 shadow-lg shadow-black/5 dark:shadow-black/20 border border-gray-200/50 dark:border-white/5"
                                >
                                    <p className="text-xs font-medium text-gray-700 dark:text-gray-300">📢 Meta Ads</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
                    >
                        <span className="text-xs">Scroll Down</span>
                        <ChevronDown className="w-4 h-4" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Overview */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            What We Offer
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Our <span className="gradient-text">Services</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                           Strategic digital marketing solutions designed to help your business grow and build a strong online presence.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard key={service.title} {...service} index={index} />
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 lg:py-28 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            Why Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Why <span className="gradient-text">Choose Us?</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            We are dedicated to delivering reliable digital solutions that help your business grow and stand out online.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseUs.map((item, index) => (
                            <motion.div
                                key={item.title}
                                variants={staggerItem}
                                whileHover={{ y: -5 }}
                                className="group text-center p-8 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-500"
                            >
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-700/20 flex items-center justify-center mb-5 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
                                    <item.icon className="w-7 h-7 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection
                        variants={fadeInUp}
                        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 p-12 lg:p-16 text-center"
                    >
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
                                Ready to Grow Your Business?
                            </h2>
                            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                              Schedule a free consultation and explore how we can support your digital growth journey.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-primary-600 bg-white hover:bg-gray-100 shadow-lg transition-all duration-300"
                                >
                                    Get In Touch<ArrowRight className="w-4 h-4" />
                                </Link>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300"
                                >
                                    Connect with  WhatsApp
                                </a>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
