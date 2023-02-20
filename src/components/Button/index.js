 import './style.css';

function Button({children,onClick}){
    return <button className="btn btn-primary me-lg-1 m-3" onClick={onClick}>{children}</button>
}
export default Button; 