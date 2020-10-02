import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import ProfileScreen from "./ProfileScreen";
import ChooseTypeScreen from "./orderNavigation/ChooseTypeScreen";
import MeasurementScreen from "./orderNavigation/MeasurementScreen";

const FurnitureStack = createStackNavigator({
    //TYPE: { screen: ChooseTypeScreen},
    measurement: {screen: MeasurementScreen}

},
    {
        initialRouteName: 'TYPE',
        navigationOptions: {
            title: 'type'
        }
    });

export default FurnitureStack
