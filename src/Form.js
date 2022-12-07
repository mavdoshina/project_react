import { useEffect, useState, useRef, useRouteMatch, useCallback, useMemo } from 'react';

// import { useEffect } from 'react';
import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
import {AUTHORS} from "./constants";
function Form(props) {
    // const {text, author} = data

    // const submitForm = (e) =>{
    //     e.preventDefault();
    //     if(text.length > 0) {
    //         setMessage(prevstate => [...prevstate, {text, author}])
    //     }

    //     setData({
    //         text: '',
    //         author: ''
    //     }) 
    //     inputRef.current?.focus();
    // }



    const { onAddMessage, formId } = props
    const [inputValue, setInputValue] = useState('')
    // const [inputText, setInputValue] = useState('')

    const inputFormId = useMemo(() => {
        return "message-input" + formId
    }, [formId])

    const handleChange = (event) => {
        console.log('Input value changed', { value: event.target.value })

        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log('on submit', { inputValue })

        if (onAddMessage) {
            console.log('sss');
            onAddMessage({ text: inputValue, sender: AUTHORS.ME })
        }

        setInputValue('')
    }



    return (
        <form onSubmit={handleSubmit} className="form-message">
            <TextField
            // inputRef={inputRef} 
            className="inpt"
            required
            id="outlined-required"
            label="Имя"
            value={inputValue}
            onChange = {handleChange}
            />
            {/* <TextField
            className="inpt"
            required
            id="outlined-required"
            label="Сообщение"
            value={text}
            onChange = {handleChange}
            /> */}
            {/* <input ref={inputRef} placeholder="Имя" className="inpt" value={author} onChange = {(e) => {
                setData(prevstate => ({...prevstate, author: e.target.value}))
            }}/> */}
            {/* <Input
            inputRef={inputRef} 
            variant="outlined"
            placeholder="Имя"
            value={author}
            onChange = {(e) => {
                setData(prevstate => ({...prevstate, author: e.target.value}))
            }}/> */}
            {/* <input placeholder="Сообщение" className="inpt" value={text} onChange = {(e) => {
                setData(prevstate => ({...prevstate, text: e.target.value}))
            }}/> */}
            {/* <button type="submit" className="btn">Отправить</button> */}
            <Button type="submit" variant="contained">Отправить</Button>
        </form>
    )
}

export default Form;