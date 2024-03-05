const Card = (props) => {
    const {
        img,
        rating,
        name
    } = props
    return (
        <div className="card">
            <div className="logo">
                <img src={img}></img>
            </div>
            <div className="container">
                <div>{name}</div>
                <div>{rating}</div>
            </div>
        </div>
    )
}

export default Card;