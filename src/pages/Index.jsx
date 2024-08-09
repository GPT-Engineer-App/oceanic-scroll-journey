import { useState } from 'react';
import { Menu, X, Anchor, Fish, Droplets, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-sky-50">
      {/* Navigation */}
      <nav className="bg-sky-700 text-white p-4 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold flex items-center">
            <Anchor className="mr-2" />
            OceanTech
          </a>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="hover:text-sky-200">About</a>
            <a href="#services" className="hover:text-sky-200">Services</a>
            <a href="#team" className="hover:text-sky-200">Team</a>
            <a href="#contact" className="hover:text-sky-200">Contact</a>
          </div>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-sky-700 z-20 flex flex-col items-center justify-center">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <X />
          </button>
          <a href="#about" className="text-white text-xl my-2" onClick={toggleMenu}>About</a>
          <a href="#services" className="text-white text-xl my-2" onClick={toggleMenu}>Services</a>
          <a href="#team" className="text-white text-xl my-2" onClick={toggleMenu}>Team</a>
          <a href="#contact" className="text-white text-xl my-2" onClick={toggleMenu}>Contact</a>
        </div>
      )}

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-sky-400 to-cyan-300 text-white py-32 md:py-64">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Dive into Innovation</h1>
          <p className="text-xl md:text-2xl mb-8">Exploring the depths of technology for a sustainable future</p>
          <Button className="bg-white text-sky-700 hover:bg-sky-100">Learn More</Button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-8 text-center">About OceanTech</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg" alt="About OceanTech" className="rounded-lg shadow-lg mx-auto object-cover w-full h-[400px]" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg text-gray-700 mb-4">
                At OceanTech, we're passionate about harnessing the power of technology to protect and explore our oceans. Our team of experts combines cutting-edge innovation with a deep respect for marine ecosystems.
              </p>
              <p className="text-lg text-gray-700">
                From developing advanced underwater sensors to creating sustainable fishing solutions, we're committed to making a positive impact on our blue planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-sky-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Fish className="text-sky-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainable Fishing Tech</h3>
              <p className="text-gray-700">Innovative solutions for responsible fishing practices and ocean conservation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Droplets className="text-sky-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Water Quality Monitoring</h3>
              <p className="text-gray-700">Advanced sensors and data analytics for real-time water quality assessment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Anchor className="text-sky-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marine Research Equipment</h3>
              <p className="text-gray-700">Cutting-edge tools and devices for oceanographers and marine biologists.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-sky-800 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="/placeholder.svg" alt="Team Member 1" className="rounded-full w-48 h-48 mx-auto object-cover mb-4" />
              <h3 className="text-xl font-semibold">Dr. Sarah Waters</h3>
              <p className="text-gray-600">Marine Biologist</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Team Member 2" className="rounded-full w-48 h-48 mx-auto object-cover mb-4" />
              <h3 className="text-xl font-semibold">Prof. Michael Reef</h3>
              <p className="text-gray-600">Oceanographer</p>
            </div>
            <div className="text-center">
              <img src="/placeholder.svg" alt="Team Member 3" className="rounded-full w-48 h-48 mx-auto object-cover mb-4" />
              <h3 className="text-xl font-semibold">Eng. Lisa Coral</h3>
              <p className="text-gray-600">Environmental Engineer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-sky-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-2 rounded text-gray-800" />
              <input type="email" placeholder="Your Email" className="w-full p-2 rounded text-gray-800" />
              <textarea placeholder="Your Message" rows="4" className="w-full p-2 rounded text-gray-800"></textarea>
              <Button className="bg-white text-sky-700 hover:bg-sky-100">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 OceanTech. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="hover:text-sky-300"><MessageCircle /></a>
            <a href="#" className="hover:text-sky-300"><Fish /></a>
            <a href="#" className="hover:text-sky-300"><Anchor /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
