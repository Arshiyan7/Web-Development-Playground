import { View, Text, TextInput, Pressable, FlatList } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

export default function AddItem({ navigation, items, setItems }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');
  const [negativeInput, setNegativeInput] = useState('');
  const [editingId, setEditingId] = useState(null);

  const HandleInput = () => {
    if (editingId === null) {
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
    } else {
      setItems(previousItems =>
        previousItems.map(ExistingItem => {
          if (ExistingItem.id === editingId) {
            const editItem = {
              ...ExistingItem,
              name: name.trim(),
              quantity: Number(quantity),
            };
            return editItem;
          } else {
            return ExistingItem;
          }
        }),
      );
      setName('');
      setQuantity('');
      setEditingId(null);
      setNameError('');
      setQuantityError('');
      setNegativeInput('');
    }
  };

  const HandleEdit = item => {
    setName(item.name);
    setQuantity(item.quantity.toString());
    setEditingId(item.id);
  };

  return (
    <View style={styles.container}>
      <View
        style={
          editingId === null
            ? styles.InputContainer
            : [styles.InputContainer, styles.editingContainer]
        }
      >
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
          <Text style={styles.addButtonText}>
            {editingId === null ? 'Add Item' : 'Save Changes'}
          </Text>
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

              <View style={{ flexDirection: 'row', gap: 12 }}>
                <Pressable onPress={() => HandleEdit(item)}>
                  <Feather name="edit-2" size={20} color="#3984E8" />
                </Pressable>

                <Pressable
                  onPress={() => {
                    setItems(previousItems =>
                      previousItems.filter(
                        existingItem => existingItem.id !== item.id,
                      ),
                    );
                  }}
                >
                  <Feather name="trash-2" size={20} color="#D94B4B" />
                </Pressable>
              </View>
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
