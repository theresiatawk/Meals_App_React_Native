import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    return (<View style = {styles.screen}>
        <Text> The Category Meals Screen </Text>
        <Text>{selectedCategory.title}</Text>
        <Button
        title="Show Details!"
        onPress={() => {props.navigation.navigate({
          routeName: "MealDetails",
        })}}
      />
    </View>);
}
const styles = StyleSheet.create({
    screen :{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});
export default CategoryMealsScreen;