import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, index = 0 }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                }
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative p-6 rounded-2xl bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-500"
        >
            {/* Gradient border on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />

            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 dark:from-primary-500/20 dark:to-primary-700/20 flex items-center justify-center mb-5 group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-500">
                <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors duration-500" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-heading font-semibold text-gray-900 dark:text-white mb-3">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {description}
            </p>

            {/* Learn More */}
            <Link
                to="/services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors group/link"
            >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
        </motion.div>
    )
}
