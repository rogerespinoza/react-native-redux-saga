import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { styles as styles1 } from "../styles";

import { useSelector } from "react-redux";

const getUsers = (state) => {
  const {users} = state;
  return { users} 
}

export default function Screen1({ navigation }) {
  const users = useSelector((store) => store.users.dataSource);
  
  // useEffect(() => {
  //   console.log(users);
  // });

  const CardUsers = () => {
    return users.map((item, i) => (
      <View key={i} style={styles.cardBackground}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => {
            navigation.navigate("Screen2", { item });
          }}
        >
          <View style={styles.rowData}>
            <Text style={{ ...styles1.title, fontSize: 25 }}>Nombre</Text>
            <Text style={{ ...styles1.title, fontSize: 25 }}>{item.name}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={{ ...styles1.title, fontSize: 20 }}>Age</Text>
            <Text style={{ ...styles1.title, fontSize: 20 }}>{item.age}</Text>
          </View>
          <View style={styles.rowData}>
            <Text style={{ ...styles1.title, fontSize: 20 }}>Address</Text>
            <Text style={{ ...styles1.title, fontSize: 20 }}>
              {item.address}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    ));
  };
  return (
    <View style={styles1.center}>
      <ScrollView>
        <CardUsers />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardBackground: {
    height: 140,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: "#ddd",
    justifyContent: "center",
  },
  rowData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 50,
    alignItems: "center",
    marginVertical: 5,
  },
});
