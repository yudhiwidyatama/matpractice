var layoutColorCodes = {
    'blue': '#54728c',
    'red': '#e25856',
    'green': '#94B86E',
    'purple': '#852b99',
    'grey': '#555555',
    'yellow': '#ffb848'
};
var App = {};
var Chart = {};
App.getLayoutColorCode = function(c) {
    return layoutColorCodes[c];
}

var defaultPlotOptions = {
		colors: [App.getLayoutColorCode('blue'), App.getLayoutColorCode('red'), App.getLayoutColorCode('green'), App.getLayoutColorCode('purple'), App.getLayoutColorCode('grey'), App.getLayoutColorCode('yellow')],
		legend: {
			show: true,
			labelBoxBorderColor: "", // border color for the little label boxes
			backgroundOpacity: 0.95 // set to 0 to avoid background
		},
		series: {
			points: {
				show: false,
				radius: 3,
				lineWidth: 2, // in pixels
				fill: true,
				fillColor: "#ffffff",
				symbol: "circle" // or callback
			},
			lines: {
				// we don't put in show: false so we can see
				// whether lines were actively disabled
				show: true,
				lineWidth: 2, // in pixels
				fill: false,
				fillColor: { colors: [ { opacity: 0.4 }, { opacity: 0.1 } ] }
			},
			bars: {
				lineWidth: 1, // in pixels
				barWidth: 1, // in units of the x axis
				fill: true,
				fillColor: { colors: [ { opacity: 0.7 }, { opacity: 1 } ] },
				align: "left", // or "center"
				horizontal: false
			},
			pie: {
				show: false,
				radius: 1,
				label: {
					show: false,
					radius: 2/3,
					formatter: function(label, series){
						return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;text-shadow: 0 1px 0 rgba(0, 0, 0, 0.6);">'+label+'<br/>'+Math.round(series.percent)+'%</div>';
					},
					threshold: 0.1
				}
			},
			shadowSize: 0
		},
		grid: {
			show: true,
			borderColor: "#efefef", // set if different from the grid color
			tickColor: "rgba(0,0,0,0.06)", // color for the ticks, e.g. "rgba(0,0,0,0.15)"
			labelMargin: 10, // in pixels
			axisMargin: 8, // in pixels
			borderWidth: 0, // in pixels
			minBorderMargin: 10, // in pixels, null means taken from points radius
			mouseActiveRadius: 5 // how far the mouse can be away to activate an item
		},
		tooltipOpts: {
			defaultTheme: false
		},
		selection: {
			color: App.getLayoutColorCode('blue')
		}
	};
var defaultPlotWidgetOptions = {
		colors: ['#ffffff'],
		legend: {
			show: false,
			backgroundOpacity: 0
		},
		series: {
			points: {
			}
		},
		grid: {
			tickColor: 'rgba(255, 255, 255, 0.1)',
			color: '#ffffff'
		},
		shadowSize: 1
	};
Chart.getFlotDefaults = function() {
			return defaultPlotOptions;
		};
		

Chart.getFlotWidgetDefaults = function() {
			return $.extend(true, {}, Chart.getFlotDefaults(), defaultPlotWidgetOptions);
};