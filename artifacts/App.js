import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Image, { source: require('../assets/test.png'), resizeMode: 'contain' }),
            React.createElement(Text, { style: styles.welcome }, "Welcome to React Native! (in TypeScript)"),
            React.createElement(Text, { style: styles.instructions }, "To get started, edit index.ios.js"),
            React.createElement(Text, { style: styles.instructions },
                "Press Cmd+R to reload,",
                '\n',
                "Cmd+D or shake for dev menu")));
    }
}
//# sourceMappingURL=App.js.map