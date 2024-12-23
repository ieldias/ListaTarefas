import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tarefa } from '../../tarefa';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks() : Observable<tarefa[]> {
    return this.http.get<tarefa[]>(this.apiUrl);
  }

  deleteTask(tarefa: tarefa): Observable<tarefa> {
    return this.http.delete<tarefa>(`${this.apiUrl}/${tarefa.id}`);
  }

  updateTask(tarefa: tarefa): Observable<tarefa> {
    return this.http.put<tarefa>(`${this.apiUrl}/${tarefa.id}`, tarefa);
  }

  addTask(tarefa: tarefa): Observable<tarefa> {
    return this.http.post<tarefa>(`${this.apiUrl}`, tarefa);
  }
}