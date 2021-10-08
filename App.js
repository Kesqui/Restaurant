import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CarItems } from './components/CarItems';
import { FoodsList } from './components/FoodsList';
import { Header } from './components/Header';

export default function App() {
  const foods={
    pinneapple:{
      fname:'Pineapple',
      ref:'1p',
      price:10000
    },
    apple:{
      fname:'Apple',
      ref:'2a',
      price:7000
    },
    pear:{
      fname:'Pear',
      ref:'3pe',
      price:5000
    },
  }
  const [addItem,setAdditem]=useState(0)

  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Header addItem={addItem}/>
      </View>
      <View>
        <FoodsList addItem={addItem} setAdditem={setAdditem}/>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex:9,  
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'10vh',
    heigth:'40vw'
  },
  headerStyle:{
    flexDirection:'row',
    border:'1px solid gray',
    fontSize:20,
    marginBottom:20,
    borderRadius:'10px',
    width:'40vw',
    height:'10vw'

    }
});
