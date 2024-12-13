import { TouchableOpacity, Dimensions, Image } from 'react-native';

type Props = {
  item: number;
  handleClick: () => void
}
const { width, height } = Dimensions.get('window');

export function MovieCard({ item, handleClick }: Props) {
  return (
    <TouchableOpacity onPress={handleClick}>
      <Image
        source={require('../assets/moviePoster.jpg')}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 25,
        }}
      />
    </TouchableOpacity>
  );
}
