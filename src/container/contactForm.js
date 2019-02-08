import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'

//validate
const required = value => value ? undefined : 'Required';
const maxLength = value => value && value.length > 15 ? 'Must be 15 character or less' : undefined;
const isValidEmail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const number = value => value && isNaN(Number(value)) ? undefined:'UseNAme Must be string';
const renderField = ({ label, keyboardType, meta: { touched, error }, input: { onChange, ...restInput } }) => {
    return (
        <View>
            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Text style={{ fontSize: 10, width: 50 }}>
                    {label}
                </Text>
                <TextInput style={{ borderColor: 'steelblue', borderWidth: 1, height: 37, width: 180 }}
                    keyboardType={keyboardType} onChangeText={onChange}{...restInput} />
            </View>
            {touched && ((error && <Text style={{ color: 'red' }}>{error}</Text>))}
        </View>
    );
}
const submit = values => {
    alert('Validation:=' + JSON.stringify(values))
}
const ContactComponent = (props) => {
    const { handleSubmit } = props
    return (
        <View style={{ flex: 1, flexDirection: 'column', margin: 40, justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 18 }}>Redux Form Example</Text>
            <Field keyboardType="default" component={renderField} name="username" label='UserName'
                validate={[required, maxLength, number]} />
            <Field keyboardType="email-address" component={renderField} name="email" label='Email'
                validate={isValidEmail} />
            <TouchableOpacity style={{ margin: 10, alignItems: 'center' }} onPress={handleSubmit(submit)}>
                <Text style={{ backgroundColor: 'steelblue', color: 'white', height: 40, width: 100, textAlign: 'center' }}>
                    submit
            </Text>

            </TouchableOpacity>
        </View>
    )
}

const ContactForm = reduxForm({
    form: 'contact',
})(ContactComponent)


export default ContactForm 