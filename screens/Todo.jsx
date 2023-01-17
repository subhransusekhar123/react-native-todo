import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';

const Screen1 = () => {
  const [first,setFirst] = useState("")
  const [middle,setMiddle] = useState("")
  const [last,setLast] = useState("")


  const postData = async() => {
    console.log("hellp")
    await axios.post("http://localhost:2020/mongoserver/post",
    {"firstName":first,"middleName":middle,"lastName":last}
    )
    .then(ele => console.log("posted"))
    .catch(err => console.log(err))
  }

const firstChangeHandler = (first) => {
  setFirst(first)
  console.log(first)
}

const secondChangeHandler = (middle) => {
  setMiddle(middle)
  console.log(middle)
}

const lastChangeHandler = (last) => {
  setLast(last)
  console.log(last)
}
  return (
    <View>
       <TextInput style={styles.textInput}
      label="Your First Name"
      value={first}
      onChangeText={firstChangeHandler}
      type="Outlined"
    />

<TextInput style={styles.textInput}
      label="Your Middle Name"
      value={middle}
      onChangeText={secondChangeHandler}
      type="Outlined"
    />

<TextInput style={styles.textInput}
      label="Your Last Name"
      type="Outlined"
      value={last}
      onChangeText = {lastChangeHandler}
    />


    <Button buttonColor='black' textColor='white' style={styles.button} onPress={ postData }>Submit</Button>
    </View>
  )
}

const styles = StyleSheet.create({
 textInput:{
  backgroundColor:"white",
  marginHorizontal:30,
  marginVertical:10
 },
 button:{
  marginHorizontal:30,
  marginVertical:10,
  paddingVertical:5,
 }
})

export default Screen1