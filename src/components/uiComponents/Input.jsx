import React, { useContext } from 'react'
import { FormContext } from '../App'
import TextField from '@material-ui/core/TextField';


function Input(props) {
    props = props.edata
    const { updateForm } = useContext(FormContext)

    const onChange = e => {
        updateForm(props.jsonKey, e.target.value)
    }

    return (

        <TextField id="outlined-basic" label={props.name} variant="outlined" type="text"
        name={props.name}
        placeholder={props.placeholder}
        readOnly={props.immutable}
        pattern={props.pattern}
        onChange={e => onChange(e)}
        required={props.validate.required} />
    )
}

export default Input