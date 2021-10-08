import React, { useState } from 'react'
import { Text, View } from 'react-native'

export const CarItems = ({foods}) => {
    const handleList=Object.keys(foods).map((key)=>({key,Ref:foods[key].ref,Product:foods[key].name,price:foods[key].price}))
    return (
        <View>
            <Text>Car:{}</Text>
        </View>
    )
}
