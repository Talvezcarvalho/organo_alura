import './Rodape.css'

export const Rodape = ()=> {
    return (
        <footer className='rodape'>
            <div className='redes-sociais'>
                <a href='#'>
                    <img src='/imagens/fb.png'></img>
                </a>
                <a href='#'>
                    <img src='/imagens/tw.png'></img>
                </a>
                <a href='#'>
                    <img src='/imagens/ig.png'></img>
                </a>
            </div>
            <div className='rodape_logo'>
                <img src='/imagens/logo.png'></img>
            </div>
            <div className='rodape_texto'>
                <p>Desenvolvido por Carvalho.</p>
            </div>
        </footer>
    )
}
export default Rodape;