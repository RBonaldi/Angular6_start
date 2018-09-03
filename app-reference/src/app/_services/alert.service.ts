import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AlertService {
    private keepAfterNavigationChange = false;

    constructor(private router: Router, public snackBar: MatSnackBar) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.snackBar.dismiss();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.snackBar.open(message, null, {
            panelClass: ['snackbarSuccess']
        });
    }

    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.snackBar.open(message, null, {
            panelClass: ['snackbarError']
        });
    }
}