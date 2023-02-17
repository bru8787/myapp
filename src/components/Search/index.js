/* 

function Search({handler}){
  const[searchText,setSearchtext] = useState("")

   const searchTextHandler = (e) =>{
    if(searchText) handler(searchText);
   };
    return <nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
      <form className="d-flex" role="search">
        <input onChange={e =>setSearchtext(e.target.value)}className="form-control me-3" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
  </nav>
}
export default Search;
import { useState } from "react"; */



function Search({handler}) {


    return <nav className="navbar">
    <div className="container">
      <form className="d-flex" role="search">
        <input  onChange={e => handler(e.target.value )} className="form-control me-3" type="search" placeholder="Search" />
      </form>
    </div>
  </nav>
};

export default Search; 