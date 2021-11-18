import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  template: `
  <header>
  <h1>{{ title }}</h1>
  <app-button
    *ngIf="hasRoute('/')"
    color="{{ showAddTask ? 'red' : 'green' }}"
    text="{{ showAddTask ? 'Close' : 'Add' }}"
    (btnClick)="toggleAddTask()"
  ></app-button>
</header>
  `,
  styles: [`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  `],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {}
  
   ngOnDestroy() {
     // Unsubscribe to ensure no memory leaks
     this.subscription.unsubscribe();
   }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
