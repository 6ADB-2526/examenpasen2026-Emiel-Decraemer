import './UserList.css'

interface Props {
    registeredUsers: string[];
    users: string[];
}

export default function UserList({ users, registeredUsers }: Props) {

    return <>
    <h1>Geregistreerde Gebruikers: </h1>
    <ul>
        {/* niet de juiste opl */}
        {users.map((user) => (
           <li className='geregistreerd'>{user} (geregistreerd)</li> 
        ))}
        {/* werkt niet maar is dichter bij een oplossing. om geen error te geven staat het in comment. */}
        {users.map((user) => (
            {(user == registeredUsers.find(user)) ? (
                <li className='geregistreerd'>{user} (Geregistreerde gebruiker)</li> 
            ) : (
                <li className='ongeregistreerd'>{user} (Ongeregistreerde gebruiker)</li>
            )}
        ))}
    </ul>
    </>
}