import { motion } from 'framer-motion'
import { Smartphone, MonitorPlay, ExternalLink, Clock } from 'lucide-react'

const applications = [
    {
        title: 'Donor Web Portal',
        type: 'Web Application',
        desc: 'Access your donor dashboard, find clinics, and review your donation history from your browser.',
        icon: MonitorPlay,
        status: 'Available',
        link: 'https://bloodlink-donor.onrender.com',
        badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        dotColor: 'bg-emerald-400',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-500'
    },
    {
        title: 'Hospital Web Portal',
        type: 'Web Application',
        desc: 'The complete management suite for hospitals to broadcast emergencies, track supplies, and manage donors.',
        icon: MonitorPlay,
        status: 'Available',
        link: 'https://bloodlink-hospital-app.onrender.com',
        badgeColor: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
        dotColor: 'bg-emerald-400',
        iconBg: 'bg-emerald-500/10',
        iconColor: 'text-emerald-500'
    },
    {
        title: 'Donor Mobile App',
        type: 'iOS & Android',
        desc: 'Get instant push notifications for critical emergencies nearby and navigate directly to the hospital.',
        icon: Smartphone,
        status: 'Coming Soon',
        link: null,
        badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-500'
    },
    {
        title: 'Hospital Mobile App',
        type: 'iOS & Android',
        desc: 'Empower medical staff with on-the-go tools for verifying donors and updating blood bank inventory.',
        icon: Smartphone,
        status: 'Coming Soon',
        link: null,
        badgeColor: 'bg-amber-500/10 text-amber-500 border-amber-500/20',
        iconBg: 'bg-amber-500/10',
        iconColor: 'text-amber-500'
    }
]

export default function Apps() {
    return (
        <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-neutral-900 dark:text-white"
                >
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-500 dark:from-red-500 dark:to-rose-400">Applications</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-neutral-600 dark:text-neutral-400"
                >
                    Whether you are managing a high-volume blood bank or making your first donation, we have an app designed specifically for you.
                </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {applications.map((app, i) => (
                    <motion.div
                        key={app.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="group relative bg-white dark:bg-neutral-900/40 hover:bg-neutral-50 dark:hover:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all rounded-3xl p-8 overflow-hidden shadow-sm hover:shadow-md dark:shadow-none"
                    >
                        {/* Status Badge */}
                        <div className="absolute top-8 right-8">
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border bg-white dark:bg-transparent shadow-sm dark:shadow-none ${app.badgeColor}`}>
                                {app.status === 'Available' ? (
                                    <span className="relative flex h-2 w-2">
                                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${app.dotColor}`}></span>
                                        <span className={`relative inline-flex rounded-full h-2 w-2 ${app.dotColor}`}></span>
                                    </span>
                                ) : (
                                    <Clock className="w-3 h-3" />
                                )}
                                {app.status}
                            </div>
                        </div>

                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-neutral-100 dark:border-transparent ${app.iconBg} group-hover:scale-110 transition-transform`}>
                            <app.icon className={`w-7 h-7 ${app.iconColor}`} />
                        </div>

                        <div className="mb-3">
                            <span className="text-xs font-bold tracking-wider text-neutral-500 uppercase">{app.type}</span>
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mt-1 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">{app.title}</h3>
                        </div>

                        <p className="text-neutral-600 dark:text-neutral-400 min-h-[3rem] mb-8 leading-relaxed text-sm md:text-base">
                            {app.desc}
                        </p>

                        {app.link ? (
                            <a href={app.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-neutral-900 dark:text-white font-medium hover:text-red-600 dark:hover:text-red-400 transition-colors">
                                Launch Application <ExternalLink className="w-4 h-4" />
                            </a>
                        ) : (
                            <span className="inline-flex items-center gap-2 text-neutral-400 dark:text-neutral-600 font-medium cursor-not-allowed">
                                Launch Application <ExternalLink className="w-4 h-4" />
                            </span>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
