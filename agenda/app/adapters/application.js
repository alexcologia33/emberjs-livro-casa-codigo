
import DS from 'ember-data';

export default DS.RESTAdapter.extend( {
    host: 'http://agenda.clairton.eti.br',
    namespace: null,
    coalesceFindRequests: true,
});

/*


import DS from 'ember-data';

export default DS.RESTAdapter.extend( {
    namespace: 'api',
    host:'http://localhost:8080',
    primaryKey: 'id',
    coalesceFindRequests: false,
});


*/
