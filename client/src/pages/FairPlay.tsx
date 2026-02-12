import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function FairPlay() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Fair Play Policy</h1>
            <p className="text-muted-foreground">
              Our commitment to fair and transparent gameplay
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 prose prose-sm max-w-none">
              <h2>Our Fair Play Commitment</h2>
              <p>
                At Laser 247 Play, we are committed to providing a fair, transparent, and enjoyable
                experience for all users. Our Fair Play Policy ensures that everyone has an equal
                opportunity to participate and compete.
              </p>

              <h2>1. Equal Opportunity</h2>
              <p>
                All registered users have equal access to matches, player information, and platform
                features. There are no hidden advantages or premium features that give some users an
                unfair edge over others.
              </p>

              <h2>2. Transparent Scoring</h2>
              <p>
                Our scoring system is based on actual cricket match performance. Points are awarded
                fairly and consistently according to predefined rules. The scoring criteria are
                publicly available and apply equally to all users.
              </p>

              <h2>3. No Manipulation</h2>
              <p>We strictly prohibit:</p>
              <ul>
                <li>Use of bots or automated systems</li>
                <li>Multiple accounts by the same person</li>
                <li>Collusion or coordination between users</li>
                <li>Exploitation of bugs or technical vulnerabilities</li>
                <li>Any form of cheating or unfair advantage</li>
              </ul>

              <h2>4. Account Integrity</h2>
              <p>
                Each user is allowed only one account. Creating multiple accounts to gain unfair
                advantages is strictly prohibited and will result in permanent suspension of all
                associated accounts.
              </p>

              <h2>5. Data Accuracy</h2>
              <p>
                All player statistics and match data are sourced from reliable cricket data
                providers. We ensure that information is accurate and updated in real-time during
                matches.
              </p>

              <h2>6. Reporting Violations</h2>
              <p>
                If you suspect any violation of our Fair Play Policy, please report it immediately
                through our Contact Us page. All reports are investigated thoroughly and
                confidentially.
              </p>

              <h2>7. Consequences of Violations</h2>
              <p>Violations of this Fair Play Policy may result in:</p>
              <ul>
                <li>Warning and account review</li>
                <li>Temporary suspension of account</li>
                <li>Permanent ban from the Platform</li>
                <li>Removal from leaderboards</li>
              </ul>

              <h2>8. Educational Purpose</h2>
              <p>
                Remember, Laser 247 Play is designed for entertainment and education. There are no
                real prizes or money involved. The focus should be on learning cricket strategy and
                having fun, not on winning at any cost.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                <p className="font-semibold text-green-900 mb-2">Play Fair, Play Smart:</p>
                <p className="text-green-800">
                  Fair play makes the Platform enjoyable for everyone. Let's build a community that
                  values integrity, sportsmanship, and respect.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
