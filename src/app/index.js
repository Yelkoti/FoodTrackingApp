import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import FoodItem from "../components/food/FoodItem";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

const foodItems = [
  { label: "Pizza", cal: 75, brand: "Dominos" },
  { label: "Apple", cal: 50, brand: "Generic" },
];

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.searchView}>
        <TextInput style={styles.searchBox} value={searchValue} placeholder="Search..." onChangeText={setSearchValue} />
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    gap: 4,
  },
  searchBox: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderRadius: 6,
  },
});
