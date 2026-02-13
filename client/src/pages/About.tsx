import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Target, 
  Heart, 
  Shield, 
  Users, 
  TrendingUp, 
  Award,
  CheckCircle2,
  Building2,
  MapPin,
  FileText,
  ArrowRight
} from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              About Laser 247 Play
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              India's premier free-to-play cricket entertainment and educational platform, dedicated to helping cricket enthusiasts master the game through strategic team building and friendly competition.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-8">Our Story</h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Laser 247 Play was born from a simple yet powerful vision: to create a platform where cricket fans across India could enjoy the thrill of team building and strategic competition without any financial barriers or risks. We recognized that while many people are passionate about cricket and eager to test their knowledge, traditional platforms often involve monetary transactions that create pressure and exclude those who simply want to play for fun and learning.
              </p>

              <p>
                Founded in 2024 and registered under the Ministry of Corporate Affairs with <strong>CIN U10792KA2024PTC186879</strong>, Laser 247 Play represents a new approach to cricket entertainment in India. We are headquartered in Karnataka and operate with a clear mission: to provide completely free, educational, and entertaining cricket experiences that help users deepen their understanding of the game while connecting with fellow enthusiasts.
              </p>

              <p>
                Our platform is built on the principle that cricket knowledge and strategic thinking should be celebrated and developed in a safe, pressure-free environment. We believe that the joy of analyzing player statistics, predicting match outcomes, and building the perfect team composition should be accessible to everyone, regardless of their financial situation.
              </p>

              <p>
                What sets Laser 247 Play apart is our unwavering commitment to being <strong>100% free forever</strong>. We are backed by investors who share our vision of cricket education and entertainment without financial pressure. This backing allows us to focus entirely on creating the best possible user experience, developing innovative features, and building a vibrant community of cricket lovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="card-elevated">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To democratize cricket entertainment and education by providing a completely free, accessible platform where users can develop their cricket knowledge, analytical skills, and strategic thinking without any financial risk or pressure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We aim to create an inclusive community where cricket enthusiasts of all backgrounds can come together to celebrate their love for the game, learn from each other, and enjoy friendly competition based purely on skill and cricket understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To become India's most trusted and loved cricket entertainment platform, recognized for our commitment to free access, educational value, and responsible gaming practices.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We envision a future where millions of cricket fans use Laser 247 Play to deepen their appreciation of cricket, connect with like-minded enthusiasts, and enjoy the strategic aspects of the game in a safe, supportive environment that prioritizes learning and fun over financial gain.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at Laser 247 Play
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="card-elevated hover:shadow-teal transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Accessibility for All</h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe cricket entertainment should be free and accessible to everyone. No subscriptions, no hidden costs, no barriers - just pure cricket fun for all enthusiasts across India.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-navy transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Responsible Platform</h3>
                <p className="text-gray-600 leading-relaxed">
                  We prioritize user safety and responsible gaming. With strict 18+ age verification, no real money involvement, and transparent policies, we ensure a safe environment for all users.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-coral transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Educational Focus</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our platform is designed to help users learn cricket strategy, understand player analytics, and develop critical thinking skills through hands-on experience and practical application.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-teal transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Community First</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're building a vibrant community of cricket lovers who support each other, share insights, and celebrate their passion for cricket in a friendly, inclusive environment.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-navy transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  We operate with complete transparency about our platform, policies, and operations. Users always know exactly what they're getting - a free, fun, educational cricket experience.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elevated hover:shadow-coral transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Continuous Improvement</h3>
                <p className="text-gray-600 leading-relaxed">
                  We're constantly evolving based on user feedback, adding new features, improving the experience, and finding innovative ways to make cricket learning more engaging and enjoyable.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              What Makes Us Different
            </h2>

            <div className="space-y-6">
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Free Forever</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Unlike other platforms that may start free but later introduce premium features or subscriptions, Laser 247 Play is committed to being completely free forever. We're backed by investors who believe in cricket education, which means we never need to charge users. Every feature, every match, every competition is available to all users at no cost.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">No Real Money, No Pressure</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We deliberately exclude any form of real money transactions. There are no entry fees, no prizes, no winnings. This fundamental design choice ensures that users can focus entirely on learning, improving their cricket knowledge, and enjoying the game without any financial stress or risk. You play for fun, recognition, and personal growth - nothing more.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Educational at the Core</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every feature on Laser 247 Play is designed with education in mind. From detailed player statistics to match analysis tools, we provide resources that help users understand cricket at a deeper level. Our platform isn't just about picking teams - it's about learning why certain players perform well in specific conditions, understanding team dynamics, and developing strategic thinking skills.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Responsible Gaming Practices</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We implement strict age verification (18+), provide clear guidelines on responsible platform usage, and maintain transparent policies. Our commitment to responsible gaming means we actively promote healthy engagement patterns and ensure our platform remains a positive force in users' lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">All-India Accessibility</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Laser 247 Play is available across all Indian states with no geographical restrictions. As a free educational platform with no real money involved, we welcome cricket fans from every corner of India to join our community and enjoy cricket entertainment together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Company Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Company Name</h3>
                      <p className="text-gray-700">Laser 247 Play</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-slate-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">CIN</h3>
                      <p className="text-gray-700">U10792KA2024PTC186879</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">PAN</h3>
                      <p className="text-gray-700">AAKCK3043B</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">TAN</h3>
                      <p className="text-gray-700">BLRK25121F</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-slate-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2">Registered Address</h3>
                      <p className="text-gray-700">Karnataka, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join Our Cricket Community
            </h2>
            <p className="text-xl text-teal-50 mb-8 leading-relaxed">
              Be part of India's fastest-growing free cricket entertainment platform. Start building teams, competing on leaderboards, and mastering cricket strategy today.
            </p>
            <Link href="/register">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-12 py-5 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                Get Started Free Now
                <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
            <p className="text-sm text-teal-100 mt-6">
              No credit card required • 100% Free Forever • 18+ Only
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
