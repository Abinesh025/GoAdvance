import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import toast from 'react-hot-toast';

const serviceOptions = [
    'Social Media Marketing And Handling',
    'SEO Optimization',
    'Poster Designs',
    'Influencer Marketing',
    'Meta ADS',
    'Website Development',
    'Other',
]

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    })

    const [errors, setErrors] = useState({})

    const [status, setStatus] = useState('idle') // idle | sending | success | error

    const validateForm = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = 'Name is required'
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email'
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required'
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
              const [result, setResult] = useState("");
    }
    const onSubmit = async (event) => {
        event.preventDefault();
    const formData = new FormData(event.target);
        formData.append("access_key", "8fe8aa90-24a5-434d-b934-2553856d5465");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
      
    });
    toast.success("Message Sent SuccessFully");
  };

    const inputClasses = (field) =>
        `w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-dark-200 border ${errors[field]
            ? 'border-red-400 dark:border-red-500'
            : 'border-gray-200 dark:border-white/5 focus:border-primary-500 dark:focus:border-primary-400'
        } text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-300 text-sm`

    return (
        <form onSubmit={onSubmit}  className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses('name')}
                />
                {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                )}
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClasses('email')}
                    />
                    {errors.email && (
                        <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                    )}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClasses('phone')}
                    />
                </div>
            </div>

            {/* Service Dropdown */}
            <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Service Interested In
                </label>
                <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`${inputClasses('service')} cursor-pointer`}
                >
                    {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`${inputClasses('message')} resize-none`}
                />
                {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                )}
            </div>

            {/* Submit Button */}
            <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                className={`w-full py-3.5 rounded-xl text-sm font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${status === 'sending'
                        ? 'bg-primary-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 btn-glow'
                    }`}
            >
                {status === 'sending' ? (
                    <>
                        <Loader2 className="w-4 h-4 animate-spin" size={"lg"} /> Sending...
                    </>
                ) : (
                    <>
                        <Send className="w-4 h-4" /> Send Message
                    </>
                )}
            </motion.button>
        </form>
    )
}
