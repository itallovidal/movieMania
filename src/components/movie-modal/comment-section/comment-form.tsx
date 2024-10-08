import { Textarea } from '@/components/ui/textarea.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { postComment } from '@/api/movie/post-comment.ts'
import { useContext } from 'react'
import { GlobalContext } from '@/contexts/global-context.tsx'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/lib/reactQuery.ts'

const commentSchema = z.object({
  text: z.string().min(5, {
    message:
      'Ops, o tamanho necessário para fazer um comentário são 3 caracteres.',
  }),
})

export interface ICommentSchema extends z.infer<typeof commentSchema> {}

export function CommentForm({ movieId }: { movieId: number }) {
  const { userToken } = useContext(GlobalContext)
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ICommentSchema>({
    resolver: zodResolver(commentSchema),
  })

  const { mutateAsync: postCommentMutation, isPending } = useMutation({
    mutationFn: postComment,
    onSuccess: (data) => {
      const cached = queryClient.getQueryData<IGetMovieCommentsResponse>([
        'comments',
      ])

      if (cached) {
        const newComments: IComment[] = [
          ...cached.comments,
          data.commentCreated,
        ]

        queryClient.setQueryData(['comments'], {
          comments: newComments,
        })
      }
    },
  })

  async function handlePostComment(data: ICommentSchema) {
    try {
      if (userToken) {
        await postCommentMutation({
          token: userToken,
          movieId,
          comment: data.text,
        })
        toast.success('Comentário postado com sucesso!')
        reset()
      }
    } catch (e) {
      console.log(e)
      toast.error('Ops, não foi possível commentar.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handlePostComment)}
      className={'text-white lg:px-24 my-12'}
    >
      <Textarea
        {...register('text')}
        placeholder="Digite seu comentário.."
        className={'text-darkBlue mb-4'}
        name={'text'}
        disabled={isPending}
        maxLength={150}
      />
      {errors.text?.message && (
        <span className={'text-rose-500'}>{errors.text?.message}</span>
      )}
      <div className={'flex justify-between mt-4'}>
        <span className={'text-muted-foreground'}>
          Ajude a tornar a área de comentários segura. Seja gentil.
        </span>
        <Button disabled={isPending} type={'submit'} variant={'ghost'}>
          Enviar
        </Button>
      </div>
    </form>
  )
}
