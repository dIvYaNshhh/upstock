import styled from 'styled-components'
import React, { useCallback, useEffect } from 'react'
import { View, VirtualizedList, ActivityIndicator } from 'react-native'
import { useHolding } from '../bussinessLogic/useHolding'
import { HoldingListItem } from 'src/listing/ui/component/holdingItem'
import { HoldingItem } from 'src/listing/gateway/types'
import { AlertDialog } from 'src/common/alert'
import { Header } from './component/header'

type ListItemProps = {
  item: HoldingItem
  index: number
}

export const ListingScreen = () => {
  const { holding, status } = useHolding()

  useEffect(() => {
    if (status === false) {
      AlertDialog({ message: 'Something went wrong', title: 'Error' })
    }
  }, [status])

  const renderItem = useCallback(
    ({ item }: ListItemProps) => <HoldingListItem item={item} />,
    []
  )
  const renderList = useCallback(() => {
    if (status) {
      return (
        <VirtualizedList
          data={holding}
          initialNumToRender={10}
          renderItem={renderItem}
          keyExtractor={item => item.symbol}
          getItemCount={data => data.length}
          getItem={(data, index) => data[index]}
          maxToRenderPerBatch={20}
          ItemSeparatorComponent={ItemSeparator}
          windowSize={10}
        />
      )
    }
  }, [status])

  return (
    <Container>
      <Header title={'Upstox Holding'} />
      {status == undefined && <ActivityIndicator />}
      {renderList()}
    </Container>
  )
}

const Container = styled(View)``

const ItemSeparator = styled(View)`
  background-color: #cccccc;
  height: 1px;
  margin-left: 16px;
  margin-right: 16px;
`
