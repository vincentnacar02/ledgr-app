import { Component, OnInit } from '@angular/core';
import { FiscalyearService } from '../../shared/fiscalyear.service';
import { FiscalYear } from '../../_models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fiscalyear',
  templateUrl: './fiscalyear.component.html',
  styleUrls: ['./fiscalyear.component.css']
})
export class FiscalyearComponent implements OnInit {

  fy: FiscalYear;
  fys$: Observable<FiscalYear[]>;

  constructor(
    private fyService: FiscalyearService
  ) { }

  ngOnInit() {
    this.reset();
    this.refresh();
  }

  refresh() {
    this.fys$= this.fyService.fetch();
    this.fys$.subscribe(data => {
      console.log(data);
    });
  }

  reset() {
    this.fy = new FiscalYear();
  }

  onSave() {
    this.fyService.save(this.fy).subscribe(
    data => {
      console.log({data});
      this.reset();
      this.refresh();
    },
    error => console.log(error));
  }

  onUpdate() {
    this.fyService.update(this.fy).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onDelete(fy: FiscalYear) {
    this.fyService.delete(fy).subscribe(
      data => {
        console.log({data});
        this.reset();
        this.refresh();
      },
      error => console.log(error));
  }

  onSelect(fy: FiscalYear) {
    this.fy = fy;
  }

}
