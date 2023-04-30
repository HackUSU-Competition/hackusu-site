import {
  Anchor,
  Button,
  Container,
  createStyles,
  Group,
  Image,
  Modal,
  Paper,
  Portal,
  SimpleGrid,
  Space,
  Text
} from "@mantine/core"
import Layout from "components/Layout/Layout"
import PageTitle from "components/PageTitle"
import {paths} from "content/navigationContent"
import {Link} from "gatsby"
import React, {useState} from "react"
import {Download} from "tabler-icons-react"

const useStyles = createStyles((theme) => ({
  image: {
    cursor: "pointer",

    "&:hover": {
      opacity: 0.8
    }
  }
}))

export default function About() {
  const {classes} = useStyles()

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = React.useState<string | undefined>()

  return (
    <Layout>
      <PageTitle>PAST PHOTOS</PageTitle>
      <Container>
        <Space h="lg" />
        <Anchor component={Link} to={paths.press}>
          &larr; Press Resources
        </Anchor>
        {/* TODO: Make images available for download */}

        <Text my={20}>
          The following images can be used by members of the media for reporting
          about HackUSU.
        </Text>

        {/* TODO: Downlaod all images */}
        <Group position="right">
          <Button rightIcon={<Download size={14} />}>
            Download All Images
          </Button>
        </Group>

        <SimpleGrid
          cols={3}
          spacing="lg"
          mt={30}
          breakpoints={[
            {maxWidth: "md", cols: 2, spacing: "md"},
            {maxWidth: "xs", cols: 1, spacing: "sm"}
          ]}
        >
          {[...Array(10)].map((_, index) => {
            const imageURL = require("images/scenes/huntsman-hall.jpg").default

            return (
              <Paper shadow="sm" className={classes.image} key={index}>
                <Image
                  onClick={() => {
                    setSelectedImage(imageURL)
                    setModalOpen(true)
                  }}
                  mx="auto"
                  key={index}
                  radius="sm"
                  src={imageURL}
                  alt="With default placeholder"
                  withPlaceholder
                />
              </Paper>
            )
          })}
        </SimpleGrid>
      </Container>
      <Portal>
        <Modal
          opened={modalOpen}
          onClose={() => setModalOpen(false)}
          size="100vh"
          padding="xs"
          title={
            <Button
              component="a"
              href={selectedImage}
              download
              variant="subtle"
              rightIcon={<Download size={16} />}
            >
              Download
            </Button>
          }
          sx={{
            header: {
              marginBottom: 10
            },
            close: {
              marginRight: 15
            }
          }}
        >
          <Image
            fit="contain"
            mx="auto"
            radius="sm"
            src={selectedImage}
            alt="With default placeholder"
            withPlaceholder
          />
        </Modal>
      </Portal>
    </Layout>
  )
}
