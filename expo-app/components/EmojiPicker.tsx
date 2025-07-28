import {Modal, View, StyleSheet, Text, Pressable} from 'react-native';
import { PropsWithChildren } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>;

const EmojiPicker = ({ isVisible, onClose, children }: Props) => {
    return(
        <View>
            <Modal animationType='slide' transparent={true} visible={isVisible}>
                <View style={styles.modalContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Choose a sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name='close' color='#fff' size={22} />
                        </Pressable>
                    </View>
                    {children}
                </View>
            </Modal>
        </View>
    )
}

export default EmojiPicker;

const styles = StyleSheet.create({
    modalContent: {
        height: '30%',
        width: '100%',
        backgroundColor: '#131518ff',
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: 'absolute',
        bottom: 0,
    },
    titleContainer: {
        height: '18%',
        backgroundColor: '#292c31ff',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 16,
    },
})