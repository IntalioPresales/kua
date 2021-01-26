import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
// import { SwUpdate } from '@angular/service-worker';

// import { AuthService } from 'app/core/auth.service';

@Component({
  selector: 'shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {

  constructor(
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _platform: Platform,
    // private authService: AuthService,
    // private swUpdate: SwUpdate

  ) {

    // this.authService.runInitialLoginSequence();


    // if (this.swUpdate.isEnabled) {
    //     this.swUpdate.available.subscribe(() => {
    //         if (confirm('New version available. Load New Version?')) {
    //             window.location.reload();
    //         }
    //     });
    // }  

  }

  /**
   * 
   * 
   * 
   * @memberOf ShellComponent
   */
  ngOnInit(): void {
  }

  
  /**
   * 
   * 
   * 
   * @memberOf ShellComponent
   */
  ngOnDestroy(): void {
  }


}
