import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
export interface FolderStructure {
 name: string; id: number;  parentId?: number
}
@Injectable({
  providedIn: 'root'
})

export class FolderService {
  private folderStructure = new BehaviorSubject<FolderStructure[]>([]);
  public parentId = new BehaviorSubject<number>(0);

  public initFolderPath(): void {
   this.folderStructure.next(JSON.parse(localStorage.getItem('folderPath') || '[]'));
  }

  public getFolderPath(): any[] {
    return this.folderStructure.getValue().sort((a: any, b: any) => a.parentId - b.parentId);
  }

  public setFolderPath(item: FolderStructure): void {
    //todo add into correct place then update
       const data = this.folderStructure.getValue();
       data.push(item);
       localStorage.setItem('folderPath', JSON.stringify(data));
       this.folderStructure.next(data);
  }

  public updateFolderPath(item: any): void {
    const folderStruct = this.folderStructure.getValue();
    //todo add some logic
    localStorage.setItem('folderPath', JSON.stringify(folderStruct));
    this.folderStructure.next(folderStruct);
  }
//PAZIURET PIPE


//   public setChildToParent(parentID: number, data: FolderStructure): void {
//     this.folderStructure.getValue().forEach((folder) => {
//       if(folder.id == parentID) {
//         folder.childs.push(data);
//       }
//     });
//     localStorage.setItem('folderPath', JSON.stringify(this.folderStructure.getValue()));
//   }
}
