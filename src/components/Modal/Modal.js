// import PropTypes from 'prop-types';
// import React from 'react';


// export class Modal extends React.Component{
 
//  componentDidMount() {
//     window.addEventListener('keydown', this.modalClose);
//   };

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.modalClose);
//   };
 
//   modalClose = (e) => {
//     if (e.currentTarget === e.target || e.code === 'Escape') {   
//       this.setState({ modalIsOpen: false });
//     }
//   };
  
//   render() {
//     return (
//         <div className="Overlay" onClick = {this.modalClose}>
//   <div className="Modal">
//     <img src={this.props.img} alt="" />
//   </div>
// </div>
//     )
//   }
// }

import { Component } from 'react';
import { createPortal } from 'react-dom';

const portal = document.querySelector('#portal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.showModal();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
    this.props.showModal();
    }
  };
 
  render() {
    return createPortal(
      <div className='Overlay' onClick={this.handleOverlayClick}>
        <div className='Modal'>{this.props.children}</div>
      </div>,
      portal,
    );
  }
}