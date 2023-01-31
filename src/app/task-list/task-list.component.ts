import { Component, OnInit } from '@angular/core';
// import { TaskI } from '../create-post/task';
import { TaskService } from '../task.service';
import { NgForm } from '@angular/forms';
import { ImportExport } from '@mui/icons-material';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private taskService : TaskService) { }
  POSTS: Array<any> = []
  page: number = 1;
  count: number = 0;
  tableSize: number = 2;
  tableSizes: any = [3, 6, 9, 12];

  color: any;

  tasks:any[] ;
  Title:any =''
  title: 'post'
  public content='';

  name={
    "name":"abc "
  };



  DeleteTask(data:string){
    this.taskService.delete(data);
  }
  ngOnInit(){
    this.taskService.get().subscribe((news : any[])=>{this.tasks = news})}

  
    onTableDataChange(event: any) {
      let startIndex = (event - 1) * this.tableSize
      let endingIndex = event * this.tableSize
      let myArr = this.POSTS.filter((item: any, index: any) => { if (index >= startIndex && index < endingIndex) return item })
      this.tasks = myArr.sort(function (a: any, b: any) {
        var textA = a.moviesTitle.toUpperCase();
        var textB = b.moviesTitle.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      });
  
      this.page = event;
      // this.userData();
    }
    onTableSizeChange(event: any): void {
      this.tableSize = event.target.value;
      this.page = 1;
      // this.userData();
    }

}
