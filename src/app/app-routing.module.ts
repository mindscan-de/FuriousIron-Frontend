import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'search', component: SearchComponent },
    { path: 'result', component: ResultComponent },
    { path: 'detail', component: DetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
