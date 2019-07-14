import { Component } from '@angular/core';
import { RecordService } from './service/record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss']
})
export class RecordsComponent {
  constructor(private recordService: RecordService) {}
}
