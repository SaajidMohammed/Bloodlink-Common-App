import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Droplet, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Apps', path: '/apps' },
]

export default function Navbar() {
    const location = useLocation()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    // Close mobile menu when route changes
    const closeMobileMenu = () => setIsMobileMenuOpen(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/75 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2 group" onClick={closeMobileMenu}>
                        <div className="bg-red-500/10 p-2 rounded-xl group-hover:bg-red-500/20 transition-colors">
                            <Droplet className="w-6 h-6 text-red-600 dark:text-red-500 fill-red-500/20" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-neutral-900 dark:text-white">BloodLink</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-1">
                        {navLinks.map((link) => {
                            const isActive = location.pathname === link.path
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-neutral-950 dark:hover:text-white text-neutral-600 dark:text-neutral-400"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 rounded-full"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className={`relative z-10 ${isActive ? 'text-neutral-950 dark:text-white' : ''}`}>
                                        {link.name}
                                    </span>
                                </Link>
                            )
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg bg-neutral-200/50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden border-t border-neutral-200/50 dark:border-neutral-800/50 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => {
                                const isActive = location.pathname === link.path
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={closeMobileMenu}
                                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive
                                            ? 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                                            : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
