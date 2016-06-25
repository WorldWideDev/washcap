var myApp = angular.module('myApp', [])
myApp.factory('MainFactory', function ($http){
	var factory = {}
	// factory.index = function(userId,callback){
	// 	$http.get('/users/index/' + userId).success(function (meow){
	// 		callback(meow)
	// 	})
	// }
	return factory
})
myApp.controller('MainController', function (MainFactory){
	self = this;
    self.calcGross = function (data){
        if(data == undefined){
            self.countable = '';
            self.shelterDeduction = '';
            self.netIncome = '';
            self.food = '';
        }else{
            self.countable = data - 155;
            self.shelterDeduction = (self.shelter - (self.countable/2))
            self.netIncome = self.countable - self.shelterDeduction
            self.food = 194-Math.ceil(self.netIncome/3)
        }
    }
    self.calcShelter = function (data){
        if(data >= 300){
            self.shelter = 820;
        }else if(data == undefined){
            self.shelter = 0;
            self.countable = '';
            self.shelterDeduction = '';
            self.netIncome = '';
            self.food = '';
            
        }else{
            self.shelter = 630;
        }
        self.shelterDeduction = (self.shelter - (self.countable/2))
        self.netIncome = Math.round(self.countable - self.shelterDeduction)
        self.food = 194-Math.ceil(self.netIncome/3)
    }
    
})