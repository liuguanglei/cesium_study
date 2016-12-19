var topoAnimate= {
    float: "topo-float",
    pulse: "topo-pulse",
    shake: "topo-shake",
    ring: "topo-ring",
    vertical: "topo-vertical",
    horizontal: "topo-horizontal",
    double_flash: "topo-double-flash",
    bounce: "topo-bounce",
    spin: "topo-spin",
    wrench: "topo-wrench",
    burst: "topo-burst",
    tada: "topo-tada",
    passing: "topo-passing",
    passing_reverse: "topo-passing-reverse",
    animateCSSByRect: function (rt, classname) {
        var id = rt.node.attributes['id'].nodeValue;
        var div = $('#' + id);
        div.addClass(classname);
    },
    animateCSSByID: function (id, classname) {
        var div = $('#' + id);
        div.addClass(classname);
    },
    disAnimateCSSByID: function (id, classname) {
        var div = $('#' + id);
        div.removeClass(classname);
    },
    disAnimateCSSByRect: function (rt, classname) {
        var id = rt.node.attributes['id'].nodeValue;
        var div = $('#' + id);
        div.removeClass(classname);
    },
    animateSqure: function (rt) {
        var mx = 15.2;
        var my = 9.6;
        var bqw = '60';
        var bqh = '50';
        var sqw = '25';
        var sqh = '25';
        var w = new Decimal(rt.node.attributes['width'].nodeValue);
        var h = new Decimal(rt.node.attributes['height'].nodeValue);
        if (w.eq(bqw) || h.eq(bqh)) {
            this.disAnimateSqure(rt);
        }
        var x = new Decimal(rt.node.attributes['x'].nodeValue);
        var y = new Decimal(rt.node.attributes['y'].nodeValue);
        var hx = x.sub(mx);
        var hy = y.sub(my);
        var id = rt.node.attributes['id'].nodeValue;
        var div = $('#' + id);
        div.animate({x: hx, y: hy, height: bqh, width: bqw, 'stroke-width': '0', opacity: '0.8'}, "slow");
        div.animate({x: x, y: y, height: sqh, width: sqw, 'stroke-width': '10', opacity: '0.8'}, "fast");
    },
    disAnimateSqure: function (rt) {
        var mx = 15.2;
        var my = 9.6;
        var sqw = 25;
        var sqh = 25;
        var x = new Decimal(rt.node.attributes['x'].nodeValue);
        var y = new Decimal(rt.node.attributes['y'].nodeValue);
        var hx = x.add(mx);
        var hy = y.add(my);
        var id = rt.node.attributes['id'].nodeValue;
        var div = $('#' + id);
        div.animate({x: hx, y: hy, height: sqh, width: sqw, 'stroke-width': '1', opacity: '0.8'}, "fast");
    },
    disAllRectAnimateClass:function(){
        $('rect').removeClass();
    }
}