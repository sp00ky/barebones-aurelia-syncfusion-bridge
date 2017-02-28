# Barebones Aurelia app with aurelia-syncfusion-bridge

This is simply a new project created using the command `au new`.  I've added the requisite snippets from

https://github.com/aurelia-ui-toolkits/aurelia-syncfusion-bridge/wiki/CLI-Integration

Since node_modules is typically ignored, you may have to fix one of the files included with Syncfusion-Javascript like so:

Open node_modules\syncfusion-javascript\Content\ej\web\bootstrap-theme\ej.web.all.min.css file and replace the old one with following line.

 @import url("../ej.widgets.core.bootstrap.min.css");
 @import url("./ej.theme.min.css");
