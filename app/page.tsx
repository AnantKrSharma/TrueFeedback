import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Welcome to TrueFeedback
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-8">
            Empowering honest communication through anonymous feedback
          </p>
          <Button asChild className="bg-white text-purple-600 hover:bg-purple-100 text-lg py-2 px-6">
            <Link href="/auth">Get Started</Link>
          </Button>
        </header>

        <main className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="Anonymous Feedback"
            description="Share thoughts without revealing identities, encouraging honest communication."
          />
          <FeatureCard
            title="AI-Powered Suggestions"
            description="AI algorithms analyze feedback patterns and generate constructive suggestions."
          />
          <FeatureCard
            title="Interactive Dashboard"
            description="View, manage, and moderate feedback through an intuitive dashboard."
          />
          <FeatureCard
            title="Data Security"
            description="Robust security measures protect user privacy and data integrity."
          />
        </main>

        <section className="mt-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Why Choose TrueFeedback?
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            TrueFeedback's architecture is built with scalability, security, and user experience in mind. 
            By utilizing Next.js, the application can efficiently handle a growing user base and respond 
            to real-time interactions without compromising performance. The platform prioritizes user 
            privacy through secure data handling and robust encryption techniques, ensuring that all 
            user interactions remain confidential.
          </p>
        </section>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-lg shadow-xl p-6">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

