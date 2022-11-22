import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';

export const meta = () => {

}

export const links = () => {

}

export const loader = async() => {

  const guitarras = await getGuitarras();
  console.log('-----------------------------');
  console.log(guitarras);  

  return {}
}


function Index() {
  return (
    <div>index</div>
  )
}

export default Index
