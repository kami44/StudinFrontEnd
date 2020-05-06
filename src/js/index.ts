/*interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): string {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user: Person = { firstName: "John", lastName: "Doe" };

let element: HTMLDivElement = <HTMLDivElement> document.getElementById("content");
element.innerHTML = greeter(user);*/
interface IStudent{
    firstName: string;
    lastName: string;
    attendancy: boolean;
}

new Vue({
    el: "#wrapper",
    data:{
        students : [
            {firstName:"Miav", lastName:"Mogens",attendancy:true},
            {firstName:"Bølle", lastName:"Bob",attendancy:true},
            {firstName:"Kalkun", lastName:"Harry",attendancy:true},
            {firstName:"Niklas", lastName:"Den Store",attendancy:false},
            {firstName:"Bianco", lastName:"Bjerg",attendancy:true},
        ],
    },
    methods:{

    }
})