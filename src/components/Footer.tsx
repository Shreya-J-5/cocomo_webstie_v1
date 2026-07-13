import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-1 group mb-6">
              <span className="font-display font-light italic text-3xl tracking-wide text-primary">
                Cocomo
              </span>
            </Link>
            <p className="text-secondary text-sm mb-6 leading-relaxed">
              The AI operating system for merchant growth. Grow revenue, not just marketing.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <FaXTwitter size={20} />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href="#" className="text-secondary hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">AI Growth Engine</Link></li>
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Creator Network</Link></li>
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Campaign Automation</Link></li>
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-semibold mb-6">Newsletter</h4>
            <p className="text-secondary text-sm mb-4">Stay updated with the latest in AI merchant growth.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-cards border border-border-subtle rounded-lg px-4 py-2 text-sm text-primary focus:outline-none focus:border-accent w-full"
              />
              <button className="bg-primary text-background px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} Cocomo Media. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-secondary hover:text-primary text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
