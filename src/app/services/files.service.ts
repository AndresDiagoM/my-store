import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { saveAs } from 'file-saver';
import { tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

interface FileResponse {
  originalname: string;
  filename: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  // --------Propiedades--------
  platziApiFiles = `${environment.API_PLATZI}/api/files`; //'https://young-sands-07814.herokuapp.com/api/products';


  constructor(
    private http: HttpClient
  ) { }

  // --------MÉTODOS--------
  getFiles(name: string, url: string, type: string) {
    return this.http.get(url, {responseType: 'blob'})
    .pipe(
      tap((content) => {
        const blob = new Blob([content], {type: type});
        saveAs(blob, name);
      }),
      map(() => true)
    )
  }

  uploadFile(file: File, url?:string) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<FileResponse>(url?url:`${this.platziApiFiles}/upload`, formData,
      {
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      }
    );
  }
}
