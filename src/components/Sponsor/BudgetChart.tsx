import { Box, Group, List, RingProgress, Text, ThemeIcon } from '@mantine/core';
import { categorySpending } from 'content/sponsor/spendingContent';
import React, { FC } from 'react';
import { CircleCheck } from 'tabler-icons-react';

const BudgetChart: FC = () => {
  const totalSpend = categorySpending.reduce((acc, curr) => acc + curr.amount, 0);
  return (
    <Group position="center" mb={50}>
      <Box>
        <RingProgress
          size={300}
          thickness={40}
          label={
            <Text size="xs" align="center">
              2022 Budget Allocation
            </Text>
          }
          sections={categorySpending.map((category) => ({
            color: category.color,
            value: (100 * category.amount) / totalSpend,
          }))}
        />
      </Box>
      <Box>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <CircleCheck size={16} />
            </ThemeIcon>
          }
        >
          {categorySpending.map((category) => (
            <List.Item
              key={category.name}
              icon={
                <ThemeIcon color={category.color} size={24} radius="xl">
                  <category.icon size={16} />
                </ThemeIcon>
              }
            >
              {category.name}
            </List.Item>
          ))}
        </List>
      </Box>
    </Group>
  );
};

export default BudgetChart;
