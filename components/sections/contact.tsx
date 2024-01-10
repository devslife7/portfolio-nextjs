export default function Contact() {
  return (
    <section id="contact" className=" bg-yellow-400">
      <h1>
        C<span className="text-primary">on</span>tact
      </h1>

      <div>
        <h2>Get in Touch</h2>
        <p>
          I'm excited to connect with new people or answer any questions you might have. Easily send me a message using
          the following form including your email, and I will be in touch as soon as possible.
        </p>
        <h3>Name</h3>
        <p>Marcos Velasco</p>
        <h3>Location</h3>
        <p>Alexandria, VA</p>
        <h3>Email</h3>
        <p>devslife@gmail.com</p>
      </div>

      <div>
        <h2>Message me</h2>
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}
