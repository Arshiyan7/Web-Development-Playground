import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// --- SCREEN 1: LEAD LIST ---
export  default function LeadListScreen({ navigation, route }) {
  const [lead, setLead] = useState({
    id: '101',
    name: 'Acme Corp',
    status: 'Pending',
  });

  // Optional: Check if we received an updated lead back from route.params!
  useEffect(() => {
    if (route.params?.updatedLead) {
      setLead(route.params.updatedLead);
    }
  }, [route.params?.updatedLead]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Lead: {lead.name}</Text>
      <Text style={styles.text}>Status: {lead.status}</Text>
      <Button title="Edit Lead" onPress={() => navigation.navigate('EditLead',{lead})} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    padding: 20,
  },
  title: { fontSize: 20, color: '#fff', marginBottom: 10, fontWeight: 'bold' },
  text: { fontSize: 16, color: '#94A3B8', marginBottom: 20 },
  input: {
    backgroundColor: '#1E293B',
    color: '#FFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
    borderWidth: 1,
    borderColor: '#334155',
  },
});
