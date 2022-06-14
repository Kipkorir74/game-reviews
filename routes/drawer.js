// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from '@react-navigation/native';
// import AboutStack from "./aboutStack";
// import HomeStack from "./homeStack";

// const rootDrawerNavigator =createDrawerNavigator();

// export default function MyDrawer() {
//     return (
//       <NavigationContainer.Navigator>
//         <rootDrawerNavigator.Screen name="Home" component={HomeStack} />
//         <rootDrawerNavigator.Screen name="About" component={AboutStack} />
//       </NavigationContainer.Navigator>
//     );
//   }



// const { Navigator, Screen } = createDrawerNavigator();

// export const RootDrawerNavigator = () => (
//   <Navigator initialRouteName='Home'>
//     <Screen
//       name='Home'
//       component={HomeStack}
//     />
//     <Screen
//       name='About'
//       component={AboutStack}
//     />
//   </Navigator>
// );

// export const AppNavigator = () => (
//   <NavigationContainer>
//     <RootDrawerNavigator />
//   </NavigationContainer>
// );

// export default AppNavigator;
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './homeStack'
import AboutStack from './aboutStack';
import AboutScreen from '../Screens/About'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}