/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Text',
                type: 'text',
                rect: ['110px', '58px','330px','142px','auto', 'auto'],
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis est, pharetra eget facilisis porta, eleifend aliquam arcu. Donec elit lectus, feugiat in felis nec, tristique mollis dui. Etiam vitae laoreet odio. Aliquam erat volutpat. Ut tincidunt, velit eu mollis porttitor, elit nulla suscipit metus, eget tristique sem urna id libero. Nulla varius aliquet dolor, et congue mi aliquam aliquam. Duis ac pharetra lorem, nec facilisis ipsum. Nunc vestibulum ipsum id ultrices imperdiet. Ut ipsum lacus, tempor sed ipsum ut, dictum euismod metus. Nullam a fermentum justo. Morbi erat justo, pellentesque venenatis feugiat pellentesque, dapibus sed metus. Etiam adipiscing egestas pharetra. Vivamus mauris leo, eleifend a elit at, volutpat varius ligula. Etiam in dolor tempor, tincidunt purus in, pharetra velit. Donec vestibulum sit amet augue non convallis.<br>Sed et mollis elit. Cras adipiscing sit amet magna a blandit. Aliquam laoreet ultricies sodales. Mauris in eleifend turpis, non cursus dolor. In rutrum ante eget nibh pretium dictum a in lectus. Cras dolor elit, gravida at sem vel, accumsan varius diam. Nulla facilisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br>",
                font: ['Arial, Helvetica, sans-serif', 9, "rgba(0,0,0,1)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '100%'],
                ["style", "height", '100%'],
                ["style", "overflow", 'hidden']
            ],
            "${_Text}": [
                ["style", "top", '0px'],
                ["style", "height", '73px'],
                ["style", "width", '903px'],
                ["style", "left", '1132px'],
                ["style", "font-size", '9px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 750,
            autoPlay: true,
            timeline: [
                { id: "eid10", tween: [ "style", "${_Text}", "width", '903px', { fromValue: '903px'}], position: 750, duration: 0 },
                { id: "eid5", tween: [ "style", "${_Text}", "left", '0px', { fromValue: '1132px'}], position: 0, duration: 750 },
                { id: "eid12", tween: [ "style", "${_Text}", "height", '73px', { fromValue: '73px'}], position: 750, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Text}", "top", '0px', { fromValue: '0px'}], position: 750, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-20332333");
