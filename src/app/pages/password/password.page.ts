import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
  providers: [ AuthService] ,
})
export class PasswordPage implements OnInit {

  userEmail = new FormControl('');

  constructor(private authSvc:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  async onReset(){
    
    try{const email = this.userEmail.value;
      this.authSvc.resetPassword(email);
      window.alert('Email enviado')
      this.router.navigate(['/login']);}
    catch(error){console.log(error)}
  }

}
