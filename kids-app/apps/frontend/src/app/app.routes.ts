import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'startseite',
        pathMatch: 'full',
    },
    {
        path: 'startseite',
        loadComponent: () =>
            import('./startseite/startseite.component').then((m) => m.StartseiteComponent),
    },
    {
        path: 'angebote',
        loadComponent: () =>
            import('./angebote/angebote.component').then(
                (m) => m.AngeboteComponent
            ),
    },
    {
        path: 'community',
        loadComponent: () =>
            import('./community/community.component').then((m) => m.CommunityComponent),
    },
    {
        path: '**',
        redirectTo: 'startseite',
        pathMatch: 'full',
    },
];
