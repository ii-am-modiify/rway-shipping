import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="R-Way Shipping & Storage"
            width={160}
            height={54}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
          <a
            href="mailto:ar@rwayshipping.com"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-5 py-2.5 rounded hover:bg-white/20 transition-all"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero with background image */}
      <section className="relative h-[85vh] min-h-[600px] max-h-[800px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/hero.jpg"
          alt="Commercial shipping port"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-2xl">
              <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-6">
                Queens, New York
              </p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Commercial
                <br />
                Shipping &
                <br />
                Storage
              </h1>
              <p className="text-white/70 text-lg mt-6 max-w-md leading-relaxed">
                Freight transport and warehouse storage for businesses across
                the New York metropolitan area.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:ar@rwayshipping.com"
                  className="bg-white text-black font-semibold text-sm px-7 py-3.5 rounded hover:bg-gray-100 transition-colors"
                >
                  Get a Quote
                </a>
                <a
                  href="#services"
                  className="border border-white/30 text-white text-sm px-7 py-3.5 rounded hover:bg-white/10 transition-colors"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-28">
        <p className="text-sm font-medium tracking-widest uppercase text-gray-400 mb-3">
          Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-16">
          What we do
        </h2>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
          {/* Service 1 */}
          <div className="group">
            <div className="h-px bg-gray-200 mb-8 relative">
              <div className="absolute left-0 top-0 h-px w-12 bg-[#0c1e2f] group-hover:w-full transition-all duration-500" />
            </div>
            <p className="text-sm font-semibold text-gray-400 mb-3">01</p>
            <h3 className="text-xl font-semibold mb-3">Freight & Shipping</h3>
            <p className="text-gray-500 leading-relaxed">
              Coordinated transport for commercial freight across the tri-state
              area and beyond. Full chain of custody documentation on every
              shipment.
            </p>
          </div>

          {/* Service 2 */}
          <div className="group">
            <div className="h-px bg-gray-200 mb-8 relative">
              <div className="absolute left-0 top-0 h-px w-12 bg-[#0c1e2f] group-hover:w-full transition-all duration-500" />
            </div>
            <p className="text-sm font-semibold text-gray-400 mb-3">02</p>
            <h3 className="text-xl font-semibold mb-3">Warehouse Storage</h3>
            <p className="text-gray-500 leading-relaxed">
              Secure warehouse facility in Queens for inventory, equipment, and
              materials. Flexible terms with convenient access for pickups and
              deliveries.
            </p>
          </div>

          {/* Service 3 */}
          <div className="group">
            <div className="h-px bg-gray-200 mb-8 relative">
              <div className="absolute left-0 top-0 h-px w-12 bg-[#0c1e2f] group-hover:w-full transition-all duration-500" />
            </div>
            <p className="text-sm font-semibold text-gray-400 mb-3">03</p>
            <h3 className="text-xl font-semibold mb-3">Logistics Management</h3>
            <p className="text-gray-500 leading-relaxed">
              End-to-end coordination from intake to final delivery. One point
              of contact, clear timelines, and accountability at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-[#0c1e2f]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-medium tracking-widest uppercase text-gray-500 mb-3">
                Contact
              </p>
              <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Let&apos;s talk about
                <br />
                your next shipment.
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Whether you need freight moved or space to store it, reach out
                and we&apos;ll get back to you within one business day.
              </p>
              <a
                href="mailto:ar@rwayshipping.com"
                className="inline-block mt-8 bg-white text-[#0c1e2f] font-semibold text-sm px-7 py-3.5 rounded hover:bg-gray-100 transition-colors"
              >
                ar@rwayshipping.com
              </a>
            </div>
            <div className="flex items-end">
              <div className="grid grid-cols-2 gap-12 w-full">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Email
                  </p>
                  <a
                    href="mailto:ar@rwayshipping.com"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    ar@rwayshipping.com
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-gray-500 mb-3">
                    Address
                  </p>
                  <address className="text-white not-italic leading-relaxed">
                    97-22 133rd Ave
                    <br />
                    Ozone Park, NY 11417
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#081621] py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} R-Way Shipping & Storage. All rights
            reserved.
          </p>
          <Image
            src="/logo.png"
            alt="R-Way"
            width={100}
            height={34}
            className="h-6 w-auto brightness-0 invert opacity-30"
          />
        </div>
      </footer>
    </div>
  );
}
