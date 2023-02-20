import { ReactElement } from 'react'

export interface PageProps {
  readonly title?: string
}

export type Page = (props: PageProps) => ReactElement
