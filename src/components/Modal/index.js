/* import Button from "../Button"; */
import Image from "../Image";

function Modal({ show, src, title,imageHandler }) {

  return show &&
 
  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          </div>
          <div className="modal-body">
          <Image imageHandler={imageHandler} title={title} src={src}   />
          </div>
        </div>
      </div>
      </div>
  </div>
    
     

  
 
};

      export default Modal; 