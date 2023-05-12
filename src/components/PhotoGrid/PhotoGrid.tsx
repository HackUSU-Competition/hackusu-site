import {Modal, SimpleGrid, useMantineTheme} from "@mantine/core"
import React, {FC, useState} from "react"
import {GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image"
import {FilesystemQueryResult} from "utils/helpers"

export interface PhotoGridProps {
  photos: FilesystemQueryResult[]
}

export const PhotoGrid: FC<PhotoGridProps> = ({photos}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<FilesystemQueryResult>()

  const theme = useMantineTheme()

  return (
    <>
      <SimpleGrid
        cols={3}
        spacing="sm"
        mt={30}
        breakpoints={[
          {maxWidth: "md", cols: 2, spacing: "md"},
          {maxWidth: "xs", cols: 1, spacing: "sm"}
        ]}
      >
        {photos.map((photo, index) => (
          <div key={index} onClick={() => setSelectedPhoto(photo)}>
            <GatsbyImage
              image={
                getImage(
                  photo.node.childImageSharp.gatsbyImageData
                ) as IGatsbyImageData
              }
              alt={`HackUSU event photo: ${photo.node.name}`}
              style={{
                aspectRatio: "1 / 1",
                borderRadius: theme.radius.sm,
                cursor: "pointer"
                // "&:hover": {opacity: 0.8},
              }}
            />
          </div>
        ))}
      </SimpleGrid>

      <Modal
        centered
        opened={!!selectedPhoto}
        onClose={() => setSelectedPhoto(undefined)}
        title={selectedPhoto?.node.name}
        size="100%"
        transitionProps={{transition: "fade", duration: 200}}
      >
        {(() => {
          const image =
            selectedPhoto && getImage(selectedPhoto.node.childImageSharp)

          if (!image) return null

          return (
            <GatsbyImage
              alt={`HackUSU event photo: ${selectedPhoto.node.name}`}
              image={image}
            />
          )
        })()}
      </Modal>
    </>
  )
}
