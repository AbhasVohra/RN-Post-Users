/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import PostScreen from './src/component/post_list_screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PostDetailsScreen from './src/component/post_details_screen';
import { useSelector, Provider as StoreProvider} from 'react-redux'
import store from './src/redux/store'
import PrivatePosts from './src/component/private_posts_screen';
import UserScreen from './src/component/user_list_screen';
import {useFocusEffect} from '@react-navigation/native'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function PostNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Post Screen" component={PostScreen} options={{headerBackTitleVisible: false}}/>
        
        <Stack.Screen name="Post Details" component={PostDetailsScreen} options={{headerBackTitleVisible: false}}/>
    </Stack.Navigator>
  );
}


function PostTabNavigator() {
  const privateUsers = useSelector(state=>state);
  const [showTab, setShowTab] = React.useState(false);
  useFocusEffect(React.useCallback(() => {
      console.log('App: useFocusEffect');
      setShowTab(privateUsers != undefined && privateUsers.length > 0);
    }, [privateUsers]),
  );
  return (
    <Tab.Navigator initialRouteName={PostNavigator} >
    <Tab.Screen name="Post" component={PostNavigator} options={{headerShown: false,}}/>
    <Tab.Screen name="User Screen" component={UserScreen} />
    {showTab?<Tab.Screen name="Private Users" component={PrivatePosts} />:null}
    </Tab.Navigator>
  );
}

const App = () => {
  return (
  <StoreProvider store={store}>
  <NavigationContainer>
        <PostTabNavigator/>
  </NavigationContainer>
  </StoreProvider>
  );
}

export default App;
