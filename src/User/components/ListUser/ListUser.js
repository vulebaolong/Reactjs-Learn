import React from "react";

import style from "./ListUser.module.css";
import Card from "../UI/Card/Card.js";

function ListUser(props) {
    return (
        <Card className={style.users}>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>
                        {user.username} ({user.age})
                    </li>
                ))}
            </ul>
        </Card>
    );
}

export default ListUser;
