import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

export default function TodoInput({ addTodo, onCancel, visible }) {
	const [enteredTodo, setEnteredTodo] = useState('')

	const todoInputHandler = enteredText => {
		setEnteredTodo(enteredText)
	}

	let isValid = enteredTodo !== ''

	// execute all tasks related to adding a todo
	const addTodoHandler = () => {
		if (isValid) {
			addTodo(enteredTodo)
			setEnteredTodo('')
		}
	}

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				{/* When a function is passed it is passed without parens to
                avoid executing the function at every render, instead a referrence
                is passed such that it is called only when needed */}
				<TextInput
					style={styles.input}
					placeholder="Todo Item"
					onChangeText={todoInputHandler}
					value={enteredTodo}
				/>
				<View style={styles.inputButtonsContainer}>
					{/* Buttons wrapped in <View> to apply styling that modifies
						width, which is otherwise impossible */}
					<View style={styles.button}>
						<Button title="CANCEL" color="red" onPress={onCancel} />
					</View>

					<View style={styles.button}>
						<Button title="ADD" onPress={addTodoHandler} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

// flex: 1 here tells inputContainer to take up all the available space
const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		width: '80%',
		padding: 10,
		borderColor: 'black',
		borderWidth: 1,
		marginBottom: 10,
	},
	inputButtonsContainer: {
		flexDirection: 'row',
	},
	button: {
		width: '30%',
	},
})
