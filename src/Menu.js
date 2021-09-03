import React from 'react';
// 4 we set our props 
const Menu = ({items}) => {
  return (
    <div className='section-center'>
      {/* 5 we will map through items props */}
      {items.map((oneitem)=>{
        const {img , id , desc , price , title} = oneitem
        return(
          <article key={id} className='menu-item' >
            <img src={img} alt={title} className='photo'></img>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        
        );
      })}
    </div>
  )
};

export default Menu;
