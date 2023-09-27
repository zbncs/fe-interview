import {useEffect, useState} from "react";
import {View, StyleSheet, Text} from "react-native";


export default function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count+1)
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, []);
    return (
        <View style={styles.root}>
            <Text>{count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        color: 'blue',
        fontWeight: 700
    }
})
