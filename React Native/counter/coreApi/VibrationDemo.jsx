import {Button, Vibration, View} from "react-native";

/**
 * 手机振动Api
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function VibrationDemo() {
    return (
        <View>
            <Button title={'点我'} onPress={() => {
                // Vibration.vibrate()
                // Vibration.vibrate(1000)

                // android
                // [停的时间，震动的时间， 停的时间，震动的时间]
                // Vibration.vibrate([100, 500, 200, 500])

                // ios
                // ios 的振动时间一直是400ms，数组中都是停留的时间
                // Vibration.vibrate([100, 200, 300, 400])

                // Vibration.vibrate([100, 200, 300], true)
            }} />
        </View>
    )
}
