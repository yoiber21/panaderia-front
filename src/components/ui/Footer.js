import { Link } from 'react-router-dom'
import {
  LogoInstagram,
  LogoFacebook,
  LogoYoutube,
  LogoTwitter
} from 'react-ionicons'
import logo from '../../assets/img/baguette.png'

const Footer = () => {
  return (
    <div className='row'>
      <div className='col-12'>
      <section id='pie' className='btn-negro footer'>
      <div className='container'>
        <img src={logo} alt='logo' className='logo-brand' />
        <ul className='list-inline'>
          <li className='list-inline-item footer-menu'>
            <Link to='#'>Inicio</Link>
          </li>
          <li className='list-inline-item footer-menu'>
            <Link to='#'>Acerca de nosotros</Link>
          </li>
          <li className='list-inline-item footer-menu'>
            <Link to='#'>precios</Link>
          </li>
          <li className='list-inline-item footer-menu'>
            <Link to='#'>contacto</Link>
          </li>
        </ul>
        <ul className='list-inline'>
          <li className='list-inline-item'>
            <Link to=''>
              <LogoInstagram
                className='icon iconos'
                style={{
                  background:
                    'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)'
                }}
                shake
              />
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to=''>
              <LogoTwitter className='icon iconos' color={'#00acee'} shake />
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to=''>
              <LogoYoutube
                className='icon iconos logoYoutube'
                color={'red'}
                shake
              />
            </Link>
          </li>
          <li className='list-inline-item'>
            <Link to=''>
              <LogoFacebook className='icon iconos' color={'#07137a'} shake />
            </Link>
          </li>
        </ul>
        <small>
          {' '}
          Año © 2021 Todos los derechos reservados. <br /> Creado por Yoiber Beitar
        </small>
      </div>
    </section>
      </div>
    </div>
  )
}

export default Footer;
