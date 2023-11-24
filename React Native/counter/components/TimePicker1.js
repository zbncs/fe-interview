import React, {useMemo} from "react"
import {ScrollView, useWindowDimensions, View, StyleSheet} from 'react-native'
import TimerPicker from "./TimerPicker/index";
// import LinearGradient from "react-native-linear-gradient"
import { LinearGradient } from "expo-linear-gradient"


export default function TimePicker1() {
    const { width: screenWidth } = useWindowDimensions();

    // const RenderExample3 = () => {
    //     return (
    //         <View
    //             style={[
    //                 styles.container,
    //                 styles.page3Container,
    //                 { width: screenWidth },
    //             ]}>
    //             <TimerPicker
    //                 padWithNItems={2}
    //                 hourLabel=":"
    //                 minuteLabel=":"
    //                 secondLabel=""
    //                 LinearGradient={LinearGradient}
    //                 styles={{
    //                     theme: "dark",
    //                     backgroundColor: "#202020",
    //                     pickerItem: {
    //                         fontSize: 34,
    //                     },
    //                     pickerLabel: {
    //                         fontSize: 32,
    //                         marginTop: 0,
    //                     },
    //                     pickerContainer: {
    //                         marginRight: 6,
    //                     },
    //                 }}
    //                 onDurationChange={() => {}}
    //             />
    //         </View>
    //     );
    // }

    const renderExample4 = useMemo(() => {
        return (
            <View
                style={[
                    styles.container,
                    styles.page4Container,
                    { width: screenWidth },
                ]}>
                <TimerPicker
                    padWithNItems={2}
                    hideHours
                    minuteLabel="min"
                    secondLabel="sec"
                    LinearGradient={LinearGradient}
                    styles={{
                        theme: "light",
                        pickerItem: {
                            fontSize: 34,
                        },
                        pickerLabel: {
                            fontSize: 26,
                            right: -20,
                        },
                        pickerLabelContainer: {
                            width: 60,
                        },
                        pickerItemContainer: {
                            width: 150,
                        },
                    }}
                    onDurationChange={(h, m, s) => {
                        // console.log(123, h, m, s)
                    }}
                />
            </View>
        );
    }, [screenWidth]);

    return (
        <ScrollView horizontal pagingEnabled>
            {/*<RenderExample3 />*/}
            {renderExample4}
        </ScrollView>
    );
}

const styles= StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    },
    page1Container: {
        backgroundColor: "#514242",
    },
    page2Container: {
        backgroundColor: "#F1F1F1",
    },
    page3Container: {
        backgroundColor: "#202020",
    },
    page4Container: {
        backgroundColor: "#F1F1F1",
    },
    textDark: {
        fontSize: 18,
        color: "#F1F1F1",
    },
    textLight: {
        fontSize: 18,
        color: "#202020",
    },
    alarmTextDark: {
        fontSize: 48,
        color: "#F1F1F1",
    },
    alarmTextLight: {
        fontSize: 48,
        color: "#202020",
    },
    touchableContainer: {
        alignItems: "center",
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
        overflow: "hidden",
    },
    buttonDark: {
        borderColor: "#C2C2C2",
        color: "#C2C2C2",
    },
    buttonLight: { borderColor: "#8C8C8C", color: "#8C8C8C" },
    buttonContainer: {
        marginTop: 30,
    },
});
