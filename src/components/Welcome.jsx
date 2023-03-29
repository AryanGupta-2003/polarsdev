import React,{Component} from 'react';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import "../pages/welcome.css";

class Welcome extends Component{
    componentDidMount(){
        (function ($) {
            $.fn.countTo = function (options) {
                options = options || {};
                
                return $(this).each(function () {
                    // set options for current element
                    var settings = $.extend({}, $.fn.countTo.defaults, {
                        from:            $(this).data('from'),
                        to:              $(this).data('to'),
                        speed:           $(this).data('speed'),
                        refreshInterval: $(this).data('refresh-interval'),
                        decimals:        $(this).data('decimals')
                    }, options);
                    
                    // how many times to update the value, and how much to increment the value on each update
                    var loops = Math.ceil(settings.speed / settings.refreshInterval),
                        increment = (settings.to - settings.from) / loops;
                    
                    // references & variables that will change with each update
                    var self = this,
                        $self = $(this),
                        loopCount = 0,
                        value = settings.from,
                        data = $self.data('countTo') || {};
                    
                    $self.data('countTo', data);
                    
                    // if an existing interval can be found, clear it first
                    if (data.interval) {
                        clearInterval(data.interval);
                    }
                    data.interval = setInterval(updateTimer, settings.refreshInterval);
                    
                    // initialize the element with the starting value
                    render(value);
                    
                    function updateTimer() {
                        value += increment;
                        loopCount++;
                        
                        render(value);
                        
                        if (typeof(settings.onUpdate) == 'function') {
                            settings.onUpdate.call(self, value);
                        }
                        
                        if (loopCount >= loops) {
                            // remove the interval
                            $self.removeData('countTo');
                            clearInterval(data.interval);
                            value = settings.to;
                            
                            if (typeof(settings.onComplete) == 'function') {
                                settings.onComplete.call(self, value);
                            }
                        }
                    }
                    
                    function render(value) {
                        var formattedValue = settings.formatter.call(self, value, settings);
                        $self.html(formattedValue);
                    }
                });
            };
            
            $.fn.countTo.defaults = {
                from: -2,               // the number the element should start at
                to: 0,                 // the number the element should end at
                speed: 1000,           // how long it should take to count between the target numbers
                refreshInterval: 10,  // how often the element should be updated
                decimals: 0,           // the number of decimal places to show
                formatter: formatter,  // handler for formatting the value before rendering
                onUpdate: null,        // callback method for every time the element is updated
                onComplete: null       // callback method for when the element finishes updating
            };
            
            function formatter(value, settings) {
                return value.toFixed(settings.decimals);
            }
        }(jQuery));
        
        jQuery(function ($) {
          // custom formatting example
          $('.count-number').data('countToOptions', {
            formatter: function (value, options) {
              return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
          });
          
          // start all the timers
          $('.timer').each(count);  
          
          function count(options) {
            var $this = $(this);
            options = $.extend({}, options || {}, $this.data('countToOptions') || {});
            $this.countTo(options);
          }
        });
    }
    render(){
        return (
            <div>
            
            <main className="main">
            <section className="section banner banner-section">
                <div className="container banner-column">

                


                    <div className="banner-inner">
                        {/* <h1 className="heading-xl">PolarsDev</h1> */}
                    <div className="textWrapper wordContainer word">
                        <div className="wordContainer">
                            <div className="word">
                                <p>PolarsDev</p>
                            </div>
                        </div>
				    </div>
                    <div className="itemWrapper  "><div className="wordContainerdup"><div className="itemdright">
                        <p className="paragraph">
                        Your Polaris for Developement
                        </p>
                        </div></div></div>

                        <div className="itemWrapper  "><div className="wordContainerdup"><div className="itemdleft">
                                    <button className="btn btn-darken btn-inline">
                                    Our Projects<i className="bx bx-right-arrow-alt"></i>
                                    </button>
                        </div></div></div>
                    </div>

                    <div className="itemWrapper  "><div className="wordContainerdup"><div className="itemdright">
                    <img className="banner-image" src="https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif" alt="banner"></img>
                    </div></div></div>

                    
                        <div className="banner-links">
                            <a href="#" title=""><i className="bx bxl-facebook"></i></a>
                            <a href="#" title=""><i className="bx bxl-instagram"></i></a>
                            <a href="#" title=""><i className="bx bxl-twitter"></i></a>
                            <a href="#" title=""><i className="bx bxl-youtube"></i></a>
                        </div>
                    

                </div>
            
            <div className="itemWrapper  ">
                        <div className="wordContainerdup">
                            <div className="itemdright">
                                
                           
            {/* -----------------counter------------------- */}
                <div className="wrapper">
                    <div className="counter col_fourth" >
                    <i className="fa fa-code fa-2x"></i>
                    <div className="inos">
                        <h2 className=" count-title timer count-number" data-to="5" data-speed="3000"></h2><h3 className="info">+</h3>
                    </div>
                    <p className="count-text ">Projects Done</p>
                    </div>

                    <div className="counter col_fourth">
                        <i className="fa fa-coffee fa-2x"></i>
                        <div className="inos">
                            <h2 className="timer count-title count-number" data-to="2" data-speed="3000"></h2><h3 className="info">years</h3>
                        </div>
                         <p className="count-text ">Experience</p>
                    </div>

                    <div className="counter col_fourth">
                    <i className="fa fa-lightbulb-o fa-2x"></i>
                    <div className="inos">
                    <h2 className="timer count-title count-number" data-to="10" data-speed="3000"></h2><h3 className="info">+</h3>
                    </div>
                    <p className="count-text ">People under us</p>
                    </div>                
                </div>
                {/* -----------------counter------------------- */}
                </div>
                        </div>
				    </div>
                    </section>
                </main>
            </div>

        );
    }
}

export default Welcome;