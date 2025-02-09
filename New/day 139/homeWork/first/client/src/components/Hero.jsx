import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
export default function Hero() {

  return (
    <main>
        <section class="bg-white text-gray-800 py-20">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-3xl sm:text-4xl font-bold mb-6">
      Translate from English to Georgian
    </h1>
    <p class="text-lg sm:text-xl mb-8">
      მე ვარ ყველაზე ზლიერი და მაგარი 
    </p>
    <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
      {/* //! input */}
      <div class="mb-6">
        <label for="text-to-translate" class="block text-sm font-medium text-gray-700 mb-2">Enter Word to Translate</label>
        <textarea
          id="text-to-translate"
          class="w-full h-32 p-4 border border-gray-300 rounded-md resize-none"
          placeholder="Enter text to translate"
        ></textarea>
      </div>

      {/* //! output */}
      <div class="mb-6">
        <label for="translated-text" class="block text-sm font-medium text-gray-700 mb-2">Translated Word</label>
        <textarea
          id="translated-text"
          class="w-full h-32 p-4 border border-gray-300 rounded-md resize-none bg-gray-50 text-gray-500"
          placeholder="Your translated text will appear here"
          readonly
        ></textarea>
      </div>

         {/* //!translate */}
      <div class="flex justify-center">
        <button class="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer active:scale-50">
          Translate
        </button>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}
