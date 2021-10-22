import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import React from "react";
import styles from './Loader.module.css'
export default class Loading extends React.Component {

  render() {
    return (
      <Loader type="Oval" color="#00BFFF" height={80} width={80} className={ styles.loader} /> 
    );
  }
}