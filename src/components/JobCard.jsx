import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ job }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.salary}>{job.salary}</Text>
      <Text style={styles.location}>{job.location}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  company: {
    fontSize: 14,
    color: '#7A7A7A',
    marginVertical: 5,
  },
  salary: {
    fontSize: 14,
    color: '#3A3A3A',
  },
  location: {
    fontSize: 12,
    color: '#7A7A7A',
  },
});

export default JobCard;