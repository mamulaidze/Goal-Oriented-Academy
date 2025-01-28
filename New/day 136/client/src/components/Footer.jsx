import React from 'react'

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
          {/* Shop and Learn Section */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Shop and Learn</h4>
            <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Mac</a></li>
            <li><a href="#" className="hover:underline">iPad</a></li>
            <li><a href="#" className="hover:underline">iPhone</a></li>
            <li><a href="#" className="hover:underline">Watch</a></li>
            <li><a href="#" className="hover:underline">AirPods</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            </ul>
          </div>
          {/* Services Section */}
          <div>
          <h4 className="font-semibold text-lg mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Apple Music</a></li>
            <li><a href="#" className="hover:underline">Apple TV+</a></li>
            <li><a href="#" className="hover:underline">iCloud</a></li>
            <li><a href="#" className="hover:underline">Apple Pay</a></li>
            <li><a href="#" className="hover:underline">Apple Store App</a></li>
          </ul>
          </div>      
          {/* Support Section */}  
          <div>
            <h4 classname="font-semibold text-lg mb-4">Support</h4>
            <ul classname="space-y-2">
            <li><a href="#" className="hover:underline">Support Center</a></li>
            <li><a href="#" className="hover:underline">Community</a></li>
            <li><a href="#" className="hover:underline">Repair Options</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>  
          <div>
          <h4 classname="font-semibold text-lg mb-4">connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Find a Store</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
          </ul>
          <div classname="mt-6 flex spaxe-x-4">
            <a href="#" className="hover:text-gray-400">🌐</a>
            <a href="#" className="hover:text-gray-400">📘</a>
            <a href="#" className="hover:text-gray-400">📷</a>
          </div>
        </div>
        </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm text-gray-400">&copy; 2025 Apple Inc. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4 text-sm">
          <a href="#" className="hover:underline text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:underline text-gray-400">Terms of Use</a>
          <a href="#" className="hover:underline text-gray-400">Site Map</a>
        </div>
      </div>
    </footer>
  );
};

