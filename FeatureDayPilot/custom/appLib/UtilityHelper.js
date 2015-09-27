//***********************************************************************
//
//	Created By: Nguyen Minh Tri
//	Created Date: 27-09-2015
//	Description: Add comment header,
//
//	Modified By: Nguyen Minh Tri
//	Modified Date: 27-09-2015
//	Description: script handles helper functions
//
//***********************************************************************

(function () {

    'use strict';

    function exportPdfHandlers($rootScope) {

        //redraw canvas to scale the height for converting to image
        $rootScope.canvasShiftImage = function (canvas, shiftAmt, realPdfPageHeight) {
            shiftAmt = parseInt(shiftAmt) || 0;
            if (shiftAmt <= 0) {
                return canvas;
            }

            var newCanvas = document.createElement('canvas');
            newCanvas.height = Math.min(canvas.height - shiftAmt, realPdfPageHeight);
            newCanvas.width = canvas.width;
            var ctx = newCanvas.getContext('2d');

            var img = new Image();
            img.src = canvas.toDataURL();
            ctx.drawImage(img, 0, shiftAmt, img.width, img.height, 0, 0, img.width, img.height);

            return newCanvas;
        };

        //using jsPDF to export image to pdf
        $rootScope.scaleAndSaveToPdf = function (canvas, fileName) {

            var pdf = new jsPDF('l', 'px'),
                pdfInternals = pdf.internal,
                pdfPageSize = pdfInternals.pageSize,
                pdfScaleFactor = pdfInternals.scaleFactor,
                pdfPageWidth = pdfPageSize.width,
                pdfPageHeight = pdfPageSize.height,
                totalPdfHeight = 0,
                htmlPageHeight = canvas.height,
                htmlScaleFactor = canvas.width / (pdfPageWidth * pdfScaleFactor);

            while (totalPdfHeight < htmlPageHeight) {
                var newCanvas = $rootScope.canvasShiftImage(canvas, totalPdfHeight, pdfPageHeight * pdfScaleFactor);
                pdf.addImage(newCanvas, 'jpeg', 0, 0, pdfPageWidth, 0, null, 'NONE');

                totalPdfHeight += (pdfPageHeight * pdfScaleFactor * htmlScaleFactor);

                if (totalPdfHeight < htmlPageHeight) { pdf.addPage(); }
            }

            pdf.save(fileName + (new Date().toISOString().replace(/[^0-9]/g, '')) + '.pdf');
        };

    }

    exportPdfHandlers.$inject = ['$rootScope', '$modal', '$window'];
    angular.module('GlobalModule').run(exportPdfHandlers);

})();
