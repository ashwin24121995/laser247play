import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  UserPlus,
  Search,
  Users,
  Send,
  Trophy,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Shield,
  Target,
  Award,
  Clock
} from "lucide-react";

export default function HowToPlay() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              How To Play
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get started with Squad Master Sports in just a few simple steps. Learn how to build your dream cricket team, compete with others, and master cricket strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Start Guide */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Quick Start Guide
            </h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-teal">
                      1
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <UserPlus className="w-6 h-6 text-teal-600" />
                        <h3 className="text-2xl font-bold text-slate-900">Create Your Account</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Register with your email and create a secure password. You must be 18 years or older to join our platform. Registration is completely free and takes less than 2 minutes.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Provide valid email address</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Create strong password (minimum 8 characters)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Confirm you are 18 years or older</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Verify your email address</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 2 */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-navy">
                      2
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Search className="w-6 h-6 text-slate-800" />
                        <h3 className="text-2xl font-bold text-slate-900">Browse Matches</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Explore upcoming cricket matches from various tournaments including IPL, international matches, domestic cricket, and global T20 leagues. View match details, participating teams, venue information, and match timings.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Filter matches by tournament type</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">View match schedule and countdown timers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Check team lineups and player availability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Read match previews and expert insights</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 3 */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-coral">
                      3
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-orange-600" />
                        <h3 className="text-2xl font-bold text-slate-900">Select Your Players</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Build your dream team by selecting 11 players from both competing teams. You need to create a balanced team within the virtual budget while considering player roles, recent form, and match conditions.
                      </p>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-xl p-6 mb-4">
                        <h4 className="font-bold text-slate-900 mb-3">Team Composition Requirements:</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-slate-900">Batsmen (3-6 players)</p>
                              <p className="text-sm text-gray-600">Players who specialize in scoring runs</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-slate-900">Bowlers (3-6 players)</p>
                              <p className="text-sm text-gray-600">Players who take wickets</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-slate-900">All-Rounders (1-4 players)</p>
                              <p className="text-sm text-gray-600">Players who both bat and bowl</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                            <div>
                              <p className="font-semibold text-slate-900">Wicket-Keeper (1-2 players)</p>
                              <p className="text-sm text-gray-600">Player who keeps wickets</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-xl p-6">
                        <h4 className="font-bold text-slate-900 mb-3">Captain & Vice-Captain Selection:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Captain:</strong> Earns 2x points from their performance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Award className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700"><strong>Vice-Captain:</strong> Earns 1.5x points from their performance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Target className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">Choose players in good form and favorable match conditions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 4 */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-teal">
                      4
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Send className="w-6 h-6 text-teal-600" />
                        <h3 className="text-2xl font-bold text-slate-900">Submit Your Team</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Once you're satisfied with your team selection, save and submit your team before the match starts. You can create multiple teams for the same match and edit them until the match deadline.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Review your team composition and budget</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Confirm captain and vice-captain selections</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Save your team before match deadline</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Edit or create new teams anytime before match starts</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 5 */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-navy">
                      5
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Trophy className="w-6 h-6 text-slate-800" />
                        <h3 className="text-2xl font-bold text-slate-900">Watch & Earn Points</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Once the match starts, watch your team earn points based on real player performances. Track live scores, see how your players are performing, and watch your rank change on the leaderboard in real-time.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Track live match updates and player performances</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">See your team's points accumulate in real-time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Monitor your leaderboard position</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Compare your team with other users</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Step 6 */}
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 shadow-coral">
                      6
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <BarChart3 className="w-6 h-6 text-orange-600" />
                        <h3 className="text-2xl font-bold text-slate-900">Analyze & Improve</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        After the match ends, review your team's performance, analyze what worked and what didn't, and learn from the experience. Use these insights to build better teams in future matches.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">View detailed performance breakdown</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">See which players performed best</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Learn from top-performing teams</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Apply insights to future team selections</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Understanding the Scoring System
            </h2>

            <Card className="card-elevated mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Batting Points</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Every run scored</span>
                    <span className="font-bold text-teal-600">+1 point</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Boundary (4 runs)</span>
                    <span className="font-bold text-teal-600">+1 bonus</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Six (6 runs)</span>
                    <span className="font-bold text-teal-600">+2 bonus</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Half-century (50 runs)</span>
                    <span className="font-bold text-teal-600">+8 bonus</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Century (100 runs)</span>
                    <span className="font-bold text-teal-600">+16 bonus</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Duck (0 runs)</span>
                    <span className="font-bold text-red-600">-2 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Bowling Points</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Every wicket</span>
                    <span className="font-bold text-slate-800">+25 points</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">3 wickets</span>
                    <span className="font-bold text-slate-800">+4 bonus</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">4 wickets</span>
                    <span className="font-bold text-slate-800">+8 bonus</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">5 wickets</span>
                    <span className="font-bold text-slate-800">+16 bonus</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Maiden over</span>
                    <span className="font-bold text-slate-800">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">LBW/Bowled bonus</span>
                    <span className="font-bold text-slate-800">+8 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Fielding Points</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Catch</span>
                    <span className="font-bold text-orange-600">+8 points</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Stumping</span>
                    <span className="font-bold text-orange-600">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Run out (direct hit)</span>
                    <span className="font-bold text-orange-600">+12 points</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg">
                    <span className="text-gray-700">Run out (assist)</span>
                    <span className="font-bold text-orange-600">+6 points</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips & Strategies */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Pro Tips & Strategies
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Study Player Form</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Check recent performances, batting/bowling averages, and player statistics before selecting your team. Players in good form are more likely to perform well.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-slate-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Consider Match Conditions</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Analyze pitch conditions, weather, venue history, and match format. Some players perform better on specific pitches or in certain weather conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Balance Your Team</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Don't overload on batsmen or bowlers. A balanced team with good all-rounders often performs better than an unbalanced squad.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Choose Captain Wisely</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Your captain earns 2x points, so choose a player likely to have significant impact. Consider all-rounders who can contribute with both bat and ball.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-slate-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Monitor Team News</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Stay updated on team announcements, player injuries, and last-minute changes. Edit your team right up until the match deadline if needed.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Learn from Experience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Review your past teams, analyze what worked and what didn't, and continuously improve your selection strategy based on results.
                  </p>
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
              Ready to Build Your First Team?
            </h2>
            <p className="text-xl text-teal-50 mb-8 leading-relaxed">
              Join thousands of cricket enthusiasts and start your journey to becoming a cricket strategy master. It's completely free and takes less than 2 minutes to get started.
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
