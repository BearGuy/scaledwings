import Head from 'next/head'
import { SideMenu } from '../SideMenu'

export function Layout({ children, hide_menu = false }) {
  return (
    <div className="min-h-screen bg-raisinblack">
      <Head>
        <title>Scaledwings</title>
        <link rel="icon" href="/dragon.png" />
      </Head>
      <main className="grid grid-cols-1 md:grid-cols-250-auto">
        <SideMenu hide_menu={hide_menu} />
        { children }
      </main>
    </div>
  )
}