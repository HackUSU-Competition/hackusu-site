import {Button, Card, Group, Image, SimpleGrid, Text} from "@mantine/core"
import Section from "components/Layout/Section"
import {Link} from "gatsby"
import React, {FC} from "react"

interface PressArticle {
  title: string
  link: string
  image: string
  source: string
  year: number
}

const pressArticles: PressArticle[] = [
  {
    title: "Aggies facilitate a 24-hour hacking event at Huntsman Hall",
    link: "https://usustatesman.com/aggies-facilitate-a-24-hour-hacking-event-at-huntsman-hall/",
    image:
      "https://usustatesman.com/wp-content/uploads/2022/03/03152022_-1050x700.jpg",
    source: "The Utah Statesman",
    year: 2022
  },
  {
    title:
      "Utah College Students, High School Seniors Invited to 'HackUSU' March 18-19",
    link: "https://www.usu.edu/today/story/utah-college-students-high-school-seniors-invited-to-hackusu-march-18-19",
    image:
      "https://www.usu.edu/today/images/stories/xl/SCI_1HackUSU_USTFeb2022_UST.jpg",
    source: "Utah State TODAY",
    year: 2022
  },
  {
    title: "HackUSU hosts annual 'Hackathon'",
    link: "https://usustatesman.com/hackusu-hosts-annual-hackathon/",
    image:
      "https://usustatesman.com/wp-content/uploads/2018/11/20181117_hackathon_rimando6-1050x700.jpg",
    source: "The Utah Statesman",
    year: 2018
  },
  {
    title: "'A creative solution': USU student explains 'hacking'",
    link: "https://www.hjnews.com/allaccess/a-creative-solution-usu-student-explains-hacking/article_e666fc76-63a5-5d79-9ce9-99cd55534a0d.html",
    image:
      "https://bloximages.chicago2.vip.townnews.com/hjnews.com/content/tncms/assets/v3/editorial/0/4b/04b8b7b3-ea6d-5de1-a78b-4d45f8e71590/57f969367480f.image.jpg?resize=1742%2C1189",
    source: "The Herald Journal",
    year: 2016
  },
  {
    title: "Hackers For the Greater Good Unite At Utah State",
    link: "https://www.upr.org/utah-news/2015-10-13/hackers-for-the-greater-good-unite-at-utah-state",
    image:
      "https://npr.brightspotcdn.com/dims4/default/d2b1425/2147483647/strip/true/crop/3888x2395+0+99/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fupr%2Ffiles%2F201510%2FIMG_3072.JPG",
    source: "Utah Public Radio",
    year: 2015
  },
  {
    title: "USU students team with youngsters for Hack Day",
    link: "https://www.hjnews.com/family/usu-students-team-with-youngsters-for-hack-day/article_05501846-ace3-5740-a1c1-ae2ed1e35c10.html",
    image:
      "https://bloximages.chicago2.vip.townnews.com/hjnews.com/content/tncms/assets/v3/editorial/f/30/f30baa8a-4b7f-5ec3-9925-bc9b2bbd4d78/56193d91f0af7.image.jpg?resize=1433%2C500",
    source: "The Herald Journal",
    year: 2015
  },
  {
    title:
      "USU students create 'Tron'-inspired virtual world as part of hackUstate competition",
    link: "https://www.cachevalleydaily.com/news/archive/2015/11/10/f534ed30-8785-11e5-8ef7-3f115cda475c/#.YkHlfhDMLzc",
    image:
      "https://www.cachevalleydaily.com/wp-content/uploads/2015/11/3d15ee9b64077cc4f972487355721afa-970x546.jpg",
    source: "Cache Valley Daily",
    year: 2015
  },
  {
    title: "Hackathons — Through the Eyes of a Statistician",
    link: "https://medium.com/the-data-experience/hackathons-through-the-eyes-of-a-statistician-b53ad0e6ecba",
    image: "https://miro.medium.com/max/1400/1*V7h8B0wec__R2sY2CjwunQ.jpeg",
    source: "Medium",
    year: 2015
  }
]

const ArticleCard: FC<{article: PressArticle}> = ({article}) => (
  <Card shadow="sm" p="lg">
    <Card.Section>
      <Image src={article.image} height={160} withPlaceholder />
    </Card.Section>

    <Group direction="column" position="apart" sx={{height: "120px"}}>
      <Text
        my={10}
        mb={5}
        weight="bold"
        sx={{
          flexGrow: 1
        }}
        lineClamp={2}
      >
        {article.title}
      </Text>
      <Button
        component={Link}
        to={article.link}
        target="_blank"
        variant="light"
        color="blue"
        fullWidth
        style={{display: "block"}}
      >
        Read on {article.source}
      </Button>
    </Group>
  </Card>
)

const PressArticlesGrid: FC<{articles: PressArticle[]}> = ({articles}) => (
  <SimpleGrid
    cols={3}
    spacing="lg"
    mt={30}
    breakpoints={[
      {maxWidth: "md", cols: 2, spacing: "md"},
      {maxWidth: "xs", cols: 1, spacing: "sm"}
    ]}
  >
    {articles.map((article) => (
      <ArticleCard key={article.title} article={article} />
    ))}
  </SimpleGrid>
)

const FeaturedArticles: FC = () => {
  return (
    <Section title="Featured Articles">
      <PressArticlesGrid articles={pressArticles} />
    </Section>
  )
}

export default FeaturedArticles
