import { api } from '@/lib/axios.config.ts'

export async function getMoviesByGenre(
  genre: string,
  token: string | undefined,
): Promise<IGetMoviesByGenreResponse> {
  const response = await api.get(`movie/random/${genre}`, {
    headers: {
      Authorization: token && `Bearer ${token}`,
    },
  })

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
