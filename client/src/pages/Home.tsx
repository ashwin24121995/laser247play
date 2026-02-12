import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/dcfdzzyIfmzmScUu.png" alt="Laser 247 Play" className="h-10" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="/how-to-play" className="text-sm font-medium hover:text-primary">
              How To Play
            </a>
            <a href="/faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </a>
            <a href="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </a>
            <a href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href="/login">Login</a>
            </Button>
            <Button asChild>
              <a href="/register">Register</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500 text-white py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-3">
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/xbyRYeYNHKhkVaXJ.png" alt="18+" className="h-12 w-12" />
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/OTfKwuJkmAeoTCMc.png" alt="Fair Play" className="h-12 w-12" />
              </div>
              <h1 className="text-5xl font-bold leading-tight">
                Free Cricket Entertainment Platform
              </h1>
              <p className="text-xl text-blue-50">
                Build your dream cricket team, compete on leaderboards, and test your cricket
                knowledge - completely free! No money, just pure fun and learning.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <a href="/register">Get Started Free</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white" asChild>
                  <a href="/how-to-play">Learn How</a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/epKbGiyHHzZLotQT.png"
                alt="Cricket Action"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Laser 247 Play?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience cricket team building like never before - educational, entertaining, and
              completely free to play.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Free To Play</h3>
                <p className="text-sm text-muted-foreground">
                  100% free platform. No deposits, no real money, just pure entertainment and
                  education.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Build Teams</h3>
                <p className="text-sm text-muted-foreground">
                  Select players, create strategies, and build your perfect cricket team for each
                  match.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Compete & Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Test your cricket knowledge against others on our leaderboards and improve your
                  skills.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Safe & Fair</h3>
                <p className="text-sm text-muted-foreground">
                  18+ only platform with fair play policies and responsible gaming practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Playing?</h2>
          <p className="text-xl mb-8 text-blue-50">
            Join thousands of cricket fans enjoying free team-building entertainment
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/register">Create Free Account</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-white mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/how-to-play" className="hover:text-white">
                    How To Play
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/terms" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/fair-play" className="hover:text-white">
                    Fair Play Policy
                  </a>
                </li>
                <li>
                  <a href="/responsible-gaming" className="hover:text-white">
                    Responsible Gaming
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/faq" className="hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Compliance</h3>
              <div className="flex gap-3 mb-4">
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/xbyRYeYNHKhkVaXJ.png" alt="18+" className="h-10 w-10" />
                <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/OTfKwuJkmAeoTCMc.png" alt="Fair Play" className="h-10 w-10" />
              </div>
              <p className="text-xs">18+ Only Platform</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 space-y-4">
            <div className="bg-amber-900/30 border border-amber-700 rounded-lg p-4 text-sm">
              <p className="font-semibold text-amber-300 mb-2">Legal Disclaimer:</p>
              <p className="text-amber-100">
                This is a skill-based, free-to-play platform for entertainment and educational
                purposes only. No real money is involved. Only users 18 years and older are
                permitted to use this platform.
              </p>
            </div>

            <div className="text-sm space-y-1">
              <p>
                <strong>Company:</strong> Laser 247 Play
              </p>
              <p>
                <strong>CIN:</strong> U10792KA2024PTC186879
              </p>
              <p>
                <strong>PAN:</strong> AAKCK3043B | <strong>TAN:</strong> BLRK25121F
              </p>
              <p>
                <strong>Address:</strong> C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet,
                Kodagu- 571215, Karnataka
              </p>
            </div>

            <p className="text-sm text-center">
              © 2024 Laser 247 Play. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
