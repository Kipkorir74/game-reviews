import React from 'react';
import { Button, TextInput, View, Text, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';


const ReviewSchema = yup.object({
    title: yup.string()
        .required()
            .min(4),
    body: yup.string()
        .required()
            .min(10,'Too short! Elaborate') ,
    rating: yup.string()
        .required().test('is-num-1-5','Rating ought to be a number between 1-5', (value) => {
            return parseInt(value) < 6 && parseInt(value) > 0;
        })

       
})
 export default function reviewForm( {addReview} ){
    
    return(
        <View>
            <Formik
            initialValues={{title:'', body:'', rating:''}}
            validationSchema={ReviewSchema}
            onSubmit = {(values, actions)=>{
                console.log(values);
                // actions.resetForm();
                addReview(values);
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
                        <Text style={styles.errorText}>{props.errors.title}</Text>

                        <TextInput
                        multiline minHeight={50}
                        style={styles.formInput}
                        placeholder='Review Body'
                        onChangeText={props.handleChange('body')}
                        value={props.values.body}
                        />
                         <Text style={styles.errorText}>{props.errors.body}</Text>

                        <TextInput
                        style={styles.formInput}
                        placeholder='Rating (1-5)'
                        onChangeText={props.handleChange('rating')}
                        value={props.values.rating}
                        />
                         <Text style={styles.errorText}>{props.errors.rating}</Text>

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
    },
    errorText:{
        color:'crimson',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:6,
        textAlign:'center'
    }
 }) 