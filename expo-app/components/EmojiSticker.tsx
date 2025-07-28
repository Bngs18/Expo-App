import { ImageSourcePropType, View } from "react-native";
import { Image } from "expo-image";
import Animated from "react-native-reanimated";

type Props = {
    imageSize: number;
    stickerSource: ImageSourcePropType;
};

const EmojiSticker = ({ imageSize, stickerSource }: Props) => {
    return (
        <Animated.Image
            source={stickerSource}
            resizeMode={"contain"}
            style={{ width: imageSize, height: imageSize }}
        />
    )
}

export default EmojiSticker;
