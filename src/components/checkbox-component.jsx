import { Form, Formik } from 'formik'
import React from 'react'
import { Cricket } from './cricket-checkbox'
import { Football } from './football-checkbox'
import { Hockey } from './hockey-checkbox'
// import { initialValues } from './schema'

const Checkcomponent = () => {
    return (
        <div>
            <Formik initialValues={{
                cricket:false,
                username:'',
                game1: [],
                game2: [],
                game3: []

            }}
            onSubmit={(values) => {
                console.log(values);
            }}>
            <Form>
                <Cricket />
                <Football />
                <Hockey />
                <button type='submit'>xdsdsffdfdfdsd</button>
            </Form>
        </Formik>
        </div >
    )
}

export { Checkcomponent }
