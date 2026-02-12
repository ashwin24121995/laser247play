import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: February 2024</p>
          </div>

          <Card>
            <CardContent className="pt-6 prose prose-sm max-w-none">
              <h2>1. Information We Collect</h2>
              <p>We collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, date of birth (for age
                  verification)
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use the Platform, including
                  teams created, matches selected, and leaderboard positions
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, browser type, device information, and
                  cookies
                </li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul>
                <li>Provide and maintain the Platform</li>
                <li>Verify your age (18+ requirement)</li>
                <li>Manage your account and teams</li>
                <li>Calculate and display leaderboard rankings</li>
                <li>Communicate with you about the Platform</li>
                <li>Improve our services and user experience</li>
                <li>Ensure compliance with our Terms & Conditions</li>
              </ul>

              <h2>3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect
                your personal information against unauthorized access, alteration, disclosure, or
                destruction. Your password is encrypted using industry-standard hashing algorithms.
              </p>

              <h2>4. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may
                share your information only in the following circumstances:
              </p>
              <ul>
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in operating the Platform (under strict
                  confidentiality agreements)</li>
              </ul>

              <h2>5. Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience on the
                Platform. You can control cookie settings through your browser, but disabling cookies
                may affect Platform functionality.
              </p>

              <h2>6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your account and data</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2>7. Data Retention</h2>
              <p>
                We retain your personal information for as long as your account is active or as
                needed to provide services. If you request account deletion, we will delete your
                information within 30 days, except where retention is required by law.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                The Platform is not intended for users under 18 years of age. We do not knowingly
                collect personal information from individuals under 18. If we discover that we have
                collected information from someone under 18, we will delete it immediately.
              </p>

              <h2>9. Changes to Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the "Last
                updated" date.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or wish to exercise your rights,
                please contact us through our Contact Us page.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="font-semibold text-blue-900 mb-2">Your Privacy Matters:</p>
                <p className="text-blue-800">
                  We are committed to protecting your privacy and handling your data responsibly. We
                  use your information solely to provide and improve the Platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
