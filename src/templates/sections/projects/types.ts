export type Project = {
  organisationName: string
  projectName: string
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
