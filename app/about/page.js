import Link from 'next/link'
import PostHogClient from '../posthog'

export default async function About() {

  const flags = await getData();

  const posthog = PostHogClient()

  posthog.capture({
    distinctId: 'test@posthog.com', // replace with a user's distinct ID
    event: 'server_side_visited_about_page'
  })

  return (
    <main>
      <h1>About</h1>
      <Link href="/">Go home</Link>
      { flags['main-cta'] &&
        <Link href="http://posthog.com/">Go to PostHog</Link>
      }
    </main>
  )
}

async function getData() {
  const posthog = PostHogClient()
  const flags = await posthog.getAllFlags(
    'test@posthog.com' // replace with a user's distinct ID
  );
  return flags
}