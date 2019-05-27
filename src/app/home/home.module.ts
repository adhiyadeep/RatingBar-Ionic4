import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {IonicRatingModule, RatingComponent} from 'ionic4-rating/dist';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonicRatingModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        IonicRatingModule
    ],
  declarations: [HomePage]
})
export class HomePageModule {}
