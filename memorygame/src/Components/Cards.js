import { useState } from 'react'
import Card from './Card'


function Cards(item){
    const [items, setItems] = useState([
        {id: 1, img: 'http://farm9.staticflickr.com/8382/8680588927_17bd4a5e89_z.jpg', stat: ""},
        {id: 1, img: 'http://farm9.staticflickr.com/8382/8680588927_17bd4a5e89_z.jpg', stat: ""},
        {id: 2, img: 'https://www.adorama.com/alc/wp-content/uploads/2017/08/shutterstock_333224222-1.jpg', stat: ""},
        {id: 2, img: 'https://www.adorama.com/alc/wp-content/uploads/2017/08/shutterstock_333224222-1.jpg', stat: ""},
        {id: 3, img: 'https://www.dpreview.com/files/p/articles/5717972844/image_9.0.jpeg', stat: ""},
        {id: 3, img: 'https://www.dpreview.com/files/p/articles/5717972844/image_9.0.jpeg', stat: ""},
        {id: 4, img: 'https://www.blog.motifphotos.com/wp-content/uploads/2019/10/Blue-Stink-Bug-1200x799.jpg', stat: ""},
        {id: 4, img: 'https://www.blog.motifphotos.com/wp-content/uploads/2019/10/Blue-Stink-Bug-1200x799.jpg', stat: ""},
        {id: 5, img: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/bdc359f0-2884-4b59-9704-c5fc2429860b/attitude.jpg', stat: ""},
        {id: 5, img: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/bdc359f0-2884-4b59-9704-c5fc2429860b/attitude.jpg', stat: ""},
        {id: 6, img: 'https://iso.500px.com/wp-content/uploads/2015/12/macro_cover.jpg', stat: ""},
        {id: 6, img: 'https://iso.500px.com/wp-content/uploads/2015/12/macro_cover.jpg', stat: ""},
 

  
    ].sort(() => {
        return Math.random() - 0.5
    }))

    const [prev, setPrev] = useState(-1)


    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = 'correct'
            items[prev].stat = 'correct'
            setItems([...items])
            setPrev(-1)
           
        }
            
        else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }
    function handleClick(id){
       if(prev === -1){
           items[id].stat = "active"
           setItems([...items])
           setPrev(id)
       }else{
           check(id)
       }

    

  
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