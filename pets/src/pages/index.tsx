import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';


const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo="dumdum" 
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            <strong>pode adotar um pet virtualmente.</strong>
          </span>
        } />
      <Lista  pets={[
          {
            id: 1,
            nome: 'Florêncio',
            historia: 'dumdum',
            foto: 'https://c.tenor.com/MPJHlWHB5KAAAAAC/cuphead-dancing.gif',
          },
          {
            id: 2,
            nome: 'jasndsandsad',
            historia: 'ok',
            foto: 'https://preview.redd.it/ta80pxnkc5a61.jpg?auto=webp&s=5a417274c9256ee47a496fc9fdaf348ea885df65',
          },
          {
            id: 3,
            nome: 'S.A.N.I.C',
            historia: 'nhau blaw',
            foto: 'https://cdn.discordapp.com/attachments/472498454145531916/982718341674328144/output-onlinegiftools.gif',
          },
          ]}/>
    </div>
  )
}

export default Home
