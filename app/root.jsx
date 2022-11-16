import {
   Meta,
   Links,
   Outlet,
   Scripts,
   LiveReload
} from '@remix-run/react';
import styles from '~/styles/index.css';
import { Header } from '~/components/header';

export const meta = () => {
    return (
        {
            charset:'utf-8',
            title:'GuitarLA - Remix',
            viewport:"width=device-width,initial-scale=1"
        }
    )
}


export const links = () => {
    return [
        {
            rel:'stylesheet',
            href:'https://csstools.github.io/normalize.css/11.0.0/normalize.css'
        },
        {
            rel: 'preconnect',
            href:'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href:'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel:'stylesheet',
            href:'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}

export default function App(){

    return(
        <Document>
            <Outlet />
        </Document>
    )
}

const Document = ({ children }) => {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                { children }

                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}