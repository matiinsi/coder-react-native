import { StyleSheet, SafeAreaView } from "react-native";
import { colors } from "./src/constants/colors";
import Navigation from "./src/navigator/Navigation";

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grayLight,
    height: "100%"
  }
});
