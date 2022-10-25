export default function Greetings({lang, children}) {
    let salut = ''
    if(lang === 'de') {salut = 'Halo';}
    else if(lang === 'fr') {salut = 'Salut';}
    else if(lang === 'en') {salut = 'Hello';}
    else if(lang === 'es') {salut = 'Hola';}
    
    return(
        <div className="user">
        <h4>{salut} {children}</h4>
        </div>
    )
}