import React from 'react'
import { View, Text, Button } from 'react-native'

export default function Details({navigation}) {
    return (
        <View>
            <Text>hello</Text>
            <Button title='press'  onPress={()=> navigation.navigate('Home')}></Button>
        </View>
    )
}
