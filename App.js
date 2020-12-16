import React, { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'

import TodoInput from './components/TodoInput'
import TodoItem from './components/TodoItem'

export default function App() {
	const [courseTodos, setCourseTodos] = useState([])
	const [isAddMode, setIsAddMode] = useState(false)

	const addTodoHandler = newTodo => {
		// Append new Todo to existing Todos list using spread operator
		// As well using an inline arrow function to ensure the most recent
		//  version of the state 'courseTodos' is accessed
		setCourseTodos(currentTodos => [
			...currentTodos,
			{ id: Math.random().toString(), value: newTodo },
		])

		setIsAddMode(false)
	}

	const cancelAddHandler = () => {
		setIsAddMode(false)
	}

	const removeTodoHandler = todoId => {
		setCourseTodos(currentTodos => {
			return currentTodos.filter(todo => todo.id !== todoId)
		})
	}

	return (
		<View style={styles.screen}>
			<Button title="Add New Todo" onPress={() => setIsAddMode(true)} />

			<TodoInput
				visible={isAddMode}
				addTodo={addTodoHandler}
				onCancel={cancelAddHandler}
			/>
			{/* Scrolling will always need to be explictly defined using <ScrollView> */}
			{/* <FlatList> also works, but works better with potentially very long lists as it
                optimizes the rendering of the items in list, only rendering the minimum possible */}
			{/* keyExtractor logic here is redundant, it is here to show the default behavior of 
                FlatList finding the key for the list items */}
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseTodos}
				renderItem={itemData => (
					<TodoItem
						id={itemData.item.id}
						title={itemData.item.value}
						onDelete={removeTodoHandler}
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
