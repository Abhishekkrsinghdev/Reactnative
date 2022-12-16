
import React from 'react';
import NewNavBar from './components/NewNavBar'
import Body from './components/HomePage/Body'
// import Icon from 'react-native-vector-icons/FontAwesome';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  ImageBackground,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { faBasketShopping, faHomeUser, faSearch, faUserAlt, faUserAltSlash, faUserCircle, faUserLarge } from '@fortawesome/free-solid-svg-icons';

import { NavigationContainer } from '@react-navigation/native';
import MenuCategory from './components/MenuCategoryPage/MenuCategory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Card from './components/Card'

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar translucent backgroundColor='transparent' />

      {/* <Body/> */}
      {/* <MenuCategory/> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: 'transparent' },
            cardOverlayEnabled: true,
            cardStyleInterpolator: ({ current: { progress } }) => ({
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1],
                }),
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                }),
              },
            }),
          }}
        >
          <Stack.Screen name="Home" component={Body} />
          <Stack.Screen name="MenuCategory" component={MenuCategory} />
        </Stack.Navigator>
      </NavigationContainer>


    </SafeAreaView>
    // <Card/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1
  },
});

export default App;
