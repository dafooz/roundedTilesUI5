/**
 * @author Jonathan Jouret aka Dafooz
 * @description Control creating rounded tiles
 */

// Register the control
jQuery.sap.declare("controls.RoundedTile");
// Include the CSS for the control
jQuery.sap.includeStyleSheet("controls/roundedTile.css");
// Load the standard tile as this control inherits from it
jQuery.sap.require("sap.m.StandardTile");
// Extend the standard tile controller to create this control.
// The properties added are: the icon color, the background color and the border color
sap.m.StandardTile.extend("controls.RoundedTile", {
	metadata : {
		properties : {
			// Icon color property with default value to standard UI5 blue
			iconColor : {
				type : "string",
				defaultValue : "#007cc0"
			},
			// Background color property with default value to white
			bgColor : {
				type : "string",
				defaultValue : "rgb(255, 255, 255)"
			},
			// Border color property with default value to standard UI5 blue
			borderColor : {
				type : "string",
				defaultValue : "#007cc0"
			}
		}
	}
});
