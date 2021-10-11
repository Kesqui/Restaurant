import React, { useReducer, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { CarItems } from './CarItems';

export const AddItem = ({handleSubmit, item}) => {

    const [state, setState] = useState(0)
      const handleChange=(eventAdd)=>{
          console.log(eventAdd);
          setState(eventAdd)
      }

    return (
        <>
                        <TextInput onChangeText={handleChange} value={state} keyboardType='numeric' name={item.ref}/>
                        <Button title='Add' onPress={handleSubmit(item, state)}/>
                    
        </>
    )
}
