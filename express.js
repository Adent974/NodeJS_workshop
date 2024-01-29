//import express from "express"
const express = require("express")
const url = require("url")
const app = express()
const port = 3002

app.get('/accueil', (req, res) => {
        res.send('<!DOCTYPE html> \
            <html> \
                <body> \
                    <h1>Bienvenue sur l\'accueil</h1> \
                </body> \
            </html>')
    console.log("Vous etes sur l'accueil")
})
app.get('/logo', (req, res) => {
        res.send('<!DOCTYPE html> \
        <html> \
            <body> \
                <h1><img src="https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png" /></h1> \
            </body> \
        </html>')
    console.log("Vous êtes au logo")
})
app.get('/profile', (req, res) => {
    res.send('<!DOCTYPE html> \
        <html> \
            <body> \
                <h1>Bienvenue sur votre profile</h1> \
            </body> \
        </html>')
    console.log("Vous etes sur votre profile")
})

app.listen(port, () => {
    console.log(`test${port}!/`);
});