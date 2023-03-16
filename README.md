# HandsUp-Server

Developed as the final project of our web development bootcamp at Ironhack Barcelona. It's a MERN Stack application, check the frontend repository [here](https://github.com/admartinbarcelo/HandsUp-Client).

## About

Hello! We are Andrés, Raul and Adrian. We are full-stack developers. This project is aimed at all those curious people who want to meet new people and be able to carry out those plans in the company of totally new people.

![Project Image]()

## Deployment

You can check the app fully deployed [here](). If you wish to view the API deployment instead, check [here]().

## Work structure

We used [Trello](https://trello.com/b/16pVaciY/final-project) to organize our workflow.

## Installation guide

- Fork this repo
- Clone this repo

```shell
$ cd HandsUp-Server
$ npm install
$ npm start
```

## Models

#### User.model.js

```js
const userSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
  },
  password: { type: String, required: true },
  images: { type: String, required: true },
  plansMade: [{ type: Schema.Types.ObjectId, ref: "Plan" }],
  packsMade: [{ type: Schema.Types.ObjectId, ref: "Pack" }],
  plansEnrolled: [{ type: Schema.Types.ObjectId, ref: "Plan" }],
  packsEnrolled: [{ type: Schema.Types.ObjectId, ref: "Pack" }],
  isAdmin: Boolean,
  isCompany: Boolean,
});
```

#### Plans.model.js

```js
const planSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  images: [{ type: String, required: true }],
  author: { type: Schema.Types.ObjectId, ref: "User" },
  userList: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
```

#### Packs.model.js

```js
const packSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now, required: true },
  images: [{ type: String, required: true }],
  destination: { type: String, required: true },
  price: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  userList: [{ type: Schema.Types.ObjectId, ref: "User" }],
});
```

## User roles

|  Role   | Capabilities                                                                                                                                | Property        |
| :-----: | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
|  User   | Can login/logout. Can read all the plans and packs. Can create a new plan and edit/delete their plans. Can join a plan/pack when logged in. | isAdmin: false  |
|  Admin  | Can login/logout. Can read, edit or delete all the plans/packs. Can create a new plan/pack.                                                 | isAdmin: true   |
| Company | Can login/logout. Can read all the plans and packs. Can create a new pack and edit/delete their packs.                                      | isCompany: true |

## API Reference

| Method | Endpoint               | Require                                        | Response (200)               | Action                                                             |
| :----: | ---------------------- | ---------------------------------------------- | ---------------------------- | ------------------------------------------------------------------ |
|  POST  | /auth/signup           | const { username, email, password } = req.body | json({user: user})           | Registers the user in the database and returns the logged in user. |
|  POST  | /auth/login            | const { email, password } = req.body           | json({authToken: authToken}) | Logs in a user already registered.                                 |
|  GET   | /auth/verify           | -                                              | json(req.payload)            | Verifies token stored on the client                                |
|  GET   | /plans                 | -                                              | json(response)               | Returns all plans stored in the database                           |
|  POST  | /plans/create          | req.body                                       | json({result:ok})            | Creates a plan in the database.                                    |
|  GET   | /plans/:plansId        | const { plansId } = req.params                 |                              | Returns the information of the specific plan.                      |
|  PUT   | /plans/:plansId/edit   | const { plansId } = req.params - req.body      |                              | Edits a plan if you're the user who made it.                       |
| DELETE | /plans/:plansId/delete | const { plansId } = req.params                 |                              | Deletes a plan if you're the user who made it.                     |
|  GET   | /packs                 | -                                              | json(response)               | Returns all packs stored in the database                           |
|  POST  | /packs/create          | req.body                                       | json({result:ok})            | Creates a pack in the database.                                    |
|  GET   | /packs/:packsId        | const { packsId } = req.params                 |                              | Returns the information of the specific pack.                      |
|  PUT   | /packs/:packsId/edit   | const { packsId } = req.params - req-body      |                              | Edits a pack if you're the user who made it.                       |
| DELETE | /packs/:packsId/delete | const { packsId } = req.params                 |                              | Deletes a pack if you're the user who made it.                     |

---
