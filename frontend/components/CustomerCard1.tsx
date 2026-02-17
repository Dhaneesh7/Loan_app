import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// 1. Import Customer type from HomeScreen or redefine
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

// 2. Define props type
interface CustomerCardProps {
  customer: Customer;
  onPress: () => void;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text>Account: {customer.account_number}</Text>
        <Text>Issue Date: {customer.issue_date}</Text>
        <Text>Interest Rate: {customer.interest_rate}%</Text>
        <Text>Tenure: {customer.tenure} months</Text>
        <Text>EMI Due: ${customer.emi_due}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 10
  }
});

export default CustomerCard;
