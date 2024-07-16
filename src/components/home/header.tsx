import { SearchMovieInput } from '@/components/home/searchMovieInput.tsx'
import { Search } from 'lucide-react'
import * as colors from 'tailwindcss/colors'

export function Header() {
  return (
    <div
      className={
        'bg-home-background min-h-[400px] flex items-center justify-start p-2'
      }
    >
      <div className={'max-w-grid-width m-auto w-full  p-2'}>
        <h1 className={'text-6xl font-josefin tracking-tighter'}>Bem Vindo</h1>
        <p className={'font-roboto'}>
          Diversos filmes, diversos filmes diversos
        </p>

        <SearchMovieInput />
      </div>
    </div>
  )
}
