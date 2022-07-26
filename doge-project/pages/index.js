import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import { getData } from './api/profile';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home({ profile }) {
  const { data: nftData, error: nftDataError } = useSWR("https://api-mainnet.magiceden.dev/v2/tokens/BK6xK21tXxrKeA85yvXQmMMVkkZSf4urNz7ZG9hzJqX", fetcher);
  
  return (
      <div className="bg-gray-100 antialiased min-h-screen font-mono">
      <Head>
        <title>Hakyzz CV</title>
        <meta name="description" content="Doge project tasks" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>

      <main className="max-w-5xl p-5 mx-auto">
        <div className="flex flex-col justify-center items-center mb-10">
          <div className="mb-5">
            <Image className="rounded-xl" width={200} height={200} src={nftData ? nftData.image : "/placeholder.png"} alt={nftData ? nftData.name : "NFT PP"}/>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center">
              {profile.name}
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-7 bg-white/50 rounded-xl">
            <h2 className="text-xl font-bold mb-5">About me</h2>
            <p className="text-sm">{profile.description}</p>
          </div>
          <div className="p-7 bg-white/50 rounded-xl">
            <h2 className="text-xl font-bold mb-5">Skills</h2>
            <div className="flex flex-wrap">
              {profile.skills && profile.skills.map((skill, i) => (
                <span key={i} className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">{skill}</span>
              ))}
              </div>
          </div>
        </div>
      </main>
      <footer className="max-w-5xl p-5 mx-auto">
        <span className="text-xs font-bold text-center block">&copy; <a className="text-sky-500 underline" href="https://twitter.com/hakyzz1">hakyzz</a></span>
      </footer>
    </div>
  )
}

export async function getServerSideProps(context) {
  const myData = await getData()
  
  return {
    props: {
     profile: myData
   }
  }
}