const http = require('http'); //permert de ne pas utiliser expresse
const url = require('url');
const fs = require('fs');

const host_name = "Adam";

const server = http.createServer((req, res) => {    
    if (req.url == '/accueil') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<!DOCTYPE html> \
            <html> \
                <body> \
                    <h1>Bienvenue sur l\'accueil</h1> \
                </body> \
            </html>')
        console.log("Vous etes sur l'accueil")
    }
    if (req.url == '/logo') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<!DOCTYPE html> \
            <html> \
                <body> \
                    <h1><img src="https://www.campusdessolidarites.eu/voy_content/uploads/Epitech.png" /></h1> \
                </body> \
            </html>')
        console.log("Vous êtes au logo")
    }
    if (req.url == '/profile') {
        res.setHeader('Content-Type', 'text/html')
        res.write('<!DOCTYPE html> \
            <html> \
                <body> \
                    <h1>Bienvenue sur votre profile</h1> \
                </body> \
            </html>')
        console.log("Vous etes sur votre profile")
    }
    return res.end();   
}).listen(3002);
console.log("serveur créer")