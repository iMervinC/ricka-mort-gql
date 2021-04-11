import Head from 'next/head'
import { FC } from 'react'

const PageLayout: FC<{ title: string }> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mt-16">{children}</main>
    </>
  )
}
export default PageLayout
