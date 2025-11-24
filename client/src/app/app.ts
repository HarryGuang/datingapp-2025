import { Component, inject, OnInit, signal } from '@angular/core';
import { Nav } from "../layout/nav/nav"
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected router = inject(Router);
  
  /*
  // Promise approach
  async ngOnInit(): Promise<void> {
    this.members.set(await this.getMembers());
  }

  async getMembers() {
    try {
      return await lastValueFrom(this.http.get('https://localhost:5001/api/members'));
    } catch (err) {
      console.error(err);
      throw err;
    }
 }

  */
}
