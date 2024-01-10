"use client"
import sendMessage from "@/app/actions/contact"
import Button from "@/components/ui/button"
import { SendSVG, SpinnerSVG } from "@/public/svgs"
import { useFormStatus } from "react-dom"

export default function Form() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium">Message me</h2>
      <form action={sendMessage} className="grid grid-cols-4 gap-4">
        <input
          className="py-3 px-4 rounded-full border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none col-span-2"
          type="text"
          id="name"
          placeholder="Name"
          name="name"
        />
        <input
          className="py-3 px-4 rounded-full border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none col-span-2"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="w-full py-3 px-4 rounded-3xl border-2 border-gray-300 placeholder:font-light placeholder-gray-400 focus:outline-none col-span-4"
          rows={6}
          id="message"
          placeholder="Message..."
          name="message"
        />
        <FormButton />
      </form>
    </div>
  )
}

function FormButton() {
  const pending = useFormStatus()
  return (
    <>
      <Button type="submit">
        {pending ? (
          <>
            <SendSVG className="text-xl" />
            Send
          </>
        ) : (
          <SpinnerSVG className="animate-spin text-2xl" />
        )}
      </Button>
    </>
  )
}
