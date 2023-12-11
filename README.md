### how to run locally
* first: clone the application -> give command npm i
* second: .env file create
* give all required node_env, port, database_url and bcrypt_salt_rounds define, mongodb connection.
## live site link -> [liveSite](https://assignment-two-crud.vercel.app)
```
NODE_ENV=
PORT=5000
DATABASE_URL=
BCRYPT_SALT_ROUNDS=
```
### Api endpoints
```
http://localhost:5000/api/users                     // user create and all users
http://localhost:5000/api/users/:userId             // delete and update
http://localhost:5000/api/users/:userId /orders/    // orders add api
http://localhost:5000/api/users/:userId /orders/total-price    // order item total price sum

```
### browser Api endpoints
```
https://assignment-two-crud.vercel.app/api/users                     // user create and all users
https://assignment-two-crud.vercel.app/api/users/:userId             // delete and update
https://assignment-two-crud.vercel.app/api/users/:userId /orders/    // orders add api
https://assignment-two-crud.vercel.app/api/users/:userId /orders/total-price    // order item total price sum

```
### Api Testing data
```
{
  "userId": "987654321",
  "username": "alice_smith",
  "password": "stron456",
  "fullName": {
    "firstName": "Alice",
    "lastName": "Smith"
  },
  "age": 30,
  "email": "alice.smith@example.com",
  "isActive": true,
  "hobbies": ["painting", "hiking", "photography"],
  "address": {
    "street": "456 Oak Avenue",
    "city": "Smallville",
    "country": "AnotherCountry"
  },
  "orders": [
    {
      "productName": "Product C",
      "price": 39.99,
      "quantity": 3
    },
    {
      "productName": "Product D",
      "price": 49.99,
      "quantity": 1
    }
  ]
}

```


### This project important command
```
 npm run start                  //start command
 npm run  dev                   //development mode locally run
 npm run prittier               //prittier code structure
 npm run eslint:fix             //eslint esu fix
```
### This project package use
#### TypeScript->  [TypeScript](https://www.typescriptlang.org/download)
####  Express->  [Express](https://expressjs.com/en/starter/hello-world.html)
####  MongoDB->  [MongoDB](https://account.mongodb.com/account/login?n=%2Fv2%2F65204b5a8bd2d3131c13c6e1&nextHash=%23clusters%2Fconnect%3FclusterId%3DCluster0)
####  cors->  [cors](https://www.npmjs.com/package/cors)
####  dotenv->  [dotenv](https://www.npmjs.com/package/dotenv)
##### mongoose->  [mongoose](https://mongoosejs.com/docs/middleware.html)
####  eslint and prettier->  [blog](https://blog.logrocket.com/linting-typescript-eslint-prettier/)
####  joi->  [joi](https://joi.dev/api/?v=17.9.1#defaultsmodifier)
####  bcrypt->  [bcrypt](https://www.npmjs.com/package/bcrypt)