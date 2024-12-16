import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

type SearchScreenRouteProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

export function SearchButton() {
  const navigation = useNavigation<SearchScreenRouteProp>();

  const redirectToSearchScreen = () => navigation.navigate('Search');

  return (
    <TouchableOpacity onPress={redirectToSearchScreen}>
      <MagnifyingGlassIcon size="30" strokeWidth={2} color="white" />
    </TouchableOpacity>
  );
}
