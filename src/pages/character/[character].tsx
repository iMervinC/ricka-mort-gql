import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import PageLayout from '@/components/PageLayout'
import { GET_CHARACTER } from '@/utils/gql-models'
import { CharInv } from '@/utils/typings'

interface GetChar {
  character: CharInv
}
interface GetCharVar<T> {
  id: T
}
// { character: CharInv },
// { id: typeof character }

const Character = () => {
  const route = useRouter()
  const { character } = route.query

  const { data, error, loading } = useQuery<
    GetChar,
    GetCharVar<typeof character>
  >(GET_CHARACTER, {
    variables: { id: character },
  })

  if (error) return <h2>{error.message}</h2>

  return (
    <PageLayout title={loading ? 'loading...' : data!.character.name}>
      <button className="px-4 py-2 bg-green-700" onClick={() => route.back()}>
        Go Back
      </button>
      {!loading ? (
        <div className="bg-gray-800 p-10 rounded-md mt-10">
          <img
            className="rounded-lg mx-auto  h-52 w-52"
            src={data?.character.image}
            alt={data?.character.name}
          />
          <div className="flex flex-col justify-center space-y-2">
            <div className="card-section">
              <h2 className="font-bold">{data?.character.name}</h2>
              <span className="text-xl">{`${data?.character.status} - ${data?.character.species}`}</span>
            </div>
            <div className="card-section">
              <span className="text-gray-500 text-xl">
                Last known location:
              </span>
              <span className="text-xl">{data?.character.location.name}</span>
            </div>
            <div className="card-section">
              <span className="text-gray-500 text-xl">Origin</span>
              <span className="text-xl">{data?.character.origin.name}</span>
            </div>
            <div className="card-section">
              <h3 className="text-gray-500 text-xl">Episode List</h3>
              {data?.character.episode.map((ep) => (
                <p className="text-lg">{ep.name}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </PageLayout>
  )
}

export default Character
