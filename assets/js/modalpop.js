(function (helper, $) {
    // This is now a utility function to "Get the Document Hash"
    helper.getDocumentHash = function (urlString) {
        var hashValue = "";

        if (urlString.indexOf('#') != -1) {
            hashValue = urlString.substring(parseInt(urlString.indexOf('#')) + 1);
        }
        return hashValue;
    };
})(this.helper = this.helper || {}, jQuery);

$(window).on('load', function () {
    var value = window.location.href;
    var search = '#' + helper.getDocumentHash(value);
    setTimeout(function () {
        $(search).modal('show');
    }, 5000);
});