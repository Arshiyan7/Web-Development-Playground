
import React from 'react';
import styles from './styles'
import {
  View,
  Text,
  Pressable,
  FlatList,
} from 'react-native';

/**
 * @param {{
 *   navigation: any,
 *   items: { id: number, name: string, quantity: number }[],
 *   setItems: React.Dispatch<React.SetStateAction<{ id: number, name: string, quantity: number }[]>>
 * }} props
 */

export default function Home({navigation, items, setItems}) {
  return (
    <View style={styles.container}>
      {/* Dashboard heading */}
      <View style={styles.header}>
        <Text style={styles.title}>Inventory Overview</Text>
        <Text style={styles.subtitle}>
          Manage your shop inventory in one place.
        </Text>
      </View>

      {/* Navigation buttons */}
      <View style={styles.navigation}>
        <Pressable
          onPress={() => {}}
          style={[styles.navButton, styles.activeButton]}
        >
          <Text style={[styles.navText, styles.activeNavText]}>
            All Items
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('LowStock')}
          style={styles.navButton}
        >
          <Text style={styles.navText}>Low Stock</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('AddItem')}
          style={styles.navButton}
        >
          <Text style={styles.navText}>Add Item</Text>
        </Pressable>
      </View>

      {/* Inventory section */}
      <View style={styles.inventorySection}>
        <View style={styles.sectionHeading}>
          <Text style={styles.sectionTitle}>Inventory</Text>
          <Text style={styles.itemCount}>
            {items.length} items
          </Text>
        </View>

        {/* Inventory column headings */}
        <View style={styles.listHeader}>
          <Text style={styles.columnHeading}>ITEM NAME</Text>
          <Text style={styles.columnHeading}>QUANTITY</Text>
        </View>

        {/* Inventory list */}
        <FlatList
          data={items}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.productRow}>
              <Text style={styles.productName}>{item.name}</Text>

              <Text
                style={[
                  styles.quantity,
                  item.quantity <= 5
                    ? styles.lowStock
                    : styles.normalStock,
                ]}
              >
                {item.quantity}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyMessage}>
              No items yet. Add your first product to get started.
            </Text>
          }
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

