import {Text, View, StyleSheet} from 'react-native';

const AboutScreen = () => {
    return(
        <View style={styles.container}>
            <Text>Acerca de.</Text>
        </View>
    );
}

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})