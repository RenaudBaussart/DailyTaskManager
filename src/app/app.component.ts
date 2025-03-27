import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TaskGroup } from './classes/task-group';
import { WebStorageService } from './services/web-storage.service';
import { NotificationService } from './services/notification.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // Method to check if an array contains only TaskGroup instances
  private isTaskGroupArray(arr: any[]): arr is TaskGroup[] {
    // Use every() to check each item in the array
    return arr.every(item => item instanceof TaskGroup);
  }

  title = 'DailyTaskManager';

  // Property to store data from local storage
  taskGroupListStored: any;

  // Property to store task group list
  taskGroupList: Array<TaskGroup>;

  // property to store the notification service

  notifService: NotificationService;

  // Constructor with injected local storage service
  constructor(public localStoredData: WebStorageService) {
    

    // Retrieve stored data for "taskList" key
    this.taskGroupListStored = this.localStoredData.getTaskGroupList("taskList");

    // Check if retrieved data is a valid TaskGroup array
    if (!Array.isArray(this.taskGroupListStored) || !this.isTaskGroupArray(this.taskGroupListStored)) {
      // If not valid, initialize taskGroupList as an empty array
      this.taskGroupList = new Array<TaskGroup>();
    } else {
      // If valid, assign retrieved data to taskGroupList
      this.taskGroupList = this.taskGroupListStored;
    }

    this.notifService = new NotificationService;
  }
  
  // wait for the page to close
  @HostListener('window:beforeunload')
  ngOnDestroy() {
    // check if there is a taskgroup array in taskGroupList 
    if(this.isTaskGroupArray(this.taskGroupList)){
      // save the task group array
      this.localStoredData.saveTaskGroupList("taskList", this.taskGroupList)
    }
  }
}
