import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contacts: Contact[];
  private contactDataService: ContactService;

  constructor(contactDataService: ContactService) {
    this.contactDataService = contactDataService;
  }

  ngOnInit() {
    this.contacts = this.contactDataService.contacts;
  }
}
