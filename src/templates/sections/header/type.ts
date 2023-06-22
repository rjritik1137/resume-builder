export interface HeaderProps {
  data: HeaderData
}
export interface HeaderData {
  firstName: string
  middleName: string
  lastName: string
  address: string
  contacts: Contacts
}

export type Contacts = [Contact]
export type Contact = {
  icon?: string
  value: string
  link?: string
  type: string
}
