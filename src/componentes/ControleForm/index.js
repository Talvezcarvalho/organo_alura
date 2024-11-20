import './ControleForm.css'



const ControleForm = (props)=> {
    return (
        <button onClick={props.aoMudarVisibilidade} type='button' className='botao-controle'>{props.children}</button>
    )
}

export default ControleForm;