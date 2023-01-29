import { useNavigation } from '@react-navigation/native';

const useGlobalNavigation = () => {
  const navigation = useNavigation();
  return navigation;
};

export default useGlobalNavigation;