/* SPDX-License-Identifier: Apache-2.0
 * Copyright (c) 2020 Intel Corporation
 */

$(document).ready(function () {
    var algoliaIndex = 'smart-edge-open';
    var landing = 'docs';
    var input = '.input-section';
    var output ='.output-section';
    var result ='#search-result';
    var pagination = '#search-result-pagination';

    var openness_search = instantsearch({
        appId: 'KTK1L88VUK',
        apiKey: '2c09d111435e53368ced940058c3ce41',
        indexName: algoliaIndex,
        routing: false,
        searchParameters: {
            hitsPerPage: 10,
        }
    });
    //alert (JSON.stringify(search));
    openness_search.addWidget(instantsearch.widgets.searchBox({
        container: input,
        placeholder: 'Search document',
        autofocus: false,
        poweredBy: true
    }));

    openness_search.addWidget(instantsearch.widgets.hits({
        container: result,
        templates: {
            empty: 'No results',
            item(hit) { 
             console.log(hit)
            return  '<div class="search-item"><div class="columns-left-column"><a href="'+hit.path+'">'+hit.title+'</a></div></div>'

            }
        },
        transformData: {
            allItems: searchResults => {
                return searchResults;
            } 
        }
    }));

    openness_search.addWidget(instantsearch.widgets.pagination({
        container: pagination,
        maxPages: 20,
        scrollTo: false
    }));
    openness_search.start();

    var content = $(output).children();
        $(input).popover({
            html: true,
            placement: 'bottom',
            viewport: { selector: ".container-fluid", padding: 10 },
            content: function () {
                return content;
        }
    });

    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            if (!$(this).is(e.target)
                && $(this).has(e.target).length === 0
                && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

    $('.input-section').click(function (e) {
        if(e.target.className == "ais-search-box--input"){
            $(this).popover('show');
        }
   });


   $('.mobile-search').click(function(){
        $(".searchBar-section, .searchBox").toggleClass("mobile-active");

        if($(".searchBox").hasClass("mobile-active")){
            $(this).html('<svg class="menuIcon crossIcon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><defs><style>.a{fill:#fff;}</style></defs><path class="a" d="M25,7.014,22.986,5,15,12.986,7.014,5,5,7.014,12.986,15,5,22.986,7.014,25,15,17.014,22.986,25,25,22.986,17.014,15Z" transform="translate(-5 -5)"></path></svg>')
        }
        else {
            $(this).html('<svg xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-13" viewBox="0 0 40 40" width="100%" height="100%"><path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z" fill-rule="evenodd"></path></svg>')
        }
   })
});