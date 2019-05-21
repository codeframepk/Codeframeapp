import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Home from "../Home";
import Sidebar from '../sidebar'
import React, { Component } from 'react';
import WebViewScreen from '../Home/Ruote'

const AppNavigator = createStackNavigator({
    Home:{

        screen: Home,
        WebViewScreen:WebViewScreen
    }
    },
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
        }
});
const MyDrawerNavigator = createDrawerNavigator(
   {
       MainApp: AppNavigator
   },
   {
    contentComponent: props => <Sidebar {...props} />
    }
)

export default createAppContainer(MyDrawerNavigator);
