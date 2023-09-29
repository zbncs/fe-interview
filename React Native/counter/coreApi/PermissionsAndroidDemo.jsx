import {Button, PermissionsAndroid, View} from 'react-native'
export default function PermissionsAndroidDemo() {
    return (
        <View>
            <Button title={'点我'} onPress={() => {
                const ST = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                PermissionsAndroid.check(ST).then(res => {
                    console.log(111, res)
                    PermissionsAndroid.request(ST).then(ret => {
                        console.log(ret)
                    })
                })
            }} />
        </View>
    )
}
