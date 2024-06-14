import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components'

type Props = {
  title: string
}
export const Header = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}

const Container = styled(View)`
  background-color: #7a007a;
`

const Title = styled(Text)`
  color: #fff;
  font-size: 20px;
  padding: 16px;
`
