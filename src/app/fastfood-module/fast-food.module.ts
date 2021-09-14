import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './UI/header/header.component';
import { MainPageViewComponent } from './widget/main-page-view/main-page-view.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
    declarations: [
        HeaderComponent,
        MainPageViewComponent
    ],
    exports: [
        MainPageViewComponent
    ],
    imports: [
        CommonModule,
      MatTabsModule
    ]
})
export class FastFoodModule { }
