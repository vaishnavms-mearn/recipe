import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css'],
})
export class FetchComponent implements OnInit {
  allDatas: any[] = [];
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.viewApi();
  }
  viewApi() {
    this.api.ViewApi().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allDatas = res;
      },
      error(err: any) {
        console.log(err.message);
      },
    });
  }
}
