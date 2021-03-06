import {Component, HostBinding, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormControl} from '@angular/forms';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  @Input() isOpenSN;

  showFiller = false;

  constructor() {
  }

toggleControl = new FormControl(false);
  items: MenuItem[];


  autosize = false;
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  ngOnInit() {

    this.items = [
      // {
      //   icon: 'pi pi-fw pi-home',
      //   style: 'p-slidemenu'
      // },
      {
        label: '𝘼𝙖𝙘𝙘𝙤𝙪𝙣𝙩',
        icon: 'pi pi-fw pi-user',
        routerLink: '/account-profile'

      },
      {
        label: '𝘊𝒂𝒕𝒂𝒍𝒐𝒈𝒖𝒆',
        icon: 'pi pi-fw pi-th-large',
        items: [
          {
            label: '𝘉𝘺 𝘛𝘺𝘱𝘦',
            icon: '',
            items: [{
              label: 'لوازم آرایشی',
              icon: '',
              items: [{
                label: 'رژ لب',
                icon: ''
              }, {
                label: 'کرم پودر',
                icon: ''
              }, {
                label: 'ریمل',
                icon: ''
              }, {
                label: 'لاک',
                icon: ''
              },
              ]
            }, {
              label: 'لوازم بهداشتی',
              icon: '',
              items: [{
                label: 'ضد آفتاب',
                icon: ''
              }, {
                label: 'مرطوب کننده',
                icon: ''
              }, {
                label: 'ژل شست و شوی صورت',
                icon: ''
              }]
            }]

          },
          {
            label: '𝘉𝘺 𝘚𝘬𝘪𝘯 𝘛𝘺𝘱𝘦',
            icon: '',
            items: [{
              label: 'چرب',
              icon: ''
            }, {
              label: 'خشک',
              icon: ''
            }, {
              label: 'مختلط',
              icon: ''
            }]
          },
        ]
      }
    ];
  }
}
