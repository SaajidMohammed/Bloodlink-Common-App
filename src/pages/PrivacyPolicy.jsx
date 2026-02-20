import { motion } from 'framer-motion'

export default function PrivacyPolicy() {
    const lastUpdated = "February 20, 2026"

    return (
        <div className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">Privacy Policy</h1>
                <p className="text-neutral-500 dark:text-neutral-400">Last Updated: {lastUpdated}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="prose dark:prose-invert prose-red max-w-none prose-p:text-neutral-700 dark:prose-p:text-neutral-400 prose-headings:text-neutral-900 dark:prose-headings:text-white prose-a:text-red-600 dark:prose-a:text-red-400 hover:prose-a:text-red-500 dark:hover:prose-a:text-red-300"
            >
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="mb-4">
                        At BloodLink ("we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of your personal and medical information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile applications, web portals, and related services (collectively, the "Ecosystem").
                    </p>
                    <p>
                        Please read this Privacy Policy carefully. By accessing or using our Ecosystem, you acknowledge that you have read, understood, and agree to be bound by all the terms outlined in this policy.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
                    <p className="mb-4">We may collect information about you in a variety of ways. The information we may collect includes:</p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-400 mb-4">
                        <li><strong className="text-neutral-300">Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, and demographic information (e.g., age, gender).</li>
                        <li><strong className="text-neutral-300">Health and Medical Information:</strong> Your blood type, donation history, eligibility status, and basic health metrics provided during the pre-donation screening process.</li>
                        <li><strong className="text-neutral-300">Geolocation Data:</strong> We may request access or permission to track location-based information from your mobile device to match you with nearby hospitals during emergencies.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
                    <p className="mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                        <li>Facilitate the matching of blood donors with hospitals in need.</li>
                        <li>Create and manage your account securely.</li>
                        <li>Send emergency alerts regarding critical blood shortages in your vicinity.</li>
                        <li>Compile anonymous statistical data and analysis for internal improvement.</li>
                        <li>Comply with healthcare regulations and legal obligations.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                    <p>
                        We use administrative, technical, and physical security measures to help protect your personal and medical information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable. We utilize end-to-end encryption for all medical data transmitted between our servers and our applications.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
                    <p>
                        If you have questions or comments about this Privacy Policy, please contact our Data Protection Officer at: <a href="mailto:privacy@bloodlink.app">privacy@bloodlink.app</a>
                    </p>
                </section>
            </motion.div>
        </div>
    )
}
