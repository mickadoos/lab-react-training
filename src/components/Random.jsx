export default function Random({min, max}) {

    const numRandom = Math.floor(Math.random() * max);
    return(
        <div className="user">
            <h3>Random value between {min} and {max} ={'>'} {numRandom}</h3>
        </div>
    )
}