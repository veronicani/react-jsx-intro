"use strict";


function Tweet({ username, name, date, message }) {
  return (
  <div className="tweetStyle">
    <ul>
      <li> {username} </li>
      <li> {name} </li>
      <li> {date} </li>
      <li> {message} </li>
    </ul>
  </div>
  )
}