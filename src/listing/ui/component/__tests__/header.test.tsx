import React from 'react'
import { render, RenderAPI } from 'react-native-testing-library'
import { Header } from 'src/listing/ui/component/header'

describe('Component - Header', () => {
  let instance: RenderAPI

  beforeEach(() => {
    instance = render(<Header title="Upstox Holding" />)
  })

  it('matches the snapshot', () => {
    expect(instance.toJSON()).toMatchSnapshot()
  })
})
