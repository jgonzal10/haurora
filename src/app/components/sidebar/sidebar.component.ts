import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'diagnosepatient', title: 'Diagnosticar Paciente',  icon: 'face', class: '' },
    { path: 'patientschedule', title: 'Cronograma',  icon: 'schedule', class: '' },
    { path: 'medicinedispense', title: 'Dispensación Med',  icon: 'dashboard', class: '' },
    { path: 'solutiondispense', title: 'Dispensación Sol',  icon: 'dashboard', class: '' },
    { path: 'production', title: 'Produción',  icon: 'folder', class: '' },
    { path: 'preparations', title: 'Preparaciones',  icon: 'folder', class: '' },
    


];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
