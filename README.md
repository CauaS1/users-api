# USERS API
It's an API where you can request users. This was created especially for use in my projects, but you also can use it.

## How to use?
First, you need to do a git clone, so create a folder in you computer and do: <br>
`git clone`, after this you need to install all the dependences from package.json, so just do `yarn` or `npm install`
<br> <br>
To run it is very simple, do `npm run dev` or `yarn run dev`


### `GET` `http://localhost:5500/users`
Returns all users, the result will be like this: <br>
```
[
  {
    "id": 1,
    "name": "Mary",
    "photo": "https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
    "about": "I'm a Photographer in my spare time - Love Nature",
    "gender": "female",
    "post": {
      "image": "https://images.unsplash.com/photo-1609387116764-5d5be978a974?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
      "title": "Doing a photo essay with my niece <3"
    },
    "post_info": {
      "hour": 5,
      "likes": 280
    },
    "liked": false
  },
  ...
]
```

### `GET` `http://localhost:5500/user/:id`
Returns just an user with the id selected, for example: `http://localhost:5500/user/5` <br>
```
{
  "user": {
    "id": 5,
    "name": "Lucas",
    "photo": "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    "about": "Waiter on Saturdays nights",
    "gender": "male",
    "post": {
      "image": "https://images.unsplash.com/photo-1578855009123-4f60cea7fad0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=319&q=80",
      "title": "Taking photos isn't my strengths haha"
    },
    "post_info": {
      "hour": 11,
      "likes": 880
    }
  }
}
```

### `GET` `http://localhost:5500/users/gender/:gender`
Return all users with the gender selected, for example `http://localhost:5500/users/gender/female` 
```
{
  "user": [
    {
      "id": 1,
      "name": "Mary",
      "photo": "https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
      "about": "I'm a Photographer in my spare time - Love Nature",
      "gender": "female",
      "post": {
        "image": "https://images.unsplash.com/photo-1609387116764-5d5be978a974?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
        "title": "Doing a photo essay with my niece <3"
      },
      "post_info": {
        "hour": 5,
        "likes": 280
      }
    },
    {
      "id": 4,
      "name": "Andrea",
      "photo": "https://images.unsplash.com/photo-1565699774381-d421d9e7ad41?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTB8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "about": "Game Developer and runner in my free time",
      "gender": "female",
      "post": {
        "image": "https://images.unsplash.com/photo-1598610139007-45ad9f85c90f?ixid=MXwxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDF8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "title": "Enjoying my vacation at a nice place with friends"
      },
      "post_info": {
        "hour": 2,
        "likes": 150
      }
    }
  ]
}
```
