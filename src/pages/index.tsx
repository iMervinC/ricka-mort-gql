import { useQuery } from '@apollo/client'
import PageLayout from '@/components/PageLayout'
import CharCard from '@/components/CharCard'
import PageBtn from '@/components/PageBtn'
import { CharData } from '@/utils/typings'
import { GET_CHARACTERS } from '@/utils/gql-models'
import { useState } from 'react'

export default function Home() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')
  const { loading, error, data } = useQuery<CharData>(GET_CHARACTERS, {
    variables: {
      page,
      search,
    },
  })
  const character = data?.characters

  return (
    <PageLayout title="RickNMorty">
      <h1 className="text-6xl text-center font-bold mb-10">Wubalubadubdub</h1>
      <form
        className="w-fit mx-auto"
        onSubmit={(e) => {
          e.preventDefault()
          setSearch(input)
          setPage(1)
        }}
      >
        <input
          className="border-2 border-solid border-green-600 bg-gray-600 px-3 py-2 rounded-md w-48 font-bold text-2xl shadow-active "
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Rick N Morty"
          value={input}
          onChange={(e) => {
            e.preventDefault()
            setInput(e.target.value)
          }}
        />
      </form>

      <div className="w-fit mx-auto flex flex-row space-x-4 my-3">
        <PageBtn
          onClick={() => setPage(character!.info.prev)}
          pageNum={character?.info.prev}
          dirc="prev"
        />
        <span className="pagination w-[2ch] text-center">{page}</span>
        <PageBtn
          onClick={() => setPage(character!.info.next)}
          pageNum={character?.info.next}
          dirc="next"
        />
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2 className="text-center text-4xl mt-7">
          No one in the RICK and MORTY universe has that name.
        </h2>
      ) : (
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {character?.results.map((char) => (
            <CharCard key={char.id} {...char} />
          ))}
        </ul>
      )}
    </PageLayout>
  )
}
