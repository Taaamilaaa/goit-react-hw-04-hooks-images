import { useState, useEffect } from "react";
import "./App.css";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";
import { pixabayFetch } from "../Services/pixabay";
import { Button } from "../components/Button/Button";
import { Modal } from "../components/Modal/Modal";
// import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "../components/Loader/Loader";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [bigImg, setBigImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const formSubmitHandle = (value) => {
    setValue(value);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!value) {
      return;
    }
    setIsLoading(true);
    pixabayFetch(value, page)
      .then((newImages) => {
        setImages([...images, ...newImages]);
        console.log(page);
      })
      .catch((error) =>
        error({
          text: "No image!",
          delay: 1000,
        })
      )
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, [page, value]);

  useEffect(() => {
    if (images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [images]);

  const fetchImages = () => {
    setPage(page + 1);
  };

  const imgBig = (img) => {
    setBigImg(img);
    toggleModal();
  };

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div className="Container">
      <Searchbar onSubmit={formSubmitHandle} />
      {isLoading && <Loader />}
      <ImageGallery images={images} onClick={imgBig} />
      {images.length > 0 && <Button text={"load more"} onClick={fetchImages} />}
      {modalIsOpen && (
        <Modal showModal={imgBig} modalState={modalIsOpen}>
          <img src={bigImg} alt="" />
        </Modal>
      )}
    </div>
  );
}

export default App;
