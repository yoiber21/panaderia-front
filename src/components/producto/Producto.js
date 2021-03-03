import React from 'react';
import { Delete, Edit } from '@material-ui/icons';
import UseModal from '../hooks/UseModal';
import form from './Form';

const Producto = () => {

  const [Modal, show, toggle] = UseModal(form);
  return (
    <div className='animate__animated animate__fadeIn'>
      <div className='col-12 divisor p-5 mb-5 mt-5'>
        <h2 className="alert alert-success text-center fixed">Productos</h2>

        {!show && (
          <button
            className='btn btn-success mb-2'
            onClick={() => toggle(!show)}
          >
            Agregar
          </button>
        )}
        {show && <Modal closeModal={toggle} />}

        { !show &&
          <div className='table-responsive'>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Nombre</th>
                <th scope='col'>Clasificacion</th>
                <th scope='col'>Marca</th>
                <th scope='col'>Peso</th>
                <th scope='col'>Precio</th>
                <th scope='col'>Caducidad</th>
                <th scope='col' className='text-center' colspan='2'>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>131</td>
                <td>rfdhgjfgjfjfk</td>
                <td>fdhdgjgjgfj</td>
                <td>fhdfhdfj</td>
                <td>dsgdshsfhfhfdh</td>
                <td>dfhdfdjgj</td>
                <td>fhdfhdfjdfjfj</td>
                <td>
                  <button className='btn btn-warning text-center'>
                    Editar <Edit color='action' style={{ fontSize: 30 }} />
                  </button>
                </td>
                <td className="mr-4">
                    <button className='btn btn-danger btn btn-danger'>
                      Eliminar <Delete className='mr-2' style={{ fontSize: 30 }} />
                    </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        }
      </div>
    </div>
  )
}

export default Producto
