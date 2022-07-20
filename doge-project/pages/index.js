import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("https://api-mainnet.magiceden.dev/v2/tokens/BK6xK21tXxrKeA85yvXQmMMVkkZSf4urNz7ZG9hzJqX", fetcher);

  return  data && (
      <div className="bg-gray-100 antialiased min-h-screen font-mono">
      <Head>
        <title>Hakyzz CV</title>
        <meta name="description" content="Doge project tasks" />
        <link rel="icon" href="/favicon.jpeg" />
      </Head>

      <main className="max-w-5xl p-5 mx-auto">
        <div className="flex flex-col justify-center items-center mb-10">
          <div className="mb-5">
            <Image className="rounded-xl" width={200} height={200} src={data.image} alt={data.name}/>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-center">
              Hakyzz the naked skelly
            </h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="p-7 bg-white/50 rounded-xl">
            <h2 className="text-xl font-bold mb-5">About me</h2>
            <p className="text-sm">Hi there, I'm Hakyzz. I love being challenged and engaged with projects that require work outside my comfort and knowledge set. Continuing to learn new languages and development techniques are important to me. Oh and I am happily married with my lovely wife since 2018.</p>
          </div>
          <div className="p-7 bg-white/50 rounded-xl">
            <h2 className="text-xl font-bold mb-5">Skills</h2>
            <div className="flex flex-wrap">
              <span className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">JavaScript</span>
              <span className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">React</span>
              <span className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">Next</span>
              <span className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">NodeJS</span>
              <span className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">TypeScript</span>
              <span className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">HTML/CSS</span>
              <span className="text-sm m-1 rounded-lg px-4 py-1.5 bg-[#a4d6b0]">Sass</span>
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
