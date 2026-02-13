import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Trophy,
  Users,
  Target,
  Shield,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Clock,
  BookOpen,
  Star,
  TrendingUp,
  Award,
  Zap,
  Heart,
  Lock,
  Globe,
  Smartphone,
} from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 via-white to-orange-50 py-20 lg:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-full text-sm font-semibold mb-6 shadow-teal">
                <Sparkles className="w-4 h-4" />
                100% Free Cricket Entertainment Platform
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Build Your Dream Team,
                <br />
                <span className="text-teal-600">Compete & Master Cricket</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                Welcome to India's premier free-to-play cricket entertainment platform. Experience the thrill of building cricket teams, competing on leaderboards, and mastering cricket strategy without spending a single rupee.
              </p>

              <p className="text-base text-gray-600 mb-8 leading-relaxed">
                Whether you're a seasoned cricket fan or just starting to learn the game, Laser 247 Play provides a safe, engaging environment to test your cricket knowledge and compete with fellow enthusiasts across India.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/register">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-6 text-lg shadow-teal">
                    Start Playing Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="font-semibold px-8 py-6 text-lg border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white">
                    Learn How It Works
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                    <span className="text-red-600 font-bold text-lg">18+</span>
                  </div>
                  <span className="text-xs text-gray-700 font-medium">Age Verified</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-2">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <span className="text-xs text-gray-700 font-medium">Fair Play</span>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-white rounded-xl border border-gray-200 shadow-lg">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-6 h-6 text-orange-600" />
                  </div>
                  <span className="text-xs text-gray-700 font-medium">₹0 Required</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu-img-2_1770939940000_na1fn_aGVyby1jcmlja2V0LWRldGFpbGVk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHUtaW1nLTJfMTc3MDkzOTk0MDAwMF9uYTFmbl9hR1Z5YnkxamNtbGphMlYwTFdSbGRHRnBiR1ZrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9g3yfoeJVVd8~RMGvJQ8IHK9ODmJRioPLKWCXHSR8LMJ4rhutAcl~yBIU-8ty7dDpVBi7ulgNbhUmSBsO14BXtelqGVU7Mwvqng7OBa4GwONcw2LmEnKBeIgxvZYgTEtISVrNfQcz9DHlYePE-wPwbDw~sW5C14jbrPw~VqA7zmXN5Qaw6xWXzo~r5T~cedJcLoPNLuuCylJnFtzGDkudtMl~uKiQlEEJf8NAPLe2I~h41GlXChNvDNtiiq1IWNBFDeuWW-aUU9T3ky3LlViZEaJRRK42iZdKQvulAjY4LHSp-G-jah1xKkGKuk7PtjA3v39eI0KIprttL66ZSCCQ__"
                  alt="Cricket Stadium"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border-2 border-teal-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-gray-600 font-medium">Free Forever</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Core Values */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Our Core Values</h2>
            <p className="text-lg text-gray-600">What makes Laser 247 Play different</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-xl border border-teal-200">
              <div className="text-5xl font-bold text-teal-600 mb-3">100%</div>
              <div className="text-base text-slate-900 font-bold mb-2">Free to Play</div>
              <div className="text-sm text-gray-600">No subscriptions, no hidden fees, completely free forever</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200">
              <div className="text-5xl font-bold text-slate-800 mb-3">₹0</div>
              <div className="text-base text-slate-900 font-bold mb-2">No Real Money</div>
              <div className="text-sm text-gray-600">Play for fun and learning, not for financial gain</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border border-orange-200">
              <div className="text-5xl font-bold text-orange-600 mb-3">Pure</div>
              <div className="text-base text-slate-900 font-bold mb-2">Skill-Based</div>
              <div className="text-sm text-gray-600">Test your cricket knowledge and strategic thinking</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-50 to-white rounded-xl border border-red-200">
              <div className="text-5xl font-bold text-red-600 mb-3">18+</div>
              <div className="text-base text-slate-900 font-bold mb-2">Age Requirement</div>
              <div className="text-sm text-gray-600">Responsible platform for adult cricket enthusiasts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Laser 247 Play?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience cricket like never before with our comprehensive entertainment and educational platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="card-elevated hover:shadow-teal transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Build Dream Teams</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Select your favorite cricket players and create winning combinations. Analyze player statistics, form, and match conditions to build the perfect team strategy.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Choose from real cricket players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Analyze player statistics and performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Create multiple team combinations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Learn team composition strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="card-elevated hover:shadow-navy transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Compete on Leaderboards</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Test your skills against cricket enthusiasts from across India. Climb the rankings, earn recognition, and showcase your cricket knowledge on our competitive leaderboards.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Real-time leaderboard rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Compete with thousands of players</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Track your progress and improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Earn badges and achievements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="card-elevated hover:shadow-coral transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Learn Cricket Strategy</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Enhance your understanding of cricket through hands-on experience. Learn about player roles, match dynamics, pitch conditions, and strategic decision-making.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Understand player roles and positions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Learn match strategy and tactics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Analyze pitch and weather conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Develop cricket analytical skills</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in minutes with our simple and intuitive platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border-2 border-teal-200 h-full">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Register Free</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create your free account in seconds. No payment information required. Just your basic details and you're ready to start.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-2xl border-2 border-slate-200 h-full">
                <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Choose Match</h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse upcoming cricket matches from various tournaments. Select the match you want to participate in and start building your team.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-orange-200 h-full">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Build Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Select 11 players from both teams. Analyze statistics, recent form, and match conditions to create your winning combination.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-2xl border-2 border-teal-200 h-full">
                <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Track & Learn</h3>
                <p className="text-gray-600 leading-relaxed">
                  Follow live match updates, see how your team performs, and climb the leaderboard. Learn from each match and improve your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Start Your Cricket Journey?
            </h2>
            <p className="text-xl text-teal-50 mb-8 leading-relaxed">
              Join thousands of cricket enthusiasts across India. Build teams, compete on leaderboards, and master cricket strategy—all completely free, forever.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-10 py-7 text-lg shadow-2xl">
                  Get Started Free Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/how-to-play">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold px-10 py-7 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
            <p className="text-sm text-teal-100 mt-6">
              No credit card required • 100% Free Forever • 18+ Only
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
