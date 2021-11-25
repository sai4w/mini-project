import { Component, OnInit } from '@angular/core';
import { SkinService } from '../../services/skin.service';
import { Skin } from '../../Skin';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css'],
})
export class SkinsComponent implements OnInit {
  skins: Skin[] = [];

  constructor(private skinService: SkinService) {}

  ngOnInit(): void {
    this.skinService.getSkins().subscribe((skins) => (this.skins = skins));
  }

  deleteSkin(skin: Skin) {
    this.skinService
      .deleteSkin(skin)
      .subscribe(
        () => (this.skins = this.skins.filter((s) => s.id !== skin.id))
      );
  }

  toggleAvailable(skin: Skin) {
    skin.available = !skin.available;
    this.skinService.updateSkinAvailable(skin).subscribe();
  }

  addSkin(skin: Skin) {
    this.skinService.addSkin(skin).subscribe((skin) => this.skins.push(skin));
  }
}
