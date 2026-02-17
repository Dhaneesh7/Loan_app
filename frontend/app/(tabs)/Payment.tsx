import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Button } from 'react-native';
import api from '@/axios/axios'; // Your axios instance

type Payment = {
  id: number;
  amount: number;
  date: string;
};

export default function PaymentsScreen() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPayments = async () => {
    try {
      const res = await api.get<Payment[]>('/payments'); // also type axios response
      setPayments(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payments</Text>
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Amount: {item.amount}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
      <Button title="Refresh" onPress={fetchPayments} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  card: { padding: 12, marginVertical: 6, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 },
});
