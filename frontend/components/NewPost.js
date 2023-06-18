import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function NewPost({ onClose }) {
  const [isPressed, setIsPressed] = useState(false);
  const addButtonStyle = isPressed ? [styles.addButton, styles.addButtonPressed] : styles.addButton;

  const handlePressClose = () => {
    onClose();
  };

  const handleButtonPressIn = () => {
    setIsPressed(true);
  };

  const handleButtonPressOut = () => {
    setIsPressed(false);
  };

  const handlePressPost = () => {
    // logic for saving the post to the database
    handlePressClose();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={handlePressClose}>
          <Ionicons name="md-arrow-back-sharp" size={50} color="#D3D3D3" style={styles.backButton} />
        </Pressable>
        <Text style={styles.title}>New Post</Text>
        <View style={{ width: 40 }}></View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.inputText}>Avalanche danger:</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter avalanche danger"
          multiline={true}
          numberOfLines={3}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.inputText}>Snow Conditions:</Text>
        </View>
        
        <TextInput
          style={styles.input}
          placeholder="Enter snow conditions"
          multiline={true}
          numberOfLines={3}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputLabel}>
          <Text style={styles.inputText}>Route:</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter route"
          multiline={true}
          numberOfLines={3}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          { backgroundColor: pressed ? "#0096FF" : "gray" },
        ]}
        onPress={handlePressPost}
        onPressIn={handleButtonPressIn}
        onPressOut={handleButtonPressOut}
      >
        <Text style={styles.addButtonText}>Add Post</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    width: 40,
    marginTop: 20,
    left: -40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
    alignSelf: "center",
    marginTop: 20,
    color: "#0096FF",
  },
  addButton: {
    backgroundColor: "gray",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomColor: "#0096FF",
    borderBottomWidth: 3,
  },
  input: {
    fontSize: 16,
    paddingVertical: 4,
    borderColor: "#D3D3D3",
    borderWidth: 2,
    height: 60,
    width: 300,
    marginTop: 5
  },
  inputText: {
    fontSize: 20,
    letterSpacing: 1.5
  }
});
