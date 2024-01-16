"use server"

export default async function verifyReCaptcha(token: string) {
  console.log("validateReCaptcha with token: ", token)

  const googleURL = `
  https://www.google.com/recaptcha/api/siteverify?secret=
  ${process.env.RECAPTCHA_SECRET_KEY}
  &response=
  ${token}
  `
  const googleResponse = await fetch(googleURL, { method: "POST" })
  console.log("googleResponse: ", googleResponse)
}
