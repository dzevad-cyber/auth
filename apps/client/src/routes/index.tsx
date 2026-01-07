import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      <Header />
    </div>
  )
}
