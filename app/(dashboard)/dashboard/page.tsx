import { auth } from '@/lib/auth'
import DashboardClient from './view'

export default async function DashboardPage() {
  const session = await auth()
  return <DashboardClient sessionUser={session?.user ?? null} />
}
