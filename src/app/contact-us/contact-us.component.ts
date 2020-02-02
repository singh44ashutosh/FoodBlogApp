import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact.service';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private contactService: ContactService, private alertService: AlertService) { }

  ngOnInit() {
  }

  saveQuery(queryForm: NgForm) {
    this.contactService.postQuery(queryForm.value)
      .subscribe(
        (data: any) => {
          console.log(data);
          queryForm.reset();
          this.alertService.success('We have received your message.');
        },
        (error: any) => {
          console.log(error);
          this.alertService.success('We are facing some issue. Please try again later');
        }
      );
  }
}
