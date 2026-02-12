import { Layout } from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Blog() {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-muted-foreground">
              Cricket insights, tips, and platform updates
            </p>
          </div>

          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Coming Soon!</h2>
              <p className="text-muted-foreground mb-6">
                We're working on bringing you exciting cricket content, strategy guides, player
                analyses, and platform updates. Check back soon for our latest posts!
              </p>
              <p className="text-sm text-muted-foreground">
                In the meantime, explore our{" "}
                <a href="/how-to-play" className="text-primary hover:underline">
                  How To Play
                </a>{" "}
                guide or{" "}
                <a href="/faq" className="text-primary hover:underline">
                  FAQ
                </a>{" "}
                section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
