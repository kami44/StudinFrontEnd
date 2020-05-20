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

import axios, {
    AxiosResponse,
    AxiosError
} from "../../node_modules/axios/index"
interface IStudent{
    id: number;
    firstName: string;
    lastName: string;
    attendancy: boolean;
}
interface lol{
    id:number;
    currentLessonTime: Date;
}
interface ITeacher{
    courses:[
        {id:number; name:string;}
    ]
    firstName:string;
    lastName:string;
    currentCourse:{
        id:number;
        name:string;
        students:[
            {id:number;firstName:string;lastName:string;attendancy:boolean;}
        ]
    }
}
interface IUserLesson{
    id:number
    fkusers:number
    fklessons:number
    checkedout:boolean
    minutesStayed:number
    minutesLate:number
}
interface ICourse{
    id:number
    name:string
    fkusers:number
}
let baseUrl: string = "https://studinapifinal.azurewebsites.net/api/";

let buttonwrap: HTMLDivElement = <HTMLDivElement> document.getElementById("buttonwrap");

new Vue({
    el: "#wrapper",
    data:{  
        userTeacher: {
            courses: [],
            firstName: "",
            lastName: "",
            currentCourse: {
                id:1,
                lessonId:1,
                lessonStart:"",
                lessonEnd:"",
                courseName:"",
                students: []
            }
        },
        
        timer:'',
        Teacher:{},
        mongo:[],
        sendData:{
            TeacherId:1,
            CurrentLessonTime: new Date(2020, 4, 19, 9, 15, 1, 1),
        }
    },
    methods:{
        ChangeAttendancy:function(student: IStudent){
            this.AddUserLesson(student);
        },
        GetTeacher:function (){
            axios.post<ITeacher>(baseUrl+"teacher", this.sendData)
            .then((response: AxiosResponse<ITeacher>) => {
                this.userTeacher = response.data
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        AddUserLesson:function (student: IStudent) {
            let userlesson =  {id:1, fkusers:student.id, fklessons: this.userTeacher.currentCourse.lessonId, checkedout:false, minutesStayed:0, minutesLate:0 };
 
            axios.post<IUserLesson>(baseUrl+"userlesson", userlesson)
            .then((response: AxiosResponse) => {
                //let message: string = "response " + response.status + " " + response.statusText
                //this.addMessage = message
                this.GetTeacher()
            })
            .catch((error: AxiosError) => {
                alert(error.message)
            })
        },
        DeleteUserLesson:function (deleteId: number) {
            let uri: string = baseUrl + "userlesson/" + deleteId
            axios.delete<void>(uri)
                .then((response: AxiosResponse<void>) => {
                    //this.deleteMessage = response.status + " " + response.statusText
                    this.GetTeacher();
                })
                .catch((error: AxiosError) => {
                    this.deleteMessage = error.message
                    alert(error.message)
                })
        }
    },
    created()
    {
        this.GetTeacher();

        setInterval(this.GetTeacher, 5000);
    }
    
    
})