import "./CardCortes.css";

type CardCortesProps = {
    image: string;
    title: string;
}

const CardCortes = ({image, title}:CardCortesProps) => {
    return (
        <div className="cardCortes">
            <img src={image} alt="" className="imageCorte" />
            
            <div className="divH3">
                <h3 className="title">{title}</h3>
            </div>
        </div>
    );
}

export default CardCortes