import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

//pipes
import { PipesModule } from '../pipes/pipes.module'; 

import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";
import { HeaderComponent } from "./header/header.component";
import { NopagefoundComponent } from "./nopagefound/nopagefound.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from './footer/footer.component';
 

import { FormsModule } from '@angular/forms';
      

@NgModule({
    imports:[
        RouterModule,
        CommonModule,
        PipesModule, 
        FormsModule
    ],
    declarations:[
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        FooterComponent   
    ],
    exports:[
        NopagefoundComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,   
        FooterComponent 
    ]
})
export class ShareModule{ }

