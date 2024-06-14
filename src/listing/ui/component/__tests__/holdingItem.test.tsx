import React from 'react'
import { render, RenderAPI } from 'react-native-testing-library'
import { HoldingItem } from 'src/listing/gateway/types'
import { HoldingListItem } from 'src/listing/ui/component/holdingItem'

const item: HoldingItem = {
  avgPrice: 100,
  close: 100,
  ltp: 100,

  symbol: 'AAPL',
  quantity: 100,
}
describe('Component - HoldingListItem', () => {
  let instance: RenderAPI

  beforeEach(() => {
    instance = render(<HoldingListItem key={0} item={item} />)
  })

  it('matches the snapshot', () => {
    expect(instance.toJSON()).toMatchSnapshot()
  })
})
