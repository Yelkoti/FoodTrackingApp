import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FoodItem from "../components/food/FoodItem";

const foodItems = [ { label: "Pizza", cal: 75, brand: "Dominos" }, { label: "Apple", cal: 50, brand: "Generic" }];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList data={foodItems} renderItem={({item}) => <FoodItem item={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
