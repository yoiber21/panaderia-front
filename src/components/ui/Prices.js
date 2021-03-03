import { Link } from 'react-router-dom'

const Prices = ({ price, title, productos }) => {
  return (
    <div>
      <div class='precio-contenedor'>
        <h4>started solucion</h4>
        <h2>
          {`$${price}`} <span>/ Cop</span>
        </h2>
        <h4>{title} </h4>
        <ul class='topmargin-xs'>
          <li>{productos}</li>
        </ul>
        <Link
          to='/producto'
          class='btn btn-negro full-width topmargin-sm btn-borde block'
        >
          mire mas
        </Link>
      </div>
    </div>
  )
}

export default Prices
