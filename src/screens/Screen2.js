import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { styles as style1 } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../redux/root-actions';

export default function Screen2({ route, navigation }) {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch()
  const users = useSelector((store) => store.users.dataSource);

  useEffect(() => {
    setName(route.params.item.name);
    setPhone(route.params.item.phone);
    setEmail(route.params.item.email);
  }, []);

  const updateData = () => {
    let usersAux = users.map(item => {
      if(item.key == route.params.item.key){
        item = {
          ...item,
          name: name,
          phone: phone,
          email: email
        }
        return item
      } else  return item
    });
    dispatch({type: actions.usersTypes.USERS_UPDATE, payload: usersAux});
    navigation.navigate('Screen1');
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...style1.title,
          textAlign: "center",
          marginVertical: 15,
          fontSize: 25,
        }}
      >
        Actualizar los Datos
      </Text>
      <Text style={{ ...style1.title, fontSize: 20, marginVertical: 5 }}>
        Name
      </Text>
      <TextInput value={name} style={styles.textInput1} onChangeText={text => setName(text)} />
      <Text style={{ ...style1.title, fontSize: 20, marginVertical: 5 }}>
        Phone
      </Text>
      <TextInput value={phone.toString()} style={styles.textInput1} onChangeText={text => setPhone(text)} />
      <Text style={{ ...style1.title, fontSize: 20, marginVertical: 5 }}>
        Email
      </Text>
      <TextInput value={email} style={styles.textInput1} onChangeText={text => setEmail(text)} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={updateData}>
          <Text
            style={{
              ...style1.title,
              fontSize: 20,
              textAlign: "center",
              color: "white",
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  textInput1: {
    height: 50,
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 20,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    borderRadius: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "rgb(90, 200,250)",
    borderRadius: 10,
    marginVertical: 15,
    justifyContent: "center",
  },
});
