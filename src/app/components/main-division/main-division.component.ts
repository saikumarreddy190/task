import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-main-division',
  templateUrl: './main-division.component.html',
  styleUrls: ['./main-division.component.css']
})
export class MainDivisionComponent implements OnInit {

  user = {
    shedulevalue: ""
  }

  startdate: any;
  enddate: any;
  _user: any;
  value: any;
  sndate: any;
  endate: any;
  totaldiff: any;
  shedulvalue : any;


  sheduleForm: FormGroup;
  textControl = new FormControl();

  constructor(private fb: FormBuilder) {
    this.sheduleForm = this.fb.group({
      division: this.fb.array([])
    });
  }


  // ----------division ---------
  division(): FormArray {
    return this.sheduleForm.get("division") as FormArray;
  }
  newDivision(): FormGroup {
    return this.fb.group({
      divisionname: "",
      subdivision: this.fb.array([]),
      tasks: this.fb.array([])

    });
  }
  addDivision() {
    console.log("add divsion");
    this.division().push(this.newDivision());
  }
  removeDivision(divisionIndex: number) {
    this.division().removeAt(divisionIndex);
  }

  // ------------sub division ---------
  subdivisions(divisionIndex: number): FormArray {
    return this.division()
      .at(divisionIndex)
      .get("subdivision") as FormArray;
  }
  newsubdivision(): FormGroup {
    return this.fb.group({
      subdiv: "",
      tasks: this.fb.array([])
    });
  }
  addSubdivision(divisionIndex: number) {
    console.log("addSubdivision",divisionIndex);
    this.subdivisions(divisionIndex).push(this.newsubdivision());
  }
  removeSubdivision(divisionIndex: number, subdivisionsIndex: number) {
    this.subdivisions(divisionIndex).removeAt(subdivisionsIndex);
  }

  // ----------tasks -----------
  divTasks(divisionIndex: number): FormArray {
    return this.division()
      .at(divisionIndex)
      .get("tasks") as FormArray;
  }
  newTask(): FormGroup {
    return this.fb.group({
      task_val: "",
      shedvalue: this.shedulvalue,
      strtdate:"",
      enddate:""
    });
  }
  addTask(divisionIndex: number) {
    console.log("add task",divisionIndex);
    this.divTasks(divisionIndex).push(this.newTask());
  }
  removeTask(divisionIndex: number, taskIndex: number) {
    this.divTasks(divisionIndex).removeAt(taskIndex);
  }


  // ---------form submit ----------
  onSubmit() {
    console.log(this.sheduleForm.value);
  }

// ---------days b/w two dates --------
  sdate(sdate: any) {
    this.sndate = sdate;
    this.calcDiff();
    console.log("sdate", this.sndate);
  }

  edate(edate:any){
    this.endate = edate;
    this.calcDiff();
    console.log("enddate", this.enddate);
  }
  calcDiff(){
    const strt = moment(this.sndate);
    const end = moment(this.endate);
    const diff = moment.duration(end.diff(strt)).asDays();
    this.totaldiff = diff;
    console.log("diff", this.totaldiff);
  }

  ngOnInit(): void {


  }

}
