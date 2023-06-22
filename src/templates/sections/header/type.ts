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

export type Contacts = [
  | { type: 'email'; value: string }
  | { type: 'github'; value: string }
  | { type: 'phone'; value: string }
  | { type: 'linkedin'; value: string }
  | { type: 'leetcode'; value: string }
]
