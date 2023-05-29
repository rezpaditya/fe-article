import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import Intro from '../components/intro'
import HeroPost from '../components/hero-post'
import MoreStories from '../components/more-stories'

async function getArticles() {
  const res = await fetch('https://api.respa.nl/articles/');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  const articles = await getArticles();
  const article = articles[0]
  return (
    <>
      <Layout>
        <Head>
          <title>{`Next.js Blog Example with joss`}</title>
        </Head>
        <Container>
          <Intro />
          {article && (
          <HeroPost
              id={article.id}
              title={article.title}
              content={article.text}
              image={article.image}
              is_publish={article.is_publish}
            />
          )}
          {articles.length > 0 && <MoreStories articles={articles} />}
        </Container>
      </Layout>
    </>
  )
}
