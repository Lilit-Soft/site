$(document).ready(function () {
    var rocket = {step: 1, status: "stop", elem: $(".rocket"), 
        animate: {
            "1": {
                start: {
                    x: 0,
                    y: 0,
                    angle: -300,
                    length: 0.3
                },
                end: {
                    x: 400,
                    y: 400,
                    angle: -280,
                    length: 0.8,
                }
            }, "2": {
                start: {
                    x: 400,
                    y: 420,
                    angle: -80,
                    length: 0.5
                },
                end: {
                    x: -400,
                    y: 930,
                    angle: 275,
                    length: 0.7
                }
            }, "3": {
                start: {
                    x: -400,
                    y: 940,
                    angle: -320,
                    length: 0.5
                },
                end: {
                    x: 400,
                    y: 1520,
                    angle: -300,
                    length: 0.7
                }
            }, "4": {
                start: {
                    x: 400,
                    y: 1530,
                    angle: -90,
                    length: 0.1
                },
                end: {
                    x: 0,
                    y: 1900,
                    angle: -210,
                    length: 0.3
                }
            }
        }};
    rocket.animatePath = function (path) {
        this.status = "start";
        this.elem.animate({path: new $.path.bezier(path)}, 1500, function () {
            rocket.status = "stop";
            rocket.run();
        });
    };
    rocket.go = function () {
        if (this.status === "stop" && this.step <= 4) {
            this.elem.removeClass("back");
            this.animatePath(this.animate[this.step]);
            ++this.step;
        }
    };
    rocket.back = function () {
        if (this.status === "stop" && this.step > 1) {
            this.elem.addClass("back");
            --this.step;
            this.animatePath({start: this.animate[this.step].end, end: this.animate[this.step].start});
        }
    };
    rocket.run = function () {
        if ($(window).scrollTop() + $(".navbar").height() >= this.elem.offset().top) {
            this.go();
        } else if ($(window).scrollTop() + $(window).height() <= this.elem.offset().top + this.elem.height()) {
            this.back();
        }
    };
    $(window).scroll(function () {
        rocket.run();
    });
});