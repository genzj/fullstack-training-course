import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;
  log = '';

  constructor(
    private http: HttpClient
  ) {

  }

  onUpdate(i: number) {
    this.value += i;
  }

  onReset() {
    this.value = 0;
  }

  onSubmit() {
    // alert(`submit value ${this.value}`);
    this.http.post(
      'https://httpbin.org/post',
      {
        value: this.value,
      }
    ).subscribe((res: any) => this.addLog(res.data));
  }

  addLog(s: any) {
    this.log += `\n${new Date()} ${JSON.stringify(s)}`;
  }
}
