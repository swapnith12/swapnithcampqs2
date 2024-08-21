sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'examqs2',
            componentId: 'PoItemSetObjectPage',
            contextPath: '/PoSet/Items'
        },
        CustomPageDefinitions
    );
});