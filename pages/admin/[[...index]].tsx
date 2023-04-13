import Head from 'next/head'
import {NextStudio} from 'next-sanity/studio'
import {NextStudioHead} from 'next-sanity/studio/head'
import { config } from '@/sanity.config'


const AdminPage : React.FC = () => {
  return (
    <>
      <Head>
        <NextStudioHead favicons={false} />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <NextStudio config={config} />
    </>
  )
}

export default AdminPage