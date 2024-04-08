import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formStructure = [
    {
      "type": "text",
      "label": "Ala",
      "name": "ala"
    },
    {
      "type": "text",
      "label": "d",
      "name": "as"
    },
    {
      "type": "number",
      "label": "Ma",
      "name": "ma"
    },
    {
      "type": "number",
      "label": "hed",
      "name": "edd"
    },
    {
      "type": "number",
      "label": "thgh",
      "name": "gffhg"
    },
    {
      "type": "select",
      "label": "kota",
      "name": "kot",
      "options":["a","b","c"] 
    }
    
    
  ];

  getFormStructure() {
    return this.formStructure;
  }
}
