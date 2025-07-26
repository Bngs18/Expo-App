import {Text, View, StyleSheet} from 'react-native';
import {Link, Stack} from 'expo-router';

const NotFoundScreen = () => {
    return(
        <>
            <Stack.Screen options={{title: 'Not Found'}}/>
            <View style={styles.container}>
                <Link href='/' style={styles.button}>Return</Link>
            </View>
        </>
    );
}

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#77f',
    },
})