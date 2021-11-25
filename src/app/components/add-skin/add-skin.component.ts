import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Skin } from '../../Skin';

@Component({
  selector: 'app-add-skin',
  templateUrl: './add-skin.component.html',
  styleUrls: ['./add-skin.component.css'],
})
export class AddSkinComponent implements OnInit {
  @Output() onAddSkin: EventEmitter<Skin> = new EventEmitter();
  name: string;
  date: Date;
  type: string;
  price: number;
  available: boolean = false;
  showAddSkin: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddSkin = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
        this.subscription.unsubscribe();
    }

  onSubmit() {
    if (!this.name) {
      alert('Please add a skin name!');
      return;
    }

    const newSkin = {
      name: this.name,
      date: this.date,
      type: this.type,
      price: this.price,
      available: this.available,
    };

    this.onAddSkin.emit(newSkin);

    this.name = '';
    this.date = new Date;
    this.type = '';
    this.price = 0;
    this.available = false;
  }
}
