import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mobile from './components/Mobile/Mobile'
import Todos from './components/Todos/Todos'

const blogTitleStyle = {
  color: 'white',
  background: 'black',
  border: '5px solid red',
  paddign: '10px',
  margin: '10px'
}
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
   {/*   <article className='blog'>
      <h2 style={blogTitleStyle}>This is a blog title</h2>
      <p style={{color:'blue'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, fugit.</p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas deleniti odit iure aliquid cumque, perspiciatis velit voluptatem ratione hic nam modi provident delectus natus laborum commodi enim soluta voluptate asperiores! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio libero tempore amet consectetur accusamus dolor laborum, quisquam adipisci animi, nihil, itaque harum magni aliquam minus at laudantium autem! Reprehenderit, ex.
     </article> */}
     {/* <Blog heading ='THis is title one' author = 'nieem'></Blog>
     <Blog heading ='this is title two' author = 'hasan'></Blog>
     <Blog heading ='this is title 3 ' author = 'rahaman'></Blog> */}

     {/* mobile charge show */}
     {/* <Mobile></Mobile> */}

      <Todos></Todos>
    
    </div>
  )
}

function Blog(props){
  return (
    <div style={blogTitleStyle}>
      <h2>{props.heading}</h2>
      <p>Author Name:{props.author} </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore fugit asperiores qui, aspernatur illum facere placeat porro velit saepe voluptate incidunt, laborum veniam ut eos distinctio, ipsa fuga voluptatum? Suscipit ratione veniam aspernatur animi quae temporibus eaque sunt dolore praesentium quo eveniet consequatur beatae, laborum quidem alias non error. Ut similique architecto quasi ducimus nihil aperiam culpa exercitationem, sequi dolor corrupti voluptate? Cumque pariatur explicabo quod rerum excepturi quis laborum quae recusandae doloribus, odio tempora eaque, consequuntur fugiat dolor rem ratione, tempore delectus. Sed aspernatur quidem corrupti cumque saepe. Hic cupiditate, architecto aspernatur illo id neque, natus, enim consequatur quia amet consectetur blanditiis ut sed ullam quos! Perspiciatis laborum dolores illo blanditiis reiciendis, commodi ducimus praesentium voluptatibus omnis distinctio quaerat repellendus velit repudiandae ullam aperiam quam, architecto natus? Voluptas quisquam tenetur exercitationem quidem odit molestiae assumenda veniam, earum nobis explicabo. Voluptatem quo error culpa qui ut hic temporibus nihil, deserunt nisi rem, accusamus asperiores iste est fugiat impedit tempore veniam ipsa voluptatibus aut at sint saepe assumenda. Quas modi soluta sunt ducimus quos sint expedita tempora veniam nulla accusamus. Aliquam, atque magnam. Pariatur impedit numquam incidunt velit, perspiciatis illum. Eveniet, repellendus! Impedit, voluptatibus? Blanditiis, nihil. Nisi impedit voluptatem illum.</p>
    </div>
  )
}

export default App
