import { View, StyleSheet, ImageSourcePropType } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";


const PlaceholderImage = require('@/assets/images/background-image.png');

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalIsVisible, setModalIsVisible] = useState<boolean>(false);
  const [PickerEmoji, setPickerEmoji] = useState<ImageSourcePropType | undefined>(undefined);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });    

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else{
      alert('No image selected');
    }
  }

  const onReset = () => {
    setShowAppOptions(false);
  }

  const onAddSticker = () => {
    setModalIsVisible(true);
  }

  const onModalClose = () => {
    setModalIsVisible(false);
  }

  const onSaveImageAsync = async () => {
    //TODO: be it implemented this later
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
          <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton icon='refresh' label='Reset' onPress={onReset} />
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync}/>
          </View>
        </View>
      ) : (
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
      </View>
      )}
      <EmojiPicker isVisible={isModalIsVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickerEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Text: {
    color: '#fff',
  },
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#67f',
  },
  imageContainer: {
        flex: 1,
        marginTop: 30,
  },
  footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
})