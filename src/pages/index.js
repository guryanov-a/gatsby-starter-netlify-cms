import React from 'react'
import SpecialOffersSlider from '../components/SpecialOffersSlider'
import ProductCompanies from '../components/ProductCompanies'
import CatalogSlider from '../components/CatalogSlider'
import CatalogAside from '../components/CatalogAside'
import AboutCompany from '../components/AboutCompany'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-3">
            <CatalogAside categories={this.props.data.asideCategories.edges} />
          </div>
          <div className="col col-12 col-md-9">
            <SpecialOffersSlider specialOffers={this.props.data.specialOffersSlider.edges} />
          </div>
        </div>
        <ProductCompanies productCompanies={this.props.data.productCompanies.edges} />
        <CatalogSlider />
        <AboutCompany />
      </div>
    )
  }
}

export const CatalogAsideQuery = graphql`
  query HomePageQuery {
    ...asideCategories
    ...specialOffersSlider
    ...productCompanies
  }
`
