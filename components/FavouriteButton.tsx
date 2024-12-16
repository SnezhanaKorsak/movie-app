import { theme } from '../theme';
import { TouchableOpacity } from 'react-native';
import { HeartIcon } from 'react-native-heroicons/solid';
import { useState } from 'react';

export function FavouriteButton() {
  const [isFavourite, setIsFavourite] = useState(false);

  const addToFavourite = () => setIsFavourite((prev) => !prev);

  return (
    <TouchableOpacity onPress={addToFavourite}>
      <HeartIcon size="35" color={theme.colors[isFavourite ? 'textPrimary' : 'white']} />
    </TouchableOpacity>
  );
}
