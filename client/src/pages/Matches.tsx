import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock } from "lucide-react";

// Sample match data
const sampleMatches = [
  {
    id: 1,
    team1: "India",
    team2: "Australia",
    tournament: "ICC World Cup 2024",
    venue: "Wankhede Stadium, Mumbai",
    date: "2024-03-15",
    time: "14:00 IST",
    status: "upcoming",
  },
  {
    id: 2,
    team1: "England",
    team2: "Pakistan",
    tournament: "T20 International",
    venue: "Lord's, London",
    date: "2024-03-16",
    time: "18:00 GMT",
    status: "upcoming",
  },
  {
    id: 3,
    team1: "South Africa",
    team2: "New Zealand",
    tournament: "Test Series",
    venue: "Newlands, Cape Town",
    date: "2024-03-17",
    time: "10:00 SAST",
    status: "upcoming",
  },
];

export default function Matches() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50 min-h-screen">
        <div className="container max-w-5xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Upcoming Matches</h1>
            <p className="text-muted-foreground">
              Select a match to build your team and compete
            </p>
          </div>

          <div className="space-y-4">
            {sampleMatches.map((match) => (
              <Card key={match.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{match.tournament}</Badge>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          {match.status}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-center">
                          <p className="font-semibold text-lg">{match.team1}</p>
                        </div>
                        <div className="text-muted-foreground font-bold">vs</div>
                        <div className="text-center">
                          <p className="font-semibold text-lg">{match.team2}</p>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{match.venue}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(match.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{match.time}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button className="w-full sm:w-auto">Create Team</Button>
                      <Button variant="outline" className="w-full sm:w-auto">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">More Matches Coming Soon!</h3>
                <p className="text-muted-foreground">
                  We're constantly adding new matches. Check back regularly for updates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
