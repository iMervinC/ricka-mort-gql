import { FC } from 'react'
import { Char } from '@/utils/typings'
import { useRouter } from 'next/router'

const CharCard: FC<Char> = ({
  id,
  image,
  location,
  name,
  origin,
  species,
  status,
}) => {
  const route = useRouter()

  const clickHandler = (_url: string) => {
    route.push(`/character/${_url}`)
  }

  return (
    <li
      onClick={() => clickHandler(id)}
      className="flex flex-col sm:space-x-3  w-80 sm:w-auto mx-auto  sm:mx-0 card "
    >
      <img className="rounded-lg mx-auto  h-52 w-52" src={image} alt={name} />
      <div className="flex flex-col justify-center">
        <div className="card-section">
          <h2 className="font-bold">{name}</h2>
          <span className="text-xl">{`${status} - ${species}`}</span>
        </div>
        <div className="card-section">
          <span className="text-gray-500 text-xl">Last known location:</span>
          <span className="text-xl">{location.name}</span>
        </div>
        <div className="card-section">
          <span className="text-gray-500 text-xl">Origin</span>
          <span className="text-xl">{origin.name}</span>
        </div>
      </div>
    </li>
  )
}

export default CharCard
