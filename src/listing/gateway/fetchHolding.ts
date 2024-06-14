import { HoldingItem, HoldingResponse } from './types'

const holdingUrl = 'https://35dee773a9ec441e9f38d5fc249406ce.api.mockbin.io/'

export const fetchHoldiing = async (): Promise<HoldingResult> => {
  try {
    const response = await fetch(holdingUrl)
    if (response.ok || response.status == 200) {
      const holdingResponse: HoldingResponse = await response.json()
      return {
        holding: holdingResponse.data.userHolding,
        status: true,
      }
    } else {
      return {
        holding: undefined,
        status: false,
      }
    }
  } catch (error) {
    console.log(error)
    return {
      holding: undefined,
      status: false,
    }
  }
}

export type HoldingResult = {
  holding: HoldingItem[] | undefined
  status: boolean | undefined
}
