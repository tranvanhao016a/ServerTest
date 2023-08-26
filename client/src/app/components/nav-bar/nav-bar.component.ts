import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverlay = false;
  constructor() { }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }
  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    window.addEventListener('click', this.outsideClick.bind(this));
  }

  getNavbarClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'navbar-trimmed';
    } else {
      styleClass = 'navbar-ms-screen';
    }
    return styleClass;
  }
  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 845) {
      this.canShowSearchAsOverlay = true;
    }
    else {
      this.canShowSearchAsOverlay = false;
    }
  }

  isDropdownOpen = false;

  myFunction() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  outsideClick(event: Event) {
    if (!(event.target as HTMLElement).matches('.dropbtn')) {
      this.isDropdownOpen = false;
    }
  }

  ngOnDestroy() {
    window.removeEventListener('click', this.outsideClick.bind(this));
  }

}
