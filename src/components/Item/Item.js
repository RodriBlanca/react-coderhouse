import React from "react"

const Item = (props) => {
    return (
        <div id={props.id} className="item">
            <div>
                <img src={props.pictureUrl} alt={props.name} />
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Item