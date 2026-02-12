import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function ResponsibleGaming() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Responsible Gaming</h1>
            <p className="text-muted-foreground">
              Promoting healthy and balanced platform usage
            </p>
          </div>

          <Card>
            <CardContent className="pt-6 prose prose-sm max-w-none">
              <h2>Our Commitment</h2>
              <p>
                While Laser 247 Play does not involve real money, we believe in promoting
                responsible and balanced usage of the Platform. Our goal is to ensure that using the
                Platform remains a fun, educational, and positive experience.
              </p>

              <h2>1. Age Restriction</h2>
              <p>
                The Platform is strictly for users 18 years and older. We verify age during
                registration and do not permit minors to access the Platform under any
                circumstances.
              </p>

              <h2>2. Entertainment, Not Obsession</h2>
              <p>
                Laser 247 Play is designed for entertainment and learning. While competition can be
                exciting, remember that this is a recreational activity. Maintain a healthy balance
                between using the Platform and other aspects of your life.
              </p>

              <h2>3. Set Your Own Limits</h2>
              <p>We encourage you to:</p>
              <ul>
                <li>Set time limits for Platform usage</li>
                <li>Take regular breaks</li>
                <li>Avoid excessive screen time</li>
                <li>Maintain other hobbies and interests</li>
                <li>Prioritize real-life relationships and responsibilities</li>
              </ul>

              <h2>4. Recognize Warning Signs</h2>
              <p>
                If you or someone you know shows signs of problematic usage, such as neglecting
                responsibilities, losing interest in other activities, or experiencing stress related
                to leaderboard rankings, it may be time to take a break.
              </p>

              <h2>5. No Financial Risk</h2>
              <p>
                Unlike platforms involving real money, Laser 247 Play carries no financial risk.
                There are no deposits, no losses, and no monetary consequences. This makes it a safe
                environment for cricket entertainment.
              </p>

              <h2>6. Educational Focus</h2>
              <p>
                Remember that the primary purpose of the Platform is education. Use it as an
                opportunity to learn about cricket strategy, player analysis, and team composition—not
                just to compete on leaderboards.
              </p>

              <h2>7. Self-Exclusion</h2>
              <p>
                If you feel you need a break from the Platform, you can temporarily deactivate or
                permanently delete your account at any time through your profile settings.
              </p>

              <h2>8. Support Resources</h2>
              <p>
                If you're concerned about your usage patterns or need support, please reach out to
                us through our Contact Us page. We're here to help ensure your experience remains
                positive and healthy.
              </p>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mt-6">
                <p className="font-semibold text-purple-900 mb-2">Balance is Key:</p>
                <p className="text-purple-800">
                  Enjoy cricket team building as a fun hobby, not an obligation. Take breaks, set
                  limits, and remember that it's just a game designed for your entertainment and
                  learning.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
