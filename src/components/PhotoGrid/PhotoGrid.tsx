import {SimpleGrid, Paper} from "@mantine/core"
import React, {FC, useState} from "react"
import Img, {FluidObject} from "gatsby-image"

export interface PhotoGridProps {
  photos: FluidObject[]
}

export const PhotoGrid: FC<PhotoGridProps> = ({photos}) => {
  const [selectedImage, setSelectedImage] = useState<FluidObject>()

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
      {photos.map((photo) => (
        <Paper
          shadow="sm"
          sx={{
            // cursor: "pointer",
            // "&:hover": {opacity: 0.8},
            overflow: "hidden"
          }}
          key={photo.src}
          radius="md"
        >
          {/* <AspectRatio ratio={1.62 / 1}> */}
          <Img
            // onClick={() => setSelectedImage(imageURL)}
            fluid={photo}
            alt="With default placeholder"
            // withPlaceholder
          />
          {/* </AspectRatio> */}
        </Paper>
      ))}
    </SimpleGrid>
  )
}
