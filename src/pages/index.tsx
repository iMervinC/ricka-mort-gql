import Head from 'next/head'
import PageLayout from '@/components/PageLayout'

export default function Home() {
  return (
    <PageLayout title="RickNMorty">
      <h1 className="text-6xl text-center font-bold">Wubalubadubdub</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 my-10 gap-5">
        <CharCrad />
        <CharCrad />
        <CharCrad />
        <CharCrad />
        <CharCrad />
        <CharCrad />
      </div>
    </PageLayout>
  )
}

const CharCrad = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-3 border-2 border-black dark:border-white rounded-lg p-2 text-2xl">
      <img
        className="rounded-lg mx-auto sm:mx-0 h-52"
        src="https://rickandmortyapi.com/api/character/avatar/434.jpeg"
        alt="rick"
      />
      <div className="flex flex-col justify-center">
        <div className="card-section">
          <h2 className="font-bold">Rick</h2>
          <span className="text-xl">{`Alive - Human`}</span>
        </div>
        <div className="card-section">
          <span className="text-gray-500 text-xl">Last known location:</span>
          <span className="text-xl">Earth</span>
        </div>
        <div className="card-section">
          <span className="text-gray-500 text-xl">First seen in:</span>
          <span className="text-xl">The Rickturian Candidate</span>
        </div>
      </div>
    </div>
  )
}
