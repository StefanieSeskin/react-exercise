
// worked before I added the user stuff to make the UserCard.
//the buttons worked.  I don't know what I changed.  I did commit and
//don't want to push this.
// import React, { useState, useEffect } from 'react';

export default function UserCard(props) {
    // console.log(props)
    return (
    <div>
    <p>{ props.user1.name.first + ' ' + props.user1.name.last }</p>
    <p>{ props.user1.phone }</p>
    </div>

    )}
;