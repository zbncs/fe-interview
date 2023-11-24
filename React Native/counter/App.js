import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList} from 'react-native';
import Counter from './components/counter'
import TextDemo from "./components/TextDemo";
import AlertDemo from "./components/AlertDemo";
import PlatformDemo from "./coreApi/PlatformDemo";
import PermissionsAndroidDemo from "./coreApi/PermissionsAndroidDemo";
import VibrationDemo from "./coreApi/VibrationDemo";
import TransformDemo from "./coreApi/TransformDemo";
import KeyboardDemo from "./coreApi/KeyboardDemo";
import Picker from './components/Picker'
import TimePicker1 from "./components/TimePicker1";


// 动画
import Anim1 from "./Animation/Anim1";
import Badge from "./components/Badge";
import WidthAndPxielRatio from "./components/layout/宽度单位和像素密度";
import {useState} from "react";
import FirstAnimate from "./Animation/reanimated/FirstAnimate";
export default function App() {

    return (
        <SafeAreaView>
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
                {/*<Anim1 />*/}
                <FirstAnimate />



                {/*<Badge>*/}
                {/*    <View style={{width: 45, height: 45, backgroundColor: '#ccc'}}></View>*/}
                {/*</Badge>*/}
                {/*<Badge>*/}
                {/*    <View style={{width: 26, height: 26, backgroundColor: '#ccc'}}></View>*/}
                {/*</Badge>*/}

                {/*<ScrollView showsVerticalScrollIndicator={false} scrollEnabled={false}>*/}
                {/*    <FlatList data={data} renderItem={renderItem} />*/}
                {/*</ScrollView>*/}
                {/*<FlatList*/}
                {/*    data={[]}*/}
                {/*    renderItem={null}*/}
                {/*    ListHeaderComponent={*/}
                {/*        <View>*/}
                {/*            <TimePicker1 />*/}
                {/*            <TimePicker1 />*/}
                {/*            <TimePicker1 />*/}
                {/*            <TimePicker1 />*/}
                {/*            <TimePicker1 />*/}
                {/*            <TimePicker1 />*/}
                {/*        </View>*/}
                {/*    }*/}
                {/*/>*/}
            </View>
            {/*<WidthAndPxielRatio />*/}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#ffff00',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // height: 500
    },
});
