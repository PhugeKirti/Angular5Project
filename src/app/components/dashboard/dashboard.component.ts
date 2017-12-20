import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormControl} from '@angular/forms';

 
@Component({
selector: 'dashboard-component',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent{ 
    public task: string;
    public searchValue : string;
    public tasks = [];
    public filteredArray = [];
 
  onClick(){
    this.tasks.push(this.task);
    this.task = '';
    console.log(this.tasks);
  }

  Search(){
    console.log(this.searchValue);
    
    
    console.log(this.tasks.includes(this.searchValue));
  }
    
}
