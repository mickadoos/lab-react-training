export default function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return(
        <div>
        <div className="user">

        <img className="imgUser" src={picture} alt=""/>
        
        <section className="content">
        <p><b>First name: </b>{firstName}</p>
        <p><b>Last name: </b>{lastName}</p>
        <p><b>Gender: </b>{gender}</p>
        <p><b>Height: </b>{height}</p>
        <p><b>Birth: </b>{birth}</p>
        </section>
        </div>
        </div>

    )
}