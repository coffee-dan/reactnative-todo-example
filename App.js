import React, { useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	Button,
	FlatList,
} from 'react-native'

export default function App() {
	const [enteredGoal, setEnteredGoal] = useState('')
	const [courseGoals, setCourseGoals] = useState([])

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText)
	}

	const addGoalHandler = () => {
		// Append new goal to existing goals list using spread operator
		// As well using an inline arrow function to ensure the most recent
		//  version of the state 'courseGoals' is accessed
		setCourseGoals(currentGoals => [
			...currentGoals,
			{ key: Math.random().toString(), value: enteredGoal },
		])
		setEnteredGoal('')
	}

	return (
		<View style={styles.screen}>
			{/* Using flex box here to horizontally format items */}
			<View style={styles.inputContainer}>
				{/* When a function is passed it is passed without parens to
                    avoid executing the function at every render, instead a referrence
                    is passed such that it is called only when needed */}
				<TextInput
					style={styles.input}
					placeholder="Course Goal"
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<Button title="ADD" onPress={addGoalHandler} />
			</View>

			{/* Scrolling will always need to be explictly defined using <ScrollView> */}
			{/* <FlatList> also works, but works better with potentially very long lists as it
                optimizes the rendering of the items in list, only rendering the minimum possible */}
			{/* keyExtractor logic here is redundant, it is here to show the default behavior of 
                FlatList finding the key for the list items */}
			<FlatList
				keyExtractor={(item, index) => item.key}
				data={courseGoals}
				renderItem={itemData => (
					<View style={styles.listItem}>
						<Text>{itemData.item.value}</Text>
					</View>
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
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		padding: 10,
		borderColor: 'black',
		borderWidth: 1,
	},
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
	},
})
