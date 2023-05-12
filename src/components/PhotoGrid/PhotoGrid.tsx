import {Box, Modal, SimpleGrid, useMantineTheme} from "@mantine/core"
import React, {FC, useState} from "react"
import {GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image"
import {FilesystemQueryResult} from "utils/helpers"
import {useHotkeys} from "@mantine/hooks"

export interface PhotoGridProps {
  photos: FilesystemQueryResult[]
}

export const PhotoGrid: FC<PhotoGridProps> = ({photos}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>()

  const theme = useMantineTheme()

  useHotkeys([
    ["Escape", () => setSelectedIndex(undefined)],
    [
      "ArrowRight",
      () => {
        setSelectedIndex((i) =>
          i === undefined ? undefined : (i + 1) % photos.length
        )
      }
    ],
    [
      "ArrowLeft",
      () => {
        setSelectedIndex((i) =>
          i === undefined ? undefined : (i - 1 + photos.length) % photos.length
        )
      }
    ]
  ])

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
          <div key={index} onClick={() => setSelectedIndex(index)}>
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

      <Modal.Root
        opened={selectedIndex !== undefined}
        onClose={() => setSelectedIndex(undefined)}
        onClick={() => setSelectedIndex(undefined)}
      >
        <Modal.Overlay blur={3} fixed />

        {(() => {
          const image =
            selectedIndex !== undefined &&
            getImage(photos[selectedIndex].node.childImageSharp)

          if (!image) return null

          return (
            <Box
              sx={(theme) => ({
                position: "fixed",
                inset: 0,
                zIndex: 201,
                margin: theme.spacing.xl
              })}
            >
              <GatsbyImage
                alt={`HackUSU event photo: ${photos[selectedIndex].node.name}`}
                image={image}
                imgStyle={{
                  objectFit: "contain",
                  maxHeight: `calc(100vh - 2 * ${theme.spacing.xl})`
                }}
              />
            </Box>
          )
        })()}
      </Modal.Root>
    </>
  )
}
