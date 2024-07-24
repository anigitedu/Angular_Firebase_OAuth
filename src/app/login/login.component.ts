import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  type = false;
  user: any;
  authForm!: FormGroup
  constructor(private route:Router,private auth: AuthService,public angularFireAuth: AngularFireAuth,private fb:FormBuilder,) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],  
      password: ['',[Validators.required,Validators.minLength(5)]]
  })
  }

  async signInWithGoogle() {
    this.user = await this.auth.googleSignIn();
  }

  signOut() {
    this.auth.signOut();
    this.user = null;
  }
  // constructor( private router: Router,private authService:AuthService) {}

  login() {
    // this.authService.login(this.email, this.password)
    //   .then(() => this.router.navigate(['/flight-form']))
    //   .catch(error => console.error('Login failed', error));
  }
  login1() {
    this.angularFireAuth.signInWithEmailAndPassword(this.authForm.value.email, this.authForm.value.password)
      .then((userCredential:any) => {
        // Access the user's account type from Firestore
        localStorage.setItem('user_id',userCredential.user.uid)
        this.route.navigate(['/flight-form'])
      })
      .catch((error) => {
        
        // Handle error here, e.g., show an error message to the user
      });
  }
  onSubmit() {
    if(this.type) {
      this.SignUp()
    }
    else {
      this.login1()
    }
  }
  SignUp() {
     this.angularFireAuth
      .createUserWithEmailAndPassword(this.authForm.value.email, this.authForm.value.password)
      .then((result) => {
        this.type = !this.type
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  change(){
    this.type = !this.type
  }
}
