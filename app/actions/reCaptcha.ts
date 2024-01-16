"use server"

export default async function verifyReCaptcha(token: unknown) {
  const googleURL = `
  https://www.google.com/recaptcha/api/siteverify?secret=
  ${process.env.RECAPTCHA_SECRET_KEY}
  &response=
  ${token}
  `
  const googleResp = await fetch(googleURL, { method: "POST" })
  if (googleResp.status !== 200) {
    console.log("Google Responce: ", googleResp)
    return {
      success: false,
      message: "Google ReCaptcha failed. Check server logs for more details.",
      status: googleResp.status,
      error: googleResp,
    }
  }

  return { success: true, message: "Google ReCaptcha success", status: googleResp.status }
}
