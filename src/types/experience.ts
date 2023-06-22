export interface ExperienceProps {
  organisationName: string
  position: string
  contribution: string[]
  duration?: Duration
}

export interface Duration {
  dateRange: DateRange
  location?: string
}

export interface DateRange {
  start: string
  end: string
}
