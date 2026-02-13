import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Mail, MapPin, Clock, Send, MessageSquare, HelpCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you within 24-48 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or need assistance? We're here to help! Reach out to our support team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="card-elevated hover:shadow-teal transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Email Support</h3>
                  <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24-48 hours</p>
                  <a href="mailto:support@laser247play.com" className="text-teal-600 font-semibold hover:text-teal-700">
                    support@laser247play.com
                  </a>
                </CardContent>
              </Card>

              <Card className="card-elevated hover:shadow-navy transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-slate-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Office Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    C/O S K MOHAN, MEKOOR, SIDDAPURA, Pollibetta, Virajpet, Kodagu- 571215, Karnataka, India
                  </p>
                </CardContent>
              </Card>

              <Card className="card-elevated hover:shadow-coral transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Support Hours</h3>
                  <p className="text-gray-600 mb-2">
                    <strong>Monday - Friday</strong>
                  </p>
                  <p className="text-gray-600">
                    9:00 AM - 6:00 PM IST
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-elevated">
              <CardContent className="p-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Fill out the form below and our support team will get back to you within 24-48 hours. Please provide as much detail as possible to help us assist you better.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-slate-900 font-semibold mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-teal-600 rounded-lg"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-slate-900 font-semibold mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-12 border-2 border-gray-200 focus:border-teal-600 rounded-lg"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-slate-900 font-semibold mb-2 block">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What is your message about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="h-12 border-2 border-gray-200 focus:border-teal-600 rounded-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-slate-900 font-semibold mb-2 block">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide as much detail as possible about your question or issue..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="border-2 border-gray-200 focus:border-teal-600 rounded-lg resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-200">
                    <HelpCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Tip:</strong> For faster support, please include relevant details such as your username, the match/team you're referring to, or screenshots of any errors you're experiencing.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-orange-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Common Questions
              </h2>
              <p className="text-xl text-gray-600">
                Before contacting us, check if your question is answered in our FAQ
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">How do I reset my password?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Click "Forgot Password" on the login page and follow the instructions sent to your email.
                  </p>
                  <a href="/faq" className="text-teal-600 font-semibold hover:text-teal-700">
                    View Full FAQ →
                  </a>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Is this platform really free?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Yes! Laser 247 Play is 100% free forever with no hidden charges or subscriptions.
                  </p>
                  <a href="/faq" className="text-teal-600 font-semibold hover:text-teal-700">
                    View Full FAQ →
                  </a>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">How do I build a team?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Select a match, choose 11 players within budget, pick captain/vice-captain, and submit.
                  </p>
                  <a href="/how-to-play" className="text-teal-600 font-semibold hover:text-teal-700">
                    View How To Play →
                  </a>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Which tournaments are covered?</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    IPL, international matches, domestic cricket, and global T20 leagues - over 500+ matches annually.
                  </p>
                  <a href="/faq" className="text-teal-600 font-semibold hover:text-teal-700">
                    View Full FAQ →
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Company Information
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-3">Legal Name</h3>
                  <p className="text-gray-700">Laser 247 Play</p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-3">CIN</h3>
                  <p className="text-gray-700">U10792KA2024PTC186879</p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-3">PAN</h3>
                  <p className="text-gray-700">AAKCK3043B</p>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-bold text-slate-900 mb-3">TAN</h3>
                  <p className="text-gray-700">BLRK25121F</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
