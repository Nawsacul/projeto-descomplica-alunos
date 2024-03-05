import { Link } from 'react-router-dom';
import styles from './Banner.module.css';
import circuloColorido from './circulo_colorido.png'

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, pessoal!
                </h1>

                <p className={styles.paragrafo}>
                    Essa foi a minha solução para o desafio proposto. <span>Espero que atenda as expectativas!</span>
                </p>

                <Link to="/alunos" className={styles.linkToFiltro}>Ir para o filtro</Link>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img 
                    className={styles.minhaFoto}
                    src="https://media.licdn.com/dms/image/D4D03AQEIbR_agYmZNw/profile-displayphoto-shrink_800_800/0/1699407403840?e=1712793600&v=beta&t=2HzgXByzsdw28CuzuLoUu6kay-xBwmZpL6D19quIn1s"
                    alt='Foto do Lucas Queiroz sorrindo'
                />
            </div>
        </section>
    )
}

export default Banner;