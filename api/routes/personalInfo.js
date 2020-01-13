const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /personalInfo'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /personalInfo'
    });
});

router.get('/:empid', (req, res, next) => {
    const id = req.params.empid;
    if (id === 'special'){
        res.status(200).json({
            message: 'you discovered the special ID!'
        })
     } else {
        res.status(200).json({
            message: 'You passed an ID.'
        });
     }
})

router.patch('/:empid', (req, res, next) => {
    res.status(200).json({
        message: 'Updated personal information!'
    })
});

router.delete('/:empid', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted personal info.'
    })
});

module.exports = router;