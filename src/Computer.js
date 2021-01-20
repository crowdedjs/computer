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
export default Computer;