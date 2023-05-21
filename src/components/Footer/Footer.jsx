import React from 'react'
import './Footer.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Footer = ({infofooter}) => {
  return (
    <footer className='footer'>
        <p>Galeria de perritos bonitos.</p>
        <Button variant="primary">Contactanos</Button>{' '}
        <h2>VER MAS PERRITOS <Badge pill bg="primary">NEW</Badge></h2>
    </footer>
  )
}

export default Footer