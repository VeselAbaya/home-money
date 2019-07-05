import { Component, OnInit } from '@angular/core';
import { RecordService } from './service/record.service';
import { ICategory } from './service/category.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent implements OnInit {
  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.recordService.loadCategories().subscribe();
  }
}
