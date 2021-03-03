import logo from '../../assets/img/login2.png';


const Login = () => {
  return (
    <div>
      <div className='container personalizada col-lg-3'>
        <form>
          <div className='form-group text-center'>
            <img src={ logo } width='80' height='80' alt='login' />
            <p>
              <strong>Inicio de sesion</strong>
            </p>
          </div>
          <div className='form-group text-center'>
            <label for=''>Correo</label>
            <input
              type='email'
              className='form-control'
              placeholder='Correo'
              name='correo'
            />
          </div>
          <div className='form-group text-center'>
            <label for=''>Contraseña</label>
            <input
              type='password'
              className='form-control'
              placeholder='Contraseña'
              name='password'
            />
          </div>
          <input
            className='btn btn-danger btn-block'
            type='Submit'
            value='Ingresar'
            name='accion'
          />
        </form>
      </div>
    </div>
  )
}

export default Login
