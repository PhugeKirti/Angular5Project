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
    public tasks = [];
 
  onClick(){
    this.tasks.push({name: this.task});
    this.task = '';
  }
    
}
