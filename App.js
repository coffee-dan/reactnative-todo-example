import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'

import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])

	const addGoalHandler = newGoal => {
		// Append new goal to existing goals list using spread operator
		// As well using an inline arrow function to ensure the most recent
		//  version of the state 'courseGoals' is accessed
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ id: Math.random().toString(), value: newGoal },
		])
	}

	const removeGoalHandler = goalId => {
		setCourseGoals(currentGoals => {
			return currentGoals.filter(goal => goal.id !== goalId)
		})
	}

	return (
		<View style={styles.screen}>
			<TodoInput onAddGoal={addGoalHandler} />

			{/* Scrolling will always need to be explictly defined using <ScrollView> */}
			{/* <FlatList> also works, but works better with potentially very long lists as it
                optimizes the rendering of the items in list, only rendering the minimum possible */}
			{/* keyExtractor logic here is redundant, it is here to show the default behavior of 
                FlatList finding the key for the list items */}
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={itemData => (
					<TodoItem
						id={itemData.item.id}
						title={itemData.item.value}
						onDelete={removeGoalHandler}
					/>
				)}
			/>
		</View>
	)
}

// StyleSheet is preferred to inline styling for organization purposes, property
// validation and there is a plan for performance optimizations involving
// StyleSheet objects
const styles = StyleSheet.create({
	screen: {
		padding: 50,
	},
})
