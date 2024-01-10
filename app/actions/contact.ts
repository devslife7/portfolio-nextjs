"use server"
export default async function sendMessage() {
  console.log("sendMessage action")
  return {
    type: "SEND_MESSAGE",
    payload: {
      message: "Hello World!",
    },
  }
}
