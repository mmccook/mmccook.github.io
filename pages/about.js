import Head from 'next/head'
import MainNavigation from '../components/mainNavigation/MainNavigation';
import BasicWithNav from '../components/layouts/BasicWithNav';
export default function Home() {
  return (
    <BasicWithNav Navigation={MainNavigation}>
      <Head>
        <title>About</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>About</h1>

    </BasicWithNav>  
    
  )
}
