import { StyleSheet, SafeAreaView } from "react-native";
import { colors } from "./src/constants/colors";
import Navigation from "./src/navigator/Navigation";
import { Provider } from "react-redux";
import store from "./src/store";

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigation />
      </Provider>
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
