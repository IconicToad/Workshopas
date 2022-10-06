import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
export interface FolderStructure {
 name: string; id: number; childs: FolderStructure[]; parentId?: number
}
@Injectable({
  providedIn: 'root'
})

export class FolderService {
  private folderStructure = new BehaviorSubject<FolderStructure[]>([]);

  public initFolderPath(): void {
   this.folderStructure.next(JSON.parse(localStorage.getItem('folderPath') || '[]'));
  }

  public getFolderPath(): any[] {
    return this.folderStructure.getValue();
  }

  public setFolderPath(item: FolderStructure): void {
    //todo add into correct place then update
       const data = this.folderStructure.getValue();
        if (!item.parentId) {
             data.push(item);
             localStorage.setItem('folderPath', JSON.stringify(data));
             this.folderStructure.next(data);
             return;
        }

       const index = data.findIndex((index) => index.id === item.parentId);
       data[index].childs.push(item);
       localStorage.setItem('folderPath', JSON.stringify(data));
       this.folderStructure.next(data);
  }

  public updateFolderPath(item: any): void {
    const folderStruct = this.folderStructure.getValue();
    //todo add some logic
    localStorage.setItem('folderPath', JSON.stringify(folderStruct));
    this.folderStructure.next(folderStruct);
  }

  public setChildToParent(parentID: number, data: FolderStructure): void {
    this.folderStructure.getValue().forEach((folder) => {
      if(folder.id == parentID) {
        folder.childs.push(data);
      }
    });
    localStorage.setItem('folderPath', JSON.stringify(this.folderStructure.getValue()));
  }
}
