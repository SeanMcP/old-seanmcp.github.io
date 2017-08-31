let windw = this;

$.fn.followTo = function (position) {
    let $this = this;
    let $window = $(windw);

    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 0
            });
        }
    });
};

$('#f').followTo(250);
