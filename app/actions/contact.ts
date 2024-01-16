"use server"
// import emailjs from "@emailjs/browser"
import { Resend } from "resend"

export default async function sendMessage() {
  // console.log("form Data", typeof formData)

  // const resend = new Resend("re_VirAGRkV_HwsRayS9pz47xA7Dqjw2RZCw")
  // const resend = new Resend("re_HPv2V5Ad_JMymqzScaqbUruPJLBetZkNs")

  // resend.emails.send({
  //   from: "onboarding@resend.dev",
  //   to: "devslife7@gmail.com",
  //   subject: "Hello World",
  //   html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
  // })

  // emailjs.sendForm("service_b27ezi3", "template_c4rqhh1", formData, "hpeVPBIjR0dTtIqex").then(
  //   result => {
  //     console.log("result", result.text)
  //   error => {
  //   },
  //     console.log(error.text)
  //   }
  // )

  console.log("message sent")

  return {
    type: "SEND_MESSAGE",
    payload: {
      message: "Hello World!",
    },
  }
}
