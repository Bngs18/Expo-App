import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
    imgSource: ImageSourcePropType;
    selectedImage?: string;
}

const ImageViewer = ({ imgSource, selectedImage }: Props) => {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;

    return (
        <Image
            source={imageSource}
            style={styles.image}
            contentFit="cover"
            transition={1000}
        />
    )
}

export default ImageViewer;

const styles = StyleSheet.create({    
    image: {
        width: 250,
        height: 400,
        borderRadius: 18,
    },
})