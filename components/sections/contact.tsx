import { MailSVG, MapSVG, PersonSVG, SendSVG } from "@/public/svgs"
import Button from "../ui/button"

export default function Contact() {
  return (
    <section id="contact" className="py-28 my-container">
      <h1 className="text-center text-5xl mb-20">
        C<span className="text-primary">on</span>tact
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-medium mb-2">Get in Touch</h2>
          <p className="leading-relaxed tracking-wide mb-8 text-slate-600 text-lg">
            I'm excited to connect with new people or answer any questions you might have. Easily send me a message
            using the following form including your email, and I will be in touch as soon as possible.
          </p>
          <div className="space-y-6 text-lg">
            <div className="flex items-center">
              <div className="text-primary text-3xl mr-4">
                <PersonSVG />
              </div>
              <div>
                <h3 className="font-medium">Name</h3>
                <p className="text-gray-500 tracking-wide">Marcos Velasco</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-primary text-3xl mr-4">
                <MapSVG />
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-gray-500 tracking-wide">Alexandria, VA</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-primary text-3xl mr-4">
                <MailSVG />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-500 tracking-wide">devslife@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </section>
  )
}
