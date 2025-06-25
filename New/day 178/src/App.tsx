import { Card } from "@/components/ui/card"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Profile() {
  return (
    <Card className="max-w-2xl mx-auto rounded-xl border border-red-400 overflow-hidden shadow-md">
      {/* Top blue header section */}
      <div className="bg-blue-200 p-4">
        <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
        <p className="text-sm text-gray-700 mt-2">
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally
          difficult paths, choose the one more painful in the short term (pain avoidance is
          creating an illusion of equality).
        </p>
      </div>

      {/* Bottom white section with user info */}
      <div className="bg-white p-6 space-y-3 text-sm">
        <p>
          <span className="font-semibold text-gray-800">Full Name:</span>{" "}
          <span className="text-gray-600">Alec M. Thompson</span>
        </p>
        <p>
          <span className="font-semibold text-gray-800">Mobile:</span>{" "}
          <span className="text-gray-600">(44) 123 1234 123</span>
        </p>
        <p>
          <span className="font-semibold text-gray-800">Email:</span>{" "}
          <span className="text-gray-600">alecthompson@mail.com</span>
        </p>
        <p>
          <span className="font-semibold text-gray-800">Location:</span>{" "}
          <span className="text-gray-600">United States</span>
        </p>

        {/* Social media icons */}
        <div className="flex items-center gap-4 pt-2">
          <span className="font-semibold text-gray-800">Social Media:</span>
          <Facebook className="w-4 h-4 text-blue-600 cursor-pointer" />
          <Twitter className="w-4 h-4 text-sky-500 cursor-pointer" />
          <Instagram className="w-4 h-4 text-pink-500 cursor-pointer" />
        </div>
      </div>
    </Card>
  )
}
