import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Counter from './components/counter'
import TextDemo from "./components/TextDemo";
import AlertDemo from "./components/AlertDemo";
import PlatformDemo from "./coreApi/PlatformDemo";
import PermissionsAndroidDemo from "./coreApi/PermissionsAndroidDemo";
import VibrationDemo from "./coreApi/VibrationDemo";
import TransformDemo from "./coreApi/TransformDemo";
import KeyboardDemo from "./coreApi/KeyboardDemo";


// 动画
import Anim1 from "./Animation/Anim1";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" translucent={false} />
            <View style={styles.container}>
                {/*<TextDemo/>*/}
                {/*<AlertDemo />*/}
                {/*<PlatformDemo />*/}
                {/*<PermissionsAndroidDemo />*/}
                {/*<VibrationDemo />*/}
                {/*<TransformDemo />*/}
                {/*<KeyboardDemo />*/}

                {/*动画*/}
                <Anim1 />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});
