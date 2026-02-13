import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Info, Shield, Ban, FileWarning, DollarSign } from "lucide-react";

export default function Disclaimer() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-teal-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="w-10 h-10 text-orange-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Important legal disclaimers and limitations regarding the use of Squad Master Sports. Please read carefully before using our platform.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: February 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Critical Notice */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated border-4 border-orange-300 bg-gradient-to-br from-orange-100 to-orange-50">
              <CardContent className="p-10">
                <div className="flex items-start gap-6">
                  <DollarSign className="w-12 h-12 text-orange-600 flex-shrink-0" />
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">CRITICAL: No Real Money Involved</h2>
                    <p className="text-lg text-gray-800 leading-relaxed mb-4">
                      <strong>Squad Master Sports is a 100% FREE entertainment and educational platform.</strong> There is absolutely NO real money involved, NO cash prizes, NO deposits, NO withdrawals, and NO financial transactions of any kind.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      This platform is designed purely for cricket entertainment, skill development, and friendly competition. Any expectations of winning real money or monetary rewards are completely false and not endorsed by Squad Master Sports.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">General Disclaimer</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The information and services provided on Squad Master Sports (the "Platform") are for general informational and entertainment purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the Platform or the information, products, services, or related graphics contained on the Platform for any purpose.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Any reliance you place on such information is strictly at your own risk.</strong> In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this Platform.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">No Gambling or Betting</h2>
                </div>

                <Card className="card-elevated border-2 border-teal-200">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Ban className="w-8 h-8 text-teal-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Not a Gambling Platform</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Squad Master Sports is <strong>NOT a gambling, betting, or wagering platform</strong> under any applicable laws. We explicitly disclaim any association with:
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <p className="text-gray-700"><strong>✗ Online Gambling:</strong> No real money bets, wagers, or stakes of any kind</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <p className="text-gray-700"><strong>✗ Sports Betting:</strong> No betting on cricket matches or player performances</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <p className="text-gray-700"><strong>✗ Fantasy Sports for Money:</strong> No paid entry fees or cash prize pools</p>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <p className="text-gray-700"><strong>✗ Games of Chance:</strong> No lotteries, raffles, or chance-based monetary rewards</p>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-teal-50 rounded-xl border border-teal-200">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>What We Are:</strong> Squad Master Sports is a free-to-play educational and entertainment platform focused on cricket knowledge, strategy development, and friendly competition. All contests and leaderboards are purely for entertainment value and recognition, with no monetary stakes or rewards.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 3 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">No Financial Advice</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Squad Master Sports does not provide financial, investment, betting, or gambling advice. Any content, statistics, player performance data, or match predictions provided on the Platform are for entertainment and educational purposes only and should not be construed as:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Financial or investment advice</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Betting tips or gambling recommendations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Professional sports analysis or expert predictions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Guaranteed outcomes or performance assurances</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Important:</strong> Always consult with qualified professionals for financial, legal, or betting-related decisions. We are not responsible for any decisions you make based on information from our Platform.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 4 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Accuracy of Information</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      While we make every effort to ensure the accuracy and reliability of information on the Platform, we cannot guarantee that all information is:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-bold text-slate-900 mb-2">Match Data</h4>
                        <p className="text-sm text-gray-700">Match schedules, scores, and player statistics may contain errors or delays</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-bold text-slate-900 mb-2">Player Information</h4>
                        <p className="text-sm text-gray-700">Player profiles, performance data, and availability may be outdated or incorrect</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-bold text-slate-900 mb-2">Points Calculation</h4>
                        <p className="text-sm text-gray-700">Scoring algorithms and point calculations may have errors or discrepancies</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h4 className="font-bold text-slate-900 mb-2">Third-Party Content</h4>
                        <p className="text-sm text-gray-700">Content from external sources may not be verified for accuracy or completeness</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-6">
                      We rely on third-party data providers for cricket statistics and match information. We are not responsible for errors, omissions, or delays in such data. Users should independently verify critical information before making decisions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 5 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Platform Availability</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We strive to keep the Platform available and functional at all times, but we cannot guarantee:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <FileWarning className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Uninterrupted Access:</strong> The Platform may be unavailable due to maintenance, technical issues, or circumstances beyond our control</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileWarning className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Error-Free Operation:</strong> The Platform may contain bugs, errors, or technical glitches that affect functionality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileWarning className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Security:</strong> While we implement security measures, no system is completely secure from unauthorized access or cyberattacks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileWarning className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Data Preservation:</strong> We cannot guarantee that your data will never be lost, corrupted, or accidentally deleted</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-700">
                        <strong>Recommendation:</strong> We recommend regularly backing up any important data and not relying solely on our Platform for critical information storage.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 6 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Third-Party Links & Content</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      The Platform may contain links to third-party websites, services, or content that are not owned or controlled by Squad Master Sports. We have no control over, and assume no responsibility for:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-slate-800">→</span>
                        <span>The content, privacy policies, or practices of any third-party websites or services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-800">→</span>
                        <span>The accuracy, legality, or appropriateness of third-party content</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-800">→</span>
                        <span>Any damages or losses caused by your use of third-party websites or services</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-slate-800">→</span>
                        <span>Transactions between you and third-party providers</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.</strong> The inclusion of any link does not imply endorsement by Squad Master Sports.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 7 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">User-Generated Content</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Users may create teams, post comments, or submit other content to the Platform. We disclaim all responsibility and liability for:
                    </p>
                    <div className="space-y-3">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <p className="text-gray-700"><strong>Accuracy:</strong> We do not verify the accuracy or truthfulness of user-generated content</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <p className="text-gray-700"><strong>Legality:</strong> We are not responsible if user content violates laws or third-party rights</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <p className="text-gray-700"><strong>Offensiveness:</strong> User content may be offensive, inappropriate, or objectionable to some users</p>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <p className="text-gray-700"><strong>Moderation:</strong> While we may moderate content, we cannot review all user submissions in real-time</p>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mt-6">
                      Users are solely responsible for their own content. If you encounter inappropriate or illegal content, please report it to us immediately.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 8 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    8
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">No Professional Relationship</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Use of the Platform does not create any professional relationship between you and Squad Master Sports. Specifically:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>We are not your financial advisor, legal counsel, or sports consultant</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>We do not provide personalized advice tailored to your specific circumstances</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>We are not responsible for decisions you make based on Platform information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span>We do not guarantee any specific outcomes or results from using the Platform</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Section 9 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    9
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Changes to Platform & Services</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We reserve the right to:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                        <span>Modify, suspend, or discontinue any aspect of the Platform at any time without notice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                        <span>Change features, functionality, or scoring systems without prior notification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                        <span>Remove or restrict access to certain content, features, or tournaments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                        <span>Terminate the Platform entirely if necessary for operational or legal reasons</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      We are not liable for any inconvenience, loss, or damage resulting from such changes or discontinuation.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 10 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    10
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Limitation of Liability</h2>
                </div>

                <Card className="card-elevated border-2 border-orange-200">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4 uppercase font-bold">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, LASER 247 PLAY, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES SHALL NOT BE LIABLE FOR:
                    </p>
                    <ul className="space-y-3 text-gray-700 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Any indirect, incidental, special, consequential, or punitive damages</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Loss of profits, revenue, data, use, goodwill, or other intangible losses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Damages resulting from your use or inability to use the Platform</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Unauthorized access to or alteration of your transmissions or data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Statements or conduct of any third party on the Platform</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Any other matter relating to the Platform or services</span>
                      </li>
                    </ul>
                    <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Maximum Liability:</strong> In no event shall our total liability to you for all damages, losses, and causes of action exceed ₹1,000 (One Thousand Indian Rupees), regardless of the form of action or theory of liability.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 11 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    11
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Indemnification</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree to defend, indemnify, and hold harmless Squad Master Sports and its affiliates, officers, directors, employees, agents, and partners from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including attorney's fees) arising from:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Your use of and access to the Platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Your violation of any term of our Terms of Service or this Disclaimer</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Your violation of any third-party right, including intellectual property or privacy rights</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Any claim that your user content caused damage to a third party</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Your violation of any applicable laws or regulations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Section 12 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    12
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Governing Law</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This Disclaimer and any disputes arising out of or related to it shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Any legal action or proceeding arising under this Disclaimer will be brought exclusively in the courts located in Kodagu, Karnataka, India, and you hereby irrevocably consent to personal jurisdiction and venue therein.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 13 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    13
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Changes to Disclaimer</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We reserve the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective immediately upon posting to the Platform. Your continued use of the Platform after any changes constitutes acceptance of the updated Disclaimer.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      We encourage you to review this Disclaimer periodically to stay informed about how we disclaim liability and what limitations apply to your use of the Platform.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 14 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    14
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have any questions about this Disclaimer, please contact us:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-teal-50 rounded-xl border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-3">Legal Inquiries</h4>
                        <a href="mailto:Support@squadmastersports.com" className="text-teal-600 font-semibold hover:text-teal-700">
                          Support@squadmastersports.com
                        </a>
                      </div>

                      <div className="p-6 bg-orange-50 rounded-xl border border-orange-200">
                        <h4 className="font-bold text-slate-900 mb-3">General Support</h4>
                        <a href="mailto:Support@squadmastersports.com" className="text-orange-600 font-semibold hover:text-orange-700">
                          Support@squadmastersports.com
                        </a>
                      </div>

                      <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 md:col-span-2">
                        <h4 className="font-bold text-slate-900 mb-3">Postal Address</h4>
                        <p className="text-gray-700">
                          Master Squad Solutions Private Limited<br />
                          6-3-885/7/B, 3rd Floor, Anith Plaza<br />
                          Somajiguda, Hyderabad, Telangana<br />
                          India - 500082
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Warning */}
      <section className="py-12 bg-gradient-to-br from-orange-50 to-teal-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated border-4 border-orange-300 bg-gradient-to-br from-orange-100 to-white">
              <CardContent className="p-10 text-center">
                <AlertTriangle className="w-16 h-16 text-orange-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Use at Your Own Risk
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  BY USING LASER 247 PLAY, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS DISCLAIMER AND AGREE TO BE BOUND BY ITS TERMS.
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  <strong>YOU USE THE PLATFORM ENTIRELY AT YOUR OWN RISK.</strong> We disclaim all liability for any damages, losses, or consequences arising from your use of the Platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
