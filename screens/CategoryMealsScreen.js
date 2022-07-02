import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import Colors from "../constants/Colors";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image = {itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity = {itemData.item.complexity}
        affordability = {itemData.item.affordability}
        onSelectMeal={() => {
            props.navigation.navigate({
                routeName: "MealDetails",
                params: {
                    mealId: itemData.item.id
                }
            })}}
      />
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "95%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};
export default CategoryMealsScreen;
