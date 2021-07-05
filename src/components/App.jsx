import React from "react";
import Card from './Card';
import contacts from '../contacts';
import Avatar from "./Avatar";

function App(prop) {
  return (<div>
    <h1 className="heading">My Contacts</h1>
    <Avatar
    imgURL = "https://lh3.googleusercontent.com/proxy/le0DKL_83upYDbdXz8La0GkvYN0viPVwhb9NC-eKrCmQfbMCxWnhqD1HnyXazGn4mlmaANGqOn6tL53uXL1sEOasKf1nHAjwgWcopBAwkVQj5UeQQSadbdE5q9OJwnf8KSmp_xkgsxYiqj_swa8y22p24c8ApqM"
    />
    <Card 
    name = {contacts[0]['name']}
    imgURL = {contacts[0]['imgURL']}
    phone = {contacts[0]['phone']}
    email = {contacts[0]['email']}
    />
    <Card 
    name = {contacts[1]['name']}
    imgURL = {contacts[1]['imgURL']}
    phone = {contacts[1]['phone']}
    email = {contacts[1]['email']}
    />
    
    <Card 
    name = {contacts[2]['name']}
    imgURL = {contacts[2]['imgURL']}
    phone = {contacts[2]['phone']}
    email = {contacts[2]['email']}
    />
    </div>
  );
}

export default App;
