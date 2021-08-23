export interface TimeSplit {
  hours: string
  minutes: string
  seconds: string
}

export type Lead = {
  name: string,
  email: string,
  phone: string
}

type GenericObject = Record<string, any>
