import { Button, Card, Group, Image, Title } from '@mantine/core';
import { PressArticle } from 'content/pressArticles';
import { Link } from 'gatsby';
import React, { FC } from 'react';

const PressCard: FC<{ article: PressArticle }> = ({ article }) => (
  <Card shadow="sm" p="lg">
    <Card.Section>
      <Image src={article.image} height={160} alt="Norway" />
    </Card.Section>

    <Group direction="column" position="apart" sx={{ height: '120px' }}>
      <Title
        order={5}
        mt={10}
        mb={5}
        sx={{
          flexGrow: 1,
          display: '-webkit-box',
          overflow: 'hidden',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
        }}
      >
        {article.title}
      </Title>
      <Button
        component={Link}
        to={article.link}
        target="_blank"
        variant="light"
        color="blue"
        fullWidth
        style={{ display: 'block' }}
      >
        Read on {article.source}
      </Button>
    </Group>
  </Card>
);

export default PressCard;
