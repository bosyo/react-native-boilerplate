import React, { Component } from 'react'
import { View } from 'react-native'
import AppNavigation from '@routes/appNavigation'


class RootContainer extends Component {
  render () {
    return (
      <View style={{flex:1}}>
        <AppNavigation />
      </View>
    )
  }
}

export default  RootContainer
