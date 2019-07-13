import { Component, OnInit } from '@angular/core';
import { RecordService } from '../records/service/record.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.recordService.uploadCategories().subscribe();
  }
}
