import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text>welcome to (de)solulu</Text>
      </View>
      <View style={styles.buttons}>
        <Pressable>
          <Text> Log In </Text>
        </Pressable>
        <Pressable>
          <Text> Create Account </Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: "60px",
    backgroundColor: "#FF46B5",
  },
  buttons: {
    alignItems: "flex-start",
    backgroundColor: "DEA2DF",
  },
});
