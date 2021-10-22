import React from "react";
import "./App.css";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";
import { pixabayFetch } from "../Services/pixabay";
import { Button } from "../components/Button/Button";
import { Modal } from "../components/Modal/Modal";
import { alert, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../components/Loader/Loader";

class App extends React.Component {
  state = {
    value: "",
    page: 1,
    images: [],
    isLoading: false,
    modalIsOpen: false,
    bigImg: "",
  };
  formSubmitHandle = (value) => {
    this.setState({
      value: value,
      page: 1,
      images: [],
    });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      
      this.fetchImages();
    }
     if (!this.state.modalIsOpen) {
      window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    }
  }
  fetchImages = () => {
    const options = {
      query: this.state.value,
      page: this.state.page,
    };
    this.setState({ isLoading: true });
    pixabayFetch(options)
      .then((images) => {
        this.setState((prevState) => {
          return {
            images: [...prevState.images, ...images],
            page: prevState.page + 1,
          };
        });
      }).catch((error) =>
        error({
          text: "No image!",
          delay: 1000,
        })      
      ).finally(() => this.setState({ isLoading: false }));      
  };
  imgBig = (img) => {
   
    this.setState({ bigImg: img });

    this.toggleModal();
  };
 toggleModal = () => {
    this.setState(state => ({
      modalIsOpen: !state.modalIsOpen,
    }));
  };
  render() { 
    const {images, bigImg, isLoading, modalIsOpen} = this.state
    return (
      <div className="Container">
        <Searchbar onSubmit={this.formSubmitHandle} />
        {isLoading && <Loader />}
        <ImageGallery images={images} onClick={this.imgBig} />
        {images.length > 0 && (
          <Button text={"load more"} onClick={this.fetchImages} />
        )}
        {modalIsOpen && (
          <Modal showModal={this.imgBig}>
            <img src={bigImg} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
