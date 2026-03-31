// import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import UserList from "./components/UserList/UserList";

export default function App() {
    const GeregistreerdePersonen = ["Karel", "Els", "Piet"];
    const OngeregPersonen = [""]

    function HandleRegister () {

    
    }

  return (
    <div>
      <RegistrationForm onRegister={HandleRegister}/>
      <hr />
      <UserList registeredUsers={GeregistreerdePersonen} users={OngeregPersonen}/>
    </div >
  );
}
