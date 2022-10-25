import IdCard from "./IdCard"

export default function IdList() {
    const users = [
        {
          lastName: 'Doe',
          firstName:'John',
          gender:'male',
          height: 178,
          birth: new Date("1992-07-14"),
          picture:"https://randomuser.me/api/portraits/men/44.jpg"
        },
        {
          lastName: 'Delores',
          firstName:'Obrien',
          gender:'female',
          height: 172,
          birth: new Date("1998-05-11"),
          picture:"https://randomuser.me/api/portraits/women/44.jpg"
        }
      ]
    
    return(
        <div>
            {users.map((user, k) => {
       return <IdCard 
      key={k}
      lastName={user.lastName}
      firstName={user.firstName}
      gender={user.gender}
      height={user.height}
      birth={user.birth.toDateString()}
      picture={user.picture}
  />
 
    })} 
        </div>
    )
}