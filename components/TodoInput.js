import React, { useState } from 'react'

import { View, TextInput, Button, StyleSheet } from 'react-native'

const TodoInput = props => {
	const [enteredGoal, setEnteredGoal] = useState('')

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText)
	}

	return (
		<View style={styles.inputContainer}>
			{/* When a function is passed it is passed without parens to
                avoid executing the function at every render, instead a referrence
                is passed such that it is called only when needed */}
			<TextInput
				style={styles.input}
				placeholder="Todo Item"
				onChangeText={goalInputHandler}
				value={enteredGoal}
			/>
			<Button
				title="ADD"
				onPress={() => {
					props.onAddGoal(enteredGoal)
					setEnteredGoal('')
				}}
			/>
		</View>
	)
}

// Using flex box here to horizontally format items
const styles = StyleSheet.create({
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
})

export default TodoInput
