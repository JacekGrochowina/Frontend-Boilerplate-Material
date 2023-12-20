import { enableProdMode, importProvidersFrom, isDevMode } from '@angular/core';
import { AppComponent } from '@app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { routes } from '@app/routing';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { environment } from '@environments/environment';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from '@store/auth/auth.reducers';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './app/store/auth/auth.effects';
import { addHeaderInterceptor } from '@shared/utils/interceptors/add-header.interceptor';
import { settingsFeatureKey, settingsReducer } from '@store/settings/settings.reducers';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(
      withInterceptors([addHeaderInterceptor])
    ),
    provideRouter(routes),
    provideStore(),

    // Reducers
    provideState(authFeatureKey, authReducer),
    provideState(settingsFeatureKey, settingsReducer),

    // Effects
    provideEffects(authEffects),

    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    }),
    provideAnimations()
  ]
})
  .catch(err => console.error(err));
