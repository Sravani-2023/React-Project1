import React, { useEffect, useState } from 'react';

function Users() {
    const [users,setUsers] = useState([]);

    const fetchUsers = async function(){
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        const finalUsers = await users.json();
        setUsers(finalUsers);
    }
    
    useEffect(()=>{
        fetchUsers();
    });

    return (
       <>
       <h1>Users Details</h1> <table className="table table-bordered table striped">
        <thead>
          <tr>
            <th>User id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Website</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
        {users.map((user, ind) => {
            return (
              <tr key={ind}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>             
              </tr>              
            );
          })}
        </tbody>
      </table>


       <table>
      
          </table>
       </>
    );
}

export default Users;