import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import observable to asynchronously invoke GetLatestNewsStories() without hanging application
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }

  // retrieves news stories from newsapi.ogr / holds 'any' type of data
  GetLatestNewsStories():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=ie&apiKey=105b89fb5f7c434aa6fed83c24a842b0');
  }
}
