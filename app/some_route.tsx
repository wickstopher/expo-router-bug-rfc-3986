import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function SomeRoute() {
  const { someParam } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: "white"}}>someParam: {someParam}</Text>
      {!someParam && <Text style={{color: "white"}}>The parameter isn't set!</Text>}
    </View>
  );
}
