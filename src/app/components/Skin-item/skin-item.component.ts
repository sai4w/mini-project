import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skin } from '../../Skin';
import { faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skin-item',
  templateUrl: './skin-item.component.html',
  styleUrls: ['./skin-item.component.css'],
})
export class SkinItemComponent implements OnInit {
  @Input() skin: Skin;
  @Output() onDeleteSkin: EventEmitter<Skin> = new EventEmitter();
  @Output() onToggleAvailable: EventEmitter<Skin> = new EventEmitter();
  faTimes = faTimes;
  
  constructor() {}

  ngOnInit(): void {}

  onDelete(skin) {
    this.onDeleteSkin.emit(skin);
  }

  onToggle(skin) {
    this.onToggleAvailable.emit(skin);
  }


}
