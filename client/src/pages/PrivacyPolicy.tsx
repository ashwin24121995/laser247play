import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck, Database, Globe, Mail, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Your privacy is important to us. This Privacy Policy explains how Squad Master Sports collects, uses, protects, and shares your personal information.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: February 13, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Privacy at a Glance
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Lock className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Data Security</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We use industry-standard encryption and security measures to protect your personal information from unauthorized access, disclosure, or misuse.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-slate-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">No Selling Data</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We never sell, rent, or trade your personal information to third parties. Your data is used solely to provide and improve our services.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <UserCheck className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Your Control</h3>
                  <p className="text-gray-700 leading-relaxed">
                    You have full control over your data. You can access, update, or delete your personal information at any time through your account settings.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Minimal Collection</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We only collect information necessary to provide our services. We don't collect unnecessary personal data or track you across other websites.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Policy */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Information We Collect</h2>
                </div>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1.1 Information You Provide</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you register for an account or use our services, we collect information that you voluntarily provide to us:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Account Information:</strong> Email address, password (encrypted), username, and date of birth (to verify you are 18+)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Profile Information:</strong> Optional profile picture, display name, and bio</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Team Data:</strong> Cricket teams you create, player selections, captain choices, and match entries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Communication Data:</strong> Messages you send through our contact form or support channels</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1.2 Information Automatically Collected</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      When you access and use our platform, we automatically collect certain technical information:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span><strong>Device Information:</strong> Device type, operating system, browser type and version, screen resolution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span><strong>Usage Data:</strong> Pages visited, features used, time spent on platform, click patterns, navigation paths</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span><strong>Log Data:</strong> IP address, access times, error logs, referral URLs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-slate-800 font-bold">•</span>
                        <span><strong>Cookies:</strong> Session cookies for authentication and functionality (see Cookie Policy section below)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">1.3 Information We Do NOT Collect</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      To protect your privacy, we explicitly do NOT collect:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>Financial information (credit cards, bank accounts) - we don't handle any payments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>Government ID numbers (Aadhaar, PAN, passport) - not required for our free service</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>Precise geolocation data - we don't track your physical location</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>Biometric data - no fingerprints, face scans, or similar data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-orange-600 font-bold">✗</span>
                        <span>Third-party tracking - we don't track you across other websites or apps</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Section 2 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">How We Use Your Information</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We use the information we collect for the following purposes:
                    </p>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border-2 border-teal-100">
                        <h4 className="font-bold text-slate-900 mb-3">Service Provision & Account Management</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Create and manage your user account</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Authenticate your identity and maintain login sessions</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Enable you to create teams, enter matches, and track performance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Display leaderboards and rankings</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 border-2 border-orange-100">
                        <h4 className="font-bold text-slate-900 mb-3">Communication & Support</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-orange-600">→</span>
                            <span>Respond to your inquiries and provide customer support</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-600">→</span>
                            <span>Send important service updates, security alerts, and account notifications</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-orange-600">→</span>
                            <span>Notify you about match results, team performance, and platform features (with your consent)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-6 border-2 border-teal-100">
                        <h4 className="font-bold text-slate-900 mb-3">Platform Improvement & Analytics</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Analyze usage patterns to improve user experience and features</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Monitor platform performance and fix technical issues</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Conduct research and development for new features</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-teal-600">→</span>
                            <span>Generate aggregated, anonymized statistics (no personal identification)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border-2 border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-3">Security & Compliance</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-slate-800">→</span>
                            <span>Detect and prevent fraud, abuse, and security threats</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-slate-800">→</span>
                            <span>Verify age compliance (18+ requirement)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-slate-800">→</span>
                            <span>Enforce our Terms of Service and community guidelines</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-slate-800">→</span>
                            <span>Comply with legal obligations and respond to lawful requests</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 3 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Data Sharing & Disclosure</h2>
                </div>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3.1 We Do NOT Sell Your Data</h3>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Squad Master Sports does not sell, rent, or trade your personal information to third parties for marketing or any other purposes.</strong> Your data is valuable to us only for providing you with the best cricket entertainment experience, not as a commodity to be sold.
                    </p>
                  </CardContent>
                </Card>

                <Card className="card-elevated mb-6">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">3.2 Limited Sharing Scenarios</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may share your information only in these specific, limited circumstances:
                    </p>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-xl">•</span>
                        <div>
                          <strong className="block mb-1">Service Providers:</strong>
                          <span>Trusted third-party vendors who help us operate our platform (hosting, email delivery, analytics). These providers are contractually bound to protect your data and use it only for providing services to us.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-xl">•</span>
                        <div>
                          <strong className="block mb-1">Legal Requirements:</strong>
                          <span>When required by law, court order, or government regulation, or to protect our legal rights, prevent fraud, or ensure user safety.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-xl">•</span>
                        <div>
                          <strong className="block mb-1">Business Transfers:</strong>
                          <span>In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity (you will be notified beforehand).</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold text-xl">•</span>
                        <div>
                          <strong className="block mb-1">Public Information:</strong>
                          <span>Your username, team names, and leaderboard rankings are publicly visible to other users as part of the competitive experience.</span>
                        </div>
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
                  <h2 className="text-3xl font-bold text-slate-900">Data Security</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction:
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-2">Encryption</h4>
                        <p className="text-sm text-gray-700">All data transmitted between your device and our servers is encrypted using SSL/TLS protocols</p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-2">Password Protection</h4>
                        <p className="text-sm text-gray-700">Passwords are hashed and salted using industry-standard algorithms (never stored in plain text)</p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-2">Access Controls</h4>
                        <p className="text-sm text-gray-700">Strict internal access controls ensure only authorized personnel can access user data</p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-2">Regular Audits</h4>
                        <p className="text-sm text-gray-700">Periodic security audits and vulnerability assessments to identify and fix potential risks</p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-2">Secure Infrastructure</h4>
                        <p className="text-sm text-gray-700">Data stored on secure servers with firewalls, intrusion detection, and backup systems</p>
                      </div>
                      <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-2">Incident Response</h4>
                        <p className="text-sm text-gray-700">Established procedures to respond quickly to any security breaches or data incidents</p>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <p className="text-sm text-gray-700">
                        <strong>Important:</strong> While we implement robust security measures, no system is 100% secure. We recommend using strong, unique passwords and enabling two-factor authentication when available.
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
                  <h2 className="text-3xl font-bold text-slate-900">Your Rights & Choices</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      You have the following rights regarding your personal information:
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-white rounded-lg border-l-4 border-teal-600">
                        <UserCheck className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Right to Access</h4>
                          <p className="text-gray-700">Request a copy of all personal information we hold about you</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-white rounded-lg border-l-4 border-orange-600">
                        <FileText className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Right to Rectification</h4>
                          <p className="text-gray-700">Update or correct inaccurate or incomplete personal information</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-white rounded-lg border-l-4 border-teal-600">
                        <Database className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Right to Erasure</h4>
                          <p className="text-gray-700">Request deletion of your account and personal data (subject to legal retention requirements)</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-slate-50 to-white rounded-lg border-l-4 border-slate-800">
                        <Lock className="w-6 h-6 text-slate-800 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Right to Restrict Processing</h4>
                          <p className="text-gray-700">Limit how we use your personal information in certain circumstances</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-white rounded-lg border-l-4 border-orange-600">
                        <Globe className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Right to Data Portability</h4>
                          <p className="text-gray-700">Receive your data in a structured, machine-readable format to transfer to another service</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-teal-50 to-white rounded-lg border-l-4 border-teal-600">
                        <Mail className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-slate-900 mb-2">Right to Object</h4>
                          <p className="text-gray-700">Object to certain types of processing, including marketing communications (you can unsubscribe anytime)</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-xl">
                      <h4 className="font-bold text-xl mb-3">How to Exercise Your Rights</h4>
                      <p className="mb-4">
                        To exercise any of these rights, please contact us at <a href="mailto:Support@squadmastersports.com" className="underline font-semibold">Support@squadmastersports.com</a> or through your account settings. We will respond to your request within 30 days.
                      </p>
                      <p className="text-sm text-teal-100">
                        You may also lodge a complaint with your local data protection authority if you believe we have not handled your data appropriately.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Section 6 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    6
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Cookie Policy</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We use cookies and similar tracking technologies to enhance your experience on our platform. Here's what you need to know:
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3">What Are Cookies?</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Cookies are small text files stored on your device when you visit our website. They help us remember your preferences, keep you logged in, and understand how you use our platform.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 mb-3">Types of Cookies We Use:</h4>
                        <div className="space-y-3">
                          <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                            <h5 className="font-semibold text-slate-900 mb-2">Essential Cookies (Required)</h5>
                            <p className="text-sm text-gray-700">Necessary for authentication, security, and basic platform functionality. Cannot be disabled.</p>
                          </div>
                          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                            <h5 className="font-semibold text-slate-900 mb-2">Functional Cookies (Optional)</h5>
                            <p className="text-sm text-gray-700">Remember your preferences, settings, and choices to personalize your experience.</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                            <h5 className="font-semibold text-slate-900 mb-2">Analytics Cookies (Optional)</h5>
                            <p className="text-sm text-gray-700">Help us understand how users interact with our platform to improve features and performance.</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-slate-900 mb-3">Managing Cookies:</h4>
                        <p className="text-gray-700 leading-relaxed">
                          You can control and manage cookies through your browser settings. However, disabling essential cookies may affect platform functionality. Most browsers allow you to refuse cookies, delete existing cookies, or receive warnings before cookies are stored.
                        </p>
                      </div>
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
                  <h2 className="text-3xl font-bold text-slate-900">Data Retention</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
                    </p>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Active Accounts:</strong> Your data is retained as long as your account is active</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Inactive Accounts:</strong> Accounts inactive for 3+ years may be deleted after notification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Deleted Accounts:</strong> Most data deleted within 90 days, some retained for legal/security purposes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Log Data:</strong> Server logs retained for 12 months for security and debugging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-teal-600 font-bold">•</span>
                        <span><strong>Aggregated Data:</strong> Anonymized statistics may be retained indefinitely</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Section 8 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold">
                    8
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Children's Privacy</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed">
                      Squad Master Sports is not intended for users under 18 years of age. We do not knowingly collect personal information from anyone under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:Support@squadmastersports.com" className="text-teal-600 font-semibold underline">Support@squadmastersports.com</a>. We will promptly delete such information from our systems.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Section 9 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                    9
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900">Changes to This Policy</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make significant changes, we will:
                    </p>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">→</span>
                        <span>Update the "Last Updated" date at the top of this policy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">→</span>
                        <span>Notify you via email or prominent notice on our platform</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-600">→</span>
                        <span>Request your consent if required by law</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed">
                      We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. Your continued use of our platform after changes constitutes acceptance of the updated policy.
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
                  <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
                </div>

                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-6 bg-teal-50 rounded-xl border border-teal-200">
                        <h4 className="font-bold text-slate-900 mb-3">Email</h4>
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

                    <div className="mt-6 p-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg">
                      <p className="text-sm">
                        <strong>Response Time:</strong> We aim to respond to all privacy-related inquiries within 30 days. For urgent security concerns, please mark your email as "URGENT" in the subject line.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
