import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tarefa } from '../../../tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() tarefa!: tarefa;
  @Output() onDeleteTask = new EventEmitter<tarefa>();
  @Output() onToggleConcluido = new EventEmitter<tarefa>();

  faTimes = faTimes

  onDelete(tarefa: tarefa) {
    this.onDeleteTask.emit(tarefa);
  }

  onToggle(tarefa: tarefa) {
    this.onToggleConcluido.emit(tarefa);
  }
}
