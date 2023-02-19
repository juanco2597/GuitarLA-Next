import styles from '@/styles/curso.module.css'

export default function Curso({ curso }) {
    const { Contenido, Imagen, Titulo } = curso.attributes
    return (
        <section className={`${styles.curso} curso`}>
            <style jsx>
                {`
                    .curso{
                            background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), 
                            url(${Imagen?.data?.attributes?.url})
                    }
                `}
            </style>
            <div className={`contenedor ${styles.grid}`}>
                <div className={styles.contenido}>
                    <h2 className='heading'>{Titulo}</h2>
                    <p>{Contenido}</p>
                </div>
            </div>
        </section>
    )
}
