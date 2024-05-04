import { View, StyleSheet } from "react-native";
import Header from "./src/components/Header";
import Home from "./src/screens/Home";
import { colors } from "./src/constants/colors";

const App = () => {
  return(
    <View style={styles.container}>
      <Header title="Petfinder" />
      <Home />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayLight,
    height: "100%"
  }
});
