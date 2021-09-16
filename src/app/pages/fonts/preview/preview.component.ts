import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  @Input('font') font: any;

  // variant: any;
  form!: FormGroup

  styleNode!: HTMLElement
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      variant: new FormControl(  )
    })

    // this.form.valueChanges.subscribe( (i: any) => this.style(i) )
    this.form.get('variant')?.setValue(this.font.variants[0])
  }

  get fontName() {
    return `${this.font.font_name}_${this.variant.name}`;
  }

  get variant() {
    return this.form.value.variant;
  }

  

  get fontFamily() {

    if( this.styleNode ) {
      document.body.removeChild(this.styleNode)
    }

    this.styleNode = document.createElement('style');
    this.styleNode.innerHTML = `
      @font-face {font-family: '${this.fontName}';
        src: url(${this.form.value.variant?.font_file}) format('woff2');
      }
      .${this.fontName}_font {
        font-family: '${this.fontName}';
      }
    `;
    document.body.appendChild(this.styleNode);

    return `${this.fontName}_font`;
  }

}
