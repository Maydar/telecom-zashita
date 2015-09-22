var MatrixViewModel = function () {
	var self = this;

	self.matrix = ko.observableArray();
	self.display = ko.observable(false);

	self.computedMatrix = ko.pureComputed({
		read: function () {
			var inputMatrix = "";
			
			try {
				inputMatrix = eval(self.matrix())
			} catch (e) {
				self.display(false);
				return null;
			}

			if (inputMatrix === undefined) {
				self.display(false);	
				return inputMatrix;	
			};

			if (inputMatrix instanceof Array) {
				if (inputMatrix.length === 0) {
					self.display(false);	
					return inputMatrix;
				};

				self.display(true);	
				return inputMatrix;
			
			} else {
				self.display(false);
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