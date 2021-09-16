import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';




@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.loadFonts()
  }
  fonts: any

  loadFonts() {
    this.fonts = this.http.get('assets/fonts.json');
  }

  ngOnInit(): void {
  }

}
