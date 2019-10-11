import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import Hits from 'react-instantsearch-dom/dist/cjs/widgets/Hits';

const searchClient = algoliasearch('6AIT8G92WI', '0aa9273dabdbdcff974079ca61882551');

const SearchCourse = () => (
    <InstantSearch searchClient={searchClient} indexName="courses">
        <SearchBox />
        <Hits />
    </InstantSearch>
);

export default SearchCourse