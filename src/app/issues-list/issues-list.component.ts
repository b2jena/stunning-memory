import { Component, OnInit } from '@angular/core';
import { IssueService } from '../services/issue.service';
@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css']
})
export class IssuesListComponent implements OnInit {
  issues: any;

  constructor(private issueservice:IssueService) { }

  // Write logic to get all issues from IssueService
  ngOnInit() {
    this.loadinfo();
  }

  loadinfo()
  {
  this.issueservice.getIssues().subscribe((data:any)=>{
    this.issues=data;
  console.log(this.issues);
  })
  }

  // Implement deleteIssue method to delete the issue
  deleteIssue(id:number) {
    this.issueservice.deleteIssue(id).subscribe((data)=>{
      alert("success"),
    this.loadinfo();
    }
    );

  }

}
