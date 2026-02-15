import { motion } from 'framer-motion'

export default function AnimatedSection({
    children,
    className = '',
    variants,
    initial = 'hidden',
    whileInView = 'visible',
    viewport = { once: true, amount: 0.2 },
    ...props
}) {
    return (
        <motion.div
            className={className}
            variants={variants}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            {...props}
        >
            {children}
        </motion.div>
    )
}
