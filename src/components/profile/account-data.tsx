import { Card, CardContent, CardTitle } from '@/components/ui/card.tsx'
import { Separator } from '@radix-ui/react-dropdown-menu'
import { Badge } from '@/components/ui/badge.tsx'

import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'

export function AccountData() {
  const { profile } = useContext(GlobalContext)

  if (!profile) return <></>

  return (
    <Card className={'p-4 col-start-1 h-fit sticky top-8'}>
      <CardTitle className={'mb-4'}>{profile.name}</CardTitle>
      <Separator />
      <CardContent className={'p-0 space-y-4'}>
        <div className={'w-full flex gap-2 justify-start'}>
          <Badge>{profile.favoriteGenres[0].name}</Badge>
          <Badge>{profile.favoriteGenres[1].name}</Badge>
        </div>

        {/* <Button variant={'outline'}>Atualizar Perfil</Button> */}
      </CardContent>
    </Card>
  )
}
