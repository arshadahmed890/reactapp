import React from "react";
import { useState } from "react";
import "./Github.css";
import '../bootstrap.css';


  let GitHubProfile=()=> {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const url = "https://api.github.com/users/";

    async function fn(e) {
        e.preventDefault();

        if(username !== '') {
            try {
                const response = await fetch(url + username);
                const data = await response.json();

                if(response.ok) {
                    setUserData(data);
                    setErrorMessage('');
                } else {
                    setUserData(null);
                    setErrorMessage('User not found');
                }
            } catch(error) {
                console.log('Error fetching data:', error);
            }
        } else {
            setErrorMessage('Enter GitHub username');
        }
    }

    function displayProfile() {
        if(userData) {
            return (
                <div>
                    <p>Name: {userData.login}</p>
                    <p>ID: {userData.id}</p>
                    <p>Followers: {userData.followers}</p>
                    <p>Following: {userData.following}</p>
                    <p>Public Repos: {userData.public_repos}</p>
                    <p>Created At: {userData.created_at}</p>
                    <p>Updated At: {userData.updated_at}</p>
                </div>
            );
        } else if(errorMessage !== '') {
            return <p>{errorMessage}</p>;
        } else {
            return null;
        }
    }

    return (
        <div className="html-background">
            
        <div className=" container  text-center   myclass-1">
            <h1 className="mb-4">GITHUB PROFILE</h1>
            <br/>
            <form id="forms" className="m-5"  onSubmit={fn}>
                <input 
                className="search_1"
                    type="text" 
                    id="search" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="Enter GitHub username"
                />
                 <br/>
                 <br/>
                <button type="submit">Search</button>
            </form>
            <br/>
            <div class="myclass-2"id="main">
                {displayProfile()}
            </div>
        </div>

        </div>

    )
    }

export default GitHubProfile




