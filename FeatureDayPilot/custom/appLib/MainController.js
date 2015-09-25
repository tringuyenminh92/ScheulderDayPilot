/*************************************************************
 *
 *	Created By: Nguyen Minh Tri - UR81HC
 *  Created Date: 21-09-2015
 *	Description: add comment header
 *	
 *	Modified By: Nguyen Minh Tri - UR81HC
 *	Modified Date: 22-09-2015
 *	Description: contextMenu of scheduler making error!!!
 *
 *************************************************************/


angular.module("GlobalModule").controller("mainController", mainController);
mainController.$inject = ['$scope', 'modalService', '$timeout'];
function mainController($scope, modalService, $timeout) {

    $scope.current = { selectedDate: new Date(), events: [] };
    $scope.current.events = [
         {
             "id": "1",
             "text": "orting and Coordination of Tasks in offshore",
             "start": "2015-01-07",
             "end": "2015-01-12",
             "resource": "A",
             "text_color": "black",
             "back_color": "white"
         },
        {
            "id": "2",
            "text": "0258800202-68 \n BMW(PM)",
            "start": "2015-01-14",
            "end": "2015-01-14",
            "resource": "A",
            "text_color": "black",
            "back_color": "#3cb371"
        },
        {
            "id": "3",
            "text": "0258B00145-07 \n all customer (PM)",
            "start": "2015-01-19",
            "end": "2015-01-20",
            "resource": "A",
            "text_color": "black",
            "back_color": "#3cb371",
            "back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAD0lEQVQImWNgQAX/yeAAAIHCA/0RE2WAAAAAAElFTkSuQmCC"
        },
        {
            "id": "4",
            "text": "0258 B15 005-02 \n Ford (NX)",
            "start": "2015-01-21",
            "end": "2015-01-22",
            "resource": "A",
            "text_color": "black",
            "back_color": "#3cb371"
        },
        {
            "id": "5",
            "text": "0258 B00 294-03 \n Tata PC (NX)",
            "start": "2015-01-07",
            "end": "2015-01-08",
            "resource": "B",
            "text_color": "black",
            "back_color": "#3cb371",
            "back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAD0lEQVQImWNgQAX/yeAAAIHCA/0RE2WAAAAAAElFTkSuQmCC"
        },
         {
             "id": "6",
             "text": "0258 B00 282-09 \n laguar CB (NX)",
             "start": "2015-01-07",
             "end": "2015-01-08",
             "resource": "C",
             "text_color": "black",
             "back_color": "#3cb371",
             "back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAD0lEQVQImWNgQAX/yeAAAIHCA/0RE2WAAAAAAElFTkSuQmCC"
         },
         {
             "id": "8",
             "text": "Leave",
             "start": "2015-01-14",
             "end": "2015-01-14",
             "resource": "B",
             "text_color": "black",
             "back_color": "#778899"
         },
         {
             "id": "9",
             "text": "02588B00203-62 \n BMW (PM)",
             "start": "2015-01-14",
             "end": "2015-01-14",
             "resource": "C",
             "text_color": "black",
             "back_color": "#3cb371",
             "back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEUlEQVQImWNggID/DGiABAEAiboD/dQb21wAAAAASUVORK5CYII="
         },
         {
             "id": "10",
             "text": "0 258 B10 010-02 \n Weichai (NX)",
             "start": "2015-01-20",
             "end": "2015-01-22",
             "resource": "B",
             "text_color": "black",
             "back_color": "#1e90ff"
         },
        {
            "id": "11",
            "text": "0 258 B00 264-12 \n Ford (NX)",
            "start": "2015-01-20",
            "end": "2015-01-21",
            "resource": "C",
            "text_color": "black",
            "back_color": "#3cb371",
            "back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAD0lEQVQImWNgQAX/yeAAAIHCA/0RE2WAAAAAAElFTkSuQmCC"
        },
        {
            "id": "12",
            "text": "0 258 B00 270-07 \n Ford (NX)",
            "start": "2015-01-22",
            "end": "2015-01-23",
            "resource": "C",
            "text_color": "black",
            "back_color": "#3cb371"
        },
        {
            "id": "13",
            "text": "0 258 B00 271-10 \n Ford (NX)",
            "start": "2015-01-26",
            "end": "2015-01-27",
            "resource": "C",
            "text_color": "black",
            "back_color": "#3cb371"
        },
        {
            "id": "15",
            "text": "0 258 B00 360-03 \n Hyundai (PM)",
            "start": "2015-01-08",
            "end": "2015-01-09",
            "resource": "E",
            "text_color": "black",
            "back_color": "#3cb371",
            "back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAD0lEQVQImWNgQAX/yeAAAIHCA/0RE2WAAAAAAElFTkSuQmCC"
        },
        {
            "id": "16",
            "text": "0 258 B00 349-02 \n Ford FB (PM)",
            "start": "2015-01-05",
            "end": "2015-01-14",
            "resource": "D",
            "text_color": "black",
            "back_color": "#3cb371",
            "back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAD0lEQVQImWNgQAX/yeAAAIHCA/0RE2WAAAAAAElFTkSuQmCC"
        },
        {
            "id": "17",
            "text": "Leave",
            "start": "2015-01-14",
            "end": "2015-01-14",
            "resource": "E",
            "text_color": "black",
            "back_color": "#778899"
        },
        {
            "id": "18",
            "text": "0258B1500-05 \n Plattform (NX)",
            "start": "2015-01-22",
            "end": "2015-01-23",
            "resource": "E",
            "text_color": "black",
            "back_color": "#1e90ff"
        },
        {
            "id": "19",
            "text": "0258B1500-06 \n Plattform (NX)",
            "start": "2015-01-26",
            "end": "2015-01-27",
            "resource": "E",
            "text_color": "black",
            "back_color": "#1e90ff"
        },
        {
            "id": "20",
            "text": "Update VW (PM)",
            "start": "2015-01-26",
            "end": "2015-01-27",
            "resource": "F",
            "text_color": "black",
            "back_color": "#1e90ff"
        },
         {
             "id": "21",
             "text": "0258B1500-06 \n Plattform (NX)",
             "start": "2015-01-26",
             "end": "2015-01-29",
             "resource": "G",
             "text_color": "white",
             "back_color": "red"
         },
          {
              "id": "22",
              "text": "0258B1500-06 \n Plattform (NX)",
              "start": "2015-01-05",
              "end": "2015-01-08",
              "resource": "H",
              "text_color": "white",
              "back_color": "red"
          }

    ];

    //"back_image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAEUlEQVQImWNggID/DGiABAEAiboD/dQb21wAAAAASUVORK5CYII="

    $scope.schedulerData = [
        { name: "Mani", id: "A" },
        { name: "Subasini", id: "B" },
        { name: "Anurupa", id: "C" },
        { name: "Arun G", id: "D" },
        { name: "Ravindran", id: "E" },
        { name: "Diszelberger", id: "F" },
        { name: "Biolcat", id: "G" },
        { name: "Carone", id: "H" },
        { name: "Peric", id: "I" },
        { name: "Berg", id: "J" },
        { name: "Liebler", id: "K" }
    ];
    var menu = new DayPilot.Menu({
        items: [
            { text: "Go to google.com", href: "http://www.google.com/?q={0}" }
        ],
        cssClassPrefix: "menu_default"
    });
    //setting for scheduler
    $scope.schedulerConfig = {
        scale: "Day",
        durationBarVisible: false,
        eventHeight: 50,
        days: new DayPilot.Date().daysInMonth(),
        startDate: new DayPilot.Date().firstDayOfMonth(),
        timeHeaders: [
            { groupBy: "Week" },
            { groupBy: "Day", format: "dd.MM.yyyy" }
        ],
        onBeforeTimeHeaderRender: function (e) {
            if (e.header.level === 0) {
                e.header.html = "CW " + e.header.html;
            }

            //access and remove div contain DEMO text
            $scope.removeDemoText();
        },
        eventDoubleClickHandling: "Enabled",
        onEventDoubleClick: function (args) { $scope.onEventDoubleClickHandler(args); },
        cellWidthSpec: "Auto",
        treeEnabled: false,
        resources: $scope.schedulerData,
        contextMenu:menu,
        messageBarPosition: "Bottom",
        eventDeleteHandling: "Update",
        onEventDelete: function (agrs) { $scope.onEventDeleteHandler(agrs); },
        onEventDeleted: function (args) { $scope.onEventDeletedHandler(args) },
        onBeforeEventRender: function (args) { $scope.onBeforeEventRenderHandler(args); }

    };

    //handle confirmation to delete
    $scope.onEventDeleteHandler = function (args) {
        if (!confirm("Do you really want to delete this event?")) {
            args.preventDefault();
        }
    };

    //handle operators after deleted
    $scope.onEventDeletedHandler = function (args) {
        $scope.scheduler.message("Event deleted: " + args.e.text());
    };

    $scope.onBeforeEventRenderHandler = function (args) {
        args.e.fontColor = args.e.text_color;
        args.e.backColor = args.e.back_color;
        if (!!args.e.back_image) {
            args.e.backImage = args.e.back_image;
            if (args.e.resource === 'A') {
                args.e.backImage = args.e.back_image;
            }
        }
        args.e.html = "<div> <div style=\"text-align: center;margin-left:auto;margin-right:auto;\">" + args.e.text +
            "<div style=\"text-align: center;padding: 0 auto;\">Ford (NX)</div>  </div>";

        //access and remove div contain DEMO text
        $scope.removeDemoText();
    };


    $scope.onEventDoubleClickHandler = function (args) {

        var templateObject = { Template: 'editEvent.html', Controller: 'editEventController', Size: 'sm', Title: 'Edit Event Description', ButtonOk: 'Save', ButtonCancel: 'Cancel', data: angular.copy(args.e.data) }
        modalService.ShowModal(function (data) {

            var e = $scope.scheduler.events.find(data.id);
            // update the event text
            e.text(data.text);
            $timeout(function() {
                $scope.scheduler.events.update(e);
            }); 

        }, function () { }, templateObject);

    };

    //temp handle remove text DEMO in DOM, moving to directive later.
    $scope.removeDemoText = function () {
        var demoElement = angular.element("#scheduler div:first div:first div:nth-child(2)");
        if (!!demoElement) {
            demoElement.css('display', 'none');
        }
    };

    //handle event changing value of Calendar time when selected
    $scope.$watch('current.selectedDate', function (newValue, oldValue) {
        $scope.schedulerConfig.days = new DayPilot.Date(newValue).daysInMonth();
        $scope.schedulerConfig.startDate = new DayPilot.Date(newValue).firstDayOfMonth();

    });

}

angular.module("GlobalModule").controller("editEventController", editEventController);
editEventController.$inject = ['$scope', '$modalInstance', 'data'];
//handle modal edit quote description of current part item
function editEventController($scope, $modalInstance, data) {

    $scope.passData = data;

    $scope.ok = function () {
        //Close and Pass return result
        $modalInstance.close($scope.passData.data);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}
