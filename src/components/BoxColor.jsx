export default function BoxColor({r, g, b}) {

    
    r = Math.trunc(Math.random() * 255);
    g = Math.trunc(Math.random() * 255);
    b = Math.trunc(Math.random() * 255);

    const divStyle = {
        color: 'white',
        backgroundColor:`rgb(${r}, ${g}, ${b})`
      };
    

    return (
        <div className="user" style={divStyle}>
            <h3> {r} {g} {b}</h3>
        </div>
    )
}