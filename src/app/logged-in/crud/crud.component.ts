import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent implements OnInit {

  title= 'front-crud';

  ngOnInit(): void {
  }

  msg:any="";
  data = [
    {Email: "sjregistered@gmail.com", password: "1234223"},
    {Email: "sriniwas@jane.com", password: "1234223"},
    {Email: "saurabh@gmail.com", password: "111996"},
    {Email: "srujeet", password: "10911"}
  ];
  model : any = {};
  model2 : any = {};
  addData(){
    this.data.push(this.model);
    this.model = {};
    this.msg = " Credentials ADDED. ";
  }
  deleteData(Index:any){
    this.data.splice(Index,1);
    console.log(Index);
    this.msg = " Credentials DELETED. "
  }

  myValue : any;
  editData(k : any){
    this.model2.Email = this.data[k].Email;
    this.model2.password = this.data[k].password;
    this.myValue = k;
  }

  updateData(){
    let k = this.myValue;
    for(let i = 0; i < this.data.length; i++){
      if(i == k){
        this.data[i] = this.model2;
        this.model2 = {};
      }
    }
    this.msg = " Credentials UPDATED. "
  }

  clickMe(){
    this.msg = "";
  }
}

