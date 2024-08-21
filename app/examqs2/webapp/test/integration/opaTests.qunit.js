sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'examqs2/test/integration/FirstJourney',
		'examqs2/test/integration/pages/PoSetList',
		'examqs2/test/integration/pages/PoSetObjectPage',
		'examqs2/test/integration/pages/PoItemSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, PoSetList, PoSetObjectPage, PoItemSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('examqs2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePoSetList: PoSetList,
					onThePoSetObjectPage: PoSetObjectPage,
					onThePoItemSetObjectPage: PoItemSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);