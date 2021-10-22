import {useState, useEffect} from "react";
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

function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [bigImg, setBigImg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const formSubmitHandle = (value) => {
    setValue(value);
    setPage(1);
    setImages([]);
  };
  useEffect(() => {
    if(value === ''){return}
    fetchImages()
  }, [value, page]);

  useEffect(() => {
    if (!modalIsOpen) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [modalIsOpen]);

  const fetchImages = () => {  
    const options = {
      value,
       page ,
    };
    
  setIsLoading(!isLoading);
    pixabayFetch(options)
      .then((images) => {
      setImages((prevState) => {
          return [...prevState, ...images]           
          
      });
        setPage(state=> state +1)
      }).catch((error) =>
        error({
          text: "No image!",
          delay: 1000,
        })      
      ).finally(() => setIsLoading(!isLoading));      
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
        {images.length > 0 && (
          <Button text={"load more"} onClick={fetchImages} />
        )}
        {modalIsOpen && (
          <Modal showModal={imgBig}>
            <img src={bigImg} alt="" />
          </Modal>
        )}
      </div>
    );
  }







// class App extends React.Component {
//   state = {
//     value: "",
//     page: 1,
//     images: [],
//     isLoading: false,
//     modalIsOpen: false,
//     bigImg: "",
//   };
//   formSubmitHandle = (value) => {
//     this.setState({
//       value: value,
//       page: 1,
//       images: [],
//     });
//   };
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.value !== this.state.value) {
      
//       this.fetchImages();
//     }
//      if (!this.state.modalIsOpen) {
//       window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//     }
//   }
//   fetchImages = () => {
//     const options = {
//       query: this.state.value,
//       page: this.state.page,
//     };
//     this.setState({ isLoading: true });
//     pixabayFetch(options)
//       .then((images) => {
//         this.setState((prevState) => {
//           return {
//             images: [...prevState.images, ...images],
//             page: prevState.page + 1,
//           };
//         });
//       }).catch((error) =>
//         error({
//           text: "No image!",
//           delay: 1000,
//         })      
//       ).finally(() => this.setState({ isLoading: false }));      
//   };
//   imgBig = (img) => {
   
//     this.setState({ bigImg: img });

//     this.toggleModal();
//   };
//  toggleModal = () => {
//     this.setState(state => ({
//       modalIsOpen: !state.modalIsOpen,
//     }));
//   };
//   render() { 
//     const {images, bigImg, isLoading, modalIsOpen} = this.state
//     return (
//       <div className="Container">
//         <Searchbar onSubmit={this.formSubmitHandle} />
//         {isLoading && <Loader />}
//         <ImageGallery images={images} onClick={this.imgBig} />
//         {images.length > 0 && (
//           <Button text={"load more"} onClick={this.fetchImages} />
//         )}
//         {modalIsOpen && (
//           <Modal showModal={this.imgBig}>
//             <img src={bigImg} alt="" />
//           </Modal>
//         )}
//       </div>
//     );
//   }
// }

export default App;
