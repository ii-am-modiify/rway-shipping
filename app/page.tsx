import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="R-Way Shipping & Storage"
            width={200}
            height={68}
            className="h-12 w-auto"
            priority
          />
          <a
            href="mailto:ar@rwayshipping.com"
            className="text-sm font-medium text-[#0f2b46] hover:text-[#3b82f6] transition-colors hidden sm:block"
          >
            ar@rwayshipping.com
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#0f2b46] text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Shipping & Storage
            <br />
            <span className="text-gray-400 font-normal">You Can Count On</span>
          </h1>
          <p className="mt-6 text-gray-300 text-lg max-w-xl leading-relaxed">
            Serving the New York City area with reliable shipping and secure
            storage solutions. Family operated out of Ozone Park, Queens.
          </p>
          <a
            href="mailto:ar@rwayshipping.com"
            className="inline-block mt-8 bg-white text-[#0f2b46] font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors text-sm"
          >
            Get in Touch →
          </a>
        </div>
      </section>

      {/* Services — simple, no cards */}
      <section className="border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-2">Shipping</h3>
              <p className="text-gray-600 leading-relaxed">
                Local and long-distance shipping services. We handle your goods
                with care and get them where they need to be.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Storage</h3>
              <p className="text-gray-600 leading-relaxed">
                Secure warehouse storage for residential and commercial clients.
                Short-term or long-term — we've got the space.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Logistics</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end coordination so you don't have to worry about the
                details. We plan it, move it, store it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Contact
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-gray-400 mt-1 shrink-0" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <a
                  href="mailto:ar@rwayshipping.com"
                  className="text-[#3b82f6] hover:underline"
                >
                  ar@rwayshipping.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-gray-400 mt-1 shrink-0" />
              <div>
                <p className="font-medium mb-1">Address</p>
                <a
                  href="https://maps.google.com/?q=97-22+133rd+Ave+Ozone+Park+NY+11417"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#3b82f6] transition-colors"
                >
                  97-22 133rd Ave
                  <br />
                  Ozone Park, NY 11417
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} R-Way Shipping & Storage
        </div>
      </footer>
    </div>
  );
}
