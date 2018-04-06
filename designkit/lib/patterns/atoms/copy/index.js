"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var styled_components_1 = require("styled-components");
var fonts_1 = require("../fonts");
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
})(Size = exports.Size || (exports.Size = {}));
var TextAlign;
(function (TextAlign) {
    TextAlign[TextAlign["Left"] = 0] = "Left";
    TextAlign[TextAlign["Center"] = 1] = "Center";
    TextAlign[TextAlign["Right"] = 2] = "Right";
})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
// The proxy component is used to rendering styled componentes with variable
// tag names.
var CopyProxy = function (props) {
    var ProxyComponent = props.tagName;
    return React.createElement(ProxyComponent, { className: props.className }, props.children);
};
var StyledCopy = styled_components_1.default(CopyProxy)(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\tmargin: 0;\n\tfont-family: ", ";\n\tcolor: ", ";\n\n\t", ";\n\n\t", ";\n\n\t", ";\n"], ["\n\tmargin: 0;\n\tfont-family: ", ";\n\tcolor: ", ";\n\n\t",
    ";\n\n\t",
    ";\n\n\t",
    ";\n"])), fonts_1.fonts().NORMAL_FONT, function (props) { return props.color || 'inherit'; }, function (props) {
    switch (props.size) {
        case Size.Small:
            return styled_components_1.css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tline-height: 15px;\n\t\t\t\t"], ["\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t\tline-height: 15px;\n\t\t\t\t"])));
        case Size.Medium:
        default:
            return styled_components_1.css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\tline-height: 21px;\n\t\t\t\t"], ["\n\t\t\t\t\tfont-size: 18px;\n\t\t\t\t\tline-height: 21px;\n\t\t\t\t"])));
    }
}, function (props) {
    switch (props.textAlign) {
        case TextAlign.Center:
            return styled_components_1.css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\ttext-align: center;\n\t\t\t\t"], ["\n\t\t\t\t\ttext-align: center;\n\t\t\t\t"])));
        case TextAlign.Right:
            return styled_components_1.css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\ttext-align: right;\n\t\t\t\t"], ["\n\t\t\t\t\ttext-align: right;\n\t\t\t\t"])));
        case TextAlign.Left:
            return styled_components_1.css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\ttext-align: left;\n\t\t\t\t"], ["\n\t\t\t\t\ttext-align: left;\n\t\t\t\t"])));
        default:
            return styled_components_1.css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t"], ["\n\t\t\t\t\ttext-align: inherit;\n\t\t\t\t"])));
    }
}, function (props) {
    return props.uppercase
        ? "letter-spacing: 1px;\n\t\t\t\ttext-transform: uppercase;"
        : '';
});
var Copy = function (props) {
    var tagName = props.tagName ? props.tagName : 'p';
    var className = props.className, size = props.size, textAlign = props.textAlign, color = props.color, uppercase = props.uppercase, text = props.text, children = props.children;
    return (React.createElement(StyledCopy, { className: className, tagName: tagName, size: size, textAlign: textAlign, color: color, uppercase: uppercase },
        text,
        children));
};
exports.default = Copy;
var templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_1;
//# sourceMappingURL=index.js.map