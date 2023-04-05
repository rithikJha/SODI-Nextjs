import React from 'react'
import { getAllArticles, getOneArticle, getRecentPosts } from '@/services'
import { ArticleDetails, ArticleWidget, ArticleCategories, Author } from '@/components'; 

const cats = [
    {
      name: "technology"
    },
    {
      name: "politics"
    },
    {
      name: "science"
    },
    {
      name: "culture"
    },
    {
      name: "business"
    }
  ];

const FullArticle = ({post, recent_posts}) => {
    console.log('slug',post)
  return (
    <div className ="details-page">
    <div className='article-area'>
        <title>{post.title}</title>
        <ArticleDetails allDetails = {post} />
        <Author authorInfo = {post.author} />
    </div>
    <div className='feature-area'>
        <div className='article-widget'>
            <ArticleWidget PostsToShow = {recent_posts}/>
        </div>
        <div className='article-categories'>
            <ArticleCategories categories={cats}/>
        </div>
    </div>
    </div>
  )
}


export async function getStaticProps({params}){
    const data = await getOneArticle(params.slug);
    const recent = await getRecentPosts();
    return {
        props : {post : data , recent_posts : recent}
    }
  }



export async function getStaticPaths() {
    const all_Articles = await getAllArticles();
    console.log(all_Articles[0].slug)
    return {
        paths : all_Articles.map(({slug}) => ({params : {slug}})),
        fallback:false,
    }
}


export default FullArticle