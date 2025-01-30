import express from 'express';
import cors from 'cors';

const PORT = 8000;
const app = express();
app.use(cors());

const USER = {
    id: 1,
    name: 'User Name',
    email: 'example@email.com',
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvyGQPqww3uBQgjpJpemRsacdB1AAEeWYThA&s",
    img2: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021_big.jpg.slideshow-large.jpg"
    
};

app.get('/api/user', (req, res) => {
    try {
        res.status(200).json(USER);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.get('/', (req, res) => {
    res.send('hi');
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});