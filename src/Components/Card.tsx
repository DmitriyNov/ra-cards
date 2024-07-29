import iCard from "../Models/CardModels";

export default function Card(props: iCard) {

    const card: iCard = {...props};

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-xl">
                {card.image ? (<figure><img src={card.image}/></figure>) : ""} {/* Я решил не делать отдельные компоненты для карточек с картинкой и без, мне кажется, в данном случае лучше так сделать */}
                <div className="card-body">
                    <h2 className="card-title">{card.title}</h2>
                    <p>{card.text}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <a href={card.url}>
                            {card.buttonText}
                        </a>
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}