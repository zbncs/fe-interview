import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Counter from './components/counter'
import TextDemo from "./components/TextDemo";
import AlertDemo from "./components/AlertDemo";
import PlatformDemo from "./components/PlatformDemo";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" translucent={false} />
            <View style={styles.container}>
                {/*<TextDemo/>*/}
                {/*<AlertDemo />*/}
                {/*<PlatformDemo />*/}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
});
