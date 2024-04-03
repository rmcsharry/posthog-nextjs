import Link from 'next/link'
import PostHogClient from '../posthog'

export default function About() {

  const posthog = PostHogClient()

  posthog.capture({
    distinctId: 'test@posthog.com', // replace with a user's distinct ID
    event: 'server_side_visited_about_page'
  })

  return (
    <main>
      <h1>About</h1>
      <Link href="/">Go home</Link>
    </main>
  )
}