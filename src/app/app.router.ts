import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DownloadPageComponent } from './pages/download-page/download-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';

const routes: Routes = [
    // home
    {
        path: '',
        component: HomePageComponent
    },
    
    {
        path: 'sobre',
        component: AboutPageComponent
    },

    {
        path: 'contato',
        component: ContactPageComponent
    },

    {
        path: 'download',
        component: DownloadPageComponent
    },
    
    // handling 404
    {
        path: '**', component: Error404PageComponent
    }
];

export const RoutingModule = RouterModule.forRoot(routes);