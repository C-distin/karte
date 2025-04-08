import { Mail, MapPin, Phone, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-purple-300 mt-0.5" />
            <div>
              <p className="text-white font-medium">Email Us</p>
              <a href="mailto:kagbottah@trcoa.com" className="text-purple-200 hover:text-white transition-colors">
                kagbottah@trcoa.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-purple-300 mt-0.5" />
            <div>
              <p className="text-white font-medium">Call Us</p>
              <a href="tel:+19729042087" className="text-purple-200 hover:text-white transition-colors">
                +1 (972) 904-2087
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
        <div className="flex gap-3">
          <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>

          <Button variant="ghost" size="icon" className="rounded-full bg-white/10 hover:bg-white/20 text-white" asChild>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
