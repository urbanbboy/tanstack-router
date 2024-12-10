import { createLazyFileRoute } from '@tanstack/react-router'
import { Main } from '../pages/main'

export const Route = createLazyFileRoute('/')({
  component: () => (
    <Main />
  )
})