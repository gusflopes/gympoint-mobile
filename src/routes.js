import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '~/assets/logo.png';

import SignIn from '~./pages/SignIn';
import SignUp from '~/pages/SignUp';
import HelpOrder from '~/pages/HelpOrder';
import CheckIn from '~/pages/CheckIn';

import NewHelpOrder from '~/pages/HelpOrder/NewHelpOrder';
import DetailsHelpOrder from '~/pages/HelpOrder/DetailsHelpOrder';

export default createAppContainer(
  createSwitchNavigator(
    {
      Sign: createSwitchNavigator({
        SignIn,
        SignUp,
      }),
      App: createBottomTabNavigator(
        {
          CheckIn,
          HelpOrder: {
            screen: createStackNavigator(
              {
                HelpOrder,
                NewHelpOrder,
                DetailsHelpOrder,
              },
              {
                defaultNavigationOptions: {
                  headerTitle: 'GYMPOINT',
                  headerTransparent: false,
                  headerTintColor: '#EE4E62',
                  headerLayoutPreset: 'center',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              }
            ),
          },
        },
        {
          resetOnBlur: true,
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255,255,255,0.6)',
            style: {
              backgroundColor: '#8d41a8',
            },
          },
        }
      ),
    },
    {
      initialRouteName: 'App',
    }
  )
);
