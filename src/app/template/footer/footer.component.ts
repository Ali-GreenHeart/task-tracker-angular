import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer>
  <p>Copyright &copy; 2021</p>
  <a routerLink="/about">About</a>
  </footer>
  `,
  styles: [`
  footer {
    margin-top: 30px;
    text-align: center;
  }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
