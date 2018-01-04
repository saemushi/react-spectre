"use strict";Object.defineProperty(exports,"__esModule",{value:!0});function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var React=_interopDefault(require("react")),PropTypes=_interopDefault(require("prop-types")),classnames=_interopDefault(require("classnames")),_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},objectWithoutProperties=function(e,r){var o={};for(var t in e)r.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(e,t)&&(o[t]=e[t]);return o},Button=function(e){var r=e.children,o=objectWithoutProperties(e,["children"]),t=o.className,n=o.primary,p=o.link,s=o.success,c=o.error,l=o.block,a=o.small,i=o.large,u=o.action,b=o.circle,y=o.active,P=o.loading,d=objectWithoutProperties(o,["className","primary","link","success","error","block","small","large","action","circle","active","loading"]),m=classnames("btn",{"btn-primary":n,"btn-link":p,"btn-success":s,"btn-error":c,"btn-block":l,"btn-sm":a,"btn-lg":i,"btn-action":u||b,circle:b,active:y,loading:P},t);return React.createElement("button",_extends({},d,{className:m}),r)};Button.propTypes={children:PropTypes.any,className:PropTypes.string,primary:PropTypes.bool,link:PropTypes.bool,success:PropTypes.bool,error:PropTypes.bool,block:PropTypes.bool,small:PropTypes.bool,large:PropTypes.bool,action:PropTypes.bool,circle:PropTypes.bool,active:PropTypes.bool,loading:PropTypes.bool};var Group=function(e){var r=e.children,o=objectWithoutProperties(e,["children"]),t=o.block,n=objectWithoutProperties(o,["block"]),p=cn("btn-group",{"btn-group-block":t});return React.createElement("div",_extends({},n,{className:p}),r)};Group.propTypes={children:PropTypes.any,block:PropTypes.bool},Button.Group=Group,exports.Button=Button,exports.Group=Group;
//# sourceMappingURL=button.js.map