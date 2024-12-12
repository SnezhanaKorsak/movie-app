import { TouchableOpacity, Dimensions, Image } from 'react-native';

type Props = {
  item: number;
  handleClick: () => void
}
const { width, height } = Dimensions.get('window');

export function MovieCard({ item }: Props) {
  return (
    <TouchableOpacity onPress={() => {
    }}>
      <Image
        source={require('../assets/moviePoster.jpg')}
        style={{
          width: width * 0.6,
          height: height * 0.4,
        }}
      />
    </TouchableOpacity>
  );
}
