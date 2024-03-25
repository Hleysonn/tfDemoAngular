import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: WritableSignal<Task[]> = signal<Task[]>([]);

  private readonly baseURL = 'http://localhost:3000/tasks';

  constructor(
    // pour faire des requètes HTTP
    private httpClient: HttpClient,
  ) { 
    // charger les données de l'api en local au départ 
    this.load();
  }

  getAll() {
    // récupérer les données sauvegardées en local
    return this.tasks;
  }

  add(task: Task) {
    // ajoute une tache sur le serveur
    return this.httpClient.post<Task>(this.baseURL, task)
      .pipe(tap(response => {
        // met ajour les données locales qd la requète est terminée
        this.tasks.update(t => [...t, response]);
      }));
  } 

  remove(task: Task) {
    // supprime une tache sur le serveur
    return this.httpClient.delete<Task>(this.baseURL + '/' + task.id)
      // apres avoir fait la requete on attend la réponse
      .pipe(tap(response => {
        // mettre à jour les données locales
        this.tasks.update(oldT => oldT.filter(t => t.id !== response.id));
      }));
  }

  check(task: Task) {
    // modifier la tache
    task.isComplete = true;
    // modifier les données du serveur
    return this.httpClient.put<Task>(this.baseURL + '/' + task.id, task);
  }

  load() {
    // charger les données du serveur
    this.httpClient.get<Task[]>(this.baseURL)
      .subscribe(response => this.tasks.set(response));
  }
}
