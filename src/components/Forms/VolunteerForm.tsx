import {
  Alert,
  Anchor,
  Checkbox,
  Container,
  ContainerProps,
  Group,
  SimpleGrid,
  Stack,
  Textarea,
  TextInput,
  Title
} from "@mantine/core"
import {useForm, yupResolver} from "@mantine/form"
import GradientButton from "components/GradientButton"
import React, {FC} from "react"
import {submitFormspark} from "services/formspark"
import {AlertCircle} from "tabler-icons-react"
import {HACKUSU_EMAIL} from "utils/constants"
import * as Yup from "yup"

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid email")
})

const VolunteerForm: FC<ContainerProps> = (props) => {
  const form = useForm({
    validate: yupResolver(schema),
    initialValues: {
      name: "",
      email: "",
      organization: "",
      volunteer: [],
      message: ""
    }
  })

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isError, setIsError] = React.useState(false)
  const [didSubmit, setDidSubmit] = React.useState(false)

  return (
    <Container size="sm" {...props}>
      <Title order={2} mb="xl" id="sign-up-form">
        Sign Up to Volunteer
      </Title>
      <form
        onSubmit={form.onSubmit((values) => {
          setIsSubmitting(true)
          setIsError(false)
          setDidSubmit(false)
          const {name, email, organization, volunteer, message} = values
          submitFormspark({
            from: name,
            subject: "Volunteer Form Submission",
            message,
            data: {
              Name: name,
              Email: email,
              Organization: organization,
              "Volunteer as": volunteer.join(", ")
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
        <SimpleGrid
          cols={2}
          spacing={50}
          mb="md"
          breakpoints={[{maxWidth: "sm", cols: 1, spacing: "md"}]}
        >
          <Stack spacing="md">
            <TextInput required label="Name" {...form.getInputProps("name")} />
            <TextInput
              required
              label="Email"
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Company / Organization / School"
              {...form.getInputProps("organization")}
            />
          </Stack>
          <Checkbox.Group
            label="How would you like to volunteer?"
            color="blue"
            {...form.getInputProps("volunteer")}
          >
            <Stack mt="sm">
              <Checkbox value="Event Organizer" label="Event Organizer" />
              <Checkbox value="Workshop Host" label="Workshop Host" />
              <Checkbox value="Project Judge" label="Project Judge" />
              <Checkbox value="Mentor" label="Mentor" />
            </Stack>
          </Checkbox.Group>
        </SimpleGrid>
        <Textarea
          placeholder="Your message..."
          label="Message"
          autosize
          minRows={3}
          {...form.getInputProps("message")}
        />
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
            Thank you for your interest in volunteering at HackUSU! If you have
            any additional questions, you can email us at{" "}
            <Anchor href={`mailto:${HACKUSU_EMAIL}`}>{HACKUSU_EMAIL}</Anchor>.
          </Alert>
        )}
        <Group position="right" mt="xl">
          <GradientButton loading={isSubmitting} type="submit">
            Submit
          </GradientButton>
        </Group>
      </form>
    </Container>
  )
}

export default VolunteerForm
