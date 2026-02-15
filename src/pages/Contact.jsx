import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
    ChevronRight, Mail, Phone, MapPin, Clock,
    MessageCircle
} from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import ContactForm from '../components/ContactForm'
import {
    fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem
} from '../utils/animationVariants'

const contactInfo = [
    {
        icon: Mail,
        title: 'Email Us',
        value: 'hello@nexadigital.com',
        href: 'mailto:hello@nexadigital.com',
        description: 'We respond within 24 hours',
    },
    {
        icon: Phone,
        title: 'Call Us',
        value: '+91 98765 43210',
        href: 'tel:+919876543210',
        description: 'Mon-Sat, 9 AM - 7 PM IST',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: '123 Business Park, Mumbai',
        href: '#',
        description: 'By appointment only',
    },
    {
        icon: Clock,
        title: 'Working Hours',
        value: 'Mon - Sat: 9AM - 7PM',
        href: null,
        description: 'Sunday closed',
    },
]

export default function Contact() {
    return (
        <div className="overflow-hidden pt-20">
            {/* Page Header */}
            <section className="py-16 lg:py-20 bg-gray-50/50 dark:bg-dark-100/50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                            <Link to="/" className="hover:text-primary-500 transition-colors">Home</Link>
                            <ChevronRight className="w-3.5 h-3.5" />
                            <span className="text-primary-600 dark:text-primary-400">Contact</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            Let's discuss how we can help your business grow. Reach out to us and we'll respond within 24 hours.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 lg:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Form */}
                        <AnimatedSection variants={fadeInLeft} className="lg:col-span-3">
                            <div className="p-8 lg:p-10 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm">
                                <h2 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
                                    Send us a Message
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
                                    Fill out the form below and we'll get back to you as soon as possible.
                                </p>
                                <ContactForm />
                            </div>
                        </AnimatedSection>

                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <AnimatedSection variants={staggerContainer} className="space-y-4">
                                {contactInfo.map((info) => (
                                    <motion.div
                                        key={info.title}
                                        variants={staggerItem}
                                        whileHover={{ x: 5 }}
                                        className="p-5 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 hover:shadow-lg transition-all duration-500"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-700/20 flex items-center justify-center flex-shrink-0">
                                                <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-heading font-semibold text-gray-900 dark:text-white mb-0.5">
                                                    {info.title}
                                                </h3>
                                                {info.href ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                                                    >
                                                        {info.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{info.value}</p>
                                                )}
                                                <p className="text-xs text-gray-500 dark:text-gray-500 mt-0.5">{info.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatedSection>

                            {/* Quick Contact Buttons */}
                            <AnimatedSection variants={fadeInRight} className="space-y-3 pt-4">
                                <a
                                    href="https://wa.me/919876543210?text=Hi%2C%20I'm%20interested%20in%20your%20digital%20marketing%20services."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl text-sm font-semibold text-white bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300"
                                >
                                    <FaWhatsapp className="w-5 h-5" /> Chat on WhatsApp
                                </a>
                                <a
                                    href="mailto:hello@nexadigital.com"
                                    className="flex items-center justify-center gap-3 w-full py-3.5 rounded-xl text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-dark-200 hover:bg-gray-200 dark:hover:bg-dark-300 border border-gray-200 dark:border-white/5 transition-all duration-300"
                                >
                                    <Mail className="w-4 h-4" /> Send an Email
                                </a>
                            </AnimatedSection>

                            {/* Social Links */}
                            <AnimatedSection variants={fadeInRight} className="pt-4">
                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Follow Us</p>
                                <div className="flex items-center gap-3">
                                    {[
                                        { icon: FaInstagram, href: '#', label: 'Instagram', hover: 'hover:bg-pink-500 hover:text-white' },
                                        { icon: FaFacebookF, href: '#', label: 'Facebook', hover: 'hover:bg-blue-600 hover:text-white' },
                                        { icon: FaLinkedinIn, href: '#', label: 'LinkedIn', hover: 'hover:bg-blue-700 hover:text-white' },
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            className={`w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-200 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.hover}`}
                                            aria-label={social.label}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <social.icon className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-10 lg:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection variants={fadeInUp}>
                        <div className="rounded-2xl overflow-hidden border border-gray-200/60 dark:border-white/5 h-80">
                            <iframe
                                title="NexaDigital Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707900000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale dark:invert dark:contrast-75 dark:hue-rotate-180"
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    )
}
