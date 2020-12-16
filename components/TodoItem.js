import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const TodoItem = props => {
	// There are several other Touchable components which each have lots of config for the
	// feedback of and other behavior
	return (
		// Bind here is just another way of providing the callback function with an arguement
		// similar to onPress={() => props.onDelete(props.id)}
		<TouchableOpacity
			activeOpacity="0.6"
			onPress={props.onDelete.bind(this, props.id)}
		>
			<View style={styles.listItem}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1,
	},
})

export default TodoItem
