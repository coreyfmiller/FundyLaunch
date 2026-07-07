import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Fundy Launch — Web Design & Marketing",
  description:
    "Get in touch with Fundy Launch. Tell us about your business and goals — we'll get back to you within one business day with a free audit and growth plan for your Atlantic Canadian business.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
