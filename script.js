'use srict'

function sortByProperty( arrayObjects, property ) {

    arrayObjects.sort( (a, b) => a.property > b.property ? 1 : -1 );

}