// https://github.com/GetPublii/Publii/discussions/1359

class MyCssFile {
    constructor (API, name, config) {
        this.API = API; 		// gives you an access to the plugins API functions
		this.name = name; 		// retrieved plugin name - probably will be removed in the future
		this.config = config; 	// gives access to the plugin saved config
    }	


    addEvents () {
		this.API.addEvent('beforeRender', this.makeCSS, 1, this);
    }

	makeCSS(rendererInstance) {
		const fileName = this.config.fileName || 'fileName.csv'
		const delimiter = this.config.delimiter;
		const columns = this.config.columns;
		let csv = []; // Initialize the array to store CSV rows
	
		if (Array.isArray(this.config.csvData)) {
			this.config.csvData.forEach((elements) => {
				// Create a dynamic array based on the number of columns
				const rowArray = [];
				for (let i = 1; i <= columns; i++) {
					const key = `data${i}`;
					const value = elements[key] || ""; // Fallback to an empty string if the key is missing
					
					// Check if the value needs escaping
					if (value.includes(delimiter) || value.includes('"') || value.includes("\n")) {
						// Escape internal double quotes and wrap the value in double quotes
						const escapedValue = `"${value.replace(/"/g, '""')}"`;
						rowArray.push(escapedValue);
					} else {
						// No escaping needed
						rowArray.push(value);
					}
				}
				// Combine the values using the defined delimiter
				const row = rowArray.join(delimiter);
				csv.push(row);
			});
		}
	
		// Combine all rows into a single text, separated by newlines
		const output = csv.join("\n");
	
		// Create the file in the root folder
		this.API.createFile(`${this.config.path}${fileName}`, output, this);
	}

	
}

module.exports = MyCssFile;