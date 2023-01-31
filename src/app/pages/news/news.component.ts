import { AfterViewInit, Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

import { News } from '../../models';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements AfterViewInit {
  topIds: number[] = [];
  tableContent: News[] = [];
  loading = true;

  constructor(private apiService: ApiService) {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.getTopIds();
      this.getTopNews();
    }, 1);
  }

  getTopIds() {
    const localData = localStorage.getItem('topNews');
    if (localData) {
      this.loading = false;
      return (this.tableContent = JSON.parse(localData));
    }
    this.apiService
      .getTopIds()
      .pipe(switchMap((ids) => this.apiService.getItems(ids)))
      .subscribe((data) => {
        this.loading = false;
        localData
          ? localStorage.setItem('topNews', JSON.stringify(data))
          : null;

        this.tableContent = data;
      });
  }
  getTopNews() {
    this.apiService
      .getItems(this.topIds)
      .subscribe((data) => (this.tableContent = data));
  }
}
