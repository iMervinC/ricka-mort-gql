import { gql, useQuery } from '@apollo/client'
import PageLayout from '@/components/PageLayout'
import CharCard from '@/components/CharCard'
import PageBtn from '@/components/PageBtn'
import { CharData } from '@/utils/typings'
import { useMemo, useState, FC } from 'react'
import { dir } from 'node:console'

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        prev
        next
        count
      }
      results {
        id
        name
        status
        species
        image
        location {
          name
        }
        origin {
          name
          dimension
        }
      }
    }
  }
`

export default function Home() {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useQuery<CharData>(GET_CHARACTERS, {
    variables: {
      page,
    },
  })
  const character = useMemo(() => data?.characters, [data])

  console.log(data)
  return (
    <PageLayout title="RickNMorty">
      <h1 className="text-6xl text-center font-bold">Wubalubadubdub</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error.message}</h2>
      ) : (
        <ul className="grid lg:grid-cols-2 xl:grid-cols-3 my-10 gap-5">
          {character?.results.map((char) => (
            <CharCard key={char.id} {...char} />
          ))}
        </ul>
      )}

      {!loading && (
        <div className="w-fit mx-auto flex flex-row space-x-4 mb-5">
          <PageBtn
            onClick={() => setPage(character!.info.prev)}
            pageNum={character!.info.prev}
            dirc="prev"
          />
          <span className="pagination">{page}</span>
          <PageBtn
            onClick={() => setPage(character!.info.next)}
            pageNum={character!.info.next}
            dirc="next"
          />
        </div>
      )}
    </PageLayout>
  )
}
