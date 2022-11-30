import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav

  constructor(private widthObserver: BreakpointObserver, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.widthObserver.observe(['(max-width:800px']).subscribe(width => {
      if(width.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }


  openDialog(): void {
    this.dialog.open(AboutDialog)
  }

}

@Component({
  selector: 'sidenav-about-dialog',
  templateUrl: './sidenav.about.dialog.html',
  styleUrls: ['./sidenav.component.css']

})
export class AboutDialog{}
