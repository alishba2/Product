import { Injectable } from '@angular/core';
// import { TaskI } from './create-post/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  observable, Observable } from 'rxjs';
import { SelectorMatcher } from '@angular/compiler';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators';
import SampleJson from '../assets/product-fixtures.json'
const httpOptions = {headers: new HttpHeaders({
'Content-Type':  'application/json',
Authorization: 'my-auth-token' })};

@Injectable({
  providedIn: 'root'
})

export class TaskService {


  constructor(private http : HttpClient) {
    console.log(SampleJson)
  }
  obj = {
    title:Title
  }
  


  get():Observable<any>{
    return this.http.get('../assets/product-fixtures.json').pipe(
      map((response)=>response)
    )
  

  }

  // saveJson(obj:any) {
  //   localStorage.setItem('../assets/product-fixtures.json', JSON.stringify(obj));
  // }

  saveJson(myData:any, data:any) {
    const jsonData = JSON.stringify(data)
    localStorage.setItem('myData', jsonData)
 }
  delete(id:any) {
    localStorage.removeItem(id);
  }
 
  // delete(id:any):Observable<TaskI>{
  //   return this.http.delete<TaskI>( `../assets/product-fixtures.json/${id}`).pipe(
  //     map((response)=>{
  //       return response;
  //     })
  //   )
  // }
// private tasks:TaskI[]=[];
//   constructor( private webService : WebserviceService) { }


//   gettasks(){
//     return this.tasks
//   }
//   addtask(title:string , content:any){
//     return this.webService.post(title , content);
//     // const task:TaskI={title : title , content:content};
//     // this.tasks.push(task);
//   }
//   DeleteTask(){
//      alert("task deleted");
//   }
//   UpdateTask(){
//     alert("task Updated");
//   }
}
