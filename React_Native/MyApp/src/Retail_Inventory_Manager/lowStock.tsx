
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

/**
 * @param {{
 *   items: { id: number, name: string, quantity: number }[],
 *   setItems: React.Dispatch<React.SetStateAction<{ id: number, name: string, quantity: number }[]>>
 * }} props
 */
export default function LowStock({items, setItems}) {
  const lowStock = items.filter(item => item.quantity <= 5);

  return (
    <View style={styles.container}>
      <View style={styles.listHeader}>
        <Text style={styles.columnHeading}>ITEM NAME</Text>
        <Text style={styles.columnHeading}>QUANTITY</Text>
      </View>

      <FlatList
        data={lowStock}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.productRow}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={[styles.quantity, styles.lowStock]}>
              {item.quantity}
            </Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>
            No low-stock items. Your inventory looks good!
          </Text>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
