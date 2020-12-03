import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService, CookieText } from './cookie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cookie Generator';

  range: number[] = [];
  form: FormGroup;
  cookies: CookieText[] = [
    { cookie: 'Press Get Cookies to get some fortune cookies' }
  ];

  constructor(private fb:FormBuilder, private cookieService: CookieService){

  }

  ngOnInit(){
    for(let i=0;i<10;i++){
      this.range.push(i+1);
    };

    this.form = this.fb.group({
      numOfCookies: this.fb.control(1)
    });
  }

  async processForm(){
    const cookieCount = parseInt(this.form.value['numOfCookies']);
    this.cookies = await this.cookieService.getCookies(cookieCount);
    console.log(this.cookies);
  }

}
