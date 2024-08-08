import { api } from '@/lib/axios.config.ts'
import { IList } from '@/@types/IList.ts'
import { IListSchema } from '@/components/movie-modal/movie-details/add-to-list.tsx'

interface IAddMovieToListRequest {
  list: IListSchema
  movieId: number
  token: number
}

export async function addMovieToList({
  token,
  list,
  movieId,
}: IAddMovieToListRequest): Promise<IList[]> {
  const response = await api.post(
    '/lists/movies/add',
    {
      list,
      movieId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  )

  if (response.status === 500) {
    throw new Error(response.data.description)
  }

  return response.data
}
