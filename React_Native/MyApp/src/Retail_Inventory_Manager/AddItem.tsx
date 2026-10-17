import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';

export default function AddItem({ navigation, items, setItems }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [negativeInput, setNegativeInput] = useState('');

  const HandleInput = () => {
    const trimmedName = name.trim();
    const trimmedQuantity = quantity.trim();
    const numberQuantity = Number(trimmedQuantity);

    // Validate item name
    if (trimmedName === '') {
      setNameError('Item name is required');
    } else {
      setNameError('');
    }

    // Validate empty quantity
    if (trimmedQuantity === '') {
      setQuantityError('Item quantity is required');
    } else {
      setQuantityError('');
    }

    // Validate numeric quantity
    if (
      trimmedQuantity !== '' &&
      (numberQuantity < 0 ||
        !Number.isInteger(numberQuantity) ||
        Number.isNaN(numberQuantity))
    ) {
      setNegativeInput('Enter a non-negative quantity');
    } else {
      setNegativeInput('');
    }

    // Stop if any validation fails
    if (
      trimmedName === '' ||
      trimmedQuantity === '' ||
      numberQuantity < 0 ||
      !Number.isInteger(numberQuantity) ||
      Number.isNaN(numberQuantity)
    ) {
      return;
    }

    // Generate a unique ID
    const newId = Math.max(0, ...items.map(item => item.id)) + 1;

    // Create the new item
    const newItem = {
      id: newId,
      name: trimmedName,
      quantity: numberQuantity,
    };

    // Update shared inventory without mutating the array
    setItems(previousItems => [...previousItems, newItem]);

    // Clear the form
    setName('');
    setQuantity('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.InputContainer}>
        <TextInput
          style={[styles.input, nameError ? styles.errorInput : {}]}
          placeholder="Enter item name..."
          placeholderTextColor="#666666"
          value={name}
          onChangeText={setName}
        />
        {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

        <TextInput
          style={[
            styles.input,
            quantityError ? styles.errorInput : {},
            negativeInput ? styles.errorInput : {},
          ]}
          placeholder="Enter item quantity..."
          placeholderTextColor="#666666"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="number-pad"
        />
        {quantityError ? (
          <Text style={styles.errorText}>{quantityError}</Text>
        ) : null}
        {negativeInput ? (
          <Text style={styles.errorText}>{negativeInput}</Text>
        ) : null}

        <Pressable style={styles.addButton} onPress={HandleInput}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </Pressable>
      </View>
      <View style={styles.ItemsContainer}>
        <View style={styles.listHeader}>
          <Text>ITEMS</Text>
          <Text>QUANTITY</Text>
        </View>
        <FlatList
          data={items}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.productRow}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.quantity}>{item.quantity}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>No items yet.</Text>
          }
        />
      </View>
    </View>
  );
}
