import Head from 'next/head'
import { SideMenu } from '../SideMenu'

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-raisinblack">
      <Head>
        <title>Scaledwings</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-300-auto">
        <SideMenu />
        { children }
      </main>
    </div>
  )
}