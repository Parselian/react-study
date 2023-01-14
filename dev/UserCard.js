import React from "react"

export default function(props) {
  return (
    <>
      <div className="user-card">
        <div className="user-card__name">{props.name}</div>
        <div>{props.age}</div>
        <br/>
        <div>{props.profession}</div>
      </div>
      <hr/>
    </>
  )
}

/*
* Or we can use destructurization instead default "props" object:
*/

/*
function UserCard({name, age, profession}) {
  return (
    <>
      <div className="user-card">
        <div className="user-card__name">{ name }</div>
        <div>{ age }</div>
        <br/>
        <div>{ profession }</div>
      </div>
      <hr/>
    </>
  )
}*/
