import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { GreetingHeader } from '../../Components/GreetingHeader';
import { CareerCard } from '../../Components/CareerCard';
import { useUser } from '@/context/UserContex';
import { useNavigation } from '@react-navigation/native';
import { fetchCareerRecommendations } from '@/services/fetchRecommendations';

export default function Home() {
  const navigation = useNavigation<any>();

  const { user } = useUser();
  const [recs, setRecs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const load = async () => {
      try {
        setLoading(true);
        const result = await fetchCareerRecommendations(user);
        setRecs(result);
      } catch (err) {
        console.error("Erro ao obter recomendações:", err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [user]);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#2E7BB4" />
        <Text style={{ marginTop: 12 }}>Gerando recomendações…</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.container}>
      <GreetingHeader name={user?.username} />

      <Text style={styles.sectionTitle}>Carreiras recomendadas para você</Text>

      <View style={styles.cardsContainer}>
        {recs.map((c) => (
          <CareerCard
            key={c.id}
            title={c.card.title}
            badgeLabel={c.card.badge}
            icon={null}
            onPress={() => navigation.navigate("CareerDetailsScreen", { career: c })}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F4F7FB" },
  container: { padding: 24 },
  loading: { flex: 1, justifyContent: "center", alignItems: "center" },
  sectionTitle: { fontSize: 20, fontWeight: "700", marginVertical: 16 },
  cardsContainer: { marginBottom: 32 },
});
