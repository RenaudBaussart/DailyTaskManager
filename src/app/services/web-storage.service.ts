import { Injectable } from '@angular/core';
import { TaskGroup } from '../classes/task-group';

@Injectable({
  providedIn: 'root'
})
export class WebStorageService {

  constructor() { }

  saveTaskGroupList(key: string, value: Array<TaskGroup>) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getTaskGroupList(key: string): Array<TaskGroup> | null {
    let localDataSaved = localStorage.getItem(key);
    if( localDataSaved!== null){
      return JSON.parse(localDataSaved);
    }
    else{
      return null
    }
    
  }

  removeTaskGroupList(key: string) {
    localStorage.removeItem(key);
  }

  clearStorage() {
    localStorage.clear();
  }
}
