const Modal = ({ closeModal }) => {
  return (
    <div className='container animate__animated animate__fadeIn'>
      <form className='form'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group md-6 mx-sm-1'>
              <label for='inputUser' className='sr-only'>
                User
              </label>
              <input
                type='number'
                className='form-control'
                id='inputUser'
                placeholder='Numero'
              />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='form-group md-6 mx-sm-1'>
              <label for='inputPass' className='sr-only'>
                Password
              </label>
              <input type='number' className='form-control' placeholder='Factura' />
            </div>
          </div>
          <div className='col-md-6'>
          <div className='form-group md-6 mx-sm-1'>
            <label for='inputPass' className='sr-only'>
              Password
            </label>
            <input type='number' className='form-control' placeholder='Producto' />
          </div>
        </div>
        <div className='col-md-6'>
        <div className='form-group md-6 mx-sm-1'>
          <label for='inputPass' className='sr-only'>
            Password
          </label>
          <input type='date' className='form-control' placeholder='Factura' />
        </div>
      </div>
        </div>
        <div className='col-md-6'>
          <button type='submit' className='btn btn-primary mr-3'>
            Confirm
          </button>
          <button type='submit' className='btn btn-success ' onClick={closeModal}>
          cancelar
        </button>
        </div>
      </form>
    </div>
  )
}

export default Modal
