(function () {
	'use strict';

	class Computer {
	entries =  [];//List<ComputerEntry>
		
		add(entry) {
			entries.add(entry);
		}
		
		print() {
			entries.forEach(c=>console.log(c));
		}

		getEntry(patient) {
			return entries.find(c=>c.patient == patient)
			
		}

	}

	class ComputerEntryStatus {
	  static In_Process = "IN_PROCESS";
	  static Initial_Triage = "INITIAL_TRIAGE"; //Patient is being triaged by a tech and nurse
	  static Waiting_For_CAT_Scan = "WAITING_FOR_CAT_SCAN"; //Patient needs a CAT scan but isn't the first in the queue
	  static CAT_Scan = "CAT_SCAN"; //The patient is in the CAT SCAN
	  static Vitals = "VITALS"; //The patient needs vitals taken
	  static Consult_In_Room = "CONSULT_IN_ROOM"; //The patient is being consulted in their room
	  static Waiting_For_Consult = "WAITING_FOR_CONSULT"; //Waiting for a consult
	  static IP_Bed_Assignment = "IP_BED_ASSIGNMENT"; //In Process? Bed Assignment
	  static Admit_No_Bed = "ADMIT_NO_BED"; //Patient has been admitted to the hospital, but there is no hospital bed assigned
	  static With_Provider = "WITH_PROVIDER"; //The patient is with the provider
	  static Admit_Bed_Not_Ready = "ADMIT_BED_NOT_READY"; //The patient has been admitted and assigned a rom, but the room is not ready
	  static Ready_For_Discharge = "READY_FOR_DISCHARGE"; //The patient is going to be discharged (not admitted), but needs to go through th formal discharge process
	  static Waiting_For_Swing = "WAITING__FOR_SWING";
	  static Ready_For_Reeval = "READY_FOR_REEVAL"; //The patient needs to be reevaluated and is waiting for that to happen
	  static Hold_Discharge = "HOLDING_DISCHARGE"; //The discharge has been put on hold.
	  static Bed_Request = "BED_REQUEST"; //Requesting a bed
	  static Waiting_For_Room_Care_Area = "WAITING_FOR_ROOM_CARE_AREA";


	}

	class ComputerEntry {
	  es; //int
	  status; //ComputerEntryStatus
	  lastChange = new Date(); //Date
	  patient; //IPatient
	  bed; //IRoom
	  chiefComplaint; //String
	  arr = new Date(); //Date
	  vitals; //String
	  comments; //String
	  rn; //IMedician
	  res; //IMedician
	  md; //IMedician
	  unack = []; //Array of strings
	  imageStat; //String
	  bed2; //String
	  bedReq; //String
	  admitMD; //String
	  reg; //String
	  ekg; //EKG
	  answeredQuestions = false; //bool



	  isAnsweredQuestions() {
	    return this.answeredQuestions;
	  }

	  setAnsweredQuestions(answeredQuestions) {
	    this.answeredQuestions = answeredQuestions;
	    this.change();
	  }

	  constructor(patient, complaint) {
	    this.patient = patient;
	    this.chiefComplaint = complaint;
	  }

	  toString() {
	    let toReturn = "";
	    toReturn += es + ",";
	    toReturn += status + ", ";
	    toReturn += lastChange + ", ";
	    toReturn += patient + ", ";
	    toReturn += bed + ", ";
	    toReturn += chiefComplaint + ", ";
	    toReturn += arr + ", ";
	    toReturn += vitals + ", ";
	    toReturn += comments + ", ";
	    toReturn += rn + ", ";
	    toReturn += res + ", ";
	    toReturn += md + ", ";
	    toReturn += unack + ", ";
	    toReturn += imageStat + ", ";
	    toReturn += bed2 + ", ";
	    toReturn += bedReq + ", ";
	    toReturn += admitMD + ", ";
	    toReturn += reg + ", ";
	    toReturn += ekg + ", ";
	    toReturn += answeredQuestions + ", ";
	    return toReturn;
	  }

	  getEs() {
	    return this.es;
	  }

	  setEs(es) {
	    this.es = es;
	    this.change();
	  }

	  getStatus() {
	    return this.status;
	  }

	  setStatus(status) {
	    this.status = status;
	    this.change();
	  }

	  getLastChange() {
	    return this.lastChange;
	  }

	  setLastChange(lastChange) {
	    this.lastChange = lastChange;
	    this.change();
	  }

	  getPatient() {
	    return this.patient;
	  }

	  setPatient(patient) {
	    this.patient = patient;
	    this.change();
	  }

	  getBed() {
	    return this.bed;
	  }

	  setBed(bed) {
	    this.bed = bed;
	    this.change();
	  }

	  getChiefComplaint() {
	    return this.chiefComplaint;
	  }

	  setChiefComplaint(chiefComplaint) {
	    this.chiefComplaint = chiefComplaint;
	    this.change();
	  }

	  getArr() {
	    return this.arr;
	  }

	  setArr(arr) {
	    this.arr = arr;
	    this.change();
	  }

	  getVitals() {
	    return this.vitals;
	  }

	  setVitals(vitals) {
	    this.vitals = this.vitals;
	    this.change();
	  }

	  getComments() {
	    return this.comments;
	  }

	  setComments(comments) {
	    this.comments = comments;
	    this.change();
	  }

	  getRn() {
	    return this.rn;
	  }

	  setRn(rn) {
	    this.rn = rn;
	    this.change();
	  }

	  getRes() {
	    return this.res;
	  }

	  setRes(res) {
	    this.res = res;
	    this.change();
	  }

	  getMd() {
	    return this.md;
	  }

	  setMd(md) {
	    this.md = md;
	    this.change();
	  }

	  getUnack() {
	    return this.unack;
	  }

	  setUnack(unack) {
	    this.unack = unack;
	    this.change();
	  }

	  getImageStat() {
	    return this.imageStat;
	  }

	  setImageStat(imageStat) {
	    this.imageStat = imageStat;
	    this.change();
	  }

	  getBed2() {
	    return this.bed2;
	  }

	  setBed2(bed2) {
	    this.bed2 = bed2;
	    this.change();
	  }

	  getBedReq() {
	    return this.bedReq;
	  }

	  setBedReq(bedReq) {
	    this.bedReq = bedReq;
	    this.change();
	  }

	  getAdmitMD() {
	    return this.admitMD;
	  }

	  setAdmitMD(admitMD) {
	    this.admitMD = admitMD;
	    this.change();
	  }

	  getReg() {
	    return this.reg;
	  }

	  setReg(reg) {
	    this.reg = reg;
	    this.change();
	  }

	  getEkg() {
	    return this.ekg;
	  }

	  setEkg(ekg) {
	    this.ekg = ekg;
	    this.change();
	  }

	  change() {
	    this.lastChange = new Date();
	    HospitalModel.get().computer.print(); //TODO: Figure out how to redo this.
	  }

	  unacknowledged(string) {
	    return this.unack.contains(string);
	  }

	  acknowledge(string) {
	    this.unack.remove(string);

	  }

	  addUnacknowledged(string) {
	    this.unack.add(string);

	  }




	}

	module.exports = {Computer, ComputerEntry, ComputerEntryStatus};

}());
