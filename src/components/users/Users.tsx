import React from 'react';
import {UsersPageType} from "./UsersContainer";


export const Users = ({users}: UsersPageType) => {

    let usersRender = users.map(u => {
        return (
          <div key={u.id}>
              {u.fullName} {u.status} {u.location.country} {u.location.city}
          </div>
        );
    })

    return (
        <div>
            {usersRender}
        </div>
    );
};

