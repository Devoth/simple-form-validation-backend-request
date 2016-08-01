## Front end

First install all dependancies with:

```
npm install
bower install
```

Then run the server with:

`grunt serve`

Run tests with:

`grunt karma`

## Optional backend

Apart from the main task, I've added a simple Express backend just as an exercise. Backend can give different responses (just uncomment some code). To run custom backend, first change the API URL to `http://localhost:3000/auth`.

Then run the backend server with:

`nodemon server.js`
