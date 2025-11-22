import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SectionCard } from '../../Components/SectionCard'
import { RoadmapItem } from '../../Components/RoadMapItem'
import { useRoute } from '@react-navigation/native'; // Ou useLocalSearchParams se estiver usando Expo Router

export default function CareerDetailsScreen() {
  const route = useRoute<any>();

  /**
   * route.params.career deve ser um objeto no mesmo formato do JSON da IA:
   * {
   *   id,
   *   card: { title, badge, short_description }
   *   details: { summary, why_recommended, roadmap: [] }
   * }
   */
  const { career } = route.params;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>{career.card.title}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{career.card.badge}</Text>
        </View>
      </View>

      {/* SUMMARY */}
      <SectionCard title="Sobre a carreira">
        <Text style={styles.sectionText}>{career.details.summary}</Text>
      </SectionCard>

      {/* WHY RECOMMENDED */}
      <SectionCard title="Por que recomendamos para você">
        <Text style={styles.sectionText}>{career.details.why_recommended}</Text>
      </SectionCard>

      {/* ROADMAP */}
      <SectionCard title="Seu roadmap inicial">
        {career.details.roadmap.map((item: string, index: number) => (
          <RoadmapItem key={index} text={item} />
        ))}
      </SectionCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },
  badge: {
    backgroundColor: '#DCFCE7',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#166534',
  },
  sectionText: {
    fontSize: 15,
    lineHeight: 21,
    color: '#4B5563',
  },
});
