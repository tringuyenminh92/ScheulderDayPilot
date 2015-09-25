﻿/*************************************************************
 *
 *	Created By: Nguyen Minh Tri - UR81HC
 *  Created Date: 03-04-2015
 *	Description: Global script to define basic functions and root angularjs module
 *	
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 08-04-2015
 *	Description: add modal in rootScope
 *
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 23-04-2015
 *	Description: Add  Directive Accept Number Only
 * 
  *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 30-07-2015
 *	Description: config html5mode and not requireBase to use location search
 * 
 *************************************************************/

(function () {

    "use strict";

    angular.module("GlobalModule", ['daypilot', 'ui.bootstrap']);

    // Controller xu ly cac thao tac cua message Modal
    function messageModalController($scope, $modalInstance, data) {

        //set data in modal scope
        $scope.myData = data;

        $scope.ok = function () {
            //Close and Pass return result
            $modalInstance.close($scope.myData);
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }

    angular.module("GlobalModule").controller("messageModalController", messageModalController);
    messageModalController.$inject = ['$scope', '$modalInstance', 'data']; //Storing modal object in rootScope for calling in controllers

    function rootModal($rootScope, $modal, $window) {

        $rootScope.ShowModal = function (funcOk, funcCancel, passData) {

            var modalInstance = $modal.open({
                templateUrl: passData.Template || 'messageModal.html',
                backdrop: 'static',
                keyboard: false,
                controller: passData.Controller || 'messageModalController',
                size: passData.Size || 'sm',
                resolve: {
                    data: function () { return passData; }
                }
            });

            modalInstance.result.then(funcOk, funcCancel);
        };
    }

    rootModal.$inject = ['$rootScope', '$modal', '$window'];
    angular.module("GlobalModule").run(rootModal);

    angular.module("GlobalModule").factory("modalService", modalService);
    angular.module("GlobalModule").factory("notifyService", notifyService);
    angular.module("GlobalModule").factory("shareService", shareService);

})();

//Wait-Dialog class to show Processing message in modal
function WaitDialog(modalContent) {

    modalContent = modalContent || "In Process ...";
    var pleaseWaitDiv = $('<div class="modal fade" id="pleaseWaitDialog" data-backdrop="static" data-keyboard="false" role="dialog" aria-labelledby="basicModal" aria-hidden="true" tabindex="-1"><div class="modal-dialog modal-sm"><div class="modal-content"><div class="modal-header"><h4><i class="fa fa-spinner fa-spin"></i>' + modalContent + '</h4></div><div class="modal-body"><div class="progress progress-striped active"><div class="progress-bar" style="width: 100%;"/></div></div></div></div></div>');

    this.Show = function () {
        pleaseWaitDiv.modal();
    };
    this.Hide = function () {
        pleaseWaitDiv.modal('hide');
    };
}

//Service to call Modal
modalService.$inject = ['$modal'];
function modalService($modal) {

    var serviceObject = {};
    serviceObject.ShowModal = function (funcOk, funcCancel, passData) {

        var modalInstance = $modal.open({
            templateUrl: passData.Template || 'gridModal.html',
            backdrop: 'static',
            keyboard: false,
            controller: passData.Controller || 'gridModalController',
            size: passData.Size || 'lg',
            resolve: {
                data: function () { return passData; }
            }
        });

        modalInstance.result.then(funcOk, funcCancel);
    };

    return serviceObject;
}


//Service to show notification message
notifyService.$inject = ['$rootScope'];
function notifyService($rootScope) {

    'use strict';

    $rootScope.queue = [];

    var serviceObject = {};

    serviceObject.add = function (item) {
        $rootScope.queue.push(item);
        setTimeout(function () {
            // remove the alert after 2000 ms
            $('.alerts .alert').eq(0).remove();
            $rootScope.queue.shift();
        }, item.timeout || 4000);
    },

    serviceObject.pop = function () {
        $rootScope.queue.pop();
    };

    return serviceObject;

}


//Share data service
shareService.$inject = ['$rootScope'];
function shareService($rootScope) {

    var serviceObject = {};

    //Publish event
    serviceObject.RaiseEvent = function (sender, data) {
        $rootScope.$broadcast(sender, { item: data });
    };

    //subscribe event for current controller
    serviceObject.OnEvent = function ($scope, sender, handler) {
        $scope.$on(sender, function (event, args) {
            handler(args.item);
        });
    };

    return serviceObject;
}