import React from 'react';
import { TextInput, StyleSheet, TextInputProps, TextStyle } from 'react-native';

interface InputFieldProps extends TextInputProps {
  customStyle?: TextStyle;
}

const InputField = ({ customStyle, ...props }: InputFieldProps): JSX.Element => {
  return (
    <TextInput style={[styles.input, customStyle]} {...props} />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});

export default InputField;
