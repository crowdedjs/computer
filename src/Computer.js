class Computer {
entries =  [];//List<ComputerEntry>
	
	add(entry) {
		this.entries.add(entry);
	}
	
	print() {
		this.entries.forEach(c=>console.log(c));
	}

	getEntry(patient) {
		return this.entries.find(c=>c.patient == patient)
		
	}

}
export default Computer;