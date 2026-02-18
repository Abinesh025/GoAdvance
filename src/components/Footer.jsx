import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, ArrowUp, Mail, Phone, MapPin } from 'lucide-react'
import { FaInstagram, FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import AnimatedSection from './AnimatedSection'
import blacklogo from "../assets/blacklogo.png"
import whitelogo from "../assets/whitelogo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { fadeInUp, staggerContainer, staggerItem } from '../utils/animationVariants'


const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
]

const services = [
    'Social Media Marketing And Handling',
    'SEO Optimization',
    'Poster Desings',
    'Influencer Marketing',
    'Meta ADS',
    'Website Development'
]

const socialLinks = [
    { icon: FaInstagram, href: 'https://www.instagram.com/goadvance_digitals?igsh=MWN5ZDh5OTIycHl1dg==', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61588342142585', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/goadvance-digitals-0800313b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon:  MdOutlineMailOutline, href: 'mailto:goadvancedigitals@gmail.com', label: 'Email', color: 'hover:text-sky-500' },
]

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative bg-gray-50 dark:bg-dark-100 border-t border-gray-200/50 dark:border-white/5">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-16 ">
                <AnimatedSection variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Brand Column */}
                    <motion.div variants={staggerItem} className="lg:col-span-1">
                  
                                 <Link to="/" className="flex items-center gap-2 group">
                                                        <span className="text-xl font-heading font-bold bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-blue-300 bg-clip-text text-transparent bottom-5">
                                                            GoAdvance
                                                        </span>
                                                    </Link>
       
                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                            A student-led team helping businesses grow their online presence with smart, affordable digital marketing solutions that deliver real business growth.
                        </p>
                        <div className="flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className={`w-9 h-9 rounded-lg bg-gray-200 dark:bg-dark-200 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-300 ${social.color} hover:bg-gray-300 dark:hover:bg-dark-300`}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={staggerItem}>
                        <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div variants={staggerItem}>
                        <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={staggerItem}>
                        <h3 className="text-sm font-heading font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Mail className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                <a href="mailto:goadvancedigitals@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                    goadvancedigitals@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                <a href="tel:+9196003 01365" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                    +91 96003 01365
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                <a href="https://www.google.com/maps/place/Nagapattinam,+Tamil+Nadu/@10.7794929,79.7814461,13z/data=!3m1!4b1!4m6!3m5!1s0x3a556c9797ef6927:0xc869efbb726e6072!8m2!3d10.7672313!4d79.8448512!16zL20vMDJ0bDQy?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
                                  Nagapattinam-611001, TamilNadu, India
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </AnimatedSection>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200/50 dark:border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      Copyright  &copy; {currentYear} GoAdvance. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors group"
                    >
                        Back to top
                        <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
