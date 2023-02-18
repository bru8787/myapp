import './style.css';
import Button from '../Button';

function Description({children ,title}){
    return (<div className=' card-body  '> 
        <h5 className="card-title">{title}</h5>
        <p className="card-text ">{children}</p> 
        <Button>Aggiungi al carrello</Button>
        
</div>)
}
export default Description;