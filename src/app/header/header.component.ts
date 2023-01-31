import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private taskService : TaskService) { }
  tasks:any[] ;
  Title:any =''
  title: 'post'
  public content='';


  data={
    "name":"abc "
  };

update(myData:any){
  this.taskService.saveJson(myData, this.data)
}
  DeleteTask(data:string){
    this.taskService.delete(data);
  }
  ngOnInit(){
    this.taskService.get().subscribe((news : any[])=>{this.tasks = news})}

}
