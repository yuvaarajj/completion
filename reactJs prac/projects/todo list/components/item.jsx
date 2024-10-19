function Item({name, date}){

   
    
return (
    <div className="col">

    <p>{name}</p>
    <p>{date}</p>
    <button type="submit" className="btn btn-danger" >delete</button>
    </div>
)
}

export default Item