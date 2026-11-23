import { Component } from '@angular/core';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { RightSidebar } from '../../shared/components/right-sidebar/right-sidebar';
import { Navbar } from '../../shared/components/navbar/navbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    Sidebar,
    RightSidebar,
    Navbar],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
}
