import Button from "@/components/ui/button"
import { SendSVG } from "@/public/svgs"

export default function Form() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-medium">Message me</h2>
      <form className="grid grid-cols-4 gap-4">
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
        <div>
          <Button type="submit">
            <div className="text-xl">
              <SendSVG />
            </div>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}