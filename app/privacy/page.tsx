import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Taingo",
  description:
    "Taingo privacy policy — how we handle information for our AI receptionist service. Full policy text coming soon.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-bone pt-28 pb-12 border-b border-bone">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-copper mb-4">
            Legal
          </p>
          <h1
            className="font-display font-black text-midnight mb-4 leading-tight max-w-3xl"
            style={{ fontSize: "clamp(32px, 5vw, 52px)", letterSpacing: "-0.03em" }}
          >
            Privacy Policy
          </h1>
          <p className="text-lg text-midnight/65 max-w-2xl leading-relaxed">
            We are finalizing this policy with our legal team. The complete document will
            be published on this page. If you have privacy questions in the meantime,
            please reach out.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl border border-bone p-8 md:p-10 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-midnight/40 mb-6">
              Policy document
            </p>
            <div className="text-midnight/75 leading-relaxed space-y-4">
              <p>
                <strong className="text-midnight">Placeholder.</strong> Replace everything
                in this box with your approved Privacy Policy when it is ready. You can
                paste HTML from your counsel, or convert their document to JSX and swap
                this section.
              </p>
              <p className="text-midnight/60 text-sm">
                Suggested sections to include: what data you collect, how you use it,
                cookies and analytics, third parties, retention, user rights, contact
                for privacy requests, and effective date.
              </p>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-midnight/55">
            Questions?{" "}
            <Link href="/contact" className="text-copper hover:text-copper-light font-semibold">
              Contact us
            </Link>
            {" · "}
            <a
              href="mailto:hello@taingo.ai"
              className="text-copper hover:text-copper-light font-semibold"
            >
              hello@taingo.ai
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
