import { useFormikContext } from 'formik'
import React from 'react'
import { Inputfield } from './input-field';

const Cricket = () => {
    const { values, setFieldValue } = useFormikContext();

    const handleChange = (e) => {
        
        if (values.cricket) {
            setFieldValue('cricket', false);
            setFieldValue('username', ''); 
        } else {
            setFieldValue('cricket', true);
        }
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={values.cricket}
                    onChange={handleChange}
                />
                Cricket
            </label>
            {values.cricket && <Inputfield />}
        </div>
    );
}

export { Cricket };
