import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/comun/navbar/navbar.component';
import { FooterComponent } from './componentes/comun/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { VinoService } from './servicios/vino.service';
import { HomeComponent } from './componentes/paginas/home/home.component';
import { NotFoundComponent } from './componentes/paginas/not-found/not-found.component';
import { ListaVinosComponent } from './componentes/paginas/carta/lista-vinos/lista-vinos.component';
import { VinoComponent } from './componentes/paginas/carta/vino/vino.component';
import { ZoomVinoComponent } from './componentes/paginas/carta/zoom-vino/zoom-vino.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    ListaVinosComponent,
    VinoComponent,
    ZoomVinoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VinoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
