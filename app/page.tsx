import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-[system-ui]">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="R-Way Shipping & Storage"
            width={180}
            height={60}
            className="h-10 w-auto"
            priority
          />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-6">
        {/* Intro */}
        <section className="py-16 md:py-24 border-b border-gray-100">
          <h1 className="text-2xl md:text-3xl font-medium leading-snug tracking-tight max-w-lg">
            Shipping and storage services for businesses in the New York
            metropolitan area.
          </h1>
        </section>

        {/* Services — two column, just text */}
        <section className="py-12 md:py-16 border-b border-gray-100 grid md:grid-cols-2 gap-x-16 gap-y-10">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Shipping
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Freight coordination, local delivery, and long-haul transport.
              We move commercial goods on your schedule with full chain of
              custody.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Storage
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Warehouse space in Queens for inventory, equipment, and
              materials. Flexible terms, secure facility, easy access.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="py-12 md:py-16 grid md:grid-cols-2 gap-x-16 gap-y-10">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Email
            </h2>
            <a
              href="mailto:ar@rwayshipping.com"
              className="text-[#1a1a1a] hover:text-[#3b82f6] transition-colors"
            >
              ar@rwayshipping.com
            </a>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
              Location
            </h2>
            <address className="not-italic text-[#1a1a1a]">
              97-22 133rd Ave<br />
              Ozone Park, NY 11417
            </address>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 mt-8">
        <div className="max-w-4xl mx-auto px-6 py-6 text-xs text-gray-400">
          © {new Date().getFullYear()} R-Way Shipping & Storage
        </div>
      </footer>
    </div>
  );
}
