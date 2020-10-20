import React from "react";
import "./Header.css";
const Header = (props) => {
   const { search, onInputChange, onClickSearch } = props;
   return (
      <div className='jumbotron jumbotron-image shadow' style={{ marginTop: "-50px" }}>
         <h1 className='display-1'>
            <span className='material-icons brand-icon'>local_dining</span>
            Welcome Foodies
         </h1>
         <div className='input-group  w-50 mx-auto'>
            <input
               type='text'
               className='form-control'
               placeholder='Seach your favourite Recipes'
               value={search}
               onChange={onInputChange}
            />
            <div className='input-group-append'>
               <button className='btn btn-dark' onClick={onClickSearch}>
                  Search Recipe
               </button>
            </div>
         </div>
      </div>
   );
};

export default Header;
