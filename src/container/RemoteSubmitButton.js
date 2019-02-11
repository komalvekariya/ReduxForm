import React,{Component} from 'react'
import { connect } from 'react-redux'
import { submit } from 'redux-form';
import {TouchableOpacity,Text} from 'react-native'
import {CONTACT_FORM} from '../FormName'

const RemoteSubmitButton = ({ dispatch }) => {

    return (
        <TouchableOpacity style={{ margin: 10, alignItems: 'center' }} onPress={() => dispatch(submit(CONTACT_FORM))}>
            <Text style={{ backgroundColor: 'steelblue', color: 'white', height: 40, width: 100, textAlign: 'center' }}>
                submit
             </Text>
        </TouchableOpacity>

    )

}

export default connect()(RemoteSubmitButton)