import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../interfaces/question-answer';

@Component({
  selector: 'app-grammar-test',
  templateUrl: './grammar-test.component.html',
  styleUrls: ['./grammar-test.component.scss'],
})
export class GrammarTestComponent implements OnInit {
  @Input() questions$!: Observable<Question[] | undefined>;

  ngOnInit(): void {}
}
