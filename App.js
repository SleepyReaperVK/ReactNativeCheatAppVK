import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import store from "./src/store/store";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";
import DataScreen from "./screens/DataScreen";
import MapScreen from "./screens/MapScreen";
import StoryCameraScreen from "./src/components/StoryCameraScreen";
import ProfileCameraScreen from "./src/components/ProfileCameraScreen";
import CameraOn from "./src/components/CameraOn";
import TestGroundNavigator from './screens/navigation/TestGroundNavigator/TestGroundNavigator'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const FormStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FromStack" component={FormScreen} />
      <Stack.Screen name="MapForm" component={MapScreen} />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="MapHome" component={MapScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={ProfileCameraScreen}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Form"
            component={FormStack}
            options={{
              headerShown: false,
              scrollEnabled: true,
              tabBarLabel: "Add",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="add-circle" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Data"
            component={DataScreen}
            options={{
              tabBarLabel: "Data",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="folder-open-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="TestGround"
            component={TestGroundNavigator}
            options={{
              tabBarLabel: "TestGra",
              tabBarIcon: ({ color, size }) => (
                <Ionicons
                  name="barbell-outline"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
