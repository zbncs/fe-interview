import {
    Platform,
    View,
    Button,
    StyleSheet
} from 'react-native'
export default function PlatformDemo() {
    return (
        <View style={styles.root}>
            <Button title='点我' onPress={
                () => {
                    // console.log(Platform.OS); // android or ios
                    // console.log(Platform.isTV);
                    // console.log(Platform.isPad); // 安卓上是undefined
                    // console.log(Platform.Version);
                    // console.log(Platform.constants);

                    const style = Platform.select({
                        android: {
                            left: 0
                        },
                        ios: {
                            right: 0
                        },
                        default: {
                            left: 1,
                            right: 1
                        }
                    })

                    console.log(style)
                }
            } />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: '100%',
        height: '100%',
        ...Platform.select({
            android: {
                backgroundColor: 'skyblue'
            },
            ios: {
                backgroundColor: 'yellow'
            },
            default: {
                backgroundColor: 'blue'
            }
        })
    }
})
