"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var styled_components_1 = require("styled-components");
var colors_1 = require("../colors");
var copy_1 = require("../copy");
var StyledRadioInput = styled_components_1.default.input(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\tposition: absolute;\n\tleft: -100vw;\n"], ["\n\tposition: absolute;\n\tleft: -100vw;\n"])));
var StyledLabel = styled_components_1.default.label(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: ", ";\n\n\t", ";\n"], ["\n\tdisplay: flex;\n\talign-items: center;\n\tcolor: ", ";\n\n\t", ";\n"])), colors_1.default.black.toString(), function (props) { return (props.disabled ? "color: " + colors_1.default.grey90.toString() + ";" : ''); });
var StyledRadio = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 34px;\n\theight: 34px;\n\tborder: 1px solid ", ";\n\tborder-radius: 50%;\n\n\t", ";\n\n\t/* RadioIndicator */\n\t::before {\n\t\t", ";\n\t\tcontent: '';\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tborder-radius: 50%;\n\t\tbackground: ", ";\n\t}\n"], ["\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 34px;\n\theight: 34px;\n\tborder: 1px solid ", ";\n\tborder-radius: 50%;\n\n\t",
    ";\n\n\t/* RadioIndicator */\n\t::before {\n\t\t", ";\n\t\tcontent: '';\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tborder-radius: 50%;\n\t\tbackground: ", ";\n\t}\n"])), colors_1.default.grey70.toString(), function (props) {
    return props.disabled ? "border-color: " + colors_1.default.grey90.toString() + ";" : '';
}, function (props) { return (props.checked ? 'display: block;' : 'display: none;'); }, colors_1.default.green.toString());
var StyledLabelText = styled_components_1.default(copy_1.default)(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\tpadding-left: 12px;\n"], ["\n\tpadding-left: 12px;\n"])));
var Radio = function (props) {
    var disabled = props.disabled, groupName = props.groupName, value = props.value, handleChange = props.handleChange, checked = props.checked, labelText = props.labelText;
    return (React.createElement(StyledLabel, { disabled: disabled },
        React.createElement(StyledRadioInput, { type: "radio", name: groupName, value: value, onChange: handleChange }),
        React.createElement(StyledRadio, { checked: checked, disabled: disabled }),
        labelText && React.createElement(StyledLabelText, null, labelText)));
};
exports.default = Radio;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=index.js.map