export interface Char {
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
    results: Char[]
  }
}
