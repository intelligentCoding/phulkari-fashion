import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();
    
        this.state = {
         sections : [
            {
              title: 'Phulkari Pants',
              imageUrl: 'https://i.etsystatic.com/20015124/r/il/455899/1849552192/il_794xN.1849552192_jjgb.jpg',
            //   size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'Dupatta',
              imageUrl: 'https://i.pinimg.com/564x/19/fe/7d/19fe7d0bdbd90731c53b56e738f64fe5.jpg',
            //   size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            },
            {
                title: 'Bridal Phulkari',
                imageUrl: 'https://i.pinimg.com/564x/e1/5d/51/e15d51ad899f8d360a84cca6933b0aba.jpg',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'Traditional Phulkari',
                imageUrl: 'https://i.pinimg.com/564x/69/18/48/691848eb20968a96cf57ce7246ba8661.jpg',
                id: 2,
                linkUrl: 'shop/jackets'
              },
              {
                title: 'Modern Phulkari',
                imageUrl: 'https://i.pinimg.com/564x/79/fa/c5/79fac5d276e5b59d915e424b6cae2e86.jpg',
                id: 3,
                linkUrl: 'shop/sneakers'
              },
              {
                title: 'Hand Embroidred',
                imageUrl: 'https://i.pinimg.com/564x/70/38/40/703840c9782f4623732bcfc6a9a9f45d.jpg',
                id: 1,
                linkUrl: 'shop/hats'
              },
              {
                title: 'Traditional Jagga',
                imageUrl: 'https://i.pinimg.com/564x/79/fa/c5/79fac5d276e5b59d915e424b6cae2e86.jpg',
                id: 2,
                size: 'large',
                 linkUrl: 'shop/jackets'
              },
              {
                title: 'Lehenga Choli',
                imageUrl: 'https://i.pinimg.com/564x/e1/5d/51/e15d51ad899f8d360a84cca6933b0aba.jpg',
                id: 3,
                size: 'large',
                linkUrl: 'shop/sneakers'
              }]
        }

    }
    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem size={size} imageUrl={imageUrl} key={id} title={title}></MenuItem>
                    ))
                }
            </div> 
        );
    } 
}
export default Directory;