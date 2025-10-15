import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, FlatList } from 'react-native';

export default function SettingsScreen({ threshold, onSetThreshold, contacts, onLogout, onNavigate }) {
  const [newThreshold, setNewThreshold] = useState(threshold.toString());

  const handleSetThreshold = () => {
    onSetThreshold(parseInt(newThreshold, 10));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingItem}>
        <Text>Heart Rate Threshold</Text>
        <TextInput
          style={styles.input}
          value={newThreshold}
          onChangeText={setNewThreshold}
          keyboardType="numeric"
        />
        <Button title="Set" onPress={handleSetThreshold} />
      </View>

      <View style={styles.contactsContainer}>
        <Text style={styles.contactsTitle}>Emergency Contacts</Text>
        <FlatList
          data={contacts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text>{item.name} - {item.number}</Text>}
        />
      </View>

      <Button title="Logout" onPress={onLogout} />
      <Button title="Back to Dashboard" onPress={() => onNavigate('Dashboard')} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  settingItem: {
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
    contactsContainer: {
    marginVertical: 20,
  },
  contactsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
