import request from "supertest";
import app from "../app/5-presentation/webapi";

describe('GET users', ()=>{

    test('should return status code 200', async ()=> {

        const response = await request(app).get('/users').send();
        expect(response.statusCode).toBe(200);

    })

    test('should return object with data as array of users', async ()=> {

        const response = await request(app).get('/users').send();
        expect(response.body.data).toBeInstanceOf(Array);

    })
    
    test('should return status OK', async ()=> {

        const response = await request(app).get('/users').send();
        expect(response.body.status).toBeDefined();

    })

});



