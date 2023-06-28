import { ReactComponent as Loading } from './loading-pc.svg'
import { ReactComponent as Project } from './project.svg'
import { ReactComponent as Arrow } from './arrow.svg'
import { ReactComponent as Attach } from './attach.svg'
import { ReactComponent as Pagination } from './paginatioArrow.svg'
import { ReactComponent as Success } from './success.svg'
import { ReactComponent as Error } from './error.svg'
import { ReactComponent as ChevronDown } from './chevronDown.svg'

export const content = {
  loading: Loading,
  project: Project,
  arrow: Arrow,
  attach: Attach,
  paginatioArrow: Pagination,
  success: Success,
  error: Error,
  chevronDown: ChevronDown
}

export type IAvailableIcons = keyof typeof content
