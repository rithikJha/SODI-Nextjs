import '@/styles/globals.css'
import '@/styles/Navbar.css'
import react , {useEffect , useState } from 'react';
import Layout from '@/components/Layout';
import '@/styles/card.css'
import '@/styles/articleDetails.css'
import '@/styles/widgetCard.css'
import '@/styles/author.css'
import '@/styles/categoryCard.css'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
  )
  
  
}
