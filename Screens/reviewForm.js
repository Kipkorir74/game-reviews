import React from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';

 export default function reviewForm(){
    
    return(
        <View>
            <Formik
            initialValues={{title:'', body:'', rating:''}}
            onSubmit = {values=>{
             console.log(values)
            }}
            >
                {(props)=>(
                    <View>
                        <TextInput
                        style={styles.formInput}
                        placeholder='Review Title'
                        onChangeText={props.handleChange('title')}
                        value={props.values.title}
                        />

                        <TextInput
                        style={styles.formInput}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        />

                        <TextInput
                        style={styles.formInput}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        />
                        <Button title='submit' color='blue' onPress={props.handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )
 }

 const styles = StyleSheet.create({ 
    formInput:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:12,
        fontSize:18,
        borderRadius: 6,
    }
 }) 