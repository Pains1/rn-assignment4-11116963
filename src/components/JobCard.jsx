import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const JobCard = ({ job, featured }) => {
  return (
    <View style={[styles.container, featured && styles.featuredContainer]}>
      <Image source={job.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{job.title}</Text>
        {featured ? (
          <Text style={[styles.company, styles.featuredText]}>{job.company}</Text>
        ) : (
          <View style={styles.infoContainer}>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.salary}>{job.salary}</Text>
          </View>
        )}
        {featured && (
          <View style={styles.infoContainer}>
            <Text style={[styles.salary, styles.featuredText]}>{job.salary}</Text>
            <Text style={[styles.location, styles.featuredText]}>{job.location}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    image: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  featured: PropTypes.bool,
};

JobCard.defaultProps = {
  featured: false,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  featuredContainer: {
    backgroundColor: '#4285F4',
    padding: 15,
    width: 300,
    marginRight: 20,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A3A3A',
    marginBottom: 5,
  },
  company: {
    fontSize: 14,
    color: '#7A7A7A',
    marginBottom: 5,
  },
  salary: {
    fontSize: 14,
    color: '#3A3A3A',
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: '#7A7A7A',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredText: {
    color: '#FFF',
  },
});

export default JobCard;