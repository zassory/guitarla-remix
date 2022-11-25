import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta(){
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras, blog de música'
  }
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href: imagen,
      as: 'image'
    }
  ]
}


function Nosotros() {
    
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={ imagen } alt="Imagen sobre nosotros" />

        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis dui sit amet est posuere maximus quis vel nunc. Praesent bibendum lobortis elementum. Etiam sollicitudin turpis in quam gravida cursus. Duis quis augue ac ligula congue tristique. Maecenas sed tempor diam, eu posuere quam. Morbi a fermentum ex. Aenean ac semper lectus, nec aliquam leo. Nullam elementum mauris sed est lacinia, id tempor justo congue. Nam erat urna, dictum quis velit a, vulputate interdum ligula. Vestibulum vitae nisi ut nibh facilisis varius quis nec nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis dui sit amet est posuere maximus quis vel nunc. Praesent bibendum lobortis elementum. Etiam sollicitudin turpis in quam gravida cursus. Duis quis augue ac ligula congue tristique. Maecenas sed tempor diam, eu posuere quam. Morbi a fermentum ex. Aenean ac semper lectus, nec aliquam leo. Nullam elementum mauris sed est lacinia, id tempor justo congue. Nam erat urna, dictum quis velit a, vulputate interdum ligula. Vestibulum vitae nisi ut nibh facilisis varius quis nec nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>

      </div>

    </main>
  )
}

export default Nosotros
