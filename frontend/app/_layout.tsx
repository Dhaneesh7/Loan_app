import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home</Text>

    
        <TouchableOpacity style={styles.button}  onPress={() => router.push('/explore')}>
          <Text style={styles.buttonText}>Go to Explore</Text>
        </TouchableOpacity>
 

      
        <TouchableOpacity style={styles.button} onPress={() => router.push('/Payment')}>
          <Text style={styles.buttonText}>Go to Payments</Text>
        </TouchableOpacity>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 20 },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText: { color: '#fff', fontSize: 16 },
});
