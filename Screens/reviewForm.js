import React from 'react';
 import { Stylesheet, Button, TextInput, View, Text } from 'react-native';
 import { Formik } from 'formik';

 export const reviewForm = props => {
    
    return(
        <View>
            <Formik
            initialValues={{title:'', body:'', rating:''}}
            onSubmit = {
            values => console.log(values)
            }
            >
                {({handleChange, handleBlur, handleSubmit, values})=>(
                    <View>
                        <TextInput
                        style={styles.formInput}
                        placeholder='Review Title'
                        onChangeText={handleChange('title')}
                        value={values.title}
                        />

                        <TextInput
                        style={styles.formInput}
                        placeholder='Review Body'
                        onChangeText={handleChange('body')}
                        value={values.body}
                        />

                        <TextInput
                        style={styles.formInput}
                        placeholder='Rating (1-5)'
                        onChangeText={handleChange('rating')}
                        value={values.rating}
                        />
                        <Button title='submit' color='blue' onPress={handleSubmit}/>
                    </View>
                )}

            </Formik>
        </View>
    )
 }
 const styles = Stylesheet.create({
    formInput:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:12,
        fontSize:18,
        borderRadius: 6,
    }
 }) 