import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string){
    const timeStap = new Date().toLocaleTimeString();
    console.log(`[${timeStap}]: ${message}`);
  }
}
