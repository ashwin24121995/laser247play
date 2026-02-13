import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { Shield, Menu, X, ChevronRight } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, logout } = useAuth();
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    setLocation("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="container">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">18+</span>
                </div>
                <span className="text-gray-300">Age Restricted Platform</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-400" />
                <span className="text-gray-300">100% Free Forever</span>
              </div>
            </div>
            <div className="text-gray-400">
              CIN: U62013TS2023PTC172578
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/">
              <a className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Squad Master Sports"
                  className="h-12 w-auto"
                />
              </a>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link href="/about">
                <a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                  About
                </a>
              </Link>
              <Link href="/how-to-play">
                <a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                  How To Play
                </a>
              </Link>
              <Link href="/faq">
                <a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                  FAQ
                </a>
              </Link>
              {isAuthenticated && (
                <>
                  <Link href="/matches">
                    <a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                      Matches
                    </a>
                  </Link>
                  <Link href="/leaderboard">
                    <a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                      Leaderboard
                    </a>
                  </Link>
                </>
              )}
              <Link href="/contact">
                <a className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
                  Contact
                </a>
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <Link href="/dashboard">
                    <Button variant="ghost" size="sm" className="hidden md:flex font-medium">
                      Dashboard
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={handleLogout} 
                    className="hidden md:flex font-medium border-gray-300"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="hidden md:flex font-medium">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="bg-teal-600 hover:bg-teal-700 font-semibold">
                      Get Started Free
                    </Button>
                  </Link>
                </>
              )}
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <nav className="flex flex-col gap-2">
                <Link href="/about">
                  <a className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg flex items-center justify-between">
                    About
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/how-to-play">
                  <a className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg flex items-center justify-between">
                    How To Play
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Link>
                <Link href="/faq">
                  <a className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg flex items-center justify-between">
                    FAQ
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Link>
                {isAuthenticated && (
                  <>
                    <Link href="/dashboard">
                      <a className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg flex items-center justify-between">
                        Dashboard
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Link>
                    <Link href="/matches">
                      <a className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg flex items-center justify-between">
                        Matches
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Link>
                    <Link href="/leaderboard">
                      <a className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg flex items-center justify-between">
                        Leaderboard
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    </Link>
                  </>
                )}
                <Link href="/contact">
                  <a className="px-4 py-3 text-sm font-medium text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-lg flex items-center justify-between">
                    Contact
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </Link>
                {isAuthenticated && (
                  <button
                    onClick={handleLogout}
                    className="px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg text-left"
                  >
                    Logout
                  </button>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 pt-16 pb-8">
        <div className="container">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Company Info - Takes 2 columns */}
            <div className="lg:col-span-2">
              <img
                src="https://via.placeholder.com/150"
                alt="Squad Master Sports"
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-sm leading-relaxed mb-4 text-gray-400">
                India's premier free-to-play cricket entertainment and educational platform. Build teams, compete on leaderboards, and master cricket strategy without spending a rupee.
              </p>
              <div className="space-y-2 text-sm">
                <p><strong className="text-white">Squad Master Sports</strong></p>
                <p>Master Squad Solutions Private Limited</p>
                <p>CIN: U62013TS2023PTC172578</p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">18+</span>
                </div>
                <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/about">
                    <a className="hover:text-teal-400 transition-colors">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-play">
                    <a className="hover:text-teal-400 transition-colors">How To Play</a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <a className="hover:text-teal-400 transition-colors">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="hover:text-teal-400 transition-colors">Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-teal-400 transition-colors">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/privacy-policy">
                    <a className="hover:text-teal-400 transition-colors">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    <a className="hover:text-teal-400 transition-colors">Terms of Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer">
                    <a className="hover:text-teal-400 transition-colors">Disclaimer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/fair-play">
                    <a className="hover:text-teal-400 transition-colors">Fair Play Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gaming">
                    <a className="hover:text-teal-400 transition-colors">Responsible Gaming</a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Platform</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>100% Free Forever</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>No Real Money</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>Educational Focus</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>All India Access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>18+ Only</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-slate-800 pt-8 mb-8">
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
              <p className="text-sm text-orange-200">
                <strong className="text-orange-400">Legal Disclaimer:</strong> This is a free-to-play cricket entertainment and educational platform. Only users 18 years and older are permitted. No real money is involved. No prizes or winnings are awarded.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
              <p>© 2026 Squad Master Sports. All rights reserved. | CIN: U62013TS2023PTC172578</p>
              <p className="text-center md:text-right">
                Master Squad Solutions Private Limited | 6-3-885/7/B, 3rd Floor, Anith Plaza, Somajiguda, Hyderabad, Telangana - 500082
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
