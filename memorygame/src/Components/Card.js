import Cards from './Cards'



function Card({item, id, handleClick}) {
    return (
        <div className = "card" onClick={()=> handleClick(id)}>
            
           <img src= {'item.img'}/>
            
        </div>
    )
}

export default Card;