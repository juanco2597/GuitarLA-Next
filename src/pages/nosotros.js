import Image from "next/image";
import Layout from "@/components/layout";
import styles from '@/styles/nosotros.module.css'

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description='Sobre nosotros, guitarLA, tienda de musica'
        >
            <main className="contenedor">
                <h2 className="heading">Nosotros</h2>

                <div className={styles.contenido}>
                    <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
                    <div>
                        <p>
                            Quisque vehicula suscipit risus in fringilla. Suspendisse tempus neque sed sodales rhoncus. Nam semper rutrum enim sed auctor. Vivamus dignissim lobortis risus, at mollis purus dignissim ac. Curabitur sed ipsum tincidunt, pretium purus quis, iaculis ex. Ut condimentum felis nec libero tincidunt molestie. Nullam euismod pulvinar tellus, vel gravida felis gravida eget. Vivamus commodo pretium massa.

                            Phasellus a turpis ut nisi lobortis fringilla eu non nibh. Cras iaculis gravida nisi, a consectetur purus cursus nec. Maecenas eget quam sapien. Sed suscipit, augue vel placerat vulputate, nisl enim tempus enim, at faucibus massa lorem id neque. Aenean interdum nisi vel sapien placerat tincidunt. Curabitur arcu metus, ultricies in rutrum at, porttitor sed eros. Vestibulum lacinia quam quis est feugiat, sed ultricies risus ornare. Etiam rutrum vestibulum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

                    </div>
                </div>
            </main>
        </Layout>
    )
}
