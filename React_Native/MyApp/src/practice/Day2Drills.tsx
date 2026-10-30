import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

export default function LeadSearchScreen() {
  const [leads, setLeads] = useState([
    { id: '1', name: 'Acme Corp' },
    { id: '2', name: 'Globex Inc' },
    { id: '3', name: 'Stark Industries' },
    { id: '4', name: 'Wayne Enterprises' },
  ]);
  
  const [searchInput, setSearchInput] = useState('')
  

  const filteredLeads = leads.filter(item => item.name.toLowerCase().includes(searchInput.toLocaleLowerCase()))

  return (
    <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder='Write lead name here...'
      value={searchInput}
      onChangeText={setSearchInput}
      />

      <FlatList
        data={filteredLeads}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0F172A', padding: 20, paddingTop: 60 },
  input: { backgroundColor: '#1E293B', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, borderWidth: 1, borderColor: '#334155' },
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#334155' },
  text: { color: '#FFF', fontSize: 16 },
});