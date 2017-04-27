import {Component} from '@angular/core';
import {NotificationsService} from './notifications.service';
import {Notification} from './notifications.model';

@Component({
    moduleId : module.id,
    selector:'notifications',
    templateUrl: './notifications.html',
  styleUrls: ['./notifications.css'],
})
export class Notifications{
    private _notes : Notification[];

    constructor(private notifications:NotificationsService){
        this._notes = new Array<Notification>();
        notifications.noteAdded.subscribe(note =>{
            this._notes.push(note);

            setTimeout(() => {this.hide.bind(this)(note)}, 2000);
        });
    }
    private hide(note){
        let index = this._notes.indexOf(note);

        if(index >=0){
            this._notes.splice(index, 1);
        }
    }
}
