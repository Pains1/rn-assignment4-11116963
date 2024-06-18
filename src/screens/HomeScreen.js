import React from 'react';
import { View, Text, TextInput,Image, StyleSheet,TouchableOpacity, FlatList, ScrollView } from 'react-native';
import JobCard from '../components/JobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', salary: '$180,000', location: 'Accra, Ghana' },
    { id: '2', title: 'Product Manager', company: 'Google', salary: '$160,000', location: 'Mountain View, US' },
  ];

  const popularJobs = [
    { id: '3', title: 'Jr Executive', company: 'Burger King', salary: '$96,000/y', location: 'Los Angeles, US' },
    { id: '4', title: 'Product Manager', company: 'Beats', salary: '$84,000/y', location: 'Florida, US' },
    { id: '5', title: 'Product Manager', company: 'Facebook', salary: '$86,000/y', location: 'Florida, US' },
    { id: '6', title: 'Senior Developer', company: 'Amazon', salary: '$130,000/y', location: 'Seattle, US' },
    { id: '7', title: 'Data Scientist', company: 'Netflix', salary: '$150,000/y', location: 'San Francisco, US' },
    { id: '8', title: 'UX Designer', company: 'Apple', salary: '$120,000/y', location: 'Cupertino, US' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
       <View style={styles.profile}> 
       <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Image
          source={require('../../assets/apple.png')}
          style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
      
      <TextInput style={styles.searchInput} placeholder="Search a job or position" />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Jobs</Text>
        <FlatList
          horizontal
          data={featuredJobs}
          renderItem={({ item }) => <JobCard job={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Popular Jobs</Text>
        <FlatList
          data={popularJobs}
          renderItem={({ item }) => <JobCard job={item} />}
          keyExtractor={(item) => item.id}
        />
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
    padding: 20,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A3A3A',
  },
  email: {
    fontSize: 16,
    color: '#7A7A7A',
  },
    
    profileButton:{
      padding:1,
      borderRadius: 20,
    },
    profileIcon:{
      width:50,
      height:50,
      borderRadius:25,
    },
  searchInput: {
    margin: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 10,
    backgroundColor: '#FFF',
  },
  section: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginHorizontal: 20,
    marginBottom: 10,
  },
});

export default HomeScreen;