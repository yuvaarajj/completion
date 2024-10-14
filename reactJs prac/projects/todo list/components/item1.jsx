function Item1(){
    const name = 'Milk'
    const date = '2021-08-02'
return (
    <div className="col">

    <p>{name}</p>
    <p>{date}</p>
    <button type="submit" className="btn btn-danger">delete</button>
    </div>
)
}

export default Item1