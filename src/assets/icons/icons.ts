import { ReactComponent as Loading } from './loading-pc.svg'
import { ReactComponent as Project } from './project.svg'

export const content = {
  loading: Loading,
  project: Project
}

export type IAvailableIcons = keyof typeof content
