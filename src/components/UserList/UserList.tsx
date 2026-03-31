import './UserList.css'

interface Props {
    registeredUsers: string[];
    users: string[];
}

export default function UserList({ users, registeredUsers }: Props) {
    return <>
    <h1>Geregistreerde Gebruikers: </h1>
    <ul>
        {users.map((user) => (
           <li>{user}</li> 
        ))}
    </ul>
    </>
}