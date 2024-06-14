export type HoldingItem = {
  symbol: string
  quantity: number
  ltp: number
  avgPrice: number
  close: number
}

export type Data = {
  userHolding: HoldingItem[]
}

export type HoldingResponse = {
  data: Data
}
