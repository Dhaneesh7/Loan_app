import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import api from '../../axios/axios';
// import CustomerCard from '../../components/customerCard';
import CustomerCard from '../../components/CustomerCard1';
import PaymentForm from '../../components/PaymentForm';

interface Customer {
  id: number;
  account_number: string;
  name: string;
  phone?: string;
  email?: string;
  issue_date?: string;
  interest_rate?: number;
  tenure?: number;
  emi_due?: number;
}
const HomeScreen = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

  const fetchCustomers = async () => {
    try {
      const res = await api.get('/customers');
      setCustomers(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.account_number}
        renderItem={({ item }) => (
          <CustomerCard
            customer={item}
            onPress={() => setSelectedAccount(item.account_number)}
          />
        )}
      />

      {selectedAccount && (
        <PaymentForm
          accountNumber={selectedAccount}
          onPaymentSuccess={fetchCustomers}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 }
});

export default HomeScreen;
