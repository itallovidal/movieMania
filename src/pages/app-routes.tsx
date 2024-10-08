import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignIn } from '@/pages/signIn.tsx'
import { AuthLayout } from '@/pages/layouts/auth-layout.tsx'
import { SignUp } from '@/pages/signUp.tsx'
import { Home } from '@/pages/home.tsx'
import { Profile } from '@/pages/profile.tsx'
import { AppLayout } from '@/pages/layouts/app-layout.tsx'
import { GlobalContextProvider } from '@/contexts/global-context.tsx'
import { GenreCatalogue } from '@/pages/genre-catalogue.tsx'
import { MovieContextProvider } from '@/contexts/movie-context.tsx'
import { Search } from '@/pages/search.tsx'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <MovieContextProvider>
          <Routes>
            <Route path={'/'} element={<AppLayout />}>
              <Route path={'/'} element={<Home />} />
              <Route path={'/movie/:id'} element={<GenreCatalogue />} />
              <Route path={'/profile'} element={<Profile />} />
              <Route path={'/search'} element={<Search />} />
            </Route>

            <Route path={'/'} element={<AuthLayout />}>
              <Route path={'/sign-in'} element={<SignIn />} />
              <Route path={'/sign-up'} element={<SignUp />} />
            </Route>
          </Routes>
        </MovieContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}
