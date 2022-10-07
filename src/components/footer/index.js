import './footer.css';

export const Footer = () => {
    return(
        <footer>
            <section className='footer container'>
                <div className='social-media'>
                    <a href=""><img src="./img/fb.png" alt="Facebook"/></a>
                    <a href=""><img src="./img/tw.png" alt="Twitter"/></a>
                    <a href=""><img src="./img/ig.png" alt="Instagram"/></a>
                </div>
                <div className="logo">
                    <img src="./img/logo.png" alt="Logo da Organo"></img>
                </div>
                <div className="developed">
                    <p>Desenvolvido por Alura</p>
                </div>
            </section>
        </footer>
    )
}
