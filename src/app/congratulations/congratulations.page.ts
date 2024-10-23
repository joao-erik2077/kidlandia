import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.page.html',
  styleUrls: ['./congratulations.page.scss'],
})
export class CongratulationsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  exit() {
    this.router.navigateByUrl('tabs/tab2');
  }

}
