import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddSkin: boolean = false;
  private showUpdateSkin: boolean = false;

  private subject = new Subject<any>();

  constructor() {}

  toggleAddSkin(): void {
    this.showAddSkin = !this.showAddSkin;
    this.subject.next(this.showAddSkin);
  }
  toggleUpdateSkin(): void {
    this.showUpdateSkin = !this.showUpdateSkin;
    this.subject.next(this.showUpdateSkin);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
