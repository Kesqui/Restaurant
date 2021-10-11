import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-web'

export const CarItems = ({fillItems}) => {
    console.log(fillItems, 'cart');
    return(
        fillItems && fillItems.length > 0 ? fillItems.map(item=>(
            <Text>{`${item.key} ${item.product} ${item.ref} ${item.price}` }</Text>
        )) : null
    )
}
    


