import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Profile() {
  return (
    <Card className="max-w-2xl mx-auto rounded-2xl shadow-lg border border-gray-200">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
        <p className="text-gray-600 text-sm mb-4">
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. 
          If two equally difficult paths, choose the one more painful in the short term 
          (pain avoidance is creating an illusion of equality).
        </p>

        <div className="space-y-2 text-sm text-gray-700">
          <p><span className="font-medium">Full Name:</span> Alec M. Thompson</p>
          <p><span className="font-medium">Mobile:</span> (44) 123 1234 123</p>
          <p><span className="font-medium">Email:</span> alecthompson@mail.com</p>
          <p><span className="font-medium">Location:</span> United States</p>
          <div className="flex items-center gap-3 mt-2">
            <span className="font-medium">Social Media:</span>
            <Facebook className="w-4 h-4 text-blue-600 cursor-pointer" />
            <Twitter className="w-4 h-4 text-sky-500 cursor-pointer" />
            <Instagram className="w-4 h-4 text-pink-500 cursor-pointer" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
