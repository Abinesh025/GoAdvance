import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    Target, Eye, Lightbulb, Heart, Award, Users,
    ChevronRight, MessageSquare, Rocket, BarChart3, FileCheck
} from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import {
    fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem
} from '../utils/animationVariants'
import logo from "../assets/logo.jpeg";

const values = [
    { icon: Eye, title: 'Transparency', description: 'We believe in open communication and keep our clients informed at every step.' },
    { icon: Lightbulb, title: 'Innovation', description: 'Staying ahead of trends to deliver cutting-edge marketing solutions.' },
    { icon: Heart, title: 'Client Success', description: 'Your success is our priority. We measure our success by your growth.' },
    { icon: Award, title: 'Quality', description: 'Delivering premium quality work that exceeds expectations, every time.' },
    { icon: Users, title: 'Collaboration', description: 'Working together as partners to achieve your business goals.' },
    { icon: Target, title: 'Integrity', description: 'Honest practices and ethical strategies that build lasting relationships.' },
]

const process = [
    { step: '01', icon: MessageSquare, title: 'Consultation', description: 'We start by understanding your business, goals, and target audience through an in-depth discussion.' },
    { step: '02', icon: Target, title: 'Strategy', description: 'Our team crafts a customized digital marketing strategy tailored to your specific needs and objectives.' },
    { step: '03', icon: Rocket, title: 'Execution', description: 'We implement the strategy across all chosen channels with precision and attention to detail.' },
    { step: '04', icon: BarChart3, title: 'Monitor & Optimize', description: 'Continuous monitoring and data-driven optimization to maximize your campaign performance.' },
    { step: '05', icon: FileCheck, title: 'Reporting', description: 'Transparent, detailed reports showing your results, insights, and recommendations for growth.' },
]

export default function About() {
    return (
        <div className="overflow-hidden pt-20">
            {/* Page Header */}
            <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span className="text-primary-600 dark:text-primary-400">About</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            About <span className="gradient-text">Us</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            Learn more about who we are, what drives us, and how we help businesses succeed in the digital world.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <AnimatedSection variants={fadeInLeft}>
                            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                                Our Story
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-6">
                                Who <span className="gradient-text">We Are</span>
                            </h2>
                            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                                <p>
                                  Aoadvance Digital Marketing was founded with a clear mission — to help businesses grow in the digital world through smart, effective, and affordable marketing solutions. We believe every business deserves a strong online presence, and our goal is to turn your ideas into impactful digital success.
                                </p>
                                <p>
                                Our team of creative marketers, designers, and strategists focuses on building powerful campaigns that not only attract attention but also generate real results. From startups to growing businesses, we support brands in increasing visibility, engaging their audience, and achieving long-term growth.
                                </p>
                                <p>
                                   What makes Aoadvance Digital Marketing different is our focus on innovation, data-driven strategies, and strong client relationships. When you partner with us, you gain a committed team dedicated to helping your business succeed and grow continuously.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection variants={fadeInRight}>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-500/10 dark:to-primary-700/10 flex items-center justify-center overflow-hidden">
                                    <div className="text-center p-8">
                                        <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-700/20 dark:from-primary-500/10 dark:to-primary-700/10 backdrop-blur-sm flex items-center justify-center">
                                            <div className="text-center p-8">
                                                <div className="text-6xl mb-4 rounded-full border-2 border-solid border-primary-200 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-200 btn-glow pointer">
                                                    <img src={logo} alt="Logo" className='rounded-full' width={250} height={250}/>
                                                    
                                                </div>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">Where creativity meets strategy</p>
                                            </div>
                                            
                                        </div>
                                    
                                    </div>
                                </div>
                                {/* Decorative */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-400/20 rounded-full blur-2xl" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 lg:py-28 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={staggerContainer} className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            variants={staggerItem}
                            className="p-8 lg:p-10 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/25">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To empower businesses with innovative digital marketing solutions that drive growth, increase brand awareness, and deliver exceptional ROI. We're committed to making digital success accessible to everyone.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerItem}
                            className="p-8 lg:p-10 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-green to-emerald-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/25">
                                <Eye className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                To become the most trusted digital marketing partner for businesses worldwide, setting new standards in creativity, transparency, and results-driven marketing strategies.
                            </p>
                        </motion.div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            What Drives Us
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Our Core <span className="gradient-text">Values</span>
                        </h2>
                    </AnimatedSection>

                    <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {values.map((value) => (
                            <motion.div
                                key={value.title}
                                variants={staggerItem}
                                whileHover={{ y: -5 }}
                                className="group p-6 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 hover:shadow-lg transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-700/20 flex items-center justify-center mb-4 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
                                    <value.icon className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </AnimatedSection>
                </div>
            </section>

            {/* Our Approach / Process */}
            <section className="py-20 lg:py-28 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp} className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-500/20 mb-4">
                            How We Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Our <span className="gradient-text">Approach</span>
                        </h2>
                    </AnimatedSection>

                    <div className="max-w-3xl mx-auto">
                        {process.map((step, index) => (
                            <AnimatedSection
                                key={step.step}
                                variants={fadeInUp}
                                className="relative flex gap-6 mb-8 last:mb-0"
                            >
                                {/* Timeline line */}
                                {index < process.length - 1 && (
                                    <div className="absolute left-7 top-14 bottom-0 w-px bg-gradient-to-b from-primary-400 to-primary-400/0 dark:from-primary-500 dark:to-primary-500/0" />
                                )}

                                {/* Step number */}
                                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/25 z-10">
                                    <span className="text-sm font-bold text-white">{step.step}</span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-8">
                                    <div className="flex items-center gap-3 mb-2">
                                        <step.icon className="w-5 h-5 text-primary-500" />
                                        <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
