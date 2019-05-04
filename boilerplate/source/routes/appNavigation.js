import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'
// import Images from '../Themes/Images'
// import { Image } from 'react-native'

// User check
import AuthLoadingScreen from '../screens/auth-loading'

// not Auth routes
import Home from '../screens/home'

// Auth routes
// import Give from '../Screens/give'
// import Unplug from '../Screens/unplug'
// import Connect from '../Screens/connect'

// sub auth routes for Connect page
// import UserDetails from '../Screens/user-details'
// import UserProfile from '../Screens/user-profile'
// import ProfileSettings from '../Screens/profile-settings'
// import SetUpPayment from '../Screens/set-up-payment'
// import CreateGroup from '../Screens/create-group'
// import CreateChallenge from '../Screens/create-challenge'

// Manifest of possible screens

// the declaration of routes  need to be dynamic this is temporary for now
const ConnectScreen = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
    headerMode: 'none'
  }
)
const TabNav = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      gesturesEnabled: false
    },
    headerMode: 'none'
  }
)

// const TabNav = createBottomTabNavigator(
//   {
//     Connect: {
//       screen: ConnectScreen
//     },
//     Unplug,
//     Give
//   },
//   {
//     // Default config for all screens
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: props => {
//         const { focused } = props
//         const { routeName } = navigation.state
//         // let imageSrc = Images.giveIcon
//         // if (routeName === 'Connect') {
//         //   imageSrc = focused ? Images.connectIcon : Images.connectIconInactive
//         // } else if (routeName === 'Unplug') {
//         //   imageSrc = focused ? Images.unplugIcon : Images.unplugIconInactive
//         // } else if (routeName === 'Give') {
//         //   imageSrc = focused ? Images.giveIcon : Images.giveIconInactive
//         // }
//
//         return (
//           <Image source={src}  style={{ width: 25, height: 25, justifyContent: 'center' }} />
//         )
//       }
//     }),
//     initialRouteName: 'Unplug',
//     tabBarOptions: {
//       activeTintColor: '#8a23bd',
//       inactiveTintColor: 'gray',
//       labelStyle: {
//         fontSize: 12
//       },
//       style: {
//         backgroundColor: 'transparent'
//       }
//     }
//   }
// )

const UnAuthenticatedRoute = createStackNavigator(
  {
    Home: Home
  },
  {
    headerMode: 'none',
    initialRouteName: 'LandingPageSliderPage',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
)

const AppRootRoute = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    UnAuthenticatedRoute: UnAuthenticatedRoute,
    AuthenticatedRoute: TabNav
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthLoading',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
)

export default createAppContainer(AppRootRoute)
