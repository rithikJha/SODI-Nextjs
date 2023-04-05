import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Articles, ArticleCategories, ArticleWidget } from '@/components'
import { getAllArticles, getRecentPosts } from '@/services'

export default function Home({all_Articles , recent_Posts}) {
  return (
    <>
      <Head>
        <title>SODI Network</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-page-full'>
        <div className='home-page-left'>
            <Articles allArticles = {all_Articles}/>
        </div>
        <div className='home-page-right'>
          <div className='article-widget'>
          <ArticleWidget PostsToShow = {recent_Posts}/>
          </div>
          <div className='article-categories'>
          <ArticleCategories />
          </div>
            
            
        </div>
        
      </div>
      
    </>
  )
}

export async function getStaticProps(){
  const all_Articles = (await getAllArticles()) || [{posts:[]}];
  const recent = await getRecentPosts();
  return {
      props : {all_Articles : all_Articles, recent_Posts : recent}
  }
}