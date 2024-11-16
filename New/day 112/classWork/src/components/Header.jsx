export default function Header() {
    const navLinks = [
      { name: "About" },
      { name: "Services" },
      { name: "Contact" },
      { name: "FAQs"}
    ];
  
    return (
      <header className="bg-green-700 p-4">
        <div className="container flex items-center justify-between">
          <div className="text-white font-bold text-xl">
            Gela BK PRS
          </div>
          <nav className="hidden md:flex space-x-4">
            {navLinks.map((link, index) => (
              <a key={index} className="text-white hover:text-blue-200">{link.name}</a>
            ))}
          </nav>
          <div className="md:hidden text-white font-black">. . .</div>
        </div>
      </header>
    );
  }
  