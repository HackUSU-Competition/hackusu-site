import {Image, SimpleGrid} from "@mantine/core"
import {Sponsor} from "pages/sponsor/_sponsorCompaniesContent"
import React, {FC} from "react"

const SponsorGrid: FC<{sponsors: Sponsor[]}> = ({sponsors}) => {
  return (
    <SimpleGrid
      cols={3}
      spacing="xl"
      verticalSpacing={50}
      mt={30}
      breakpoints={[
        {maxWidth: "sm", cols: 2, spacing: "sm"},
        {maxWidth: "xs", cols: 1, spacing: "sm"}
      ]}
    >
      {sponsors
        .filter((sponsor) => sponsor.logo)
        .map((sponsor) => (
          <Image
            fit="contain"
            key={sponsor.name}
            src={sponsor.logo}
            width={200}
            height={70}
            mx="auto"
            alt={`${sponsor.name} logo`}
            imageProps={{loading: "lazy"}}
            // withPlaceholder
          />
        ))}
    </SimpleGrid>
  )
}

export default SponsorGrid
