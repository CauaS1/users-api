const express = require("express");
const app = express();
const cors = require("cors");
const fs = require('fs');

app.use(cors());
app.use(express.static('public'));

const Data = [
  {
    id: 1,
    name: "Mary",
    photo: "https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    about: "I'm a Photographer in my spare time - Love Nature",
    gender: "female",
    post: {
      image: "https://images.unsplash.com/photo-1609387116764-5d5be978a974?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
      title: "Doing a photo essay with my niece <3"
    },
    post_info: {
      hour: 5,
      likes: 280
    },
  },
  {
    id: 2,
    name: "Levi",
    photo: "https://images.unsplash.com/photo-1600181957685-9209729bcd25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    about: "I like to make draws",
    gender: "male",
    post: {
      image: "https://images.unsplash.com/photo-1609403803547-0f59d7388f65?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=393&q=80",
      title: "I don't know if I choose a mask or a beard"
    },
    post_info: {
      hour: 18,
      likes: 518
    },
  },
  {
    id: 3,
    name: "Alexis",
    photo: "https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    about: "Love to take photos",
    gender: "male",
    post: {
      image: "https://images.unsplash.com/photo-1609518726036-d683cc25eef4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=410&q=80",
      title: "Some photos"
    },
    post_info: {
      hour: 5,
      likes: 650
    },
  },
  {
    id: 4,
    name: "Andrea",
    photo: "https://images.unsplash.com/photo-1565699774381-d421d9e7ad41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    about: "Game Developer and runner in my free time",
    gender: "female",
    post: {
      image: "https://images.unsplash.com/photo-1598610139007-45ad9f85c90f?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: "Enjoying my vacation at a nice place with friends"
    },
    post_info: {
      hour: 2,
      likes: 150
    },
  },
  {
    id: 5,
    name: "Lucas",
    photo: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    about: "Waiter on Saturdays nights",
    gender: "male",
    post: {
      image: "https://images.unsplash.com/photo-1578855009123-4f60cea7fad0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=319&q=80",
      title: "Taking photos isn't my strengths haha"
    },
    post_info: {
      hour: 11,
      likes: 880
    },
  }
]

app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.json(Data);
});

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.statusCode = 404;
    res.json({ msg: "Invalid ID!" })
  } else {
    const user = Data.find(user => user.id == id); //Find(), it's gonna find just ONE user with the id

    if (user != undefined) {
      res.json({ user });
    } else {
      res.sendStatus(404);
    }
  }
});

app.get("/users/gender/:gender", (req, res) => {
  const gender = req.params.gender;
  if (gender == "male" || gender == "female") {
    const user = Data.filter(user => user.gender == gender); //Filter(), it's gonna find ALL the users with the gender selected
    res.json({ user });
  } else {
    res.sendStatus(404);
  }
});

app.listen(5500);

