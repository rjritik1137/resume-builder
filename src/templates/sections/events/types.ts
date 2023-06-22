export interface Event {
  organisationName: string
  eventName: string
  contribution: string[]
  location: string
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
