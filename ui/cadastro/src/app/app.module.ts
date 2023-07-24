import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produtos/produto.component';
import { ProdutosListComponent } from './produtos/produtos-list/produtos-list.component';
import { ProdutoService } from './shared/service/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProdutosFormComponent } from './produtos/produtos-form/produtos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ProdutosListComponent,
    ProdutosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
