import { FC } from 'react'
import { Char } from '@/utils/typings'

const CharCard: FC<Char> = ({
  image,
  location,
  name,
  origin,
  species,
  status,
}) => {
  return (
    <li className="flex flex-col sm:flex-row sm:space-x-3 border-2 border-black dark:border-white rounded-lg p-2 text-2xl w-80 sm:w-auto mx-auto sm:mx-0">
      <img className="rounded-lg mx-auto sm:mx-0 h-52" src={image} alt={name} />
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
          <span className="text-xl">{`${origin.name} - ${origin.dimension}`}</span>
        </div>
      </div>
    </li>
  )
}

export default CharCard
