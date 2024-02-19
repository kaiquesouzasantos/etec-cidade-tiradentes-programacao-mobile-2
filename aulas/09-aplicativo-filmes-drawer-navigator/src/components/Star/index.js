import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Star = ({ filled, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons
        name={filled ? 'ios-star' : 'ios-star-outline'}
        size={30}
        color={filled ? 'gold' : 'gray'}
      />
    </TouchableOpacity>
  );
};

const StarRating = ({ rating, onStarPress }) => {
  const MAX_RATING = 10;
  const stars = Array.from({ length: MAX_RATING }, (_, index) => index + 1);

  return (
    <View style={styles.container}>
      {stars.map((star) => (
        <Star key={star} filled={star <= rating} onPress={() => onStarPress(star)} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default StarRating;
