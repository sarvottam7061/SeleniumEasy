html2canvas(document.body, {
    onrendered: function(canvas)
    {
    canvas.toBlob(function(blob) {
    saveAs(blob, "wholePage.png");
    });
    }
    });