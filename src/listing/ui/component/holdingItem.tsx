import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components'
import Collapsible from 'react-native-collapsible'
import { HoldingItem } from 'src/listing/gateway/types'
import { usePortfolioData } from 'src/listing/bussinessLogic/usePortfolioData'

interface Props {
  item: HoldingItem
}
const currencySymbol = '₹'
export const HoldingListItem = React.memo(({ item }: Props) => {
  const { currentValue, investmentValue, pnl, todaysPnl } = usePortfolioData({
    item,
  })

  const [collapsed, setCollapsed] = useState(true)

  const toggleExpanded = () => {
    setCollapsed(!collapsed)
  }

  return (
    <View>
      <Container onPress={toggleExpanded}>
        <Column flexEnd={false}>
          <Symbol>{item.symbol}</Symbol>
          <TextView>{item.quantity}</TextView>
        </Column>

        <Column flexEnd={true}>
          <TextView>
            {'LTP: '}
            <MildBoldText>{`${currencySymbol} ${item.ltp}`}</MildBoldText>
          </TextView>
          <TextView>
            {'P/L: '}
            <MildBoldText>{`${currencySymbol} ${todaysPnl.toFixed(
              2
            )}`}</MildBoldText>
          </TextView>
        </Column>
      </Container>
      <Collapsible collapsed={collapsed}>
        <ExpandedSection>
          <Row>
            <MildBoldText>{'Current Value: '}</MildBoldText>
            <TextView>{`${currencySymbol} ${currentValue.toFixed(
              2
            )}`}</TextView>
          </Row>
          <Row>
            <MildBoldText>{'Total Investment: '}</MildBoldText>
            <TextView>{`${currencySymbol} ${investmentValue.toFixed(
              2
            )}`}</TextView>
          </Row>
          <Row>
            <MildBoldText>{`Today's Profit & Loss: `}</MildBoldText>
            <TextView>{`${currencySymbol} ${pnl.toFixed(2)}`}</TextView>
          </Row>
          <Space />
          <Row>
            <MildBoldText>{'Profit & Loss: '}</MildBoldText>
            <TextView>{`${currencySymbol} ${pnl.toFixed(2)}`}</TextView>
          </Row>
        </ExpandedSection>
      </Collapsible>
    </View>
  )
})

const Container = styled(TouchableOpacity)`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Column = styled(View)<{
  flexEnd: boolean
}>`
  flex: 1;
  flex-direction: column;
  align-items: ${({ flexEnd }) => (flexEnd ? 'flex-end' : 'flex-start')};
`

const Symbol = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  padding: 2px;
`
const TextView = styled(Text)`
  font-size: 16px;
  padding: 2px;
`

const MildBoldText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
  padding: 2px;
`
const ExpandedSection = styled(View)`
  padding: 16px;
`
const Row = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Space = styled(View)`
  height: 16px;
`
