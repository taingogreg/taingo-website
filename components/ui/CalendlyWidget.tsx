"use client";

import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/gergamel007/30-min-taingo-demo";

export default function CalendlyWidget() {
  return (
    <div className="flex flex-col h-full">
      <iframe
        src={`${CALENDLY_URL}?embed_type=Inline&hide_event_type_details=0&hide_gdpr_banner=1&primary_color=c7542b&text_color=0a1628&background_color=faf6ec`}
        width="100%"
        style={{ height: "700px", border: "none" }}
        title="Schedule a Taingo Demo"
        allow="payment *; microphone *; camera *; autoplay *; clipboard-write *"
      />
      {/* Fallback if iframe is blocked */}
      <noscript>
        <div className="p-8 text-center">
          <p className="text-midnight/70 mb-4">
            JavaScript is required to load the booking calendar.
          </p>
          <Link
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-copper hover:bg-copper-light text-paper font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Open Booking Calendar →
          </Link>
        </div>
      </noscript>
    </div>
  );
}
