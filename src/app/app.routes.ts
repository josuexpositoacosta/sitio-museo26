import { RouterModule, Routes } from '@angular/router';

import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { UsuariosComponent } from './login/usuarios/usuarios.component';



//import { NuevopaginiComponent  } from './login/nuevopagini/nuevopagini.component';
//import { AdminComponent } from './login/admin/admin.component';

import { PaginiComponent } from './login/paginis/pagini.component';
import { PaginisComponent } from './login/paginis/paginis.component';
import { ActComponent } from './login/act/act.component';
import { NotComponent } from './login/not/not.component';
import { SalComponent } from './login/sala/sala.component';

const appRoutes : Routes =[   
    {path: 'login', component:LoginComponent  },
   // {path: 'register', component:RegisterComponent  },   
    

         
    {path: 'pagini', component:PaginisComponent  }, 
    {path: 'pagin/:id', component:PaginiComponent  }, 

  //  {path: 'nuevopagini', component:NuevopaginiComponent  }, 

    {path: 'usuarios', component:UsuariosComponent  },  

    //{path: 'admin', component:AdminComponent  },

    {path: 'act', component:ActComponent  }, 
    {path: 'not', component:NotComponent  }, 
    {path: 'sal', component:SalComponent  }, 
     
    {path: '**',  component:NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});