import { strict } from "assert";


export default function Page() {

  let name: string | number

  name = "John Doe";

  name = "harry"

  name = 10;

  let names: (string|number)[]

  names = ["hey"]

  names.push(98)


  //objects
  let user: {
    age: number | string;

  }

  user={
    age: 10
  }


  // functions
        // a function that takes name as a parameter and return a string
  const func1 = (name:string, age: number, phone?: number):string => {
    console.log(name,"Hello")
    return "hellooooo"
  }

  func1("chamindu",23) //no error because phone number is optional parameter


  // creating types

  type userDetails ={
    userName: string;
    userAge: number;
    userPhone: string;
  }

  const user1:userDetails = {
    userName: "Chamindu",
    userAge: 23,
    userPhone: '0762830590'
  }

  let userFunc = (user:userDetails) => {
    user.userName="kamal";
    console.log("I am ",user.userName);
  }


  // interfaces

  interface IUser{
    name: string;
    age:number
  }

  interface IEmployee extends IUser{
    employeeNumber: number;
  }

  const employeeDetails: IEmployee = {
    name:"kavya",
    age: 22,
    employeeNumber: 1
  }

  console.log(employeeDetails.employeeNumber);

  //Genarics
  interface workers<T> {
    name: string;
    age:number;
    extra:T[]
  }

  const worker1:workers<string> = {
    name: "chami",
    age: 23,
    extra: ["yo1","yo2"]
  }


  interface BetterWorker<T extends object> {
    name: string;
    class: string;
    user: T[]
  }

  const betterWorker1: BetterWorker<IUser> = {
    name:'kavya',
    class: "3B",
    user: [{name:"kavu",age:20}]
  } 




  return (
    <div className="text-black">
      <h1>Test Page</h1>
      <p>Hello, {name}</p>
    </div>
  )
}