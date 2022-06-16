import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import About from '../Screens/About';
import ReviewDetails from '../Screens/reviewDetails'
import { StyleSheet, Image, View } from 'react-native';
// import ActionBarImage from '../shared/ActionBar.Js';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.logo}>
        <Image style={{width:55, height: 55}} source = { require('../assets/kizangila.PNG')}/>
      </View>
      <Drawer.Navigator initialRouteName="Home" style={styles.bar}>
      
      
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name='Review Details' component={ReviewDetails} />
      </Drawer.Navigator>
      
    </NavigationContainer>
    
  );
}
const styles=StyleSheet.create({
  logo:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop:15,
    marginBottom:0,
        
  },
  bar:{
    justifyContent:'center'
  }
})