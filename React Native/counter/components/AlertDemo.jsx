import {
    Alert,
    View,
    StyleSheet,
    Button
} from 'react-native'
export default function AlertDemo() {
    return (
        <View>
            <Button title='点我' onPress={() => {
                // alert(123)

                // const buttons = [
                //     {
                //         text: '取消',
                //         onPress: () => console.log('Cancel Pressed'),
                //         style: 'cancel',
                //     },
                //     {text: '确定', onPress: () => console.log('OK Pressed')},
                // ]
                // Alert.alert('标题', 'message', buttons)

                console.info('info')
                console.error('error')
                console.debug('debug')
            }} />
        </View>
    )
}
