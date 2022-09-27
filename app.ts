import express from 'express';

const app = express();

const port = 3000;

app.listen(port, () => {
    console.log('a server is listen on port:', port);
});
