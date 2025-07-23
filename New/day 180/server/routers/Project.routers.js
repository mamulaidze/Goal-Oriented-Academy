import express from 'express';

const router = express.Router();



router.post('/create-project', (req, res) => {
    res.status(200).json({
        message: 'yochag',})
});
router.get('/get-projects', (req, res) => {
    res.status(200).json({
        message: 'eteherberb',})
});