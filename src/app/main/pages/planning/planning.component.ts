import { Component } from '@angular/core';
import { RecordService } from '../records/service/record.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  constructor(private recordService: RecordService) {}
}
