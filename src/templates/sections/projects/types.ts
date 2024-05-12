export type Project = {
  heading: string
  subheading: string
  tools: string[]
  contribution: string[]
  period: Period
  location?: Location
}

export interface Location {
  address?: string
}

export interface Period {
  start: string
  end: string
}
