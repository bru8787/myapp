 import './style.css';

function Button({children,onClick}){
    return <button className="btn btn-primary m-1 d-flex " onClick={onClick}>{children}</button>
}
export default Button; 