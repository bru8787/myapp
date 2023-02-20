import './style.css';


function Description({children ,title}){
    return (<div className=' card-body h-100'> 
        <h5 className="card-title">{title}</h5>
        <p className="card-text  m-auto ">{children}</p> 
</div>)
}
export default Description;