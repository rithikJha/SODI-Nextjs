import {request, gql } from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getAllArticles = async () => {
    const query = gql`query MyQuery {
        posts {
          slug
          title
          excerpt
          classification
          categories {
            slug
            name
          }
          content {
            html
          }
          createdAt
          featuredImage {
            url
          }
          author {
            name
          }
        }
      }
      `

      const result = await request(graphqlAPI,query)
      return result.posts;
}


export const getOneArticle = async (slug) => {
    const query = gql`query articleDetails($slug: String!) {
        post(where:{slug:$slug}) {
          slug
          title
          excerpt
          classification
          categories {
            slug
            name
          }
          content {
            html
          }
          createdAt
          featuredImage {
            url
          }
          author {
            name
            photo{
                url
            }
            bio
          }
        }
      }
      `

      const result = await request(graphqlAPI,query,{slug})
      return result.post;
}


export const getRecentPosts = async () => {
    const query = gql`query articleDetails {
        posts(orderBy : createdAt_ASC
                last: 3) {
          slug
          title
          createdAt
          featuredImage {
            url
          }
        }
      }
      `

      const result = await request(graphqlAPI,query)
      return result.posts;
}