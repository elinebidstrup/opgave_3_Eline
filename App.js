import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import ChooseTypeScreen from "./components/orderNavigation/ChooseTypeScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { Ionicons } from '@expo/vector-icons';
import CustomizationScreen from "./components/orderNavigation/CustomizationScreen";



const TabNavigator = createBottomTabNavigator(
    {
      //Tilføjer routes
      Home: {
        //Viewet som loades
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "Hjem",
          tabBarIcon: ({ tintColor }) => (
              <Ionicons name="ios-home" size={30} color={tintColor}/>
          )
        },
      },
        NewOrderView: {
            screen: ChooseTypeScreen,
            navigationOptions: {
                tabBarLabel: "Tilføj",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-add" size={30} color={tintColor}/>
                )
            },
        },
        Customization: {
            screen: CustomizationScreen,
            navigationOptions: {
                tabBarLabel: "Customization",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-barcode" size={30} color={tintColor}/>
                )
            },
        },
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: "Profil",
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons name="ios-person" size={30} color={tintColor}/>
                )
            },
        },
    },
)

export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 50,
    },
    tabIcon: {
        width: 32,
        height: 32,
        tintColor: 'red'
    },
});
