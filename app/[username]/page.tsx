import { redirect } from 'next/navigation'

export default function UsernameShortcut({ params }: { params: { username: string } }) {
  redirect(`/u/${params.username}`)
}
