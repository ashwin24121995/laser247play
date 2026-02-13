import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, AlertCircle, CheckCircle2, XCircle, Scale, UserX, Shield } from "lucide-react";

export default function TermsOfService() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-slate-800" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Please read these Terms of Service carefully before using Squad Master Sports. By accessing or using our platform, you agree to be bound by these terms.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: February 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Important Notice</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      <strong>Squad Master Sports is a 100% free entertainment and educational platform.</strong> There is no real money involved, no cash prizes, no deposits, and no withdrawals. This platform is designed purely for cricket entertainment, skill development, and friendly competition.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      By using our platform, you acknowledge that you are 18 years or older and agree to comply with all terms outlined below.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Acceptance of Terms</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      By accessing, browsing, or using Squad Master Sports (the "Platform"), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, and all applicable laws and regulations.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      If you do not agree with any part of these terms, you must not use our Platform. Your continued use of the Platform constitutes acceptance of any updates or modifications to these terms.
                    </p>
                    <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> These Terms of Service constitute a legally binding agreement between you ("User", "you", or "your") and Squad Master Sports ("we", "us", or "our").
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Eligibility & Account Registration</h2>
                </div>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2.1 Age Requirement</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You must be at least <strong>18 years of age</strong> to register for and use Squad Master Sports. By creating an account, you represent and warrant that you meet this age requirement. We reserve the right to request proof of age and terminate accounts that violate this requirement.
                    </p>
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Why 18+?</strong> Even though our platform involves no real money, we maintain this age restriction as a responsible gaming practice and to comply with applicable regulations.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2.2 Account Responsibilities</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you create an account, you agree to:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Provide accurate, current, and complete information during registration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Maintain and promptly update your account information to keep it accurate</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Maintain the security of your password and accept responsibility for all activities under your account</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Notify us immediately of any unauthorized use of your account or security breaches</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Not share your account credentials with others or allow others to access your account</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">2.3 One Account Per Person</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Each user is permitted to maintain only <strong>one account</strong>. Creating multiple accounts to manipulate leaderboards, circumvent restrictions, or gain unfair advantages is strictly prohibited and will result in account termination.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 3 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Platform Usage & Rules</h2>
                </div>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3.1 Permitted Use</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Squad Master Sports grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Platform for personal, non-commercial entertainment and educational purposes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-teal-600" />
                          <h4 className="font-bold text-slate-900">You May:</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Create and manage cricket teams</li>
                          <li>• Participate in contests and leaderboards</li>
                          <li>• View match statistics and player data</li>
                          <li>• Interact with platform features</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <XCircle className="w-5 h-5 text-orange-600" />
                          <h4 className="font-bold text-slate-900">You May NOT:</h4>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Use bots, scripts, or automation tools</li>
                          <li>• Exploit bugs or vulnerabilities</li>
                          <li>• Scrape or harvest data from the platform</li>
                          <li>• Reverse engineer or decompile code</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3.2 Prohibited Conduct</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree not to engage in any of the following prohibited activities:
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Cheating & Manipulation:</strong>
                          <p className="text-sm text-gray-700">Using automated tools, bots, exploits, or any unfair methods to gain advantages</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Harassment & Abuse:</strong>
                          <p className="text-sm text-gray-700">Harassing, threatening, or abusing other users through any platform feature</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Impersonation & Fraud:</strong>
                          <p className="text-sm text-gray-700">Impersonating others, creating fake accounts, or providing false information</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Illegal Activities:</strong>
                          <p className="text-sm text-gray-700">Using the platform for any illegal purpose or violating applicable laws</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Security Violations:</strong>
                          <p className="text-sm text-gray-700">Attempting to breach security, access unauthorized areas, or interfere with platform operations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-900">Commercial Use:</strong>
                          <p className="text-sm text-gray-700">Using the platform for commercial purposes without written authorization</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3.3 Consequences of Violations</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Violation of these terms may result in:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">→</span>
                        <span>Warning and temporary suspension of account privileges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">→</span>
                        <span>Permanent account termination without refund (if applicable)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">→</span>
                        <span>Removal from leaderboards and forfeiture of rankings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">→</span>
                        <span>Legal action for serious violations or illegal activities</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Section 4 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">No Real Money, No Prizes</h2>
                </div>

                <Card className="card-elevated border-2 border-teal-200">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <Shield className="w-8 h-8 text-teal-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Free Entertainment Platform</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Squad Master Sports is a <strong>100% free entertainment and educational platform</strong>. You acknowledge and agree that:
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <p className="text-gray-700"><strong>✓ No Entry Fees:</strong> You will never be asked to pay any money to use our platform or participate in contests</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <p className="text-gray-700"><strong>✓ No Cash Prizes:</strong> There are no cash prizes, monetary rewards, or any form of real money winnings</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <p className="text-gray-700"><strong>✓ No Deposits/Withdrawals:</strong> The platform does not handle any financial transactions, deposits, or withdrawals</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <p className="text-gray-700"><strong>✓ Entertainment Only:</strong> All contests, leaderboards, and competitions are purely for entertainment, skill development, and recognition</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                        <p className="text-gray-700"><strong>✓ No Gambling:</strong> This platform does not constitute gambling, betting, or any form of wagering under applicable laws</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Important:</strong> Any claims, representations, or expectations of winning real money, cash prizes, or monetary rewards are false and not endorsed by Squad Master Sports.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 5 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Intellectual Property Rights</h2>
                </div>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">5.1 Our Intellectual Property</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      All content, features, and functionality on the Platform, including but not limited to text, graphics, logos, icons, images, audio clips, video clips, data compilations, software, and the compilation thereof (collectively, "Content"), are the exclusive property of Squad Master Sports or its licensors and are protected by Indian and international copyright, trademark, patent, trade secret, and other intellectual property laws.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any Content without our prior written consent.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">5.2 User-Generated Content</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you create teams, post comments, or submit any content to the Platform ("User Content"), you grant Squad Master Sports a worldwide, non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such User Content for platform operation and improvement purposes.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      You represent and warrant that you own or have the necessary rights to all User Content you submit and that such content does not violate any third-party rights or applicable laws.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 6 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Disclaimer of Warranties</h2>
                </div>

                <Card className="card-elevated border-2 border-orange-200">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4 uppercase font-bold">
                      THE PLATFORM IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To the fullest extent permitted by law, Squad Master Sports disclaims all warranties, express or implied, including but not limited to:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Warranties of merchantability, fitness for a particular purpose, and non-infringement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Warranties regarding the accuracy, reliability, or completeness of content or data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Warranties that the platform will be uninterrupted, secure, or error-free</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">•</span>
                        <span>Warranties that defects will be corrected or that the platform is free of viruses or harmful components</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> We make no guarantees about the availability, accuracy, or performance of the platform. Use at your own risk.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 7 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    7
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Limitation of Liability</h2>
                </div>

                <Card className="card-elevated border-2 border-teal-200">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4 uppercase font-bold">
                      TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, LASER 247 PLAY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This limitation applies to damages arising from:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Use or inability to use the platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Unauthorized access to or alteration of your data</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Statements or conduct of any third party on the platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600">→</span>
                        <span>Any other matter relating to the platform or services</span>
                      </li>
                    </ul>
                    <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-700">
                        <strong>Maximum Liability:</strong> In no event shall our total liability to you for all damages exceed the amount of ₹1,000 (One Thousand Indian Rupees) or the amount you paid us in the last 12 months, whichever is less.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 8 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    8
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Indemnification</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      You agree to defend, indemnify, and hold harmless Squad Master Sports, its affiliates, licensors, and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Your violation of these Terms of Service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Your use or misuse of the Platform</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Your violation of any third-party rights, including intellectual property rights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Any User Content you submit or transmit through the Platform</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span>Your violation of any applicable laws or regulations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Section 9 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    9
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Termination</h2>
                </div>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9.1 Termination by You</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You may terminate your account at any time by contacting us at Support@squadmastersports.com or through your account settings. Upon termination, your right to use the Platform will immediately cease.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9.2 Termination by Us</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We reserve the right to suspend or terminate your account and access to the Platform immediately, without prior notice or liability, for any reason, including but not limited to:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <UserX className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Breach of these Terms of Service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <UserX className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Fraudulent, abusive, or illegal activity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <UserX className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>Prolonged inactivity (3+ years)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <UserX className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span>At our sole discretion for operational or legal reasons</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">9.3 Effect of Termination</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Upon termination, all provisions of these Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability. Termination of your account does not relieve you of any obligations incurred prior to termination.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 10 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    10
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Governing Law & Dispute Resolution</h2>
                </div>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10.1 Governing Law</h3>
                    <p className="text-gray-700 leading-relaxed">
                      These Terms of Service and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10.2 Jurisdiction</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You agree that any legal action or proceeding arising out of or relating to these Terms or the Platform shall be brought exclusively in the courts located in Kodagu, Karnataka, India. You consent to the personal jurisdiction of such courts and waive any objection to venue.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">10.3 Dispute Resolution</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Before filing any legal claim, you agree to first contact us at Support@squadmastersports.com to attempt to resolve the dispute informally. We will make reasonable efforts to resolve disputes amicably within 30 days.
                    </p>
                    <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                      <p className="text-sm text-gray-700">
                        <strong>Arbitration:</strong> If informal resolution fails, disputes may be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996, conducted in English in Kodagu, Karnataka, India.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 11 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    11
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Changes to Terms</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We reserve the right to modify or replace these Terms of Service at any time at our sole discretion. When we make significant changes, we will:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <Scale className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                        <span>Update the "Last Updated" date at the top of these Terms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Scale className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                        <span>Notify you via email or prominent notice on the Platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Scale className="w-5 h-5 text-slate-800 flex-shrink-0 mt-0.5" />
                        <span>Provide a reasonable period (typically 30 days) before changes take effect</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      Your continued use of the Platform after any changes constitutes acceptance of the new Terms. If you do not agree to the modified Terms, you must stop using the Platform and terminate your account.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 12 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    12
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Miscellaneous</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Severability</h4>
                        <p className="text-gray-700 text-sm">If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Waiver</h4>
                        <p className="text-gray-700 text-sm">No waiver of any term of these Terms shall be deemed a further or continuing waiver of such term or any other term, and our failure to assert any right or provision under these Terms shall not constitute a waiver of such right or provision.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Entire Agreement</h4>
                        <p className="text-gray-700 text-sm">These Terms, together with our Privacy Policy and any other legal notices published by us on the Platform, constitute the entire agreement between you and Squad Master Sports concerning the Platform.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Assignment</h4>
                        <p className="text-gray-700 text-sm">You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-2">Force Majeure</h4>
                        <p className="text-gray-700 text-sm">We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control, including acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, pandemics, strikes, or shortages of transportation, facilities, fuel, energy, labor, or materials.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 13 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    13
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Contact Information</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have any questions about these Terms of Service, please contact us:
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

      {/* Acknowledgment */}
      <section className="py-12 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="card-elevated border-2 border-teal-200">
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Acknowledgment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  BY USING LASER 247 PLAY, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE PLATFORM.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
