import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``,
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-angular',
        routerLink: [''],
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: [''],
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: ['numbers'],
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: ['uncommon'],
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipe',
            icon: 'pi pi-cog',
            routerLink: ['custom'],
          },
        ],
      },
    ];
  }
}
