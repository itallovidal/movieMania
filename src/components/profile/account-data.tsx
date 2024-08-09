import { Card, CardContent, CardTitle } from '@/components/ui/card.tsx'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Badge } from '@/components/ui/badge.tsx'
import { useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/user/get-profile.ts'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function AccountData() {
  const { userToken } = useContext(GlobalContext)
  const { data: user } = useQuery({
    queryKey: ['profile', userToken],
    queryFn: () => {
      if (userToken) return getProfile(userToken)
    },
    enabled: !!userToken,
  })

  if (!user) return <></>

  return (
    <Card className={'p-4 col-start-1 h-fit sticky top-8'}>
      <CardTitle className={'mb-4'}>{user.profile.name}</CardTitle>
      <Separator />
      <CardContent className={'p-0 space-y-4'}>
        <div className={'w-full flex gap-2 justify-start'}>
          <Badge>{user.profile.favoriteGenres[0]}</Badge>
          <Badge>{user.profile.favoriteGenres[1]}</Badge>
        </div>

        {/* <Button variant={'outline'}>Atualizar Perfil</Button> */}
      </CardContent>
    </Card>
  )
}
