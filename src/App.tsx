import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import UserList from "./components/UserList/UserList";

export default function App() {
    const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
    const [Gebruikers, SetGebruikers] = useState([])

    function HandleRegister (name:string) {
      SetGebruikers([...Gebruikers, name])
      console.log(Gebruikers);
    }

  return (
    <div>
      <RegistrationForm onRegister={HandleRegister}/>
      <hr />
      <UserList registeredUsers={GeregistreerdePersonen} users={Gebruikers}/>
    </div >
  );
}
