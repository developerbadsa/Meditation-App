import { Image, StyleSheet, Platform, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
   <View>
    <Text style={styles.text}>
      bismillah
    </Text>
   </View>
  );
}

const styles = StyleSheet.create({
text:{
padding:100
}
});
