export default function Random({min, max}) {
    console.log('MAX', max, min)
    return(
        <div>
            <h3>Random value between {min} and {max} ={'>'} {Math.floor(Math.random() * max)}</h3>
        </div>
    )
}