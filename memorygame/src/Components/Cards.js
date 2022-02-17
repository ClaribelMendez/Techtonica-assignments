import { useState } from 'react'
import Card from './Card'


function Cards(item){
    const [items, setItems] = useState([
        {id: 1, img: 'http://farm9.staticflickr.com/8382/8680588927_17bd4a5e89_z.jpg', stat: ""},
        {id: 1, img: 'public/Images/IMG_0459.JPG', stat: ""},
        {id: 2, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 2, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 3, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 3, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 4, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 4, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 5, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 5, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 6, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 6, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 7, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 7, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 8, img: 'image/IMG_0459.JPG', stat: ""},
        {id: 8, img: 'public/Images/IMG_0460.JPG', stat: ""},

  
    ].sort(() => {
        return Math.random() - 0.5
    }))

    const [prev, setPrev] = useState(-1)

    function handleClick(id){
        return (
        alert(id)
        )
    }
    return (
        <div className="container">
            { items.map((item,  index) => {
               return (
                    <Card key = {index} item = {item} id = {index} handleClick ={handleClick}/>
                  
               )
            }) }
        </div>
    )
}


export default Cards;