import { useFormikContext } from 'formik'
import React from 'react'

const Hockey = () => {
    const { values, setFieldValue } = useFormikContext();

    const handlechange = () => {
        const newValue = values.game3.includes('hockey') ?
            values.game3.filter((items) => items !== 'hockey')
            : [...values.game3, 'hockey']
        setFieldValue('game3', newValue);
        console.log("Selected Games:", newValue);
    }
    return (
        <div>
            <label>
                <input type='checkbox' name='game3' value='hockey' checked={values.game3.includes('hockey')} onChange={handlechange} />
                Hockey
            </label>
        </div>
    )
}

export { Hockey }
