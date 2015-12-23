# Simple SVG line drawer
Draw your svg path with animation

#USAGE

    1. Include svg-linedrawe.js to your HTML
    2. Call scrollBar with your path element selector
        eg: $('.logo').svgLineDrawer();
    3. And its ready to use
    

#FEATURES

    You can control the animation duration of path in milliseconds i.e. time to complete the animation. Default value is 3s.
    eg:
        var options = {
            animationDuration: 5000 // For 5s
        };
        $('.logo').svgLineDrawer(options);