import { View, Text, StyleSheet } from 'react-native';

import colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.accent500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
});
