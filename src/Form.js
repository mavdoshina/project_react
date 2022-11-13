function Form({data, setData, setMessage}) {
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
    }

    return (
        <form onSubmit={submitForm} className="form-message">
            <input placeholder="Имя" className="inpt" value={author} onChange = {(e) => {
                setData(prevstate => ({...prevstate, author: e.target.value}))
            }}/>
            <input placeholder="Сообщение" className="inpt" value={text} onChange = {(e) => {
                setData(prevstate => ({...prevstate, text: e.target.value}))
            }}/>
            <button type="submit" className="btn">Отправить</button>
        </form>
    )
}

export default Form;