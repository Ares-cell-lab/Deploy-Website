import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">

          <div>
            <a href="/" className="text-2xl font-bold text-white">YourBrand</a>
            <p className="mt-3 text-sm leading-relaxed">
              A short line describing what your site or company does.
            </p>
            <div className="flex gap-4 mt-5 text-lg">
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="hover:text-white transition"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/about" className="hover:text-white transition">About</a></li>
              <li><a href="/services" className="hover:text-white transition">Services</a></li>
              <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:text-white transition">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><i className="fa-solid fa-envelope mr-2"></i>hello@example.com</li>
              <li><i className="fa-solid fa-phone mr-2"></i>+000 000 000 0000</li>
              <li><i className="fa-solid fa-location-dot mr-2"></i>Your City, Country</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs">
          &copy; 2026 YourBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer