import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import Home from '@screens/home'

const AppNavigator = createStackNavigator({
    Home
})

export default createAppContainer(AppNavigator)
