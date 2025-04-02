import { useFormikContext } from 'formik';
import React from 'react'

const Inputfield = () => {
const { getFieldProps } = useFormikContext();
    return (
        <div>
            <input type='text' {...getFieldProps('username')}   />
        </div>
    )
}

export { Inputfield }
