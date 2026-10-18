
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

const features = [
  {
    title: 'AI Anime Creator',
    description: 'Turn your ideas into anime scenes.',
  },
  {
    title: 'Video Editor',
    description: 'Plan clips, add text, and organise scenes.',
  },
  {
    title: 'Story Studio',
    description: 'Write anime stories and episode scripts.',
  },
  {
    title: 'Character Creator',
    description: 'Develop original heroes and rivals.',
  },
  {
    title: 'My Projects',
    description: 'Your workspace for anime projects.',
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.brand}>LOREKAGE</Text>
        <Text style={styles.heading}>AI STUDIO</Text>
        <Text style={styles.subtitle}>
          Your anime creation workshop
        </Text>

        {features.map((feature) => (
          <View key={feature.title} style={styles.card}>
            <Text style={styles.cardTitle}>{feature.title}</Text>
            <Text style={styles.cardDescription}>
              {feature.description}
            </Text>
          </View>
        ))}

        <Text style={styles.note}>
          First version under development.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#101020',
  },
  content: {
    padding: 22,
  },
  brand: {
    color: '#B8A2FF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 24,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  subtitle: {
    color: '#C8C8D8',
    fontSize: 15,
    marginTop: 8,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#202039',
    borderRadius: 14,
    padding: 18,
    marginBottom: 14,
  },
  cardTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    color: '#C8C8D8',
    fontSize: 14,
    marginTop: 7,
  },
  note: {
    color: '#A8A8BA',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
});
