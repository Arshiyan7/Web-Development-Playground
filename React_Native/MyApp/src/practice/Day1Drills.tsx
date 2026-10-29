import { useState } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';

// DRILL 1:
// export default function LeadHeader() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Client Details</Text>
//       <TouchableOpacity style={styles.button} onPress={() => {}}>
//         <Text style={styles.title}>Edit</Text>
//         </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection : 'row',
//     justifyContent : 'space-between',
//     backgroundColor: '#0F172A',
//     padding: 16,
//     alignItems : 'center'
//   },
//   title: {
//     fontSize: 18,
//     color: '#FFFFFF',
//   },
//   button : {
//     color : 'white',
//     borderWidth : 1,
//     borderColor : 'white',
//     padding : 8,
//     width : '40%',
//     alignItems : 'center'
//   }
// });

// DRILL 2:
// const clients = [
//   { id: '1', name: 'Acme Corp' },
//   { id: '2', name: 'Globex Inc' },
//   { id: '3', name: 'Stark Industries' },
// ];

// export default function ClientList() {
//   return (
//     <FlatList
//       data={clients}
//       renderItem={({ item }) => (
//         <View style={styles.item}>
//           <Text>{item.name}</Text>
//         </View>
//       )}
//       keyExtractor={(item) => item.id}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   item: { padding: 16, borderBottomWidth: 1, borderColor: '#ccc' },
// });

// DRILL 3:
export default function CreateLeadForm() {
  const [companyName, setCompanyName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  // State to store the finalized lead data for rendering on screen
  const [submittedLead, setSubmittedLead] = useState(null);

  const handleInput = () => {
    // 1. Save current input values into our display state object
    setSubmittedLead({
      company: companyName,
      phone: phoneNumber,
    });

    // 2. Clear the input boxes for the next entry
    setCompanyName('');
    setPhoneNumber('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={companyName}
        onChangeText={setCompanyName}
        placeholderTextColor="#999999"
        placeholder="Company name..."
      />
      <Text style={styles.hint}>typing... {companyName}</Text>

      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholderTextColor="#999999"
        placeholder="Phone number..."
        keyboardType='number-pad'
      />
      <Text style={styles.hint}>typing... {phoneNumber}</Text>

      <TouchableOpacity style={styles.button} onPress={handleInput}>
        <Text style={styles.buttonText}>Save Lead</Text>
      </TouchableOpacity>

      {/* Conditional Rendering: Only show this box if submittedLead has data */}
      {submittedLead && (
        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>Saved Lead Details:</Text>
          <Text>Company: {submittedLead.company}</Text>
          <Text>Phone: {submittedLead.phone}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 4,
    width: '80%',
    borderRadius: 6,
  },
  hint: {
    marginBottom: 10,
    fontSize: 12,
    color: '#666',
  },
  button: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultBox: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#F1F5F9',
    borderRadius: 8,
    width: '80%',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  resultTitle: {
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#0F172A',
  },
});