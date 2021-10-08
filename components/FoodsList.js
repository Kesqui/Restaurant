import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export const FoodsList = ({addItem,setAdditem}) => {
    const [carList,setCarList]=useState('')
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
      const handleAdd=(e)=>{
        setAdditem(addItem+=1)
        const handleList=Object.keys(foods).map((key)=>({key,Ref:foods[key].ref,Product:foods[key].name,price:foods[key].price}))
          setCarList(Object.values(handleList))
          console.log(handleList)
      }
      const handleChange=(e)=>{
          e.preventDefault();
          
      }
      
          

    return (
        <View>
            {Object.keys(foods).map(i => ({...foods[i],key:i})).map(j => (
                <View style={styles.fruitList}>
                    <View >
                        <Text key={j.fname}>{j.fname}</Text>
                        <Text key={j.price}>$: {j.price}</Text>
                    </View>
                    <View style={styles.buttonStyle}>
                        <TextInput type='number' name={j.key} value={foods[j.key]}/>
                        <Button title='Add' onPress={handleRemove}/>
                    </View>
                    <View>
                        <Text>{carList}</Text>
                    </View>
                </View>
                
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    fruitList:{
        width:'40vw',
        flexDirection:'row',
        padding:10,
        border:'1px solid black',
        borderRadius:'10px',
        marginBottom:10,

    },
    buttonStyle:{
        left: '80%',
    }
})
