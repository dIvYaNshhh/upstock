import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { ListingScreen } from '../listing/ui'

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ListingScreen />
    </SafeAreaView>
  )
}

export default App
