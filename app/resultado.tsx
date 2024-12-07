import { Header } from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Resultado() {
  return (
  <View style={styles.container}>
    <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}  
    >
      <Ionicons name='chevron-back' size={28} color={'#004809'} />
    </TouchableOpacity>
    <View style={styles.header}>
      <Header leftBar={false} />
    </View>
    <Text style={styles.headerText}>
      Resultados Simulados
    </Text>
    <View style={styles.resultadosRow}>
      <View style={styles.info}>
        <Text style={styles.infoText}>
          Estimativa de produção:
        </Text>

        <Text style={styles.infoResp}>
          10 Toneladas
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.infoText}>
          Lucro:
        </Text>

        <Text style={styles.infoResp}>
          R$ 20.000,00
        </Text>
      </View>
    </View>
    <Text style={styles.riscosText}>
      Análise de riscos:
    </Text>
    <View style={styles.analiseRiscosContainer}>
      <View style={styles.analiseRiscosTextsContainer}>
        <Text style={styles.infoText}>
          Risco climático:
        </Text>
        <Text style={styles.analiseRiscosRespostas}>
          Seca no mês de novembro
        </Text>
      </View>
      <View style={styles.analiseRiscosTextsContainer}>
        <Text style={styles.infoText}>
          Risco pragas:
        </Text>
        <Text style={styles.analiseRiscosRespostas}>
          Percevejo barriga-verde
        </Text>
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E8F5E9',
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    alignContent: 'center'
  },
  header: {
    position: 'absolute',
    top: 38,
    right: 20
  },
  headerText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#004809',
    marginBottom: 25,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    padding: 5
  },
  resultadosRow: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap'
  },
  info: {
    gap: 10
  },
  infoText: {
    fontSize: 14,
    color: '#004809'
  },
  infoResp: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 12,
    borderRadius: 10,
    color: '#272A23',
    fontSize: 14,
    width: '100%',
    flexWrap: 'wrap'
  },
  riscosText: {
    fontSize: 14,
    color: '#004809',
    alignSelf: 'flex-start',
    marginTop: 12,
    marginBlock: 12
  },
  analiseRiscosContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingLeft: 20,
    paddingVertical: 15,
    gap: 10
  },
  analiseRiscosTextsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    gap: 10
  },
  analiseRiscosRespostas: {
    color: '#272A23',
    fontSize: 14
  }
});