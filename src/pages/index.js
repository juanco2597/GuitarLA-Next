import Link from "next/link"
import Layout from "@/components/layout"

export default function Home() {
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Blog de musica, venta de Guitarras y mas'}
      >
        <h1>Hola mundo en next</h1>
        <Link href='/nosotros'>Ir a nosotros</Link>
      </Layout>
    </>
  )
}
