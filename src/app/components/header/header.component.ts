import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule
  ]
})
export class HeaderComponent   {
  @Input()
  public backButton = false;

  @Input()
  public title = "kidlândia";

  @Input()
  public show = true;

  constructor() { }

}
