import { IGenericElement, ILinklistElement, IButtonElement, IJumbotronElement, IFeatureElement, IImageElement, ITextElement, IBlogElement, IFormElement, INewsElement } from './../../_interfaces/ISite.interface';
import { Component, Input, OnInit, OnChanges, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { IElementCollective } from 'src/app/_interfaces/ISite.interface';

@Component({
  selector: 'core-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() localElementObject: IElementCollective;

  public genericObject: IGenericElement | any;
  public linklistObject: ILinklistElement | any;
  public buttonObject: IButtonElement | any;
  public jumbotronObject: IJumbotronElement | any;
  public featureObject: IFeatureElement | any;
  public imageObject: IImageElement | any;
  public textObject: ITextElement | any;
  public blogObject: IBlogElement | any;
  public formObject: IFormElement | any;
  public newsObject: INewsElement | any;

  constructor() {
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ngOnChanges() {
    switch(this.localElementObject.type) {
      case "GENERIC_ELEMENT":
        this.genericObject = this.localElementObject;
      break;
      case "JUMBOTRON_ELEMENT":
        this.jumbotronObject = this.localElementObject;
      break;
      case "LINKLIST_ELEMENT":
        this.linklistObject = this.localElementObject;
      break;
      case "FEATURE_ELEMENT":
        this.featureObject = this.localElementObject;
      break;
      case "BUTTON_ELEMENT":
        this.buttonObject = this.localElementObject;
      break;
      case "IMAGE_ELEMENT":
        this.imageObject = this.localElementObject;
      break;
      case "TEXT_ELEMENT":
        this.textObject = this.localElementObject;
      break;
      case "BLOG_ELEMENT":
        this.blogObject = this.localElementObject;
      break;
      case "FORM_ELEMENT":
        this.formObject = this.localElementObject;
      break;
      case "NEWS_ELEMENT":
        this.newsObject = this.localElementObject;
      break;
    }

      console.log('localPageObject', this.localElementObject)
  }

}
