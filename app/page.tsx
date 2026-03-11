"use client";

import { Mail, MapPin, Package, Warehouse, Truck, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a1f33] text-white">
      {/* Header / Nav */}
      <header className="bg-[#0f2b46] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center font-bold text-lg">
              R
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                R-Way <span className="text-[#3b82f6]">Shipping</span> & Storage
              </h1>
            </div>
          </div>
          <a
            href="mailto:ar@rwayshipping.com"
            className="hidden sm:inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Mail size={16} />
            Contact Us
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Trusted Partner in
            <br />
            <span className="text-[#3b82f6]">Shipping & Storage</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Reliable, secure, and professional shipping and storage solutions
            serving the New York City area.
          </p>
          <a
            href="mailto:ar@rwayshipping.com"
            className="inline-flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-colors shadow-lg shadow-blue-500/25"
          >
            <Mail size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#0f2b46] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What We Do
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Truck size={32} />}
              title="Shipping"
              description="Dependable shipping services to get your goods where they need to go — safely and on time."
            />
            <ServiceCard
              icon={<Warehouse size={32} />}
              title="Storage"
              description="Secure, climate-appropriate storage facilities to keep your belongings protected."
            />
            <ServiceCard
              icon={<ShieldCheck size={32} />}
              title="Reliable Service"
              description="Count on us for professional handling, transparent communication, and peace of mind."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Contact Us
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Email */}
            <a
              href="mailto:ar@rwayshipping.com"
              className="flex items-start gap-4 bg-[#0f2b46] border border-white/10 rounded-xl p-6 hover:border-[#3b82f6]/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/30 transition-colors shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Email</h4>
                <p className="text-gray-300">ar@rwayshipping.com</p>
              </div>
            </a>

            {/* Address */}
            <a
              href="https://maps.google.com/?q=97-22+133rd+Ave+Ozone+Park+NY+11417"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 bg-[#0f2b46] border border-white/10 rounded-xl p-6 hover:border-[#3b82f6]/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-[#3b82f6]/20 rounded-lg flex items-center justify-center text-[#3b82f6] group-hover:bg-[#3b82f6]/30 transition-colors shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">Address</h4>
                <p className="text-gray-300">
                  97-22 133rd Ave
                  <br />
                  Ozone Park, NY 11417
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f2b46] border-t border-white/10 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} R-Way Shipping & Storage. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#0a1f33] border border-white/10 rounded-xl p-8 text-center hover:border-[#3b82f6]/30 transition-colors">
      <div className="w-16 h-16 bg-[#3b82f6]/20 rounded-xl flex items-center justify-center text-[#3b82f6] mx-auto mb-5">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-3">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}
