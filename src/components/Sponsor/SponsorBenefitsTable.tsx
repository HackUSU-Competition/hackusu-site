import { Container, createStyles, Table, Text, Title } from '@mantine/core';
import {
  Benefit,
  BenefitGroup,
  levelData,
  LevelName,
  sponsorLevelTableData,
} from 'content/sponsor/sponsorLevelsContent';
import React, { FC } from 'react';
import { CircleCheck } from 'tabler-icons-react';
var abbreviate = require('number-abbreviate');

const useStyles = createStyles((t) => ({
  checkBoxCell: {
    textAlign: 'center',
    width: '7rem',
  },

  firstCell: {},

  sectionHead: {
    backgroundColor: t.colors.gray[2],
    textTransform: 'uppercase',
  },
}));

const BenefitsTable: FC = () => {
  const { classes } = useStyles();

  const levelNames = Object.keys(levelData) as LevelName[];

  const BenefitRow: FC<{ benefit: Benefit }> = ({ benefit }) => (
    <tr>
      <td className={classes.firstCell}>{benefit.name}</td>
      {levelNames.map((levelName) => (
        <td key={levelName} className={classes.checkBoxCell}>
          <Text size="xs" color="green">
            {benefit.details?.[levelName] ||
              (benefit.levels.includes(levelName) && <CircleCheck size={20} />)}
          </Text>
        </td>
      ))}
    </tr>
  );

  const Section: FC<{ group: BenefitGroup }> = ({ group }) => (
    <>
      <tr className={classes.sectionHead}>
        <td colSpan={Object.entries(levelData).length + 1}>
          <Title order={5}>{group.groupName}</Title>
        </td>
      </tr>
      {group.benefits.map((benefit) => (
        <BenefitRow key={benefit.name} benefit={benefit} />
      ))}
    </>
  );

  const LevelHeader: FC<{ levelName: LevelName }> = ({ levelName }) => {
    const { amount, color } = levelData[levelName];

    return (
      <th>
        <Text color={color} weight={800} align="center" size="lg">
          {levelName}
        </Text>
        <Text color={color} weight={400} align="center" size="sm">
          ${abbreviate(amount)}
        </Text>
      </th>
    );
  };

  return (
    <>
      <Title order={2} align="center" mt={50}>
        SPONSORSHIP BENEFITS
      </Title>
      <Container size="sm">
        <Table my={30} highlightOnHover>
          <thead>
            <tr>
              <th>{/* EMPTY */}</th>
              {levelNames.map((levelName) => (
                <LevelHeader key={levelName} levelName={levelName} />
              ))}
            </tr>
          </thead>
          <tbody>
            {sponsorLevelTableData.map((group) => (
              <Section key={group.groupName} group={group} />
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default BenefitsTable;
