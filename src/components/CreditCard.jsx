export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    return (
        <div className="user">
        <div>
            <h2>{number}</h2>
        </div>
        <div>
            <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
        </div>

            <br/>
            <p>{owner}</p>
        </div>
    )
}