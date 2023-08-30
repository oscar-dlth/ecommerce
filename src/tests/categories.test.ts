import request from "supertest";
import app from "@presentation/webapi";

describe('GET categories', ()=>{
    test('should return status code 200', async ()=> {
        const response = await request(app).get('/categories?keyWord=&size=5&page=0').send();
        expect(response.statusCode).toBe(200);
    })

    test('should return object with data of categories paged', async ()=> {
        const response = await request(app).get('/categories?keyWord=&size=5&page=0').send();
        expect(response.body.data.rows).toBeDefined();
        expect(response.body.data.count).toBeDefined();
    })
    
    test('should return status OK', async ()=> {
        const response = await request(app).get('/categories?keyWord=&size=5&page=0').send();
        expect(response.body.status).toBeDefined();
    })

    test('should return status OK with no params', async ()=> {
        const response = await request(app).get('/categories').send();
        expect(response.body.status).toBe('OK');
    })
});



