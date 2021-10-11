import React from 'react'
import { Text, View} from 'react-native'
import { StyleSheet } from 'react-native';
import { CarItems } from './CarItems';


export const Header = ({addItem,suma,storeQuanty,foods,setStoreQuanty}) => {
    return (
        <View style={styles.container}>
            <Text>Food Market</Text>
            <View style={styles.carItem}>
                <CarItems storeQuanty={storeQuanty} foods={foods} suma={suma} addItem={addItem} setStoreQuanty={setStoreQuanty}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'row'
    },
    carItem:{
        top:40,
        left:220,
    }
  });