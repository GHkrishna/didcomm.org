import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import { Layout } from '../components/Layout/Layout'
import { Header } from '../components/Header/Header'
import { Feature, Features } from '../components/Features/Features'
import { Hero } from '../components/Hero/Hero'

type QueryData = {
  markdownRemark: {
    frontmatter: {
      features: Array<Feature>
    }
  }
}

const IndexPage = ({ navigate, data }: PageProps<QueryData>) => {
  return (
    <Layout>
      <Header primary />
      <main>
        <section>
          <Hero navigate={navigate} />
        </section>
        <section className="content">
          <Features features={data.markdownRemark.frontmatter.features} />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    markdownRemark(frontmatter: { layout: { eq: "index" } }) {
      frontmatter {
        features {
          icon
          title
          text
        }
      }
    }
  }
`
