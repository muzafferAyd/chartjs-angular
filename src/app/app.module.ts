import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import {RouterModule, Routes} from '@angular/router';
// import {NgApexchartsModule} from 'ng-apexcharts';


const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'pie-chart', component: PieChartComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ChartsModule,
    // NgApexchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
