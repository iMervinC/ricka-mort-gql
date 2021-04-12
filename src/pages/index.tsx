import { gql, useQuery } from '@apollo/client'
import PageLayout from '@/components/PageLayout'
import CharCard from '@/components/CharCard'
import { CharData } from '@/utils/typings'

const GET_CHARTERS = gql`
  query {
    characters(page: 1) {
      results {
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
  const { loading, error, data } = useQuery<CharData>(GET_CHARTERS)
  const character = data?.characters.results

  return (
    <PageLayout title="RickNMorty">
      <h1 className="text-6xl text-center font-bold">Wubalubadubdub</h1>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 my-10 gap-5">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          character?.map((char) => <CharCard {...char} />)
        )}
      </div>
    </PageLayout>
  )
}
