import { Twitter, Facebook, Instagram, Linkedin, Droplet } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="w-full bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-900 mt-auto transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4 group inline-flex">
                            <div className="bg-red-500/10 p-2 rounded-xl group-hover:bg-red-500/20 transition-colors">
                                <Droplet className="w-5 h-5 text-red-600 dark:text-red-500 fill-red-500/20" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">BloodLink</span>
                        </Link>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-sm leading-relaxed mb-6">
                            A unified ecosystem connecting willing donors with hospitals facing critical blood shortages. Save lives, instantly.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-neutral-900 dark:text-white font-semibold mb-4">Platform</h3>
                        <ul className="space-y-3">
                            <li><Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/apps" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">For Hospitals</Link></li>
                            <li><Link to="/apps" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">For Donors</Link></li>
                            <li><Link to="/apps" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">Download App</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-neutral-900 dark:text-white font-semibold mb-4">Support</h3>
                        <ul className="space-y-3">
                            <li><Link to="/help" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">Help Center</Link></li>
                            <li><Link to="/privacy" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link to="/contact" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
                    <p className="text-neutral-500 text-sm">
                        © {new Date().getFullYear()} BloodLink Ecosystem. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-neutral-500">
                        <span>Made with <span className="text-red-500 text-lg leading-none align-middle">&hearts;</span> for humanity</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
