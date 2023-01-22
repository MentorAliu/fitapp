/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native'


export const App = () => {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundStyle = { backgroundColor: isDarkMode ? Colors.darker : Colors.lighter, }

  const [count, setCount] = useState(0)

  return (
    <>
      <SafeAreaView style={backgroundStyle} />
      <View>
        <Text style={styles.sectionTitle}>Hello World</Text>
        <Text style={styles.sectionTitle}>Count is {count}</Text>
      </View>
      <View>
        <Button title='Increase' onPress={() => setCount(prev => prev + 1)} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
})

