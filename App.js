import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home.js';
import Navigator from './routes/drawer';



export default function App() {

    return (
     
      <Navigator/>

    );
  }
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    
  },
});
