var MatrixViewModel = function () {
	var self = this;

	self.matrix = ko.observableArray();

	self.computedMatrix = ko.pureComputed({
		read: function () {
			var inputMatrix = "";
			
			try {
				inputMatrix = eval(self.matrix())
			} catch (e) {
				return null;
			}

			if (inputMatrix instanceof Array ||
				inputMatrix === undefined) {
				return inputMatrix;
			} else {
				return null;
			};
		},

		write: function (value) {
			self.matrix(value);
		}
	});


	self.isCorrect = function () {
		if (self.computedMatrix() === undefined) {
			return true;
		};
		if (self.computedMatrix() === null) {
			return false;
		};
		if (self.computedMatrix().length === 0) {
			return true;
		};


		var matrix = self.computedMatrix(),
				nestedLength = matrix[0].length;

		for(var i = 1; i < matrix.length; ++i) {
			if (matrix[i].length !== nestedLength) {
				return false;
			};
		}
		return true;
	}

	self.renderTable = function () {
			var inputMatrix;
			
			try {
				inputMatrix = eval(self.matrix())
			} catch (e) {
				self.computedMatrix(null);	
			}


			if (inputMatrix instanceof Array) {
				self.computedMatrix(self.matrix());
			} else {
				self.computedMatrix(null);
			};
		
	}
}

ko.applyBindings(MatrixViewModel);