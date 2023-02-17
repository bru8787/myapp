/* import Button from "../Button"; */
// import Image from "../Image";

function Modal({ show, src, title, onClick }) {

  return show &&
    <div>
    <img src={src} alt= "modal imagine" onClick={onClick}/>
    </div>
   

    // <div className="modal fade" id="exampleModal" tabndex="-1" ariaLabelledby="exampleModalLabel" ariaHidden="true">
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
    //       </div>
    //       <div className="modal-body">
    //         <Image src={src} alt={imageDescription} onClick={onClick} />
    //       </div>
    //     </div>
    //   </div>
    //   </div
    
};

      export default Modal; 