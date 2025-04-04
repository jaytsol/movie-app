import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const movieDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Movie Detail: {id}</Text>
    </View>
  );
};
export default movieDetail;
const styles = StyleSheet.create({});
