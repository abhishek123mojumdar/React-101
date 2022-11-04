import React, { useState, useEffect } from 'react';
import './FEstyle.css';

const ApiImplementation = (props) => {
  let [cardResp, setCardResp] = useState([]);
  let [posts, setPosts] = useState({});
  let [layOut, setLayOut] = useState({ cardLayout: true, postLayout: false });

  useEffect(() => {
    async function getData() {
      let data = await fetch('https://jsonplaceholder.typicode.com/users');
      let resp = await data.json();
      console.log(resp);
      setCardResp(resp);
      // fetch('https://jsonplaceholder.typicode.com/users')
      // .then((data) => data.json())
      // .then((resp) => {
      //   console.log(resp);
      // });
    }

    getData();
  }, []);

  async function getPostsForUser(userId) {
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    let resp = await data.json();
    console.log(resp);
    setLayOut({ cardLayout: false, postLayout: true });
    setPosts(resp);
  }

  return (
    <>
      <p>We will check how to implement and Api here</p>
      {layOut.cardLayout ? (
        <div className="cardLayOut">
          {cardResp.map((card, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => getPostsForUser(card.id)}
              >
                <p> {card.name} </p>
                <p> {card.username} </p>
                <p> {card.email}</p>
              </div>
            );
          })}
        </div>
      ) : (
        ''
      )}

      {layOut.postLayout ? (
        <p style={{ fontFamily: 'cursive', color: 'red' }}>{posts.body}</p>
      ) : (
        ''
      )}
    </>
  );
};

export default ApiImplementation;

// React fragments are used to remove the unnecessary extra node like a DIV <> </>

// What is two way binding
