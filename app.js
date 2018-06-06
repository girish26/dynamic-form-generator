var app = angular.module("templateFields-app", ['dynform']);
////angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.0.js
app.controller("buildTemplate", function($scope) {

  $scope.inputElements = [];

      $scope.formData = {};   // JavaScript needs an object to put our form's models into.

  $scope.formTemplate = templateFields;
  $scope.processForm = function () {

      /* Handle the form submission... */
  };

  $scope.productFlag = window.location.href.indexOf("product_id=211") > -1 ? true:false;
  $scope.healthPlanField_1 = 'EE';
  $scope.healthPlanField_2 =  'EE+1';
  $scope.healthPlanField_3 = 'EE+Children';
  $scope.healthPlanField_4 = 'Family';
  $scope.initialize = function(mainFormID) {
    var formElement = angular.element(document.querySelector('#'+ mainFormID));
    formElement.empty();
    formElement.append(document.querySelector('#templateFieldContent'));


  };
  $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];

    $scope.items = ['Item 1', 'Item 2', 'Item 3'];

    $scope.addItem = function() {
      var newItemNo = $scope.items.length + 1;
      $scope.items.push('Item ' + newItemNo);
    };
  $scope.accordionElement = 0;
 $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };


});