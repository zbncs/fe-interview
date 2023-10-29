import React from "react";
import {View, StyleSheet, Text} from 'react-native'

export default function Badge(props) {

    return (
        <View style={styles.root}>
            {props.children}
            <View style={styles.txt}>
                <Text style={{fontSize: 10}}>{611111}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        // position: 'relative',
        // alignSelf: "flex-start",
        // marginRight: 10,
        // display: 'flex',
        flexDirection: 'row', // 解决子元素宽度超不过父元素的问题
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    txt: {
        backgroundColor: 'red',
        borderRadius: 50,
        paddingRight: 6,
        paddingLeft: 6,
        height: 16,
        position: "absolute",
        top: 0,
        right: 0,
        elevation: 999
    }
})


