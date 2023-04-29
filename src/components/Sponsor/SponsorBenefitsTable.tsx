import {
  ActionIcon,
  Alert,
  Box,
  createStyles,
  ScrollArea,
  Table,
  Text,
  Title,
  Tooltip
} from "@mantine/core"
import Section from "components/Layout/Section"
import {
  Benefit,
  BenefitGroup,
  levelData,
  LevelName,
  sponsorLevelTableData
} from "content/sponsor/sponsorLevelsContent"
import React, {FC} from "react"
import {CircleCheck, InfoCircle, Star} from "tabler-icons-react"
const abbreviate = require("number-abbreviate")

const useStyles = createStyles((t) => ({
  checkBoxCell: {
    textAlign: "center",
    width: "7rem"
  },

  firstCell: {},

  sectionHead: {
    backgroundColor: t.colors.gray[2],
    textTransform: "uppercase"
  }
}))

const BenefitsTable: FC = () => {
  const {classes} = useStyles()

  const levelNames = Object.keys(levelData) as LevelName[]

  const BenefitRow: FC<{benefit: Benefit}> = ({benefit}) => (
    <tr>
      <td>
        {benefit.tooltip && (
          <Tooltip
            label={benefit.tooltip}
            width={300}
            position="right"
            withArrow
          >
            <ActionIcon variant="transparent" color="blue">
              <InfoCircle size={18} />
            </ActionIcon>
          </Tooltip>
        )}
      </td>
      <td className={classes.firstCell}>{benefit.name}</td>
      {levelNames.map((levelName) => (
        <td key={levelName} className={classes.checkBoxCell}>
          <Text size="xs" color="green">
            {benefit.levelsDetails?.[levelName] ||
              (benefit.levels.includes(levelName) && <CircleCheck size={20} />)}
          </Text>
        </td>
      ))}
    </tr>
  )

  const TableSection: FC<{group: BenefitGroup}> = ({group}) => (
    <>
      <tr className={classes.sectionHead}>
        <td></td>
        <td colSpan={Object.entries(levelData).length + 1}>
          <Title order={5}>{group.groupName}</Title>
        </td>
      </tr>
      {group.benefits.map((benefit) => (
        <BenefitRow key={benefit.name} benefit={benefit} />
      ))}
    </>
  )

  const LevelHeader: FC<{levelName: LevelName}> = ({levelName}) => {
    const {amount, color} = levelData[levelName]

    return (
      <Box component="th" p="0 !important">
        <Box
          sx={{
            padding: "0.25rem",
            background: color,
            margin: "0 0.25rem !important",
            borderRadius: "0.5rem 0.5rem 0 0"
          }}
        >
          <Text color="white" weight={800} align="center" size="lg">
            {levelName}
          </Text>
          <Text color="white" weight={400} align="center" size="sm">
            {amount ? `$${abbreviate(amount)}` : "Contact us"}
          </Text>
        </Box>
      </Box>
    )
  }

  return (
    <Section
      title="Sponsorship Benefits"
      subtitle="We can help you promote your brand, recruit students, and provide presentation opportunities"
    >
      <ScrollArea type="auto">
        <Table my={30}>
          <thead>
            <tr>
              <th colSpan={2}>{/* EMPTY */}</th>
              {levelNames.map((levelName) => (
                <LevelHeader key={levelName} levelName={levelName} />
              ))}
            </tr>
          </thead>
          <tbody>
            {sponsorLevelTableData.map((group) => (
              <TableSection key={group.groupName} group={group} />
            ))}
          </tbody>
        </Table>
      </ScrollArea>
      <Alert icon={<Star size={16} />} title="Want something else?" mb={30}>
        Contact us to build a custom sponsorship plan. We want to work together
        with you to help as many students as possible at this year's HackUSU
        event!
      </Alert>
    </Section>
  )
}

export default BenefitsTable
