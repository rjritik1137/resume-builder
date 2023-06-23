export interface Section {
  organisationName: string
  contribution: string[]
  location?: Location
  period?: Period
}

export interface Location {
  address: string
}

export interface Period {
  start: string
  end: string
}
