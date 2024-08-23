import React from 'react'
import PropTypes from 'prop-types'


const Despesa = ({despesa}) => {
  return (
    <div className='despesa'>
    <div className='content'>
      <p className='descricao'>{despesa.descricao}</p>
      <p className='categoria'>{despesa.categoria}</p>
      <p className='valor'>{despesa.valor}</p>
      <p className='data'>{despesa.data}</p>
    </div>
    <div>
    </div>
  </div>
  )
}

Despesa.propTypes = {
  despesa:  
    PropTypes.shape({
    descricao: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  
  }).isRequired,
};

export default Despesa