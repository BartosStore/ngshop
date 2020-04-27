import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailNotifications'
})
export class EmailNotificationsPipe implements PipeTransform {

  transform(value: Boolean): String {
    return value ? 'Okay, we will send an email.' : 'Great sales are waiting!';
  }

}
