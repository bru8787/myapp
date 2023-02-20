import {useRef} from "react";
function Search({handler}) {
  const textValue = useRef(null);
const emptyText=()=>{if(textValue.current.value===""){handler(textValue.current.value)}}
    return <nav className="navbar">
    <div className="container">
      <form className="d-flex" role="search">
        <input onChange={()=>emptyText()} ref={textValue} className="form-control me-3" type="search" placeholder="Search" />
        <button onClick={() => handler(textValue.current.value)} className="btn btn-success form-control me-3" type="button" placeholder="Search" >Cerca</button>
      </form>
    </div>
  </nav>
};

export default Search; 