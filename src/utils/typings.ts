export interface Char {
  id: string
  name: string
  status: string
  species: string
  image: string
  location: {
    name: string
  }
  origin: {
    name: string
    dimension: string
  }
}
export interface CharData {
  characters: {
    info: {
      count: number
      next: number
      prev: number
    }
    results: Char[]
  }
}
