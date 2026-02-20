import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function ContactUs() {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        alert("Thank you for reaching out! A representative will get back to you shortly.")
    }

    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-neutral-900 dark:text-white"
                >
                    Get in <span className="text-red-600 dark:text-red-500">Touch</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-neutral-600 dark:text-neutral-400"
                >
                    Have questions about partnering with BloodLink, donating blood, or technical issues? We're here to help.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-sm dark:shadow-none hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                >
                    <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-1">First Name</label>
                                <input required type="text" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all placeholder-neutral-400 dark:placeholder-neutral-600" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-1">Last Name</label>
                                <input required type="text" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all placeholder-neutral-400 dark:placeholder-neutral-600" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-1">Email Address</label>
                            <input required type="email" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all placeholder-neutral-400 dark:placeholder-neutral-600" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-1">Subject</label>
                            <select className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all appearance-none cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Hospital Partnership</option>
                                <option>Technical Support</option>
                                <option>Press & Media</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-1">Message</label>
                            <textarea required rows="4" className="w-full bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl px-4 py-3 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500 transition-all resize-none placeholder-neutral-400 dark:placeholder-neutral-600"></textarea>
                        </div>
                        <button type="submit" className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white font-medium py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                            <Send className="w-4 h-4" /> Send Message
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6 lg:pl-8"
                >
                    <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
                        <div className="bg-red-500/10 dark:bg-red-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-red-600 dark:text-red-500">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Phone Support</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">Available Monday to Friday, 9am - 6pm EST.</p>
                        <a href="tel:+18005550199" className="text-lg font-medium text-neutral-900 dark:text-white hover:text-red-600 dark:hover:text-red-400 transition-colors">+1 (800) 555-0199</a>
                    </div>

                    <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
                        <div className="bg-blue-500/10 dark:bg-blue-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-500">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Email Us</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">We aim to respond to all inquiries within 24 hours.</p>
                        <div className="space-y-2 flex flex-col items-start">
                            <a href="mailto:support@bloodlink.app" className="text-lg font-medium text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">support@bloodlink.app</a>
                            <a href="mailto:partners@bloodlink.app" className="text-lg font-medium text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">partners@bloodlink.app</a>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none">
                        <div className="bg-emerald-500/10 dark:bg-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-500">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Headquarters</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            123 Innovation Drive<br />
                            Suite 400<br />
                            San Francisco, CA 94105<br />
                            United States
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
