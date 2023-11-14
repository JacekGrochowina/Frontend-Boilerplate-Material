import { enableProdMode, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from './app/routing';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { environment } from './environments/environment';
import { provideRouter } from '@angular/router';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),
        provideAnimations()
    ]
})
    .catch(err => console.error(err));
