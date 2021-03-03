import Prices from './Prices'

const SectionPrices = () => {
  return (
    <section id='precios' class='divisor'>
      <div class='container'>
        <div class='content-center'>
          <h2 style={{ fontSize: '40px' }}>
            Precios construidos <b>para cada producto</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui ea
            consequuntur, odit veniam mollitia aliquam reiciendis dignissimos,
            vitae sapiente neque, cum dolorum. Suscipit expedita obcaecati
            nesciunt error ut quidem autem. Manten la calma y come - Aplicacion
            / Producto digital
          </p>
        </div>
        <div className='row'>
          <div class='col-md-6'>
            <div class='plans targeta-negra'>
              <Prices
                price='20000'
                title='Produto nro 1'
                productos='Aqui pueden ir los precios y descripcion de los productos'
              />
            </div>
          </div>
          <div class='col-md-6'>
            <div class='plans targeta-blanca'>
              <Prices
                price='20000'
                title='Produto nro 1'
                productos='Aqui pueden ir los precios y descripcion de los productos'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionPrices
