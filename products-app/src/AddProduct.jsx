import React from 'react';
import Header from './Components/Header/Header'

const AddProduct = () => {
    return (
        <div>
            <Header/>
             <form>
               <input 
               type="text" 
               placeholder="Name"/>

               <input 
               type="text"
               placeholder="Price"/>

               <textarea 
               type="text" 
               placeholder="Description"></textarea>

               <input 
               type="text" 
               placeholder="image Link"/>

              <button type="submit" >Submit</button>
             </form>
        </div>
    );
};

export default AddProduct;