import {SimpleGrid, useMantineTheme} from "@mantine/core"
import React, {FC, useState} from "react"
import {GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image"

export interface PhotoGridProps {
  photos: (IGatsbyImageData | undefined)[]
}

export const PhotoGrid: FC<PhotoGridProps> = ({photos}) => {
  const [selectedImage, setSelectedImage] = useState<IGatsbyImageData>()

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
      {(photos.filter(Boolean) as IGatsbyImageData[]).map((photo, index) => (
        <GatsbyImage
          key={index}
          // onClick={() => setSelectedImage(imageURL)}
          image={photo}
          alt="With default placeholder"
          style={{
            aspectRatio: "1.62 / 1",
            borderRadius: theme.radius.md
            // cursor: "pointer"
            // "&:hover": {opacity: 0.8},
          }}
        />
      ))}
    </SimpleGrid>
  )
}
