import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award } from "lucide-react";

// Sample leaderboard data
const sampleLeaderboard = [
  { rank: 1, name: "Cricket Master", points: 1250, teams: 5 },
  { rank: 2, name: "Team Builder Pro", points: 1180, teams: 4 },
  { rank: 3, name: "Strategy King", points: 1120, teams: 6 },
  { rank: 4, name: "Cricket Genius", points: 1050, teams: 3 },
  { rank: 5, name: "Match Predictor", points: 980, teams: 5 },
  { rank: 6, name: "Player Analyst", points: 920, teams: 4 },
  { rank: 7, name: "Cricket Fan", points: 850, teams: 3 },
  { rank: 8, name: "Team Captain", points: 780, teams: 2 },
  { rank: 9, name: "Sports Enthusiast", points: 720, teams: 4 },
  { rank: 10, name: "Cricket Scholar", points: 650, teams: 3 },
];

export default function Leaderboard() {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-6 w-6 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-6 w-6 text-gray-400" />;
    if (rank === 3) return <Award className="h-6 w-6 text-orange-600" />;
    return null;
  };

  const getRankBadgeColor = (rank: number) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800 border-yellow-300";
    if (rank === 2) return "bg-gray-100 text-gray-800 border-gray-300";
    if (rank === 3) return "bg-orange-100 text-orange-800 border-orange-300";
    return "bg-blue-100 text-blue-800 border-blue-300";
  };

  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen">
        <div className="container max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2">Leaderboard</h1>
            <p className="text-muted-foreground">
              Top performers in cricket team building
            </p>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {sampleLeaderboard.slice(0, 3).map((player, index) => (
                  <div
                    key={player.rank}
                    className={`p-4 rounded-lg ${
                      index === 0
                        ? "bg-yellow-50 border-2 border-yellow-300"
                        : index === 1
                          ? "bg-gray-50 border-2 border-gray-300"
                          : "bg-orange-50 border-2 border-orange-300"
                    }`}
                  >
                    <div className="flex justify-center mb-2">{getRankIcon(player.rank)}</div>
                    <p className="font-bold text-lg mb-1">{player.name}</p>
                    <p className="text-2xl font-bold text-primary mb-1">{player.points}</p>
                    <p className="text-xs text-muted-foreground">points</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="grid grid-cols-12 gap-4 pb-3 border-b font-semibold text-sm text-muted-foreground">
                  <div className="col-span-2">Rank</div>
                  <div className="col-span-5">Player</div>
                  <div className="col-span-3 text-right">Points</div>
                  <div className="col-span-2 text-right">Teams</div>
                </div>

                {sampleLeaderboard.map((player) => (
                  <div
                    key={player.rank}
                    className="grid grid-cols-12 gap-4 py-3 border-b last:border-0 hover:bg-gray-50 transition-colors"
                  >
                    <div className="col-span-2 flex items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 ${getRankBadgeColor(
                          player.rank
                        )}`}
                      >
                        {player.rank}
                      </div>
                    </div>
                    <div className="col-span-5 flex items-center font-medium">
                      {player.name}
                    </div>
                    <div className="col-span-3 flex items-center justify-end font-bold text-primary">
                      {player.points}
                    </div>
                    <div className="col-span-2 flex items-center justify-end text-muted-foreground">
                      {player.teams}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-orange-50 border-primary/20">
              <CardContent className="pt-6">
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Compete for the Top Spot!</h3>
                <p className="text-muted-foreground mb-4">
                  Build winning teams and climb the leaderboard. Remember, it's all about learning
                  and having fun!
                </p>
                <p className="text-sm text-muted-foreground italic">
                  No prizes or money involved - just recognition and bragging rights!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
