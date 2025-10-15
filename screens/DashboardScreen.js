import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, TouchableOpacity, TextInput } from 'react-native';
import SOSButton from '../components/SOSButton';

export default function DashboardScreen({ user, contacts, threshold, onNavigate, onAddContact }) {
  const [heartRate, setHeartRate] = useState(80);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRate = Math.floor(80 + Math.random() * 60);
      setHeartRate(newRate);
      if (newRate > threshold) {
        Alert.alert('High heart rate detected!', 'SOS triggered automatically.');
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [threshold]);

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleAddContact = () => {
    if (contactName && contactNumber) {
      onAddContact({ name: contactName, number: contactNumber });
      setContactName('');
      setContactNumber('');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome {user}</Text>
      <SOSButton />
      <Text style={styles.heartRate}>Heart Rate: {heartRate}</Text>
      <Text>Threshold: {threshold}</Text>
      
      <View style={{flexDirection:'row', marginTop:10}}>
        <Button title="Sim 3× Press" onPress={() => Alert.alert("SOS Message Sent!")} />
        <Button title="Sim 5× Press" onPress={() => Alert.alert("🚨 Siren Activated!")} />
      </View>

      <View style={styles.contactsContainer}>
        <Text style={styles.contactsTitle}>Emergency Contacts</Text>
        {contacts.map((contact, index) => (
          <Text key={index}>{contact.name} - {contact.number}</Text>
        ))}
        {contacts.length < 3 && (
          <View>
            <TextInput placeholder="Name" value={contactName} onChangeText={setContactName} style={styles.input} />
            <TextInput placeholder="Number" value={contactNumber} onChangeText={setContactNumber} style={styles.input}/>
            <Button title="Add Contact" onPress={handleAddContact} />
          </View>
        )}
      </View>
      <Button title="Settings" onPress={() => onNavigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  heartRate: {
    fontSize: 18,
    marginVertical: 20,
  },
  contactsContainer: {
    marginVertical: 20,
  },
  contactsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
