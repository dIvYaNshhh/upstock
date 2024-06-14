import React, { useMemo } from 'react'
import { HoldingItem } from '../gateway/types'
import { fetchHoldiing } from '../gateway/fetchHolding'

interface Props {
  item: HoldingItem
}
export const usePortfolioData = ({ item }: Props) => {
  const currentValue = useMemo(() => item.ltp * item.quantity, [item])
  const investmentValue = useMemo(() => item.avgPrice * item.quantity, [])
  const pnl = useMemo(
    () => currentValue - investmentValue,
    [currentValue, investmentValue]
  )
  const todaysPnl = useMemo(() => (item.close - item.ltp) * item.quantity, [])

  return {
    currentValue,
    investmentValue,
    pnl,
    todaysPnl,
  }
}
