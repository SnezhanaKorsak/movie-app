import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { theme } from '../theme';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { useNavigation } from '@react-navigation/native';

type HomeScreenRouteProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  handleSearch: (value: string) => void;
}

export function Search({ handleSearch }: Props) {
  const navigation = useNavigation<HomeScreenRouteProp>();

  const redirectToHomeScreen = () => navigation.navigate('Home');

  return (
    <View style={styles.content}>
      <TextInput
        placeholder="Введите текст"
        placeholderTextColor={theme.colors.lightGray}
        onChangeText={handleSearch}
        style={styles.input}
      />

      <TouchableOpacity
        onPress={redirectToHomeScreen}
        style={styles.cancelBtn}
      >
        <XMarkIcon size={25} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 16,
    marginVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.bgNeutral400,
    borderRadius: 50,
  },
  input: {
    paddingLeft: 24,
    flex: 1,
    fontWeight: 'semibold',
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.white,
  },
  cancelBtn: {
    borderRadius: '50%',
    padding: 12,
    margin: 4,
    backgroundColor: theme.colors.bgNeutral400,
  },
});