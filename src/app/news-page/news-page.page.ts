import { Component, OnInit } from '@angular/core';

// import news service in order to be able to use it in news-page
import { NewsService } from '../Services/news.service';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.page.html',
  styleUrls: ['./news-page.page.scss'],
})
export class NewsPagePage implements OnInit {
  
  // stores the data retreived from API by call-back function
  NewsStories:any=[];

  constructor(private newsService:NewsService) { }

  // invoke GetLatestNewsStories() from NewsService
  ngOnInit() {
    // call method asynchronously using subscribe / call-back function
    this.newsService.GetLatestNewsStories().subscribe(

      // function which will get invoked when data is retrieved from API across web
      (data)=>{
        this.NewsStories = data.articles;
      }
    );

  }

}
