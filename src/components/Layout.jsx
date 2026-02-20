import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
    return (
        <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 selection:bg-red-500/30 flex flex-col transition-colors duration-300">
            <Navbar />
            <main className="relative pt-24 pb-16 flex-1 flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
