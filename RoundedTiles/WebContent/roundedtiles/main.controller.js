/**
 * @author Jonathan Jouret aka Dafooz
 * @description Controller creating the tiles
 */

// Load the rounded tile control
jQuery.sap.require("controls.RoundedTile");
// Define the view controller
sap.ui.controller("roundedtiles.main", {
	/**
	 * Function called before the view is shown It creates an array of tiles
	 * with some settings such as the icon, the text, ... then creates the
	 * different rounded tiles controls associated with the entries in the array
	 */
	onBeforeShow : function(oEvent) {
		var tiles = [
					{
						title : "Tile 1",
						icon : "Chart-Tree-Map",
						iconColor : "#ffffff",
						bgColor : "rgb(57, 123, 110)",
						borderColor : "rgb(57, 123, 110)"
					}, {
						title : "Tile 2",
						icon : "search"
					}, {
						title : "Tile 3",
						icon : "image-viewer"
					}, {
						title : "Tile 4",
						icon : "search"
					}, {
						title : "Tile 5",
						icon : "workflow-tasks"
					}, {
						title : "Tile 6",
						icon : "settings"
					}, {
						title : "Tile 7",
						icon : "duplicate"
					}, {
						title : "Tile 8",
						icon : "globe"
					}, {
						title : "Tile 9",
						icon : "appointment"
					}, {
						title : "Tile 10",
						icon : "manager"
					}, {
						title : "Tile 11",
						icon : "locked"
					}, {
						title : "Tile 12",
						icon : "upload"
					}
		];

		for ( var c in tiles) {
			var tileItem1 = new controls.RoundedTile();
			tileItem1.setTitle(tiles[c]["title"]);
			tileItem1.setIcon("sap-icon://" + tiles[c]["icon"]);
			if (tiles[c]["iconColor"])
				tileItem1.setIconColor(tiles[c]["iconColor"]);
			if (tiles[c]["bgColor"])
				tileItem1.setBgColor(tiles[c]["bgColor"]);
			if (tiles[c]["borderColor"])
				tileItem1.setBorderColor(tiles[c]["borderColor"]);
			this.getView().oTilesContainer.addTile(tileItem1);
		}

	}
});