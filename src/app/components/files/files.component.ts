import { Component } from '@angular/core';
import { FilesService } from 'src/app/services/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent {

  //--------PROPIEDADES--------
  file = '';

  // --------CONSTRUCTOR--------
  constructor(
    private filesService: FilesService
  ) { }

  // --------MÉTODOS--------
  descargarPDF() {
    this.filesService.getFiles('platzi', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf').subscribe((result) => {
      //console.log('result', result);
    });
  }

  cargarArchivo(event: Event) {
    const element = (event.target as HTMLInputElement);
    const file = element.files?.item(0);
    if(file) {
      this.filesService.uploadFile(file).subscribe((result) => {
        console.log('[app-nav] upload', result);
        this.file = result.location; // de la interfaz FileResponse en files.service.ts
      });
    }
  }
}
