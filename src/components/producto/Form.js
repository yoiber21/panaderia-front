const Modal = ({ closeModal }) => {
    return (
      <div className='container animate__animated animate__fadeIn'>
        <form className='form'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='form-group md-6 mx-sm-1'>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Numero'
                />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='form-group md-6 mx-sm-1'>
                <input type='number' className='form-control' placeholder='Nombre' />
              </div>
            </div>
            <div className='col-md-6'>
            <div className='form-group md-6 mx-sm-1'>
              <input type='number' className='form-control' placeholder='Clasificacion' />
            </div>
          </div>
          <div className='col-md-6'>
          <div className='form-group md-6 mx-sm-1'>
            <input type='text' className='form-control' placeholder='Marca' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group md-6 mx-sm-1'>
            <input type='number' className='form-control' placeholder='Peso' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group md-6 mx-sm-1'>
            <input type='number' className='form-control' placeholder='Precio' />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='form-group md-6 mx-sm-1'>
            <input type='date' className='form-control' placeholder='Caducidad' />
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
  