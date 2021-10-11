import React, { useReducer, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { AddItem } from './AddItem';
import { CarItems } from './CarItems';

export const FoodsList = ({foods,setAdditem,suma,setSuma,storeQuanty,setStoreQuanty}) => {
    
    const [carList,setCarList]=useState([])
      const handleSubmit= (item, quantity) => ()=>{
          console.log('quantity', quantity);
        setStoreQuanty((prev)=>([
            ...prev, 
            quantity]))
        const newObject={key: item.key ,ref:item.ref,product:item.fname,price:item.price};
        const carFilter = carList.filter(itemCar => itemCar.key !== newObject.key);
        carFilter.push(newObject)
        // console.log(carFilter);
        setCarList(carFilter)
        
    }   

    return (
        <View>
            {Object.keys(foods).map((item,i) => {
                const j = foods[item]
                return (
                <View style={styles.fruitList}>
                    <View >
                        <Text key={j.fname}>{j.fname}</Text>
                        <Text key={j.price}>$: {j.price}</Text>
                    </View>
                    <View style={styles.buttonStyle}>
                       <AddItem handleSubmit={handleSubmit} item={{...j, key: i}} />
                    </View>
                </View>
                
            )})}
                <View>
                    <Text>Historyyyy</Text>
                    <CarItems fillItems={carList}/>
                </View>
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
        width: '10%'
    }
})
