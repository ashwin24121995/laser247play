import { Layout } from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about Squad Master Sports. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* General Questions */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">General Questions</h2>
                
                <AccordionItem value="item-1" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    Is Squad Master Sports really 100% free?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Yes! Squad Master Sports is completely free with no hidden charges, subscriptions, or in-app purchases. We are backed by investors who believe in making cricket education accessible to everyone. You will never be asked to pay anything to use our platform. Every feature, every match, every competition is available to all users at no cost, forever.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    Can I win real money on this platform?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    No. Squad Master Sports is a free-to-play educational and entertainment platform. There are no cash prizes, no real money involved, and no financial transactions. We focus purely on cricket knowledge, skill development, and fun competition. You compete on leaderboards for recognition, learning, and personal growth - not for money.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    Why do I need to be 18+ to use this platform?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    We require users to be 18 years or older as a responsible gaming practice. Even though there's no real money involved, we want to ensure our platform is used by adults who can make informed decisions about their time and engagement. This age restriction helps us maintain a mature, responsible community.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    Is this platform available across all of India?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Yes! Squad Master Sports is available across all Indian states with no geographical restrictions. As a free educational platform with no real money involved, we welcome cricket fans from every corner of India. Whether you're in Mumbai, Delhi, Bangalore, Kolkata, or any other city or town, you can access and enjoy our platform.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    How is my data protected?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    We take data security seriously. All user data is encrypted and stored securely using industry-standard security practices. We never share your personal information with third parties without your consent. Your email, password, and other personal details are protected with advanced encryption. Read our Privacy Policy for complete details on how we protect your data.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Account & Registration */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Account & Registration</h2>
                
                <AccordionItem value="item-6" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    How do I create an account?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Creating an account is simple and takes less than 2 minutes. Click on "Get Started Free" or "Register" button, provide your email address, create a secure password, confirm you are 18 years or older, and verify your email. That's it! No payment information, no credit card required - just your email and password.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    What if I forget my password?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    If you forget your password, click on the "Forgot Password" link on the login page. Enter your registered email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password and regain access to your account.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    Can I change my email address?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Yes, you can update your email address from your profile settings. Log in to your account, go to Profile Settings, and update your email. You'll need to verify the new email address before the change takes effect. This ensures the security of your account.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    Can I delete my account?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Yes, you have the right to delete your account at any time. Go to Profile Settings and look for the "Delete Account" option. Please note that deleting your account will permanently remove all your data, teams, and history. This action cannot be undone, so please consider carefully before proceeding.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Team Building */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Team Building</h2>
                
                <AccordionItem value="item-10" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    How do I build a cricket team?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    After selecting a match, you'll choose 11 players from both competing teams within a virtual budget. You need to select a balanced team with batsmen, bowlers, all-rounders, and a wicket-keeper. Then pick your captain (who earns 2x points) and vice-captain (who earns 1.5x points). Your team earns points based on real match performance. Check out our "How To Play" guide for detailed instructions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    Can I create multiple teams for the same match?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Yes, you can create multiple teams for the same match with different player combinations. This allows you to test different strategies, experiment with various captain choices, and increase your chances of ranking higher on the leaderboard. There's no limit to the number of teams you can create.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    Can I edit my team after creating it?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Yes, you can edit your team anytime before the match deadline (usually when the match starts). You can change players, swap captain/vice-captain, or completely rebuild your team. However, once the match begins, your team is locked and cannot be modified. Make sure to finalize your team before the deadline!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-13" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    What is the virtual budget for team selection?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Each match has a virtual budget (typically 100 credits) that you must stay within when selecting your 11 players. Each player has a credit value based on their recent performance and popularity. You need to balance star players (who cost more credits) with value picks (who cost fewer credits) to build a competitive team within budget.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    How do I choose the best captain and vice-captain?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Choose players in good form who are likely to have significant impact on the match. Consider all-rounders who can contribute with both bat and ball. Check recent performances, pitch conditions, and match-ups. Your captain earns 2x points, so this decision can make or break your team's performance. Don't always go with the obvious choice - sometimes differential picks can help you climb the leaderboard.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Scoring & Points */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Scoring & Points</h2>
                
                <AccordionItem value="item-15" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    How are points calculated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Points are awarded based on real match performance. Batsmen earn points for runs scored (1 point per run), boundaries (+1 bonus), sixes (+2 bonus), and milestones like half-centuries (+8) and centuries (+16). Bowlers earn points for wickets (+25), maiden overs (+12), and bowling bonuses. Fielders earn points for catches (+8), stumpings (+12), and run-outs (+6-12). Check our "How To Play" page for the complete scoring breakdown.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-16" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    When are points updated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Points are updated in real-time as the match progresses. You can track your team's performance live and see your points accumulate as players perform actions on the field. After the match ends, final points are calculated and your leaderboard position is updated. There may be a brief delay for official verification, but most updates happen instantly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-17" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    What happens if a player doesn't play?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    If a player you selected doesn't play in the match (due to injury, team selection, or other reasons), they will score 0 points. This is why it's important to monitor team news and make last-minute changes if needed. You can edit your team right up until the match deadline to replace players who might not play.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-18" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    Can points be negative?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Yes, in some cases. For example, a batsman who gets out for a duck (0 runs) loses 2 points. However, the minimum score for any player is capped, so you won't lose excessive points. The scoring system is designed to reward good performances while having minimal penalties for poor performances.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Tournaments & Matches */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Tournaments & Matches</h2>
                
                <AccordionItem value="item-19" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    Which cricket tournaments are covered?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    We cover all major cricket tournaments including IPL (Indian Premier League), international matches (Test, ODI, T20I), domestic cricket (Ranji Trophy, Vijay Hazare Trophy, Syed Mushtaq Ali Trophy), and global T20 leagues (BBL, CPL, PSL, The Hundred). Over 500+ matches annually across all formats. We're constantly adding more tournaments based on user demand.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-20" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    How far in advance are matches listed?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Matches are typically listed 1-2 weeks in advance, depending on the tournament schedule. For major tournaments like IPL, we list all matches at the start of the season. For international series, matches are added as soon as the official schedule is announced. Check the Matches page regularly to see upcoming fixtures.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-21" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    What if a match is cancelled or postponed?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    If a match is cancelled or postponed, all teams created for that match are automatically voided. If the match is rescheduled, you'll need to create new teams for the new date. We'll notify you via email if any matches you've entered teams for are cancelled or rescheduled. No points are awarded for cancelled matches.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Leaderboard & Rankings */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Leaderboard & Rankings</h2>
                
                <AccordionItem value="item-22" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    How does the leaderboard work?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    The leaderboard ranks all users based on their total points earned across all matches. Your team earns points based on real player performances in actual cricket matches. Points are awarded for runs, wickets, catches, and other cricket actions. You can track your rank nationally and see how you compare with other cricket enthusiasts. There are also match-specific leaderboards showing rankings for individual matches.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-23" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    How often is the leaderboard updated?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    The leaderboard is updated in real-time during matches and immediately after match completion. You can see your rank change as matches progress and as other users' teams perform. The overall leaderboard (cumulative across all matches) is updated continuously, so you always see your current standing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-24" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    What do I get for ranking high on the leaderboard?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Since Squad Master Sports is a free educational platform with no real money involved, there are no cash prizes or monetary rewards. However, you earn recognition, bragging rights, and the satisfaction of proving your cricket knowledge. High-ranking users are featured on our leaderboard, and you can share your achievements with friends. The real reward is improving your cricket understanding and strategic thinking skills.
                  </AccordionContent>
                </AccordionItem>
              </div>

              {/* Technical Issues */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Technical Issues</h2>
                
                <AccordionItem value="item-25" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    What browsers are supported?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Squad Master Sports works on all modern web browsers including Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and Opera. We recommend using the latest version of your browser for the best experience. The platform is also fully responsive and works on mobile devices, tablets, and desktops.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-26" className="bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-orange-600">
                    Is there a mobile app?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    Currently, Squad Master Sports is a web-based platform accessible through any mobile browser. While we don't have a dedicated mobile app yet, our website is fully optimized for mobile devices and provides a seamless experience on smartphones and tablets. You can add our website to your home screen for quick access. A dedicated mobile app may be released in the future based on user demand.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-27" className="bg-gradient-to-br from-teal-50 to-white rounded-xl border-2 border-teal-100 px-6 shadow-md mt-4">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-teal-600">
                    What should I do if I encounter a technical issue?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed">
                    If you experience any technical issues, first try refreshing the page or clearing your browser cache. If the problem persists, contact our support team through the Contact Us page with details about the issue, including your browser type, device, and screenshots if possible. We'll investigate and resolve the issue as quickly as possible.
                  </AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-teal-50 mb-8 leading-relaxed">
              Can't find the answer you're looking for? Our support team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-bold px-12 py-5 text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105">
                  Contact Support
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link href="/register">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold px-12 py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
