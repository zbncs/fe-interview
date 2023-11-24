import { Component, default as React } from 'react';
import { FlatList, ScrollView, Text } from 'react-native';

export default class LabScreen extends Component {
    render() {
        return (
            <ScrollView>
                {this.renderFlatList('red')}
                {this.renderFlatList('green')}
                {this.renderFlatList('purple')}
                {this.renderFlatList('pink')}
            </ScrollView>
        );
    }

    getRandomData = () => {
        return new Array(100).fill('').map((item, index) => {
            return { title: 'Title ' + (index + 1) };
        });
    };

    renderFlatList(color) {
        return (
            <FlatList
                data={this.getRandomData()}
                backgroundColor={color}
                maxHeight={200}
                marginBottom={50}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text>{item.title}</Text>}
            />
        );
    }
}
