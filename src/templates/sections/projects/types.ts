export type Project = {
  organisationName: string
  projectName: string
  tools: string[]
  contribution: string[]
  duration: Duration
}

export interface Duration {
  dateRange: DateRange
  location?: string
}

export interface DateRange {
  start: string
  end: string
}
