import { motion } from 'framer-motion'
import { Search, Book, MessageCircle, FileText, ChevronRight } from 'lucide-react'

const categories = [
    { icon: Book, title: 'Getting Started', desc: 'New to BloodLink? Learn the basics of how our ecosystem works.' },
    { icon: FileText, title: 'Donor Guide', desc: 'Everything you need to know about preparing for and tracking your donations.' },
    { icon: MessageCircle, title: 'Hospital Guide', desc: 'Instructions for hospital staff on managing requests and verifying donors.' },
]

const faqs = [
    { q: 'How do I know if I am eligible to donate?', a: 'Basic requirements include being at least 17 years old, weighing at least 110 lbs, and being in generally good health. Specific requirements may vary by region.' },
    { q: 'Is my medical data secure?', a: 'Absolutely. BloodLink employs end-to-end encryption and strict access controls compliant with major healthcare data regulations (like HIPAA) to ensure your data stays private.' },
    { q: 'How do hospitals verify donors?', a: 'Hospitals use the BloodLink Hospital app to scan a unique QR code generated on the donor\'s mobile app upon arrival. This instantly verifies identity and eligibility.' },
    { q: 'Can I donate if I am currently taking medication?', a: 'Many medications do not prevent you from donating blood. However, some do. Please consult the medication deferral list in the app or ask your physician.' },
]

export default function HelpCenter() {
    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-neutral-900 dark:text-white"
                >
                    How can we <span className="text-red-600 dark:text-red-500">help you?</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative max-w-2xl mx-auto mt-8"
                >
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-neutral-400 dark:text-neutral-500" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-12 pr-4 py-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all shadow-sm dark:shadow-none"
                        placeholder="Search for articles, guides, or FAQs..."
                    />
                </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="group bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-all cursor-pointer shadow-sm hover:shadow-md dark:shadow-none"
                    >
                        <div className="bg-red-500/10 dark:bg-red-500/20 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform">
                            <cat.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">{cat.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{cat.desc}</p>
                    </motion.div>
                ))}
            </div>

            <div className="max-w-3xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (i * 0.1) }}
                            className="group bg-white dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none"
                        >
                            <div className="flex items-start justify-between cursor-pointer">
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{faq.q}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{faq.a}</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-neutral-400 dark:text-neutral-600 group-hover:text-red-600 dark:group-hover:text-red-500 mt-1 shrink-0 transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}
