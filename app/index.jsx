import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Chip,
  Text,
  Title,
} from "react-native-paper";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>React Native Paper UI Kit</Title>

      {/* Buttons */}
      <Text style={styles.section}>Botões</Text>
      <View style={styles.row}>
        <Button mode="contained" style={styles.btn}>
          Contained
        </Button>
        <Button mode="outlined" style={styles.btn}>
          Outlined
        </Button>
        <Button mode="text" style={styles.btn}>
          Text
        </Button>
      </View>

      {/* Chips */}
      <Text style={styles.section}>Chips</Text>
      <View style={styles.row}>
        <Chip icon="information" style={styles.chip}>
          Info
        </Chip>
        <Chip icon="heart" style={styles.chip}>
          Favorito
        </Chip>
        <Chip icon="star" style={styles.chip}>
          Destaque
        </Chip>
      </View>

      {/* Avatar */}
      <Text style={styles.section}>Avatares</Text>
      <View style={styles.row}>
        <Avatar.Text size={50} label="AM" style={styles.avatar} />
        <Avatar.Icon size={50} icon="account" style={styles.avatar} />
        <View>
          <Avatar.Text size={50} label="JS" style={styles.avatar} />
          <Badge style={styles.badge}>3</Badge>
        </View>
      </View>

      {/* Card */}
      <Text style={styles.section}>Card</Text>
      <Card style={styles.card}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Title title="Título do Card" subtitle="Subtítulo aqui" />
        <Card.Content>
          <Text>Este é um exemplo de card com React Native Paper.</Text>
        </Card.Content>
        <Card.Actions>
          <Button>Cancelar</Button>
          <Button mode="contained">Ok</Button>
        </Card.Actions>
      </Card>

      <Button
        mode="contained"
        style={styles.navBtn}
        onPress={() => router.push("/formulario")}
      >
        Ver Formulário →
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f5f5f5" },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  section: { fontSize: 16, fontWeight: "bold", marginTop: 16, marginBottom: 8 },
  row: { flexDirection: "row", flexWrap: "wrap", gap: 8, alignItems: "center" },
  btn: { marginBottom: 8 },
  chip: { marginBottom: 8 },
  avatar: { marginRight: 8 },
  badge: { position: "absolute", top: 0, right: 0 },
  card: { marginTop: 8, marginBottom: 16 },
  navBtn: { marginBottom: 32 },
});
