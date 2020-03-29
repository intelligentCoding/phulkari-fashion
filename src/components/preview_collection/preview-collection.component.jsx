import React from 'react';
import './preview_collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
    <div className="collection-preview">
        <h1 className="title">{title}</h1>
        <div className ="preview">
            {
                items.filter((item, idex) => idex < 4 ).map(({id, ...itemProps}) => (
                    <CollectionItem key={id} {...itemProps}/>
                ))
            }
        </div>
    </div>
);

export default PreviewCollection;