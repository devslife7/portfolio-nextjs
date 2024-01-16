import { EmailIllustrationSVG } from "@/public/svgs"
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text } from "@react-email/components"

interface EmailTemplateProps {
  name: string
  message: string
  email: string
}

export default function EmailTemplate({ name, message, email }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>{`New Message From ${name}.`}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <div className="size-[200px] text-[12rem] mx-auto">
                <EmailIllustrationSVG />
              </div>
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Portfolio <strong>Contact Form</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>From </strong> {name} {`  <${email}>`}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>Message </strong>
              {message}
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-lg leading-[24px]">
              Reply to this email to send a message back to <strong>{name}</strong>.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
