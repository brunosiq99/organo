import './banner.css';

export const Banner = () => {
    return (
        // Parece html e não é, o react interpreta o JSX e insere no DOM
        // class é uma palavra reservada do java script, no react utilizaremos className
        <header className="banner">
            <img className="banner__img" src='img/banner.png' alt="Banner principal da página do Organo"/>
        </header>
    )
}