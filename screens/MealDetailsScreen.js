import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from '../components/HeaderButton';


const MealDetailsScreen = props => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return (<View style = {styles.screen}>
        <Text>{selectedMeal.title}</Text>
    </View>);
}
const styles = StyleSheet.create({
    screen :{
        flex: 1, 
        justifyContent: "center", 
        alignItems: "center",
    }
});
MealDetailsScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return {
        headerTitle: selectedMeal.title, 
        headerRight: <HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
            <Item title = "Favorite" iconName='ios-star'
            onPress = {() => console.log("Mark as Favorite")}/>
        </HeaderButtons>
    };
}
export default MealDetailsScreen;