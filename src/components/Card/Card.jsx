import "./Card.css";

export const Card = ({url, title, description}) => {
    return (
        <div className="container">
            <div>
                <img src={url} className="imgagenperro"/>
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}