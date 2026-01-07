import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return <header className="">home page</header>
}
