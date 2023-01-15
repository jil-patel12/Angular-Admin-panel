import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { AuthfakeauthenticationService } from '../../core/services/authfake.service';
import { MenuItem, MessageService, PrimeNGConfig } from 'primeng/api';

// import { LanguageService } from '../../core/services/language.service';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar component
 */
export class TopbarComponent implements OnInit {

  element;
  cookieValue;
  flagvalue;
  countryName;
  valueset;

  items: MenuItem[];

  constructor(@Inject(DOCUMENT) private document: any, private router: Router,
    private authFackservice: AuthfakeauthenticationService, private primengConfig: PrimeNGConfig
  ) {
  }

  listLang = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
  ];

  openMobileMenu: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  ngOnInit() {
    this.openMobileMenu = false;
    this.element = document.documentElement;

    this.primengConfig.ripple = true;

    this.items = [{
      label: 'Options',
      items: [{
        label: 'Profile',
        icon: 'pi pi-refresh',
        command: () => {
          this.profile();
        }
      },
      {
        label: 'Logout',
        icon: 'pi pi-times',
        command: () => {
          this.logout();
        }
      }
      ]
    },
    // {
    //   label: 'Navigate',
    //   items: [{
    //     label: 'Angular Website',
    //     icon: 'pi pi-external-link',
    //     url: 'http://angular.io'
    //   },
    //   {
    //     label: 'Router',
    //     icon: 'pi pi-upload'
    //   }
    //   ]
    // }
    ];
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Logout the user
   */
  logout() {

    this.authFackservice.logout();

    this.router.navigate(['/account/login']);
  }

   /**
   * Logout the user
   */
    profile() {
  
      this.router.navigate(['/profile']);
    }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }
}
