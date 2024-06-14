import { useCallback } from 'react'
import { HoldingItem } from '../gateway/types'
import { HoldingListItem } from './component/holdingItem'
import { ActivityIndicator, View, VirtualizedList } from 'react-native'
import styled from 'styled-components'
import React from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'

type ListItemProps = {
  item: HoldingItem
  index: number
}

type PresenterProps = {
  holding: HoldingItem[] | undefined
  status: boolean | undefined
}
export const Presenter = ({ holding, status }: PresenterProps) => {
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
