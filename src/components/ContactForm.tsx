import {
  Alert,
  Anchor,
  ContainerProps,
  Group,
  Stack,
  Textarea,
  TextInput
} from "@mantine/core"
import {useForm, yupResolver} from "@mantine/form"
import GradientButton from "components/GradientButton"
import Section, {SectionProps} from "components/Layout/Section"
import React, {FC} from "react"
import {submitFormspark} from "services/formspark"
import {AlertCircle} from "tabler-icons-react"
import {HACKUSU_EMAIL} from "utils/constants"
import * as Yup from "yup"

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email"),
  message: Yup.string().required("Required")
})

type ContactFormProps = Pick<SectionProps, "background">

const ContactForm: FC<ContactFormProps> = (props) => {
  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [didSubmit, setDidSubmit] = React.useState(false)

  return (
    <Section
      title="Have a question?"
      subtitle="Send us a message!"
      width="sm"
      {...props}
    >
      <form
        onSubmit={form.onSubmit((values) => {
          setIsSubmitting(true)
          setIsError(false)
          setDidSubmit(false)
          const {name, email, message} = values
          submitFormspark({
            from: name,
            subject: "Contact Form Submission",
            message,
            data: {
              Name: name,
              Email: email
            }
          })
            .then(() => {
              form.reset()
              setDidSubmit(true)
            })
            .catch(() => setIsError(true))
            .finally(() => setIsSubmitting(false))
        })}
        noValidate
      >
        <Stack spacing="md">
          <TextInput required label="Name" {...form.getInputProps("name")} />
          <TextInput required label="Email" {...form.getInputProps("email")} />
          <Textarea
            required
            placeholder="How can we help?"
            label="Message"
            autosize
            minRows={3}
            {...form.getInputProps("message")}
          />
        </Stack>

        {isError && (
          <Alert
            icon={<AlertCircle size={16} />}
            title="Submission Error"
            color="red"
            mt="xl"
          >
            There was a problem with the service used to handle form
            submissions. Please email us at{" "}
            <Anchor href={`mailto:${HACKUSU_EMAIL}`}>{HACKUSU_EMAIL}</Anchor>.
          </Alert>
        )}
        {didSubmit && (
          <Alert
            icon={<AlertCircle size={16} />}
            title="Submission Received!"
            color="green"
            mt="xl"
          >
            Thank you for contacting us! If you have any additional questions,
            you can email us at{" "}
            <Anchor href={`mailto:${HACKUSU_EMAIL}`}>{HACKUSU_EMAIL}</Anchor>.
          </Alert>
        )}
        <Group position="right" mt="xl">
          <GradientButton loading={isSubmitting} type="submit">
            Submit
          </GradientButton>
        </Group>
      </form>
    </Section>
  )
}

export default ContactForm
