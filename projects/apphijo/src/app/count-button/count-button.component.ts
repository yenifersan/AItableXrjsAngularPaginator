import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'apphijo-count-button',
  templateUrl: './count-button.component.html',
  styleUrls: ['./count-button.component.css']
})
export class CountButtonComponent implements OnInit {
  @Input() clickCount: number; 
  num:boolean = false; 
  private count: number = 0;
  constructor(private userService: UserService) {}

  ngOnInit(): void {

    
  }

  onClick() {  
  }


}
