sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'parts/test/integration/FirstJourney',
		'parts/test/integration/pages/PartsList',
		'parts/test/integration/pages/PartsObjectPage'
    ],
    function(JourneyRunner, opaJourney, PartsList, PartsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('parts') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePartsList: PartsList,
					onThePartsObjectPage: PartsObjectPage
                }
            },
            opaJourney.run
        );
    }
);