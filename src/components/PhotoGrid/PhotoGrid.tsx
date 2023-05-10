import {SimpleGrid, useMantineTheme} from "@mantine/core"
import React, {FC, useState} from "react"
import {GatsbyImage, IGatsbyImageData, getImage} from "gatsby-plugin-image"
import {FilesystemQueryResult} from "utils/helpers"

export interface PhotoGridProps {
  full: FilesystemQueryResult[]
  thumbnails: FilesystemQueryResult[]
}

export const PhotoGrid: FC<PhotoGridProps> = ({full, thumbnails}) => {
  const [selectedId, setSelectedId] = useState<string>()

  console.log(full.find((p) => p.node.id === selectedId))

  const theme = useMantineTheme()

  return (
    <SimpleGrid
      cols={3}
      spacing="sm"
      mt={30}
      breakpoints={[
        {maxWidth: "md", cols: 2, spacing: "md"},
        {maxWidth: "xs", cols: 1, spacing: "sm"}
      ]}
    >
      {thumbnails.map((photo, index) => (
        <div key={index} onClick={() => setSelectedId(photo.node.id)}>
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
  )
}
