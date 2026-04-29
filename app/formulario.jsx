import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Checkbox,
  Divider,
  Snackbar,
  Switch,
  Text,
  TextInput,
  Title,
} from "react-native-paper";
import { useState } from "react";

export default function Formulario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [switchOn, setSwitchOn] = useState(false);
  const [checked, setChecked] = useState(false);
  const [snackbar, setSnackbar] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>Formulário</Title>

      <TextInput
        label="Nome"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={styles.input}
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        mode="outlined"
        keyboardType="email-address"
        style={styles.input}
      />

      <TextInput
        label="Senha"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <Divider style={styles.divider} />

      <View style={styles.row}>
        <Text>Receber notificações</Text>
        <Switch value={switchOn} onValueChange={setSwitchOn} />
      </View>

      <View style={styles.row}>
        <Checkbox
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
        />
        <Text>Aceito os termos de uso</Text>
      </View>

      <Button
        mode="contained"
        style={styles.btn}
        onPress={() => setSnackbar(true)}
      >
        Enviar
      </Button>

      <Snackbar
        visible={snackbar}
        onDismiss={() => setSnackbar(false)}
        duration={3000}
        action={{ label: "OK", onPress: () => setSnackbar(false) }}
      >
        Formulário enviado com sucesso!
      </Snackbar>
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
  input: { marginBottom: 12 },
  divider: { marginVertical: 16 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  btn: { marginTop: 16, marginBottom: 32 },
});
