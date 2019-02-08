/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import React,{Component} from 'react'
import {StyleSheet,View,Text  } from 'react-native'
import{Provider} from 'react-redux'
import {name as appName} from './app.json';
import store from './src/store'
import ContactForm from './src/container/contactForm';

// const handleSubmit=(values)=>
// {
//     alert('Submitted....'+values)
// }

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <ContactForm />
            </Provider>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
