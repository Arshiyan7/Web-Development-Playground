import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// --- SCREEN 2: EDIT LEAD ---
export default function EditLeadScreen({ route, navigation }) {
  // TODO 2: Extract the 'lead' object passed from route.params
  const { lead } = route.params || {};

  // Local state initialized with the incoming lead name
  const [newName, setNewName] = useState(lead ? lead.name : '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Lead Name</Text>
      
      <TextInput 
        style={styles.input}
        value={newName}
        onChangeText={setNewName}
      />

      {/* 
        TODO 3: When the user clicks Save, navigate back to 'LeadList' 
        and pass an 'updatedLead' object containing the id, status, and the newName!
      */}
      <Button 
        title="Save & Return" 
        onPress={() => navigation.navigate('LeadList',{
          updatedLead: { id: lead.id, name: newName, status: lead.status }
        })} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0F172A', padding: 20 },
  title: { fontSize: 20, color: '#fff', marginBottom: 10, fontWeight: 'bold' },
  text: { fontSize: 16, color: '#94A3B8', marginBottom: 20 },
  input: { backgroundColor: '#1E293B', color: '#FFF', padding: 12, borderRadius: 8, marginBottom: 16, width: '100%', borderWidth: 1, borderColor: '#334155' },
});