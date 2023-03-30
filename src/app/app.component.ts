import { Component, OnInit } from '@angular/core';
import { MomentLang } from "./shared/enums/moment-lang.enum";

// Moment.js - select language
import * as moment from "moment";
import 'moment/locale/pl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    moment.locale(MomentLang.polish); // Moment.js - select language
  }
}
