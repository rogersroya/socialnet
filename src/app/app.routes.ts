import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./layouts/main-layout/main-layout')
                .then(m => m.MainLayout),

        children: [
            {
                path: '',
                redirectTo: 'feed',
                pathMatch: 'full'
            },
            {
                path: 'feed',
                loadComponent: () =>
                    import('./features/feed/pages/feed/feed')
                        .then(m => m.Feed)
            }
        ]
    },

    {
        path: '**',
        redirectTo: ''
    }
];