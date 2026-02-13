import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HowToPlay() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">How To Play</h1>
            <p className="text-xl text-muted-foreground">
              Get started with Laser 247 Play in just a few simple steps
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Create Your Account</h3>
                    <p className="text-muted-foreground">
                      Register with your email and create a secure password. You must be 18 years or
                      older to join our platform. Registration is completely free and takes less
                      than a minute.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Browse Matches</h3>
                    <p className="text-muted-foreground">
                      Explore upcoming cricket matches from various tournaments. You can view match
                      details, participating teams, venue information, and match timings. Select any
                      match you're interested in to start building your team.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Select Your Players</h3>
                    <p className="text-muted-foreground mb-3">
                      Build your dream team by selecting 11 players from the available pool. You
                      need to create a balanced team with:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Batsmen: Players who score runs</li>
                      <li>Bowlers: Players who take wickets</li>
                      <li>All-rounders: Players who both bat and bowl</li>
                      <li>Wicket-keeper: The player who keeps wickets</li>
                    </ul>
                    <p className="text-muted-foreground mt-3">
                      Choose a captain and vice-captain for your team. Their performance will have
                      extra weight in your final score.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Submit Your Team</h3>
                    <p className="text-muted-foreground">
                      Once you're satisfied with your team selection, save and submit your team
                      before the match starts. You can create multiple teams for the same match and
                      edit them until the match begins.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Track Your Performance</h3>
                    <p className="text-muted-foreground">
                      Watch the match and see how your selected players perform. Points are awarded
                      based on real match performance including runs scored, wickets taken, catches,
                      and other cricket actions. Check the leaderboard to see how you rank against
                      other players.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Compete & Learn</h3>
                    <p className="text-muted-foreground">
                      View your ranking on the leaderboard and learn from each match. Analyze which
                      player selections worked well and improve your strategy for future matches.
                      Remember, there are no prizes or money involved—it's all about learning and
                      having fun!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-primary text-white">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">Ready to Start?</h3>
                <p className="mb-6">
                  Join thousands of cricket fans enjoying free team-building entertainment
                </p>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/register">Create Free Account</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
