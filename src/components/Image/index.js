import './style.css';
function Image({ src, title, imageHandler }) {
    const imageDescription = title ? title : "Imagine"
    return <div className=''><img className="card-img-top   "  onClick={e => imageHandler()} src={src} alt={imageDescription} title={imageDescription}></img></div>
}
export default Image;