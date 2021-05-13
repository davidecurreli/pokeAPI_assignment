import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})
export class ErrorHandlerComponent implements OnInit {
  public errorMessage: string = "";

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((param: any) => {
      if (typeof param.id != 'undefined') this.errorMessage = param.id;
    });
  }

}
