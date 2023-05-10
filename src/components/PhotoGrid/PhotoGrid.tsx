import {Modal, SimpleGrid, useMantineTheme} from "@mantine/core"
import React, {FC, useState} from "react"
import {GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image"
import {FilesystemQueryResult} from "utils/helpers"

export interface PhotoGridProps {
  photos: FilesystemQueryResult[]
}

export const PhotoGrid: FC<PhotoGridProps> = ({photos}) => {
  const [selectedId, setSelectedId] = useState<FilesystemQueryResult>()

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
          <div key={index} onClick={() => setSelectedId(photo)}>
            <GatsbyImage
              image={
                getImage(
                  photo.node.childImageSharp.gatsbyImageData
                ) as IGatsbyImageData
              }
              alt={`HackUSU event photo: ${photo.node.base}`}
              style={{
                aspectRatio: "1.62 / 1",
                borderRadius: theme.radius.sm,
                cursor: "pointer"
                // "&:hover": {opacity: 0.8},
              }}
            />
          </div>
        ))}
      </SimpleGrid>

      <Modal
        opened={!!selectedId}
        onClose={() => setSelectedId(undefined)}
        title={selectedId?.node.base}
        fullScreen
        transitionProps={{transition: "fade", duration: 200}}
      >
        {(() => {
          const image = selectedId && getImage(selectedId.node.childImageSharp)

          if (!image) return null

          return <GatsbyImage alt="" image={image} />
        })()}
      </Modal>
    </>
  )
}
