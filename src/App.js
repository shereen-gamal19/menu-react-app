import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// 7 هنا عاوزين نعمل طريقه ان احنا نحط كل التصنيفات بدون تكرارا ولو احنا ضفنا تصنسف جديد يبقي يضاف ال ارراي تلقائي وكمان عندنا عناصر ليها اكتر من تصنيف يعني هنلاقي التصنيف في الرراي متكرر فاحنا عاوزين نضيف التصنيفات من غير تكرار 
// احنا كمان عاوزسن نضيف تصنيف مش موجود في ال ارراي اسمه all
const allcategory = ['all' , ...new Set (items.map((item)=>item.category))]
console.log(allcategory)
function App() {
  // 1 here we will set our state
  const [menuItems , setMenuItems] = useState(items)
  const [categories , setCategories] =useState(allcategory)
  //6  we will filter the items according to their category and the category parameter is a string
  const filteritems=(category)=>{
    // 7 here we will put a condition that if the category === all then we will show all items
    if(category === 'all'){
      setMenuItems(items)
      return;
    }
    const newitems = items.filter((item)=>item.category === category)
    setMenuItems(newitems)

  }
  return (// 2 we put all components
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menue</h2>
          <div className='underline'></div>
        </div>
        {/* state vvalue categories we will pass it to the prop called categories in Categories component */}
        <Categories filteritems={filteritems} categories={categories}/>
        {/* 3 here we will set the state which is menuItems as a props to Menu component in items props */}
        <Menu items ={menuItems}/>

      </section>
    </main>
  );
}

export default App;
