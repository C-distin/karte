import type { Metadata } from "next"
import { ContactForm } from "@/app/contact/contact-form"
import { ContactInfo } from "@/app/contact/contact-info"
import { whisper } from "@/components/fonts"

export const metadata: Metadata = {
  title: "Contact Us | Music Dashboard",
  description: "Get in touch with our team for support or inquiries",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#94AFA0]">
      <main className="container mx-auto p-6 pt-24 md:pt-32">
        <h1 className={`${whisper.className} text-5xl md:text-6xl font-bold text-black mb-8 animate-fade-in`}>Get in Touch</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay">
              <ContactForm />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay">
              <ContactInfo />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
