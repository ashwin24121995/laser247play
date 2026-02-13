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

      {/* Cricket Coverage Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Cricket Coverage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive coverage across all major cricket tournaments and formats
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* IPL */}
            <Card className="card-elevated hover:shadow-teal transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/dassKpnSfzHkpZzo.png" 
                    alt="IPL Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Indian Premier League</h3>
                <p className="text-gray-600 text-sm mb-3">IPL - India's biggest T20 tournament</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>All IPL matches covered</li>
                  <li>Player statistics & analysis</li>
                  <li>Live match updates</li>
                </ul>
              </CardContent>
            </Card>

            {/* International Cricket */}
            <Card className="card-elevated hover:shadow-navy transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/dpUMHGUMjxaowVUc.png" 
                    alt="ICC Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">International Matches</h3>
                <p className="text-gray-600 text-sm mb-3">Test, ODI & T20I matches</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>All international cricket</li>
                  <li>World Cups & Champions Trophy</li>
                  <li>Bilateral series coverage</li>
                </ul>
              </CardContent>
            </Card>

            {/* Domestic Leagues */}
            <Card className="card-elevated hover:shadow-coral transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/oWtvyNkdZPYeFKfs.png" 
                    alt="BCCI Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Domestic Cricket</h3>
                <p className="text-gray-600 text-sm mb-3">Ranji Trophy, Syed Mushtaq Ali & more</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>Ranji Trophy matches</li>
                  <li>Vijay Hazare Trophy</li>
                  <li>Syed Mushtaq Ali T20</li>
                </ul>
              </CardContent>
            </Card>

            {/* T20 Leagues */}
            <Card className="card-elevated hover:shadow-teal transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/muYJyWkuOIiyxAfF.png" 
                    alt="T20 Leagues Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Global T20 Leagues</h3>
                <p className="text-gray-600 text-sm mb-3">BBL, CPL, PSL & other leagues</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>Big Bash League (BBL)</li>
                  <li>Caribbean Premier League</li>
                  <li>Pakistan Super League</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-teal-600 mb-2">500+</div>
                <div className="text-gray-700 font-semibold">Matches Annually</div>
                <div className="text-sm text-gray-600 mt-1">Across all formats</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-800 mb-2">1000+</div>
                <div className="text-gray-700 font-semibold">Cricket Players</div>
                <div className="text-sm text-gray-600 mt-1">International & domestic</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Live Updates</div>
                <div className="text-sm text-gray-600 mt-1">Real-time match tracking</div>
              </div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: 100% Free Forever */}
            <Card className="card-elevated hover:shadow-teal transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Free Forever</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Play without spending a single rupee. Our platform is completely free with no hidden charges, subscriptions, or in-app purchases. Backed by investors who believe in cricket education for all.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>No registration fees or deposits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Zero hidden charges or subscriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Investor-backed educational model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Unlimited team creation and participation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 2: Learn & Improve */}
            <Card className="card-elevated hover:shadow-navy transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Learn & Improve</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Master cricket strategy through practical experience. Understand player form, pitch conditions, team composition, and match dynamics while improving your analytical skills with every game.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Educational cricket strategy guides</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Player statistics and performance analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Match condition insights and tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Track your decision-making improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 3: Safe & Secure */}
            <Card className="card-elevated hover:shadow-coral transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Lock className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Safe & Secure</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Your data and experience are protected with industry-standard security measures. Age-verified platform ensuring a safe environment for responsible cricket entertainment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Strict 18+ age verification system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Secure data encryption and privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Fair play policies and monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Responsible gaming guidelines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 4: Skill-Based Gaming */}
            <Card className="card-elevated hover:shadow-teal transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Skill-Based Gaming</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Success depends purely on your cricket knowledge and strategic thinking. No luck involved - just your understanding of the game, player analysis, and tactical decision-making abilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Cricket knowledge-based gameplay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Strategic team building challenges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Analytical decision-making rewards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>No random chance or luck factors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 5: Leaderboard Rankings */}
            <Card className="card-elevated hover:shadow-navy transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-slate-800" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Leaderboard Rankings</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Compete with cricket fans across India and showcase your expertise. Climb the rankings, earn recognition, and see how your cricket knowledge stacks up against thousands of players nationwide.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Real-time national leaderboard updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Match-wise and overall rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Performance tracking and statistics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>Achievement badges and milestones</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Feature 6: Community Driven */}
            <Card className="card-elevated hover:shadow-coral transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Community Driven</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Join a vibrant community of cricket enthusiasts who share your passion. Connect with fellow fans, discuss strategies, share insights, and grow together in a supportive environment.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Thousands of active cricket fans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Strategy discussions and tips sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Friendly competition and sportsmanship</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>Regular platform updates based on feedback</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-bold text-teal-600/30">01</span>
              </div>
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 mt-4">
                <Users className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Create Your Account</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Sign up for free in less than 2 minutes. Just provide your email, create a password, and verify your age (18+). No payment information required.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Quick registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Email verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Age verification (18+)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Instant access</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-50 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-bold text-slate-800/30">02</span>
              </div>
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 mt-4">
                <Trophy className="w-7 h-7 text-slate-800" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Choose a Match</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Browse upcoming cricket matches from various tournaments. Select the match you want to play - IPL, international matches, domestic leagues, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span>Multiple tournaments</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span>Live match updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span>Match schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-slate-800 flex-shrink-0 mt-0.5" />
                  <span>Team information</span>
                </li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-bold text-orange-600/30">03</span>
              </div>
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-6 mt-4">
                <Target className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Build Your Team</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Select 11 players within the budget. Choose wisely from batsmen, bowlers, all-rounders, and wicket-keepers. Pick your captain and vice-captain for bonus points.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>11 player selection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Budget management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Role-based picking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span>Captain selection</span>
                </li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl flex items-center justify-center">
                <span className="text-5xl font-bold text-teal-600/30">04</span>
              </div>
              <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center mb-6 mt-4">
                <BarChart3 className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Track & Compete</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Watch your team score points based on real match performance. Track live scores, climb the leaderboard, and see how your strategy plays out.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Live point tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Leaderboard position</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                  <span>Performance analysis</span>
                </li>
              </ul>
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
