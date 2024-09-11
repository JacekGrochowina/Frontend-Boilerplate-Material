import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';

import { AppComponent } from '@app/app.component';
import { routes } from '@app/routing';
import { environment } from '@environments/environment';
import { authFeatureKey, authReducer } from '@store/auth/auth.reducers';
import { addHeaderInterceptor, authInterceptor } from '@shared/utils/interceptors';
import { settingsFeatureKey, settingsReducer } from '@store/settings/settings.reducers';

import * as settingsEffects from './app/store/settings/settings.effects';
import * as authEffects from './app/store/auth/auth.effects';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([addHeaderInterceptor, authInterceptor])
    ),
    provideRouter(routes),
    provideStore(),

    // Reducers
    provideState(authFeatureKey, authReducer),
    provideState(settingsFeatureKey, settingsReducer),

    // Effects
    provideEffects(authEffects),
    provideEffects(settingsEffects),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      traceLimit: 75
    }),
    provideAnimations()
  ]
})
  .catch(err => console.error(err));
