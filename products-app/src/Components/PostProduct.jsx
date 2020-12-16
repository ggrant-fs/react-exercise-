import React from 'react';

const PostProduct = (props) => {
    console.log(props.data)
    const data = props.data.map((item)=>{
      return(
          <React.Fragment>
          <div id="photoContainer" key={item.id}>
             <img id="pictures"alt="" src={item.imgURL}/> 
             <div>{item.name}</div>
             <div>${item.price}</div>
          </div>  
          </React.Fragment>    
      )
    })
    console.log(data)

    return (
        <div>
            <div>
            {data}

            </div>
        </div>
    );
};

export default PostProduct;