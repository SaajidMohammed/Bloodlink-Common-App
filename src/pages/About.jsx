import { motion } from 'framer-motion'
import { Hospital, UserPlus, Twitter, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react'

export default function About() {
    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="max-w-3xl mx-auto text-center mb-20">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-neutral-900 dark:text-white"
                >
                    About <span className="text-red-600 dark:text-red-500">BloodLink</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
                >
                    A unified, lifesaving ecosystem designed to streamline the blood donation process.
                    By connecting willing donors with hospitals directly, we aim to reduce the critical shortage of blood and ensure timely medical interventions.
                </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mt-12">
                {/* For Hospitals */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-neutral-900/40 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-colors border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-10 shadow-sm dark:shadow-none hover:border-neutral-300 dark:hover:border-neutral-700"
                >
                    <div className="bg-red-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <Hospital className="w-8 h-8 text-red-600 dark:text-red-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">For Hospitals</h2>
                    <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                        <li className="flex items-start gap-3">
                            <span className="bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 p-1 rounded-full mt-1 shrink-0"><ArrowRight className="w-3 h-3" /></span>
                            Request specific blood types based on immediate critical needs.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 p-1 rounded-full mt-1 shrink-0"><ArrowRight className="w-3 h-3" /></span>
                            Track incoming donors and streamline the screening process.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-red-500/10 dark:bg-red-500/20 text-red-600 dark:text-red-400 p-1 rounded-full mt-1 shrink-0"><ArrowRight className="w-3 h-3" /></span>
                            Maintain an active dashboard of community blood availability and local donors.
                        </li>
                    </ul>
                </motion.div>

                {/* For Donors */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white dark:bg-neutral-900/40 hover:bg-neutral-50 dark:hover:bg-neutral-800/80 transition-colors border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 md:p-10 shadow-sm dark:shadow-none hover:border-neutral-300 dark:hover:border-neutral-700"
                >
                    <div className="bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                        <UserPlus className="w-8 h-8 text-blue-600 dark:text-blue-500" />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">For Donors</h2>
                    <ul className="space-y-4 text-neutral-600 dark:text-neutral-400">
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 p-1 rounded-full mt-1 shrink-0"><ArrowRight className="w-3 h-3" /></span>
                            Receive instant notifications when local hospitals need your blood type.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 p-1 rounded-full mt-1 shrink-0"><ArrowRight className="w-3 h-3" /></span>
                            Track your donation history, impacts, and health metrics.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 p-1 rounded-full mt-1 shrink-0"><ArrowRight className="w-3 h-3" /></span>
                            Find nearby medical facilities equipped with rapid, secure donation systems.
                        </li>
                    </ul>
                </motion.div>
            </div>

        </div>
    )
}
