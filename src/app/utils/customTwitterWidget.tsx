// https://github.com/kevinburke/customize-twitter-1.1
var CustomizeTwitterWidget = function (data: any) {
  // ie hack, http://stackoverflow.com/a/10183573/329700
  if (!(window.console && console.log)) {
  // @ts-ignore
    console = {
      log: function() {},
      debug: function() {},
      info: function() {},
      warn: function() {},
      error: function() {},
    };
  }

  var notNumeric = function(n:any) {
    return isNaN(parseFloat(n)) && isFinite(n);
  };

  var createCssElement = function(doc:any, url:string) {
    var link = doc.createElement('link');
    link.href = url;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    return link;
  };

  var embedCss = function(doc:any, url:string) {
    var link = createCssElement(doc, url);
    var head = doc.getElementsByTagName('head')[0];
    head.appendChild(link);
  };

  var contains = function(haystack:any, needle:any) {
    return haystack.indexOf(needle) >= 0;
  };

  var isTwitterFrame = function(frame:any) {
    return frame.frameElement.id.indexOf('twitter-widget') >= 0;
  };

  /**
   * The main event loop - calls itself if we haven't found all of the frames
   * yet.
   */
  var evaluate = function(framesWithStyles?:any, widgetCount?:any, timeoutLength?:any) {
    for (var i = 0; i < frames.length; i++) {
      try {
        if (
          isTwitterFrame(frames[i]) &&
          !contains(framesWithStyles, frames[i].name)
        ) {
          embedCss(frames[i].document, data.url);
          framesWithStyles.push(i);
        }
      } catch (e) {
        console.log('caught an error');
        console.log(e);
      }
    }

    if (framesWithStyles.length < widgetCount) {
      setTimeout(function() {
        evaluate(framesWithStyles);
      }, timeoutLength);
    }
  };

  if (data.url === undefined) {
    console.log('need to specify a link to your CSS file. quitting');
    return;
  }
  var widgetCount:any;
  if (data.widget_count === undefined || notNumeric(data.widget_count)) {
    widgetCount = 1;
  } else {
    widgetCount = data.widget_count;
  }
  var timeoutLength:any;
  if (data.timeout_length === undefined || notNumeric(data.timeout_length)) {
    timeoutLength = 300;
  } else {
    timeoutLength = data.timeout_length;
  }

  setTimeout(function() {
    evaluate([], widgetCount, timeoutLength);
  }, timeoutLength);
};


export default CustomizeTwitterWidget;
