import { useState , useEffect } from 'react';
import {
   Meta, //principio del html
   Links, //principio del html
   Outlet,//El render
   Scripts,//
   LiveReload,
   useCatch,
   Link
} from '@remix-run/react';
import styles from '~/styles/index.css';
import { Header } from '~/components/header';

import { Footer } from '~/components/footer';

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

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null;

    const [ carrito , setCarrito ] = useState(carritoLS);

    useEffect( () => {
        localStorage.setItem('carrito',JSON.stringify(carrito));
    } , [ carrito ] );

    const agregarCarrito = ( guitarra ) => {
                                              //elemento que itera  elemento recibido
        if(carrito.some( ( guitarraState ) => guitarraState.id === guitarra.id )){
            // Iterar sobre el arreglo, e identificar el elemento duplicado
            const carritoActualizado = carrito.map( ( guitarraState ) => {
                if(guitarraState.id === guitarra.id){
                    //Reescribir la cantidad
                    // opcion 1 guitarraState.cantidad += guitarra.cantidad
                    //guitarraState.cantidad = guitarraState.cantidad + guitarra.canitidad
                    guitarraState.cantidad = guitarra.cantidad;
                }
                return guitarraState;
            })
            //Añadir al carrito
            setCarrito( carritoActualizado );
        }else{            
            setCarrito([...carrito, guitarra]);
        }
    }

    const actualizarCantidad = ( guitarra ) => {
        const carritoActualizado = carrito.map(  guitarraState  => {
            if(guitarraState.id === guitarra.id){
                guitarraState.cantidad = guitarra.cantidad;
            }
            return guitarraState;
        })
        //No es necesario el spread porque map te crea un nuevo arreglo
        setCarrito(carritoActualizado);
    }

    const eliminarGuitarra = id => {
        const carritoActualizado = carrito.filter( guitarraState => guitarraState.id !== id );
        setCarrito(carritoActualizado);
    }

    return(
        <Document>
            <Outlet
                context = {{
                    agregarCarrito,
                    carrito,
                    actualizarCantidad,
                    eliminarGuitarra
                }}
            />
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
                <Footer />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

/** Manejo de errores */
export const CatchBoundary = () => {
    const error = useCatch()
    return (
        <Document>
            <p className='error'>{error.status} { error.statusText }</p>
            <Link className='error-enlace' to="/">Tal vez quieras volver a la página principal</Link>
        </Document>
    )
}

export const ErrorBoundary = ({error}) => {
    return (
        <Document>
            <p className='error'>{error.status} { error.statusText }</p>
            <Link className='error-enlace' to="/">Tal vez quieras volver a la página principal</Link>
        </Document>
    )
}