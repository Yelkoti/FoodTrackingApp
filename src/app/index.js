import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FoodItem from "../components/food/FoodItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FoodItem item={{ label: "Pizza", cal: 75, brand: "Dominos" }} />
      <FoodItem item={{ label: "Pizza", cal: 75, brand: "Dominos" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
