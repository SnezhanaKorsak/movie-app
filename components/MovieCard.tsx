import { TouchableOpacity, Dimensions, Image } from 'react-native';
import { Movie } from '../types';

type Props = {
  movie: Movie;
  handleClick: () => void
}
const { width, height } = Dimensions.get('window');

export function MovieCard({ movie, handleClick }: Props) {
  const { poster: { url } } = movie;

  return (
    <TouchableOpacity onPress={handleClick}>
      <Image
        //source={require('../assets/moviePoster.jpg')}
        source={{ uri: url }}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 25,
        }}
      />
    </TouchableOpacity>
  );
}
