/**
 * @author Jonathan Jouret aka Dafooz
 * @description View containing the rounded tiles
 */
sap.ui.jsview("roundedtiles.main", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf ditc_screens_samples.tiles
	 */
	getControllerName : function() {
		return "roundedtiles.main";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf ditc_screens_samples.tiles
	 */
	createContent : function(oController) {
		// Create the standard UI5 Tile container
		this.oTilesContainer = new sap.m.TileContainer();
		this.oTilesContainer.setHeight("100%");
		this.oTilesContainer.setVisible(true);
		// Creates and returns the Page to be shown by the view
		return new sap.m.Page({
			title : "RoundedTiles",
			enableScrolling : false,
			content : [
				this.oTilesContainer
			]
		});
	},
	/**
	 * Event triggered by UI5 before the view is shown. It calls the controller
	 * to creates the tiles within the tile container
	 */
	onBeforeShow : function(oEvent) {
		this.getController().onBeforeShow(oEvent);
	}
});