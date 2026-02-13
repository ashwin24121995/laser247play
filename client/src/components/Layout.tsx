import { Button } from "@/components/ui/button";
import { useCustomAuth } from "@/hooks/useCustomAuth";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { toast } from "sonner";

export function Layout({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useCustomAuth();
  const [, setLocation] = useLocation();
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
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="/">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu_1770939943369_na1fn_bG9nby1uZXc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHVfMTc3MDkzOTk0MzM2OV9uYTFmbl9iRzluYnkxdVpYYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y1i1zYmUinMcByhrFSnPDe7mCEFsMst8CyzkOaeULNp4KvekXlvjP7zqEBLOPR~jwnha2~bcwBAY-S1CN26VISznEDvHRqo2MG~MoaeFLvCweoZDqDlA1quRb3c~OiFf-fmWUnBnLRRqsD~SFnkz8QSGMyhTMrRWaHPLZYd5TS9Jihg9xc8Zd0VcYSElAMheZ90TyJd~zqtAuNSXzq5VvohXVU~oumqlf1ZpU-7L1v-69SmFmFwGI2KKvVuNL6feWSfq~AuoDd2BXOioqiKIPfIqsemBt5nqy1gnmhiqgMvflxUCp8UseuvvRf~SCguWyjT0jKr92PcSqL6QmYcogg__"
                alt="Laser 247 Play"
                className="h-12 w-auto"
              />
            </a>
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
            {isAuthenticated && (
              <>
                <a href="/dashboard" className="text-sm font-medium hover:text-primary">
                  Dashboard
                </a>
                <a href="/matches" className="text-sm font-medium hover:text-primary">
                  Matches
                </a>
                <a href="/leaderboard" className="text-sm font-medium hover:text-primary">
                  Leaderboard
                </a>
              </>
            )}
          </nav>
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-muted-foreground hidden md:inline">
                  {user?.name}
                </span>
                <Button variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" asChild>
                  <a href="/login">Login</a>
                </Button>
                <Button asChild>
                  <a href="/register">Register</a>
                </Button>
              </>
            )}
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
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/xbyRYeYNHKhkVaXJ.png"
                  alt="18+"
                  className="h-10 w-10"
                />
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/OTfKwuJkmAeoTCMc.png"
                  alt="Fair Play"
                  className="h-10 w-10"
                />
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

            <p className="text-sm text-center">© 2024 Laser 247 Play. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
