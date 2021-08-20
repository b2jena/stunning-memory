import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IssueService } from '../services/issue.service';
@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required])
  })

  // message to be display if Issue added or not
  message = '';
  err:string="";
  // message to be display if blog added or not
  // Form is created in html file and write code to make it functional using FormBuilder
  // Write logic to make all fields as mandatory

  constructor(private issueservice:IssueService,private formbuilder:FormBuilder) {}

  ngOnInit() {
  }

  // Implement onSubmit method to save a Issue, verify form is valid or not
  // Display message 'Title and Description should not be empty!!! Please verify details' if form is invalid
  // Display message 'Failed to add Issue!!' while error handling
  // Display message 'Issue added' if Issue is added
  onSubmit(form:FormGroup) {
    if(form.valid){  
      this.issueservice.addIssue(this.form.value).subscribe((data)=>{
          console.log(data);
          this.clearForm(); 
          return this.message="Issue added";
      },
       (err)=>{
         return this.message="Failed to add Issue";      
       })
     }else{
       return this.message="Title and Description should not be empty!!! Please verify details";   
     } 
  }
  // clearForm method is to reset the form after submitting
  clearForm() {
    this.form.reset({});
    throw new Error('Method not implemented.');
  }

}
