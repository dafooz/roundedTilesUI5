/**
 * @author Jonathan Jouret aka Dafooz
 * @description Rendered for the rounded tile control
 */
sap.ui.define(['jquery.sap.global', 'sap/m/TileRenderer'],
	function(jQuery, TileRenderer) {
	"use strict";

	var RoundedTileRenderer = sap.ui.core.Renderer.extend(TileRenderer);
	
	RoundedTileRenderer.render = function(rm, oControl) {
		rm.write("<div tabindex=\"0\""); // start div representing the tile 
		rm.writeControlData(oControl);
		rm.addClass("roundedTile");
		rm.addClass("sapMPointer");
		rm.writeClasses();
		rm.write(" style=\"border: 1px solid "+oControl.getBorderColor()+"; background-color: "+ oControl.getBgColor() +";\"");
		if (oControl._invisible) {
			rm.addStyle("visibility", "hidden");
			rm.writeStyles();
		}
		var sTooltip = oControl.getTooltip_AsString();
		if (sTooltip) {
			rm.writeAttributeEscaped("title", sTooltip);
		}
		rm.write(">");
		if (oControl.getRemovable()) {
			rm.write("<div id=\"" + oControl.getId() + "-remove\" class=\"sapMTCRemove\"></div>");
		} else {
			rm.write("<div id=\"" + oControl.getId() + "-remove\" class=\"sapMTCNoRemove\"></div>");
		}
		rm.write("<div class=\"roundedTileContent\">");
		this._renderContent(rm,oControl);
		rm.write("</div></div>"); // End the div representing the tile
	};

	RoundedTileRenderer._renderContent = function(rm, oTile) {
		rm.write("<div"); // Start top row
		rm.addClass("roundedTileTopRow");
		rm.writeClasses();
		rm.write(">");
		if (oTile.getIcon()) { // Icon
			rm.write("<div");
			rm.addClass("sapMStdTileIconDiv");
			rm.write(" style=\"color:"+oTile.getIconColor()+";\"");
			
			switch (oTile.getType()) {
				case sap.m.StandardTileType.Monitor:
					rm.addClass("sapMStdIconMonitor");
					break;
				case sap.m.StandardTileType.Create:
					rm.addClass("sapMStdIconCreate");
					break;
			}
			rm.writeClasses();
			rm.write(">");
			
			var icon = oTile._getImage();
			icon.addStyleClass('roundedTileIcon');
			
			rm.renderControl(icon);
			rm.write("</div>");
		}
		
// Remove the managment of the number for now... 		
/*		if (oTile.getNumber()) {
			
			rm.write("<div");
			rm.addClass("sapMStdTileNumDiv");
			rm.writeClasses();
			rm.write(">");
			
			rm.write("<div");
			rm.writeAttribute("id", oTile.getId() + "-number");
			
			var numberLength = oTile.getNumber().length;
			if (numberLength < 5) {
				rm.addClass("sapMStdTileNum");
			} else if (numberLength < 8) {
				rm.addClass("sapMStdTileNumM");
			} else {
				rm.addClass("sapMStdTileNumS");
			}
			
			rm.writeClasses();
			rm.write(">");
			rm.writeEscaped(oTile.getNumber());
			rm.write("</div>");
		
			if (oTile.getNumberUnit()) {
				rm.write("<div");
				rm.writeAttribute("id", oTile.getId() + "-numberUnit");
				rm.addClass("sapMStdTileNumUnit");
				rm.writeClasses();
				rm.write(">");
				rm.writeEscaped(oTile.getNumberUnit());
				rm.write("</div>");
			}
			rm.write("</div>"); // End number div
		}
*/
		rm.write("</div>"); // End top row div
		
		
		rm.write("<div"); // Start monitoring tile styling
		rm.addClass("roundedTileBottomRow");
		if (oTile.getType() === sap.m.StandardTileType.Monitor) {
			rm.addClass("sapMStdTileMonitorType");
		}
		rm.writeClasses();
		rm.write(">");
		
		rm.write("<div");  // Start title div
		rm.writeAttribute("id", oTile.getId() + "-title");
		rm.addClass("roundedTileTitle");
		rm.writeClasses();
		rm.write(" style=\"color:"+oTile.getIconColor()+";\"");
		rm.write(">");
		if (oTile.getTitle()) {
			rm.writeEscaped(oTile.getTitle());
		}
		rm.write("</div>"); // End title div
		
		if (oTile.getInfo()) {
			rm.write("<div"); // Start info
			rm.writeAttribute("id", oTile.getId() + "-info");
			rm.addClass("sapMStdTileInfo");
			rm.addClass("sapMStdTileInfo" + oTile.getInfoState());
			rm.writeClasses();
			rm.write(">");
			if (oTile.getInfo()) {
				rm.writeEscaped(oTile.getInfo());
			}
			rm.write("</div>"); // End info
		}
		rm.write("</div>"); // End bottom row type tile styling
		
	};
	

	return RoundedTileRenderer;

}, /* bExport= */ true);
