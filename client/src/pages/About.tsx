import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Heart, Shield } from "lucide-react";

export default function About() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Laser 247 Play</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted platform for free cricket entertainment and education
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                At Laser 247 Play, we believe that cricket knowledge and strategy should be
                accessible to everyone. Our mission is to provide a completely free platform where
                cricket enthusiasts can test their skills, build teams, and compete with others—all
                without any financial pressure or risk.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are backed by investors who share our vision of cricket education and
                entertainment. This allows us to offer our platform entirely free of charge, with no
                hidden costs, deposits, or real money involvement.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Educational Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Learn cricket strategy, player analysis, and team composition through hands-on
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
                <p className="text-sm text-muted-foreground">
                  Join a growing community of cricket fans who share your passion for the game.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">100% Free</h3>
                <p className="text-sm text-muted-foreground">
                  No deposits, no payments, no real money. Just pure cricket entertainment.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Safe & Responsible</h3>
                <p className="text-sm text-muted-foreground">
                  18+ only platform with strict fair play policies and responsible gaming practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Company Name:</strong> Laser 247 Play
                </p>
                <p>
                  <strong>CIN:</strong> U10792KA2024PTC186879
                </p>
                <p>
                  <strong>PAN:</strong> AAKCK3043B
                </p>
                <p>
                  <strong>TAN:</strong> BLRK25121F
                </p>
                <p>
                  <strong>Registered Address:</strong> C/O S K MOHAN, MEKOOR, SIDDAPURA,
                  Pollibetta, Virajpet, Kodagu- 571215, Karnataka
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
