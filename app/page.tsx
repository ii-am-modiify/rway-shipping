import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="R-Way Shipping & Storage"
            width={180}
            height={60}
            className="h-10 w-auto brightness-0 invert"
            priority
          />
          <a
            href="mailto:ar@rwayshipping.com"
            className="text-white/80 hover:text-white text-sm transition-colors"
          >
            ar@rwayshipping.com
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-bg relative min-h-[520px] md:min-h-[560px] flex items-end">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1e2f] via-transparent to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 pb-16 md:pb-20 w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <p className="text-blue-400 text-sm font-medium tracking-wide uppercase mb-4">
                Ozone Park, Queens — New York
              </p>
              <h1 className="text-white text-3xl md:text-[2.75rem] font-semibold leading-tight tracking-tight">
                Commercial shipping
                <br />
                and storage that
                <br />
                businesses rely on.
              </h1>
            </div>
            <a
              href="mailto:ar@rwayshipping.com"
              className="inline-flex items-center gap-2 bg-white text-[#0c1e2f] font-medium px-6 py-3.5 rounded text-sm hover:bg-gray-100 transition-colors self-start md:self-auto shrink-0"
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="mt-px">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Stats / trust bar */}
      <section className="bg-[#f8f9fa] border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-wrap gap-y-4 gap-x-12 md:gap-x-20">
          <div>
            <p className="text-2xl font-semibold text-[#0c1e2f]">NYC Metro</p>
            <p className="text-sm text-gray-500 mt-0.5">Service Area</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#0c1e2f]">Commercial</p>
            <p className="text-sm text-gray-500 mt-0.5">Focus</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-[#0c1e2f]">Warehouse</p>
            <p className="text-sm text-gray-500 mt-0.5">Storage Facility</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <div className="w-10 h-10 rounded bg-[#0c1e2f] flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="6" width="15" height="12" rx="1" />
                <path d="M16 10h4l3 3v5h-7V10z" />
                <circle cx="5.5" cy="18" r="2" />
                <circle cx="19" cy="18" r="2" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Freight & Shipping</h3>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Coordinated transport for commercial freight. Local pickups,
              regional delivery, and long-haul moves with full chain of custody
              documentation.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded bg-[#0c1e2f] flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 21h18M3 7v14M21 7v14M5 7h14l-2-4H7L5 7zM9 21v-5h6v5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">Warehouse Storage</h3>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              Secure facility in Queens for inventory, equipment, and materials.
              Flexible lease terms with easy access for pickups and
              drop-offs.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded bg-[#0c1e2f] flex items-center justify-center mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H2v7l6.29 6.29a1 1 0 001.42 0l5.58-5.58a1 1 0 000-1.42L9 5z" />
                <path d="M6 9.01V9" />
                <path d="M15 5l6.29 6.29a1 1 0 010 1.42l-2.83 2.83" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2">End-to-End Logistics</h3>
            <p className="text-gray-500 leading-relaxed text-[15px]">
              From intake to final delivery, we manage the full pipeline.
              One point of contact, clear timelines, and accountability
              at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="bg-[#0c1e2f]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-tight">
                Ready to move?
              </h2>
              <p className="text-gray-400 mt-3 max-w-md leading-relaxed">
                Reach out to discuss your shipping or storage requirements.
                We respond within one business day.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 text-white shrink-0">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Email</p>
                <a
                  href="mailto:ar@rwayshipping.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  ar@rwayshipping.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Address</p>
                <address className="not-italic leading-relaxed">
                  97-22 133rd Ave<br />
                  Ozone Park, NY 11417
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#091a2a]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 text-xs text-gray-500">
          © {new Date().getFullYear()} R-Way Shipping & Storage. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
