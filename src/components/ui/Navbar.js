import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/baguette.png'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark fixed-top'>
        <Link className='navbar-brand' to='/'>
          <img src={logo} width='120' height='60' alt='logo' />
        </Link>
        <div className='navbar-collapse'>
          <div className='navbar-nav'>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/'
            >
              Inicio
            </NavLink>

            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/producto'
            >
              Producto
            </NavLink>

            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/proveedor'
            >
              Proveedor
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/factura'
            >
              Factura
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/inventario'
            >
              Inventario
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/venta'
            >
              Venta
            </NavLink>
            <NavLink
              activeClassName='active'
              className='nav-item nav-link'
              exact
              to='/empleado'
            >
              Empleado
            </NavLink>
          </div>
        </div>

        <div className='navbar-collapse collapse w-100 order-3 dual-collapse2'>
          <ul className='navbar-nav ml-auto'>
            <button
              className='nav-item nav-link btn'
              // onClick={ handleLogout }
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
