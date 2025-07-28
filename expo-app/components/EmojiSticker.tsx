import { ImageSourcePropType, View } from "react-native";
import { Image } from "expo-image";

type Props = {
    imageSize: number;
    imgSource: ImageSourcePropType;
};

const EmojiSticker = ({ imageSize, imgSource }: Props) => {
    return (
        <View style={{ top: -250 }}>
            <Image source={imgSource} style={{ width: imageSize, height: imageSize }}/>
        </View>
    )
}

export default EmojiSticker;
