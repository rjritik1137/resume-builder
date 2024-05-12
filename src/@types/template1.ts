export interface Section {
  heading: string
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
