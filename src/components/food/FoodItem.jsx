import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const FoodItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>{item.label}</Text>
        <Text>{item.cal}, {item.brand}</Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gainsboro",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 8,
    marginVertical: 2
  },
  innerContainer: {
    flex: 1,
    gap: 5
  }
});

export default FoodItem;
