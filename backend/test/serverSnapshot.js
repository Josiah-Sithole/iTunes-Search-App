let Server = require('../server');

let expect = require('chai').expect;
let request = require('request');

//testing the server status if it renders correctly and the API Fetch
describe("Server status and API fetch", () => { 
    it('status', function(completed) {
        request('http://localhost:3001/', function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            completed();
        })
    })
    it('fetch correct data', () => {
        let term = 'beyonce'
        let option = 'artistName'
        request(`https://itunes.apple.com/search?term=${term}&media=${option}`, function(error, response, body) {
            expect(response.statusCode).to.equal(200)
        });

    })
    
})
