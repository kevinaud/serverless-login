import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';

export const AppRoutes = [

    { path: '', name: 'Home', component: HomeComponent },
    { path: 'login', name: 'Login', component: LoginComponent },
    { path: 'sign-up', name: 'SignUp', component: SignUpComponent },
    { path: 'profile', name: 'Profile', component: ProfileComponent }

];