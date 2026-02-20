import { motion } from 'framer-motion'
import { ArrowRight, Activity, Heart, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
    {
        icon: Heart,
        title: 'Save Lives',
        desc: 'Connect with those in need instantly when there is an emergency. Your donation can be the difference between life and death.'
    },
    {
        icon: Activity,
        title: 'Real-time Tracking',
        desc: 'Hospitals can track blood donation fulfillments from the moment a request is broadcasted to the network.'
    },
    {
        icon: Shield,
        title: 'Secure & Verified',
        desc: 'A heavily vetted, verified network of hospitals and trusted donors ensures the highest standards of safety.'
    }
]

export default function Home() {
    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            {/* Hero Section */}
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 text-red-600 dark:text-red-500 text-sm font-semibold border border-red-500/20"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Next-Gen Blood Donation Network
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
                >
                    Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-500 dark:to-rose-400">Donors</span> with <span className="text-neutral-900 dark:text-white">Lifesaving</span> Needs.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl text-center leading-relaxed"
                >
                    BloodLink is a unified platform bridging the gap between hospitals facing critical shortages and willing donors ready to assist.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 pt-6"
                >
                    <Link to="/about" className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-red-500/20">
                        Learn More <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link to="/apps" className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white px-8 py-3.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 border border-neutral-200 dark:border-neutral-700">
                        Explore Apps
                    </Link>
                </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 md:mt-40">
                {features.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                        className="group bg-white dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all hover:-translate-y-1 hover:border-neutral-300 dark:hover:border-neutral-700 shadow-sm dark:shadow-none"
                    >
                        <div className="bg-neutral-100 dark:bg-neutral-950 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <item.icon className="w-7 h-7 text-red-600 dark:text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-neutral-900 dark:text-white tracking-tight">{item.title}</h3>
                        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
