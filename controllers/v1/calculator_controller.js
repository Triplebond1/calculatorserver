//const express = require('express');
//@desc POST Create a addition function for calculator
//@route POST /v1/routers
//@access public
const addition =  (req, res) => {
    try {
        
        const {num1, num2} = req.body;
    	
        if (
            typeof num1 !== 'number' ||
            typeof num2 !== 'number' ||
            isNaN(num1) ||
            isNaN(num2)
        ) {
            return res.status(400).json({ message: 'Invalid input: num1 and num2 must be valid numbers.' });
        }

    	const add = num1 + num2;

        res.status(200).json({
            result: add
        });
        return ;

    } catch (error) {
    	    return res.status(500).json({message : error.message}) 
    }

}

//@desc POST Create a subtraction function for calculator
//@route POST /v1/routers
//@access public
const subtraction = (req, res) => {
    try {
        
        const {num1, num2} = req.body;
    	
        if (
            typeof num1 !== 'number' ||
            typeof num2 !== 'number' ||
            isNaN(num1) ||
            isNaN(num2)
        ) {
            return res.status(400).json({ message: 'Invalid input: num1 and num2 must be valid numbers.' });
        }
    	const subtract = num1 - num2;

         res.status(200).json({
            result: subtract
        });
    
        return;

    } catch (error) {
    	    return  res.status(500).json({message : error.message}) 
    }

}

//@desc POST Create a multiplication function for calculator
//@route POST /v1/routers
//@access public
const multiplication = (req, res) => {
    try {
        
        const {num1, num2} = req.body;
    	
        if (
            typeof num1 !== 'number' ||
            typeof num2 !== 'number' ||
            isNaN(num1) ||
            isNaN(num2)
        ) {
            return res.status(400).json({ message: 'Invalid input: num1 and num2 must be valid numbers.' });
        }
    	const multiply = num1 * num2;

     res.status(200).json({
        result: multiply
    });
    return;

    } catch (error) {
    	    return  res.status(500).json({message : error.message}) 
    }

}

//@desc POST Create a division function for calculator
//@route POST /v1/routers
//@access public
const division = (req, res) => {
    try {
        
        const {num1, num2} = req.body;
    	
        if (
            typeof num1 !== 'number' ||
            typeof num2 !== 'number' ||
            isNaN(num1) ||
            isNaN(num2)
        ) {
            return res.status(400).json({ message: 'Invalid input: num1 and num2 must be valid numbers.' });
        }
    if (num1 === 0 || num2 === 0) {
        res.status(400).json({message: 'ensure you are not inputing zerro as a number'})
        return;
    }
    	const divide = num1 / num2;

    res.status(200).json({
        result: divide
    });

    return ;

    } catch (error) {
    	    return res.status(500).json({message : error.message}) 
    }

}

module.exports = {addition, subtraction, multiplication, division};