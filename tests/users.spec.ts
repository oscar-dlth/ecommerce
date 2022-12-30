import request from "supertest";
import mongoose from "../src/4-infrastructure/db/mongoDB/conection";
import app from "../src/5-presentation/webapi";

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

    afterAll( ()=> {

        closeDBConnection()

    })
});

const closeDBConnection = ()=>{

    mongoose.connection.close();

};

