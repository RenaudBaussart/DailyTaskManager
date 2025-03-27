import { Injectable } from '@angular/core';
import { NotificationObject } from '../classes/notification-object';
import { Observable, Subject, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  // creation of a subject to be the "center" of the notification system
  private static hermes = new Subject<NotificationObject>();
  // create a observable so the user cannot send data in the subject
  public static pan$ = NotificationService.hermes.asObservable();

  constructor() { 
    // log to check if the service is setup
    console.log('Hérmes is set up')
  }

  // methode to create a notification of the type good (color green)
  public static createGoodNotification(message:string){
    // check if the message in not a empty string
    if(!message){
      console.log("[Notification Service ERROR]: no message in your notif")
      return;
    }
    let notification:NotificationObject = new NotificationObject('good',message);
    NotificationService.hermes.next(notification);
  }
  // methode to create a notification of the type error (color red)
  public static createErrorNotification(message:string){
    // check if the message in not a empty string
    if(!message){
      console.log("[Notification Service ERROR]: no message in your notif")
      return;
    }
    let notification:NotificationObject = new NotificationObject('error',message)
    NotificationService.hermes.next(notification)
  }
}
