import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { image: require('../../assets/facebook.png'), title: 'Software Engineer', company: 'Facebook', salary: '$180,00', location: 'Accra, Ghana' },
    { image: require('../../assets/Google.png'), title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Mountain View, US' },
  ];

  const popularJobs = [
    { id: '3', image: require('../../assets/pple.png'), title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '4', image: require('../../assets/Google.png'), title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US' },
    { id: '5', image: require('../../assets/facebook.png'), title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image source={require('../../assets/profile.jpeg')} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search a job or position" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../assets/filter.5.png')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <View style={styles.featuredJobsContainer}>
          {featuredJobs.map((job, index) => (
            <JobCard key={index} job={job} featured />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        {popularJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  email: {
    fontSize: 16,
    color: '#7A7A7A',
  },
  profileButton: {
    padding: 1,
    borderRadius: 20,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderRadius: 30,
    marginBottom: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#3A3A3A',
    paddingHorizontal: 15,
  },
  filterButton: {
    marginLeft: 8,
  },
  filterIcon: {
    width: 20,
    height: 20,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  featuredJobsContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
});

export default HomeScreen;