"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { montserrat } from "@/components/fonts"

// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    try {
      setIsSubmitting(true)

      // In a real app, you would use a server action to handle the submission
      // For this example, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success("Message sent successfully", {
        description: "We'll get back to you as soon as possible.",
      })

      form.reset()
    } catch (error) {
      toast.error("Failed to send message", {
        description: "Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${montserrat.className} space-y-6`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Name</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Your name"
                    className="bg-gray-100 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:border-[#8280ed]"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700">Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-gray-100 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:border-[#8280ed]"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Subject</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="What's this about?"
                  className="bg-gray-100 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:border-[#8280ed]"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-700">Message</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Your message..."
                  className="bg-gray-100 border-gray-300 text-gray-700 placeholder:text-gray-400 focus:border-[#8280ed] min-h-[150px]"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#8280ed] p-5 hover:bg-[#6563cb] text-white transition-all"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  )
}
