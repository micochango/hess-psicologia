import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet='utf-8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Hess Psicología', 
    keywords: 'psicologia, parejas, terapia, familia, familiar, clinica, salud mental, guatemala, logoterapia, ayuda, reclutamiento, seleccion de personal, recursos humanos, psicometria',
    description: 'Servicios, de, psicología, familiar, y, de, pareja, Servicios, de, psicometría, para, reclutamiento, y, seleccion, de personal, guatemala',
}

export default Meta