import React from 'react';
 import { Stylesheet, Button, TextInput, View, Text } from 'react-native';
 import { Formik } from 'formik';

 export default function reviewForm(){
    
    return(
        <View>
            <Formik
            initialValues={{title:'', body:'', rating:''}}
            onSubmit = {(values)=>{
                values => console.log(values)
            }}
            >
                {(props)=>(
                    <View>
                        <TextInput/>
                        
                    </View>
                )}

            </Formik>
        </View>
    )
 }