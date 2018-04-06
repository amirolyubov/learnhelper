"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var index_1 = require("./index");
var space_1 = require("../space");
var RadioDemo = function () {
    return (React.createElement("div", null,
        React.createElement(space_1.default, { size: space_1.Size.M }),
        React.createElement(index_1.default, { labelText: "Radio" }),
        React.createElement(space_1.default, { size: space_1.Size.M }),
        React.createElement(index_1.default, { labelText: "Radio", checked: true }),
        React.createElement(space_1.default, { size: space_1.Size.M }),
        React.createElement(index_1.default, { labelText: "Radio", disabled: true })));
};
exports.default = RadioDemo;
//# sourceMappingURL=demo.js.map