import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Trophy,
  Users,
  BookOpen,
  TrendingUp,
  Shield,
  Clock,
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu_1770939943369_na1fn_bG9nby1uZXc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHVfMTc3MDkzOTk0MzM2OV9uYTFmbl9iRzluYnkxdVpYYy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Y1i1zYmUinMcByhrFSnPDe7mCEFsMst8CyzkOaeULNp4KvekXlvjP7zqEBLOPR~jwnha2~bcwBAY-S1CN26VISznEDvHRqo2MG~MoaeFLvCweoZDqDlA1quRb3c~OiFf-fmWUnBnLRRqsD~SFnkz8QSGMyhTMrRWaHPLZYd5TS9Jihg9xc8Zd0VcYSElAMheZ90TyJd~zqtAuNSXzq5VvohXVU~oumqlf1ZpU-7L1v-69SmFmFwGI2KKvVuNL6feWSfq~AuoDd2BXOioqiKIPfIqsemBt5nqy1gnmhiqgMvflxUCp8UseuvvRf~SCguWyjT0jKr92PcSqL6QmYcogg__"
                alt="Laser 247 Play"
                className="h-12 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">
                About
              </Link>
              <Link href="/how-to-play" className="text-gray-700 hover:text-primary font-medium transition-colors">
                How To Play
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-primary font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" className="font-semibold">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button className="font-semibold">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              {/* Badges */}
              <div className="flex gap-4 mb-6">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <span className="text-2xl">18+</span>
                </div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Fair Play
                </div>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Free Cricket Entertainment Platform
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Build your dream cricket team, compete on leaderboards, and test your cricket knowledge - completely free! No money, just pure fun and learning.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6">
                    Get Started Free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6">
                    Learn How
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>100% Free Forever</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>No Real Money</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-300" />
                  <span>Educational & Fun</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu-img-2_1770939940000_na1fn_aGVyby1jcmlja2V0LWRldGFpbGVk.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHUtaW1nLTJfMTc3MDkzOTk0MDAwMF9uYTFmbl9hR1Z5YnkxamNtbGphMlYwTFdSbGRHRnBiR1ZrLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=N9g3yfoeJVVd8~RMGvJQ8IHK9ODmJRioPLKWCXHSR8LMJ4rhutAcl~yBIU-8ty7dDpVBi7ulgNbhUmSBsO14BXtelqGVU7Mwvqng7OBa4GwONcw2LmEnKBeIgxvZYgTEtISVrNfQcz9DHlYePE-wPwbDw~sW5C14jbrPw~VqA7zmXN5Qaw6xWXzo~r5T~cedJcLoPNLuuCylJnFtzGDkudtMl~uKiQlEEJf8NAPLe2I~h41GlXChNvDNtiiq1IWNBFDeuWW-aUU9T3ky3LlViZEaJRRK42iZdKQvulAjY4LHSp-G-jah1xKkGKuk7PtjA3v39eI0KIprttL66ZSCCQ__"
                alt="Cricket Stadium"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</div>
              <div className="text-gray-600 font-medium">Teams Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600 font-medium">Matches Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600 font-medium">Free to Play</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Laser 247 Play?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the thrill of cricket team building and strategy without any financial risk. Learn, compete, and have fun!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu_1770939943369_na1fn_ZmVhdHVyZS10ZWFtLWJ1aWxkaW5n.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHVfMTc3MDkzOTk0MzM2OV9uYTFmbl9abVZoZEhWeVpTMTBaV0Z0TFdKMWFXeGthVzVuLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=V4CFAnMUjdU1gB16A~iOY5uZpdgE18AEhkjAPqgtctaMXN8HJEY5KtmTev8l-tc~UJfSzj-q9Xslj8FbvEhmW7NzqHcGWKaSvwBLg3sAYB-mU9DB3nrK8ng97sDvhLjlfuEvUcd9N6dvTltq62as4hWUL1o9X6vcTLc030~sgLPqXuIusorVxjOxTnBCaxAuKa084NR0KEnrorX-FMeiF9BwJPgPh95YrUE-1ZNcvPQYlqekenxvW27QitvWCF5DFf9mWyJkGOSEajcc3Fkwa6KkNxJHmkfBAqnBJvrY80rSgY~YaZxJsEsFCOxddVcYm445UK-Trbgk8Z8s9edDnw__"
                  alt="Team Building"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">Build Your Dream Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Select 11 players from real cricket matches. Choose batsmen, bowlers, all-rounders, and wicket-keepers. Pick your captain and vice-captain strategically to maximize your team's potential.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <Trophy className="w-8 h-8 text-primary" />
                </div>
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu_1770939943370_na1fn_ZmVhdHVyZS1sZWFkZXJib2FyZA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHVfMTc3MDkzOTk0MzM3MF9uYTFmbl9abVZoZEhWeVpTMXNaV0ZrWlhKaWIyRnlaQS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=va8ySk-SN64w~YqDm4thZzkH~9c9w6-V4iZq-othBAALhzqQcPNM6RX5Ti43qXwaZf9J~UpsgAuBXB60jOYvhdhVw09yP9lmlBMtoU-UCtFZyKXQrQyBRwFZv4NK2po7OyXI-mzV98zM6Hc11klWUEI-IKQeiL72IYFvn~-oV84Uf1NHwi9di08jUISQr576~~RLRhD2W1GUy~IbK8fLOEynMRgaim0uj1O3rD5zI8pGEnS6X9pPCLBtDhW~lI58Pp4HSGayGDqNcPa2xeSfEjVSYz~uWM~h2AqBIfH0zSjGHvyVhz5il3XTrrB4w14FbuB-rT6x0nwD4QSU~~NNKg__"
                  alt="Leaderboard"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">Compete on Leaderboards</h3>
                <p className="text-gray-600 leading-relaxed">
                  See how your team performs against others. Climb the rankings, earn recognition, and showcase your cricket knowledge. Track your progress and celebrate your achievements on our global leaderboard.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/Y7Sk0vn1RqFKRxektkhfh0/sandbox/jgKfAzHwEhwhtfB1nd55tu_1770939943374_na1fn_ZmVhdHVyZS1sZWFybmluZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvWTdTazB2bjFScUZLUnhla3RraGZoMC9zYW5kYm94L2pnS2ZBekh3RWh3aHRmQjFuZDU1dHVfMTc3MDkzOTk0MzM3NF9uYTFmbl9abVZoZEhWeVpTMXNaV0Z5Ym1sdVp3LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=sGgsayWzIEQvANl7hzQx~h2wp5~LryJDZBjBYPnCnWtjOjBjQIDNbtUOVjNMk26-Iehnv5hGvhRJebAbkSOLWwUgN3teWpK-nYJ-I4pC1LN9Jp1HW6dU-YTt3Ev9eYiYFajIF-Hco1T3Sd02wWGgisz4Ojxo6TKn7QKUAMraXliiprhbV0HIDd~FWmnK64YYJtLI1oGxPyEq4Y1PS7iV8m2H-t8-UuOiVPPOTRxd7nDqRuTHhBE5pRDONgrwD50W3CRvmOt935riCRTotJkJm85DD2DGA8WkThYNnzxrIucnLuEuQB-7i-pJ9NHBBnzW8t4~2w14yU1n-etZ-8C5Qw__"
                  alt="Learning"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-3">Learn Cricket Strategy</h3>
                <p className="text-gray-600 leading-relaxed">
                  Understand player statistics, match conditions, and team dynamics. Develop your cricket analytical skills through hands-on experience. Perfect for cricket enthusiasts who want to deepen their understanding of the game.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started in just 4 simple steps and begin your cricket journey today
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Register Free</h3>
                <p className="text-gray-600">
                  Create your account in seconds. Must be 18+ to join our community of cricket enthusiasts.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Choose a Match</h3>
                <p className="text-gray-600">
                  Browse upcoming cricket matches from various tournaments and leagues worldwide.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Build Your Team</h3>
                <p className="text-gray-600">
                  Select 11 players within the budget. Pick captain and vice-captain for bonus points.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                4
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md h-full">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Track & Compete</h3>
                <p className="text-gray-600">
                  Watch your team's performance and see your ranking on the leaderboard in real-time.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/register">
              <Button size="lg" className="font-bold text-lg px-8 py-6">
                Start Playing Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Players Love Laser 247 Play
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of cricket fans who are enjoying the game without any financial pressure. Our platform is designed for pure entertainment and education.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">100% Free Forever</h3>
                    <p className="text-gray-600">
                      No hidden charges, no subscriptions, no in-app purchases. Completely free to play for everyone.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safe & Secure</h3>
                    <p className="text-gray-600">
                      No real money involved. Play responsibly with complete peace of mind and focus on the game.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Educational Value</h3>
                    <p className="text-gray-600">
                      Learn cricket strategy, player analysis, and team management skills through practical experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vibrant Community</h3>
                    <p className="text-gray-600">
                      Connect with fellow cricket enthusiasts, share strategies, and enjoy friendly competition.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-orange-500 rounded-2xl p-8 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Start?</h3>
                <p className="text-lg mb-8 text-blue-100">
                  Join our growing community of cricket lovers and start building your dream team today. No credit card required, no commitments - just pure cricket fun!
                </p>
                <Link href="/register">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold w-full">
                    Create Free Account
                  </Button>
                </Link>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm text-blue-100 mb-4">What you get:</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Unlimited team creation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Access to all matches</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Real-time leaderboard updates</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                      <span>Player statistics & insights</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-700">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Your Cricket Journey Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            No downloads, no installations. Just register and start playing instantly in your browser.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-12 py-6">
              Register Now - It's Free!
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-play" className="hover:text-white transition-colors">
                    How To Play
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/fair-play" className="hover:text-white transition-colors">
                    Fair Play Policy
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gaming" className="hover:text-white transition-colors">
                    Responsible Gaming
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-4">Company Info</h3>
              <p className="text-sm leading-relaxed">
                <strong>Laser 247 Play</strong>
                <br />
                CIN: U10792KA2024PTC186879
                <br />
                PAN: AAKCK3043B
                <br />
                TAN: BLRK25121F
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 mb-6">
              <p className="text-sm text-yellow-200">
                <strong>Legal Disclaimer:</strong> This platform is a free-to-play cricket entertainment and educational platform. Only users 18 years and older are permitted. This is a skill-based platform with no real money involved. No prizes or winnings are awarded.
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
