import { FaAppleAlt, FaClock, FaUserMd } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';
import { FeatureCard } from '../components/UI/FeatureCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <IoRestaurant className="text-3xl text-primary" />
            <span className="text-2xl font-bold text-gray-800">NutriAI</span>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-dark transition">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary/10 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Your Personalized AI-Powered<br />Diet Companion
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Achieve your health goals with intelligent meal planning, nutritional insights, and real-time dietary tracking
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition">
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose NutriAI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaAppleAlt className="w-12 h-12" />}
              title="Personalized Diet Plans"
              description="AI-generated meal plans tailored to your preferences, goals, and dietary needs"
            />
            <FeatureCard
              icon={<FaClock className="w-12 h-12" />}
              title="Smart Meal Tracking"
              description="Real-time nutritional analysis and progress monitoring through our AI platform"
            />
            <FeatureCard
              icon={<FaUserMd className="w-12 h-12" />}
              title="Expert Guidance"
              description="24/7 AI nutritionist support with human expert oversight"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Transform Your Eating Habits?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of users who have achieved their health goals with NutriAI
          </p>
          <button className="bg-primary text-white px-8 py-4 rounded-full text-lg hover:bg-primary-dark transition">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 NutriAI. All rights reserved. Empowering healthier lives through AI
          </p>
        </div>
      </footer>
    </div>
  );
}