import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser.js";
import ListUser from "./components/ListUser/ListUser.js";

function User(props) {
    const [valueListUser, setValueListUser] = useState([]);
    function handlerAddUser(user) {
        console.log(user);
        setValueListUser((prev) => {
            return [
                ...prev,
                {
                    username: user.username,
                    age: user.age,
                    id: new Date().getTime(),
                },
            ];
        });
        console.log(valueListUser);
    }
    return (
        <div className="User">
            <AddUser onAddUser={handlerAddUser} />
            <ListUser users={valueListUser} />
        </div>
    );
}

export default User;
