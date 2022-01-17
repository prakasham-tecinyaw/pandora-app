import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { FontAwesome,MaterialIcons  } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import HomeScreen from '../screens/HomeScreen';
import NotificationsScreen from '../screens/NotificationScreen'
import ClassScreen from '../screens/ClassScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
    </View>
  );
}

const HomeStack = createNativeStackNavigator();
const ClassStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <HomeStack.Screen name="Notification" component={NotificationsScreen} />
    </HomeStack.Navigator>
  );
}

function ClassStackScreen() {
  return (
    <ClassStack.Navigator >
      <ClassStack.Screen name="Class" component={ClassScreen} options={{ headerShown: false }} />
      <ClassStack.Screen name="Details" component={DetailsScreen} />
    </ClassStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator  
    //screenOptions={{ headerShown: true }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
      <ProfileStack.Screen name="Details" component={DetailsScreen} />
    </ProfileStack.Navigator>
  );
}

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator  >
      <SettingsStack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false }}/>
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
            name="HomeTab" 
            component={HomeStackScreen} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ focused,color }) => <TabBarIcon name="home" color={focused?"#38a3a5":"#22577a"} />,
            }}
        />
        <Tab.Screen 
            name="ClassTab" 
            component={ClassStackScreen}
            options={{
              tabBarLabel: 'Class',
              tabBarIcon: ({ focused,color }) => <TabBarIcon name="book"  color={focused?"#38a3a5":"#22577a"} />,
            }} 
        />
        <Tab.Screen 
              name="ProfileTab" 
              component={ProfileStackScreen}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ focused,color }) => <TabBarIcon name="user-circle"  color={focused?"#38a3a5":"#22577a"} />,
              }} 
        />
        <Tab.Screen 
              name="SettingTab" 
              component={SettingsStackScreen}
              options={{
                tabBarLabel: 'Setting',
                tabBarIcon: ({ focused,color }) => <TabBarIcon name="cogs"  color={focused?"#38a3a5":"#22577a"} />,
              }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
