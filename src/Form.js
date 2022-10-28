// import { useEffect } from 'react';
import Button from '@mui/material/Button';
// import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';
function Form({data, setData, setMessage, inputRef}) {
    const {text, author} = data

    const submitForm = (e) =>{
        e.preventDefault();
        if(text.length > 0) {
            setMessage(prevstate => [...prevstate, {text, author}])
        }

        setData({
            text: '',
            author: ''
        }) 
        inputRef.current?.focus();
    }

    return (
        <form onSubmit={submitForm} className="form-message">
            <TextField
            inputRef={inputRef} 
            className="inpt"
            required
            id="outlined-required"
            label="Имя"
            value={author}
            onChange = {(e) => {
                setData(prevstate => ({...prevstate, author: e.target.value}))
            }}
            />
            <TextField
            className="inpt"
            required
            id="outlined-required"
            label="Сообщение"
            value={text}
            onChange = {(e) => {
                setData(prevstate => ({...prevstate, text: e.target.value}))
            }}
            />
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