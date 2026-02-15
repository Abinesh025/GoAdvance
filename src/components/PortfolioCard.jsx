import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function PortfolioCard({ title, category, description, image, index = 0 }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.1 }
                }
            }}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-dark-100 border border-gray-200/60 dark:border-white/5 shadow-sm hover:shadow-xl transition-all duration-500"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <div
                    className="w-full h-full bg-gradient-to-br from-primary-400/30 to-primary-700/30 dark:from-primary-500/20 dark:to-primary-800/20 flex items-center justify-center"
                    style={image ? { backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                >
                    {!image && (
                        <span className="text-4xl font-heading font-bold text-primary-400/30 dark:text-primary-500/20">
                            {title.charAt(0)}
                        </span>
                    )}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg bg-white/90 dark:bg-dark/90 text-sm font-medium flex items-center gap-2"
                    >
                        View Details <ExternalLink className="w-3.5 h-3.5" />
                    </motion.button>
                </div>
            </div>

            {/* Content */}
            <div className="p-5">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 mb-3">
                    {category}
                </span>
                <h3 className="text-base font-heading font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}
