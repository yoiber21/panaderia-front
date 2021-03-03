import { Route, Switch } from 'react-router'
import Empleado from '../components/empleado/Empleado'
import Factura from '../components/factura/Factura'
import Inicio from '../components/inicio/Inicio'
import Inventario from '../components/inventario/Inventario'
import Producto from '../components/producto/Producto'
import Proveedor from '../components/proveedor/Proveedor'
import Navbar from '../components/ui/Navbar'
import Venta from '../components/venta/Venta'
import Footer from '../components/ui/Footer'

const DashboardRoutes = () => {
  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <Navbar />
        </div>
        <div className='col-12'>
          <Switch>
            <Route exact path='/venta' component={Venta} />
            <Route exact path='/producto' component={Producto} />
            <Route exact path='/proveedor' component={Proveedor} />
            <Route exact path='/inventario' component={Inventario} />
            <Route exact path='/empleado' component={Empleado} />
            <Route exact path='/factura' component={Factura} />
            <Route path='/' component={Inicio} />
          </Switch>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default DashboardRoutes
