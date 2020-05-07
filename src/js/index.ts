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
    id: number;
    firstName: string;
    lastName: string;
    attendancy: boolean;
}
let buttonwrap: HTMLDivElement = <HTMLDivElement> document.getElementById("buttonwrap");

new Vue({
    el: "#wrapper",
    data:{
        students: [
            {id:1, firstName:"Miav", lastName:"Mogens",attendancy:true},
            {id:2, firstName:"Bølle", lastName:"Bob",attendancy:true},
            {id:3, firstName:"Kalkun", lastName:"Harry",attendancy:true},
            {id:4, firstName:"Niklas", lastName:"Den Store",attendancy:false},
            {id:5, firstName:"Bianco", lastName:"Bjerg",attendancy:true},
        ],
    },
    methods:{
        ChangeAttendancy:function(student){
            
                this.students.forEach(stud => {
                    if(stud.id==student.id){
                        if (student.attendancy){
                            stud.attendancy = false;
                            this.buttontoggle(thisfield, false);
                        } else {
                            stud.attendancy = true;
                            this.buttontoggle(thisfield, true);
                        }    
                    }    
                });
            
        }
    }
})