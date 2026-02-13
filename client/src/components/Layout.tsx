import { Button } from "@/components/ui/button";
import { useCustomAuth } from "@/hooks/useCustomAuth";
import { trpc } from "@/lib/trpc";
import { Link, useLocation } from "wouter";
import { toast } from "sonner";
import { Shield } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useCustomAuth();
  const [location, setLocation] = useLocation();
  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: () => {
      toast.success("Logged out successfully");
      setLocation("/");
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <a>
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu_1770939943369_na1fn_bG9nby1uZXc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHVfMTc3MDkzOTk0MzM2OV9uYTFmbl9iRzluYnkxdVpYYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y1i1zYmUinMcByhrFSnPDe7mCEFsMst8CyzkOaeULNp4KvekXlvjP7zqEBLOPR~jwnha2~bcwBAY-S1CN26VISznEDvHRqo2MG~MoaeFLvCweoZDqDlA1quRb3c~OiFf-fmWUnBnLRRqsD~SFnkz8QSGMyhTMrRWaHPLZYd5TS9Jihg9xc8Zd0VcYSElAMheZ90TyJd~zqtAuNSXzq5VvohXVU~oumqlf1ZpU-7L1v-69SmFmFwGI2KKvVuNL6feWSfq~AuoDd2BXOioqiKIPfIqsemBt5nqy1gnmhiqgMvflxUCp8UseuvvRf~SCguWyjT0jKr92PcSqL6QmYcogg__"
                  alt="Laser 247 Play"
                  className="h-10 w-auto"
                />
              </a>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/about">
                <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  About
                </a>
              </Link>
              <Link href="/how-to-play">
                <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  How To Play
                </a>
              </Link>
              <Link href="/faq">
                <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  FAQ
                </a>
              </Link>
              <Link href="/blog">
                <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  Blog
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                  Contact
                </a>
              </Link>
              {isAuthenticated && (
                <>
                  <Link href="/dashboard">
                    <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                      Dashboard
                    </a>
                  </Link>
                  <Link href="/matches">
                    <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                      Matches
                    </a>
                  </Link>
                  <Link href="/leaderboard">
                    <a className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">
                      Leaderboard
                    </a>
                  </Link>
                </>
              )}
            </nav>

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-gray-600 hidden md:inline font-medium">
                    {user?.name}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="font-medium">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button variant="ghost" size="sm" className="font-medium">
                      Login
                    </Button>
                  </Link>
                  <Link href="/register">
                    <Button size="sm" className="font-medium">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">
                    <a className="hover:text-white transition-colors">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-play">
                    <a className="hover:text-white transition-colors">How To Play</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a className="hover:text-white transition-colors">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/faq">
                    <a className="hover:text-white transition-colors">FAQ</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="hover:text-white transition-colors">Blog</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms">
                    <a className="hover:text-white transition-colors">Terms & Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <a className="hover:text-white transition-colors">Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/fair-play">
                    <a className="hover:text-white transition-colors">Fair Play Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gaming">
                    <a className="hover:text-white transition-colors">Responsible Gaming</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Company Info</h3>
              <p className="text-sm leading-relaxed">
                <strong>Laser 247 Play</strong>
                <br />
                CIN: U10792KA2024PTC186879
                <br />
                PAN: AAKCK3043B
                <br />
                TAN: BLRK25121F
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold text-sm">18+</span>
                </div>
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-200">
                <strong>Legal Disclaimer:</strong> This is a free-to-play cricket entertainment and educational platform. Only users 18 years and older are permitted. No real money is involved. No prizes or winnings are awarded.
              </p>
            </div>

            <div className="text-center text-sm">
              <p>© 2026 Laser 247 Play. All rights reserved.</p>
              <p className="mt-2">
                Address: C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu- 571215, Karnataka
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
