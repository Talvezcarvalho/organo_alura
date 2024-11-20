import { useState } from 'react'
import './Campotexto.css'

const CampoTexto = (props) => {

const aoDigitado = (evento) => {
    props.aoAlterar(evento.target.value)
   
} 
 
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto