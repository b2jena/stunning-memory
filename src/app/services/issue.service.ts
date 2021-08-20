import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Issue } from '../models/Issue';


@Injectable({
  providedIn: 'root'
})

export class IssueService {

  constructor(private httpClient:HttpClient) { }

  // Implement addIssue method using HttpClient for a saving a Issue details
  addIssue(newissue): Observable<any> {
    return this.httpClient.post<any>("http://localhost:3000/issues", newissue);
  }

  getIssues(): Observable<any> {
    return this.httpClient.get<any>("http://localhost:3000/issues");
  }

  // Implement deleteIssue method to delete a issue by id
  deleteIssue(id: any): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:3000/issues/'+id+'/');
  }
}
