const request = require('supertest');

const baseUrl = "https://ixn-for-good.herokuapp.com/"

describe('/videos endpoint', () => {
    it("should respond with a 200 status code", 
    async () => {
        const response = await request(baseUrl).get('videos')
        expect(response.statusCode).toBe(200)
    });
});

describe('/videos/mostrecent endpoint', () => {
    it("should respond with a 200 status code", 
    async () => {
        const response = await request(baseUrl).get('videos/mostrecent')
        expect(response.statusCode).toBe(200)
    });

    it("should respond with 3 array items", 
    async () => {
        const response = await request(baseUrl).get('videos/mostrecent')
        expect(response.body.length).toBe(3)
    });
});
