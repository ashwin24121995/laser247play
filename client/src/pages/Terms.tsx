import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-muted-foreground">Last updated: February 2024</p>
          </div>

          <Card>
            <CardContent className="pt-6 prose prose-sm max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Squad Master Sports ("the Platform"), you accept and agree to be
                bound by the terms and provisions of this agreement. If you do not agree to these
                terms, please do not use the Platform.
              </p>

              <h2>2. Eligibility</h2>
              <p>
                You must be at least 18 years of age to register and use this Platform. By
                registering, you represent and warrant that you are of legal age and have the right,
                authority, and capacity to enter into this agreement.
              </p>

              <h2>3. Platform Purpose</h2>
              <p>
                Squad Master Sports is a free-to-play cricket entertainment and educational platform. The
                Platform is designed for entertainment purposes only and does not involve real money,
                prizes, or any form of monetary winnings.
              </p>

              <h2>4. No Real Money Involvement</h2>
              <p>
                This Platform does not involve any real money transactions, deposits, or withdrawals.
                There are no cash prizes, rewards, or monetary benefits of any kind. All activities
                on the Platform are purely for entertainment and educational purposes.
              </p>

              <h2>5. User Account</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials
                and for all activities that occur under your account. You agree to immediately notify
                us of any unauthorized use of your account.
              </p>

              <h2>6. User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Platform for any illegal purpose</li>
                <li>Attempt to gain unauthorized access to the Platform or other user accounts</li>
                <li>Interfere with or disrupt the Platform's functionality</li>
                <li>Use automated systems or bots to access the Platform</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Provide false or misleading information during registration</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                All content on the Platform, including text, graphics, logos, and software, is the
                property of Squad Master Sports and is protected by copyright and other intellectual
                property laws.
              </p>

              <h2>8. Privacy</h2>
              <p>
                Your use of the Platform is also governed by our Privacy Policy. Please review our
                Privacy Policy to understand our practices regarding your personal information.
              </p>

              <h2>9. Disclaimer of Warranties</h2>
              <p>
                The Platform is provided "as is" without warranties of any kind, either express or
                implied. We do not warrant that the Platform will be uninterrupted, error-free, or
                free of viruses or other harmful components.
              </p>

              <h2>10. Limitation of Liability</h2>
              <p>
                Squad Master Sports shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages resulting from your use of or inability to use the
                Platform.
              </p>

              <h2>11. Modifications to Terms</h2>
              <p>
                We reserve the right to modify these Terms & Conditions at any time. Changes will be
                effective immediately upon posting. Your continued use of the Platform after changes
                are posted constitutes your acceptance of the modified terms.
              </p>

              <h2>12. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account at any time, without prior
                notice, for conduct that we believe violates these Terms & Conditions or is harmful
                to other users or the Platform.
              </p>

              <h2>13. Governing Law</h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the
                laws of India. Any disputes arising from these terms shall be subject to the
                exclusive jurisdiction of the courts in Karnataka, India.
              </p>

              <h2>14. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us through
                our Contact Us page.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <p className="font-semibold text-amber-900 mb-2">Important Notice:</p>
                <p className="text-amber-800">
                  This is a skill-based, free-to-play platform for entertainment and educational
                  purposes only. No real money is involved. Only users 18 years and older are
                  permitted to use this platform.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
