interface IGetGenreListResponse {
  genreList: IGenre[]
}

interface IGetMoviesByGenreResponse {
  movies: IMovie[]
}

interface IGetUserMovieListsResponse {
  userLists: IListSummary[]
}

interface IGetCustomMovieListResponse {
  movies: IMovie[]
  name: string
  id: number
}

interface IGetMovieCommentsResponse {
  comments: IComment[]
}

interface IPostCommentResponse {
  commentCreated: IComment
}

interface IRateMovieResponse {
  created: {
    id: number
    rating: number
    movieId: number
  }
}

interface ISearchedMovieResponse {
  movies: IMovie[]
}

interface IGetUserRatingByMovieIdResponse {
  rating: IRating
}

interface IGetUserProfileResponse {
  profile: IProfile
}

interface IAddMovieToListResponse {
  listAdded: IListSummary
  movieAdded: number
}

interface IRemoveMovieFromListResponse {
  selectedList: IListSummary
  movieRemoved: number
}
