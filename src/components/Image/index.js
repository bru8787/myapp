import './style.css';
function Image({ src, title, imageHandler }) {
    const imageDescription = title ? title : "Imagine"
    return <div className='h-75'><img className="card-img-top h-75 img-responsive "  onClick={e => imageHandler()} src={src} alt={imageDescription} title={imageDescription}></img></div>
        
    
}
export default Image;