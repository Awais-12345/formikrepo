import { useFormikContext } from 'formik'
import React from 'react'


const Football = () => {
    const { values, setFieldValue } = useFormikContext();

    const handlechange = () => {
        const newValue = values.game2.includes('football') ?
            values.game2.filter((items) => items !== 'football')
            : [...values.game2, 'football']
        setFieldValue('game2', newValue,);
        console.log("Selected Games:", newValue);
    }
    return (
        <div>
            <label>
                <input type='checkbox' name='game2' value='football' checked={values.game2.includes('football')} onChange={handlechange} />
                Football
            </label>
        </div>
    )
}

export { Football }
