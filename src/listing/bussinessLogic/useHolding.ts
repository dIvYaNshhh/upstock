import React from 'react'
import { HoldingItem } from '../gateway/types'
import { fetchHoldiing } from '../gateway/fetchHolding'

export const useHolding = () => {
  const [holding, setHolding] = React.useState<HoldingItem[] | undefined>(
    undefined
  )
  const [status, setStatus] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    fetchHoldiing().then(result => {
      setHolding(result.holding)
      setStatus(result.status)
    })
  }, [])

  return {
    holding,
    status,
  }
}
