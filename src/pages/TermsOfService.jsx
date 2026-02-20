import { motion } from 'framer-motion'

export default function TermsOfService() {
    const lastUpdated = "February 20, 2026"

    return (
        <div className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white mb-4">Terms of Service</h1>
                <p className="text-neutral-500 dark:text-neutral-400">Last Updated: {lastUpdated}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="prose dark:prose-invert prose-red max-w-none prose-p:text-neutral-700 dark:prose-p:text-neutral-400 prose-headings:text-neutral-900 dark:prose-headings:text-white prose-a:text-red-600 dark:prose-a:text-red-400 hover:prose-a:text-red-500 dark:hover:prose-a:text-red-300"
            >
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                    <p className="mb-4">
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and BloodLink ("we," "us," or "our"), concerning your access to and use of the BloodLink ecosystem, including our web portals, mobile applications, and related services.
                    </p>
                    <p>
                        By accessing our services, you agree that you have read, understood, and agreed to be bound by all of these Terms. If you do not agree with all of these Terms, then you are expressly prohibited from using the application and you must discontinue use immediately.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">2. User Representations</h2>
                    <p className="mb-4">By using the BloodLink Ecosystem, you represent and warrant that:</p>
                    <ul className="list-disc pl-6 space-y-2 text-neutral-400">
                        <li>All registration information you submit will be true, accurate, current, and complete.</li>
                        <li>You will maintain the accuracy of such information and promptly update such registration information as necessary.</li>
                        <li>You have the legal capacity and you agree to comply with these Terms of Service.</li>
                        <li>You are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Ecosystem.</li>
                        <li>You will not access the Ecosystem through automated or non-human means, whether through a bot, script or otherwise.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">3. Medical Disclaimer</h2>
                    <p className="mb-4 border-l-4 border-red-500 pl-4 py-2 bg-red-500/5 text-neutral-300">
                        BloodLink is a platform designed to connect willing donors with hospitals. <strong>We do not provide medical advice, diagnosis, or treatment.</strong> All medical procedures, including blood donation and screening, are conducted entirely under the jurisdiction and responsibility of the affiliated hospitals and medical professionals.
                    </p>
                    <p>
                        Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or your eligibility to donate blood.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">4. Hospital Obligations</h2>
                    <p>
                        Hospitals utilizing the BloodLink platform agree to verify all donor identities and conduct their own standard screening protocols prior to any blood collection. BloodLink provides an initial matching service and is not liable for errors in blood typing, screening, or medical procedures performed at the hospital facility.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4">5. Modifications to Terms</h2>
                    <p>
                        We reserve the right, in our sole discretion, to make changes or modifications to these Terms at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of these Terms, and you waive any right to receive specific notice of each such change.
                    </p>
                </section>
            </motion.div>
        </div>
    )
}
