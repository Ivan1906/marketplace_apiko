import React from 'react';
import s from './Alert.module.scss';
import Button from '../Button/Button';

function close(event) {
    if (event.target.parentElement.getAttribute("name") === 'alert') {
        event.target.parentElement.style.display = "none";    
    } else if (event.target.parentElement.parentElement.getAttribute("name") === 'alert') {
        event.target.parentElement.parentElement.style.display = "none";
    }
}

function Alert({message}) {

    const style = {
        height: '38px'
    };

    return(
        <div className={s.Container} name="alert">
            <div className={s.message}>{message}</div>
            <Button text="Закрити вікно" style={style} onClick={close} disabledBtn/> 
        </div>
    );
}

export default Alert;