import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { tarefa } from '../../../tarefa';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TaskItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent implements OnInit{

  tarefas: tarefa[] = []
  
  constructor(private taskService: TaskService) {

  }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);
    })
  }

  deleteTask(tarefa: tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() => (this.tarefas = this.tarefas.filter((t) => t.id !== tarefa.id)));
  }

  toggleConcluido(tarefa: tarefa) {
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }

  addTask(tarefa: tarefa) {
      this.taskService.addTask(tarefa).subscribe((tarefa) => {
        this.tarefas.push(tarefa);
      })
  }

}
