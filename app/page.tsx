import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="R-Way Shipping & Storage"
            className="h-10 md:h-12 w-auto"
          />
          <a
            href="mailto:ar@rwayshipping.com"
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm px-5 py-2.5 rounded hover:bg-white/20 transition-all"
          >
            Contact Us
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] max-h-[800px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Freight loading dock"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="max-w-2xl">
              <p className="text-white/60 text-sm font-medium tracking-widest uppercase mb-6">
                Ozone Park, Queens — New York
              </p>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Trade Show
                <br />
                Shipping &
                <br />
                Storage
              </h1>
              <p className="text-white/70 text-lg mt-6 max-w-lg leading-relaxed">
                We move pallets and crates for trade shows and exhibitions
                across the country. Pickup, storage, and on-time delivery
                to any venue.
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
          What we handle
        </h2>

        <div className="grid md:grid-cols-3 gap-x-12 gap-y-14">
          <div className="group">
            <div className="h-px bg-gray-200 mb-8 relative">
              <div className="absolute left-0 top-0 h-px w-12 bg-[#0c1e2f] group-hover:w-full transition-all duration-500" />
            </div>
            <p className="text-sm font-semibold text-gray-400 mb-3">01</p>
            <h3 className="text-xl font-semibold mb-3">Trade Show Freight</h3>
            <p className="text-gray-500 leading-relaxed">
              Pallets, crates, and exhibit materials shipped to convention
              centers and event venues nationwide. We coordinate pickup,
              transit, and dock delivery on your timeline.
            </p>
          </div>

          <div className="group">
            <div className="h-px bg-gray-200 mb-8 relative">
              <div className="absolute left-0 top-0 h-px w-12 bg-[#0c1e2f] group-hover:w-full transition-all duration-500" />
            </div>
            <p className="text-sm font-semibold text-gray-400 mb-3">02</p>
            <h3 className="text-xl font-semibold mb-3">Warehouse Storage</h3>
            <p className="text-gray-500 leading-relaxed">
              Secure facility in Queens for storing exhibit materials, booth
              equipment, and inventory between shows. Flexible terms with
              easy access for loading and retrieval.
            </p>
          </div>

          <div className="group">
            <div className="h-px bg-gray-200 mb-8 relative">
              <div className="absolute left-0 top-0 h-px w-12 bg-[#0c1e2f] group-hover:w-full transition-all duration-500" />
            </div>
            <p className="text-sm font-semibold text-gray-400 mb-3">03</p>
            <h3 className="text-xl font-semibold mb-3">Logistics Coordination</h3>
            <p className="text-gray-500 leading-relaxed">
              End-to-end management from your warehouse to the show floor
              and back. One point of contact, advance scheduling, and
              return shipping after the event.
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
                Have a show
                <br />
                coming up?
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Tell us where and when. We&apos;ll handle the shipping so you
                can focus on the event.
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.svg"
            alt="R-Way"
            className="h-6 w-auto opacity-30"
          />
        </div>
      </footer>
    </div>
  );
}
