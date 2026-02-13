import { Layout } from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about Laser 247 Play
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Is Laser 247 Play really free?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Laser 247 Play is 100% free to use. There are no deposits, no payments, and no
                real money involved. We are backed by investors who believe in cricket education,
                allowing us to provide this platform completely free of charge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do I need to be 18 years old to play?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you must be at least 18 years old to register and use Laser 247 Play. We
                verify your age during registration by requiring your date of birth.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I win real money or prizes?
              </AccordionTrigger>
              <AccordionContent>
                No. Laser 247 Play is purely for entertainment and educational purposes. There are
                no cash prizes, rewards, or any form of monetary winnings. You compete on
                leaderboards for recognition and to improve your cricket knowledge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How are points calculated?
              </AccordionTrigger>
              <AccordionContent>
                Points are awarded based on real match performance of the players you select. This
                includes runs scored, wickets taken, catches, run-outs, and other cricket actions.
                Your captain earns bonus points, and your vice-captain earns additional bonus
                points.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I create multiple teams for the same match?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can create multiple teams for the same match with different player
                combinations. This allows you to test different strategies and increase your chances
                of ranking higher on the leaderboard.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can I edit my team after creating it?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can edit your team at any time before the match starts. Once the match
                begins, your team is locked and cannot be changed.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Is my personal information safe?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we take data privacy seriously. We use industry-standard security measures to
                protect your personal information. Please read our Privacy Policy for detailed
                information about how we collect, use, and protect your data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Which cricket matches are available?
              </AccordionTrigger>
              <AccordionContent>
                We feature matches from various cricket tournaments including international matches,
                T20 leagues, ODIs, and Test matches. The match list is regularly updated with
                upcoming fixtures.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How do I contact support?
              </AccordionTrigger>
              <AccordionContent>
                You can reach us through our Contact Us page. Fill out the contact form with your
                query, and our team will respond to you as soon as possible.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-white rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What is the purpose of this platform?
              </AccordionTrigger>
              <AccordionContent>
                Laser 247 Play is designed for cricket education and entertainment. It helps cricket
                fans learn about player analysis, team composition, and cricket strategy in a fun,
                risk-free environment without any financial involvement.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center bg-white rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Contact our support team.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white h-10 px-6 hover:bg-primary/90"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
