define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.edit = { allowEditing: true, allowAdding: true, allowDeleting: true };
            this.toolbar = { showToolbar: true, toolbarItems: ["add", "edit", "delete", "update", "cancel"] };
            this.gridData = [{
                    OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5,
                    OrderDate: new Date(8364186e5), Freight: 32.38
                },
                {
                    OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6,
                    OrderDate: new Date(836505e6), Freight: 11.61
                },
                {
                    OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4,
                    OrderDate: new Date(8367642e5), Freight: 65.83
                },
                {
                    OrderID: 10251, CustomerID: 'VICTE', EmployeeID: 3,
                    OrderDate: new Date(8367642e5), Freight: 41.34
                },
                {
                    OrderID: 10252, CustomerID: 'SUPRD', EmployeeID: 4,
                    OrderDate: new Date(8368506e5), Freight: 51.3
                }];
        }
        App.prototype.recordClick = function (e) {
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources')
            .plugin('aurelia-syncfusion-bridge', function (syncfusion) { return syncfusion.ejGrid().ejTemplate(); });
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"../node_modules/syncfusion-javascript/Content/ej/web/bootstrap-theme/ej.web.all.min.css\"></require><require from=\"../node_modules/syncfusion-javascript/Content/ej/web/responsive-css/ej.responsive.css\"></require><div><ej-grid e-data-source.two-way=\"gridData\" e-allow-paging=\"true\" e-allow-sorting=\"true\" e-edit-settings.bind=\"edit\" e-toolbar-settings.bind=\"toolbar\" e-on-record-click.delegate=\"recordClick($event.detail)\"><ej-column e-field=\"OrderID\" e-header-text=\"Order ID\" e-text-align=\"right\"></ej-column><ej-column e-field=\"CustomerID\" e-header-text=\"Customer ID\"></ej-column><ej-column e-field=\"EmployeeID\" e-header-text=\"Employee ID\" e-text-align=\"right\"></ej-column><ej-column e-field=\"Freight\" e-header-text=\"Freight\" e-format=\"{0:C}\" e-text-align=\"right\"></ej-column><ej-column e-field=\"OrderDate\" e-header-text=\"Order Date\" e-format=\"{0:MM/dd/yyyy}\" e-text-align=\"right\"></ej-column></ej-grid></div></template>"; });
//# sourceMappingURL=app-bundle.js.map