function App() {
  return (
    <div>

      <header className="bg-green-700 text-white">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">ფეხბურთის სამყარო</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-yellow-400">ჩვენს შესახებ</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">კონტაქტი</a></li>
          </ul>
        </nav>
      </header>


      <section className="bg-green-500 text-white text-center py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4">მოგესალმებით ფეხბურთის სამყაროში</h2>
          <p className="text-lg mb-6">გაიგე მეტი ჩვენს ვებსაიტზე</p>
          <button className="bg-yellow-500 px-6 py-3 font-semibold rounded-lg hover:bg-yellow-600">დაწყება</button>
        </div>
      </section>


      <section id="about" className="container mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">ჩვენს შესახებ</h3>
        <p className="text-lg mb-6">ფეხბურთის სამყარო არის პლატფორმა, რომელიც ეძღვნება სპორტს, რომელსაც უყვართ მილიონობით ადამიანი. ჩვენ ვფარავთ ყველაფერს ბოლო მატჩის შედეგებიდან მოთამაშეთა პროფილებამდე, სიახლეებით და სხვა.</p>
      </section>


      <section id="contact" className="container mx-auto py-16 px-4 text-center">
        <h3 className="text-3xl font-bold mb-6">დაგვიკავშირდით</h3>
        <p className="text-lg mb-6">გაქვთ კითხვები? დაგვიკავშირდით!</p>
        <form className="max-w-lg mx-auto">
          <input type="text" placeholder="თქვენი სახელი" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded" />
          <input type="email" placeholder="თქვენი ელ.ფოსტა" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded" />
          <textarea placeholder="თქვენი შეტყობინება" className="w-full px-4 py-2 mb-4 border border-gray-300 rounded"></textarea>
          <button type="submit" className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800">გაგზავნა</button>
        </form>
      </section>

      <footer className="bg-green-700 text-white text-center py-4">
        <p>&copy; 2024 ფეხბურთის სამყარო. ყველა უფლება დაცულია.</p>
      </footer>
    </div>
  )
}

export default App
