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
import axios from "../../node_modules/axios/index";
var baseUrl = "https://localhost:5001/api/";
var buttonwrap = document.getElementById("buttonwrap");
new Vue({
    el: "#wrapper",
    data: {
        userTeacher: {
            courses: [
                { id: 1, name: "Programmering 3. semester" },
                { id: 2, name: "Programmering 2. semester" },
                { id: 3, name: "Technology" },
            ],
            firstName: "Anders",
            lastName: "Etellerandet",
            currentCourse: {
                id: 1,
                lessonId: 1,
                name: "Programmering",
                students: [
                    { id: 1, firstName: "Miav", lastName: "Mogens", attendancy: true },
                    { id: 2, firstName: "Bølle", lastName: "Bob", attendancy: true },
                    { id: 3, firstName: "Kalkun", lastName: "Harry", attendancy: true },
                    { id: 4, firstName: "Niklas", lastName: "Den Store", attendancy: false },
                    { id: 5, firstName: "Bianco", lastName: "Bjerg", attendancy: true },
                ]
            }
        },
        Teacher: {},
        mongo: [],
        sendData: {
            TeacherId: 1,
            CurrentLessonTime: new Date(2020, 4, 19, 9, 15, 1, 1),
        }
    },
    methods: {
        ChangeAttendancy: function (student) {
            this.userTeacher.currentCourse.students.forEach(function (stud) {
                if (stud.id == student.id) {
                    if (student.attendancy) {
                        stud.attendancy = false;
                    }
                    else {
                        stud.attendancy = true;
                    }
                }
            });
        },
        GetTeacher: function () {
            var _this = this;
            axios.post(baseUrl + "teacher", this.sendData)
                .then(function (response) {
                _this.userTeacher = response.data;
            })
                .catch(function (error) {
                alert(error.message);
            });
        },
        getlol: function () {
            var _this = this;
            axios.get(baseUrl + "course")
                .then(function (response) {
                alert("SUCCESS");
                _this.mongo = response.data;
            })
                .catch(function (error) {
                console.log(error.response);
                alert(error.message);
            });
        }
    },
    created: function () { this.getlol(); }
});
