import React, { useState } from 'react'
import PropTypes from 'prop-types'

const UseModal = Element => {
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(!showModal);

  const Modal = props => {
    return (
      <div className="animate__animated animate__fadeIn">
        <Element {...props} />
      </div>
    )
  }

  return [Modal, showModal, toggle];
}

UseModal.propTypes = {
  Element: PropTypes.element.isRequired,
}

export default UseModal;
