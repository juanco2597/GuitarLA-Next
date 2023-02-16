import Layout from "@/components/layout";
import Link from "next/link";

export default function Nosotros() {
    return (
        <Layout
            title={'Nosotros'}
            description='Sobre nosotros, guitarLA, tienda de musica'
        >
            <h1>Putos todos</h1>
            <Link href='/'>Ir al inicio</Link>

        </Layout>
    )
}
