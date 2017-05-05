import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// route module
import { RoutingModule } from './app.router';

// services
import { MartepageService } from './providers/martepage.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { DownloadPageComponent } from './pages/download-page/download-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContainerSobreComponent } from './components/container-sobre/container-sobre.component';
import { ContainerContatoComponent } from './components/container-contato/container-contato.component';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    DownloadPageComponent,
    ContactPageComponent,
    Error404PageComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    ContainerSobreComponent,
    ContainerContatoComponent,
    CompComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MartepageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
