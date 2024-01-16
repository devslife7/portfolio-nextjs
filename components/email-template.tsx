interface EmailTemplateProps {
  firstName: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ firstName }) => (
  <div>
    <h1>New Message from {firstName}!</h1>
  </div>
)
