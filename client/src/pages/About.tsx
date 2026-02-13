import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Target, Heart, Shield, Users, TrendingUp, Award } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="min-h-screen animated-gradient">
        {/* Hero Section */}
        <section className="py-20 gradient-primary">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About Laser 247 Play
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                India's premier free-to-play cricket entertainment and educational platform, dedicated to helping cricket enthusiasts master the game through strategic team building and friendly competition.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 glass">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Laser 247 Play was born from a simple yet powerful vision: to create a platform where cricket fans across India could enjoy the thrill of team building and strategic competition without any financial barriers or risks. We recognized that while many people are passionate about cricket and eager to test their knowledge, traditional platforms often involve monetary transactions that create pressure and exclude those who simply want to play for fun and learning.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Founded in 2024 and registered under the Ministry of Corporate Affairs with CIN U10792KA2024PTC186879, Laser 247 Play represents a new approach to cricket entertainment in India. We are headquartered in Karnataka and operate with a clear mission: to provide completely free, educational, and entertaining cricket experiences that help users deepen their understanding of the game while connecting with fellow enthusiasts.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Our platform is built on the principle that cricket knowledge and strategic thinking should be celebrated and developed in a safe, pressure-free environment. We believe that the joy of analyzing player statistics, predicting match outcomes, and building the perfect team composition should be accessible to everyone, regardless of their financial situation.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  What sets Laser 247 Play apart is our unwavering commitment to being 100% free forever. We are backed by investors who share our vision of cricket education and entertainment without financial pressure. This backing allows us to focus entirely on creating the best possible user experience, developing innovative features, and building a vibrant community of cricket lovers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 gradient-secondary">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <Card className="p-10 glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To democratize cricket entertainment and education by providing a completely free, accessible platform where users can develop their cricket knowledge, analytical skills, and strategic thinking without any financial risk or pressure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We aim to create an inclusive community where cricket enthusiasts of all backgrounds can come together to celebrate their love for the game, learn from each other, and enjoy friendly competition based purely on skill and cricket understanding.
                </p>
              </Card>

              <Card className="p-10 glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To become India's most trusted and loved cricket entertainment platform, recognized for our commitment to free access, educational value, and responsible gaming practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We envision a future where millions of cricket fans use Laser 247 Play to deepen their appreciation of cricket, connect with like-minded enthusiasts, and enjoy the strategic aspects of the game in a safe, supportive environment that prioritizes learning and fun over financial gain.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 gradient-accent">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Laser 247 Play
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-8 text-center glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Accessibility for All</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe cricket entertainment should be free and accessible to everyone. No subscriptions, no hidden costs, no barriers - just pure cricket fun for all enthusiasts across India.
                </p>
              </Card>

              <Card className="p-8 text-center glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Responsible Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize user safety and responsible gaming. With strict 18+ age verification, no real money involvement, and transparent policies, we ensure a safe environment for all users.
                </p>
              </Card>

              <Card className="p-8 text-center glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform is designed to help users learn cricket strategy, understand player analytics, and develop critical thinking skills through hands-on experience and practical application.
                </p>
              </Card>

              <Card className="p-8 text-center glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're building a vibrant community of cricket lovers who support each other, share insights, and celebrate their passion for cricket in a friendly, inclusive environment.
                </p>
              </Card>

              <Card className="p-8 text-center glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  We operate with complete transparency about our platform, policies, and operations. Users always know exactly what they're getting - a free, fun, educational cricket experience.
                </p>
              </Card>

              <Card className="p-8 text-center glass border-white/30 shadow-colorful">
                <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're constantly evolving based on user feedback, adding new features, improving the experience, and finding innovative ways to make cricket learning more engaging and enjoyable.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                What Makes Us Different
              </h2>

              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Free Forever</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike other platforms that may start free but later introduce premium features or subscriptions, Laser 247 Play is committed to being completely free forever. We're backed by investors who believe in cricket education, which means we never need to charge users. Every feature, every match, every competition is available to all users at no cost.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Real Money, No Pressure</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We deliberately exclude any form of real money transactions. There are no entry fees, no prizes, no winnings. This fundamental design choice ensures that users can focus entirely on learning, improving their cricket knowledge, and enjoying the game without any financial stress or risk. You play for fun, recognition, and personal growth - nothing more.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Educational at the Core</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every feature on Laser 247 Play is designed with education in mind. From detailed player statistics to performance analytics, from match insights to historical data - we provide comprehensive information that helps users understand cricket at a deeper level. Our goal is not just entertainment, but genuine cricket education through practical experience.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Responsible Gaming Commitment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We take responsible gaming seriously. With strict 18+ age verification, clear disclaimers, transparent policies, and a focus on entertainment rather than financial gain, we've built a platform that prioritizes user well-being. We're committed to maintaining the highest standards of ethical operation and user protection.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">All India Access</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Laser 247 Play is available to cricket fans across all states in India. We believe in inclusive access and have designed our platform to be legally compliant and accessible nationwide, ensuring that cricket enthusiasts everywhere can participate and enjoy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
                Company Information
              </h2>

              <Card className="p-10 bg-gray-50 border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Legal Details</h3>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Company Name:</strong> Laser 247 Play</p>
                      <p><strong>CIN:</strong> U10792KA2024PTC186879</p>
                      <p><strong>PAN:</strong> AAKCK3043B</p>
                      <p><strong>TAN:</strong> BLRK25121F</p>
                      <p><strong>Year of Incorporation:</strong> 2024</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Registered Address</h3>
                    <p className="text-gray-700 leading-relaxed">
                      C/O S K MOHAN<br />
                      MEKOOR, SIDDAPURA<br />
                      Pollibetta, Virajpet<br />
                      Kodagu - 571215<br />
                      Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-300">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    <strong>Legal Disclaimer:</strong> Laser 247 Play is a free-to-play cricket entertainment and educational platform. Only users 18 years and older are permitted. No real money is involved. No prizes or winnings are awarded. This platform is available across all states in India.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-20 bg-gradient-to-br from-primary to-blue-700">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Our Commitment to You
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-6">
                At Laser 247 Play, we're committed to providing the best free cricket entertainment experience in India. We promise to always keep the platform completely free, prioritize your safety and privacy, maintain transparent operations, continuously improve based on your feedback, and foster a welcoming community for all cricket enthusiasts.
              </p>
              <p className="text-base text-blue-200 leading-relaxed">
                Thank you for being part of our journey. Together, we're building a platform that celebrates cricket, promotes learning, and brings fans together in a safe, fun, and educational environment.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
