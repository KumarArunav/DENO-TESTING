import { Application , Router } from "https://deno.land/x/oak/mod.ts";

//Model //COURSE API

interface Course {
    name : string,
    price : number,
    certification : boolean,
    
}

//DATA
let courses : Array<Course> = [
    {
        name: "WEB DEV",
        price : 499,
        certification : true

    },
    {
        name: "Android App",
        price : 359,
        certification : true

    },
    {
        name: "C++ Full ",
        price : 299,
        certification : true

    },
    {
        name: "Machine Learning",
        price : 199,
        certification : false

    },
    
];



//controllers

 const getCourses =  ({response} : {response:any}) => {
         response.body = courses

};

const addCourses =  async({request ,response} : {request:any,response:any}) => {
        const body = await request.body();
        const course : Course =body.value;
        courses.push(course)
        response.body = { coursesadded :  "Success"}
        response.status = 200;


};
//Server
const router = new Router();
const app = new Application();
const PORT = 8000;

    router
    .get("/learn",getCourses)
    .post("/create",addCourses);
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port : 8000});