import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import Cloudinary from '../components/cloudinary'
import Countdown from 'react-countdown-now';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from '../utils/linkResolver';
import { format } from 'date-fns'

export const homeQuery = graphql`
  query {
    prismic {
      allHome_pages(uid: null) {
        edges {
          node {
            _meta {
              uid
              tags
            }
            meta_title
            meta_keywords
            meta_description
            title
            content
            countdown_deadline
            countdown_title
            countdown_text
            body {
              ...on PRISMIC_Home_pageBodyImage_gallery {
                type
                fields {
                  hero_title
                  hero_image
                  hero_content
                }
              }
            }
          }
        }
      }
    }
    allBidJs {
      edges {
        node {
          id
          itemid
          lotNumber
          imageUrls
          title
          endTime
        }
      }
    }
  }
`

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='countdown'>
      <div className='days'><span>Days</span> {days}</div>
      <div className='hours'><span>Hours</span> {hours}</div>
      <div className='minutes'><span>Minutes</span> {minutes}</div>
      <div className='seconds'><span>Seconds</span> {seconds}</div>
    </div>
  )
};

const RenderBody = ({ homePage, bidJs }) => {
  return (
    <React.Fragment>
      {homePage.body &&
        <React.Fragment>
          {homePage.body.map((slice, index) => {
            return (
              <div key={`slice-${index}`}>
                {slice.type ==='image_gallery' &&
                  <React.Fragment>
                    <div id='opas-carousel' className='carousel slide' data-ride='carousel'>
                      <div className='carousel-inner hero' role='listbox'>
                        {slice.fields.map((item, index) => {
                          return (
                            <div className={'item' + (index === 0 ? ' active' : '')} key={`item-${index}`}>
                              <picture>
                                <source srcSet={item.hero_image.Mobile.url} loading={index === 0 ? 'eager' : 'auto'} media="(max-width: 768px)" className="img-responsive" />
                                <img src={item.hero_image.url} alt={item.hero_image.alt} loading={index === 0 ? 'eager' : 'auto'} className="img-responsive" />
                              </picture>
                              <div className='carousel-caption hero-text'>
                                {RichText.render(item.hero_title, linkResolver)}
                                {RichText.render(item.hero_content, linkResolver)}
                              </div>
                            </div>
                          )
                        })}
                        <a className='left carousel-control' href='#opas-carousel' role='button' data-slide='prev'>
                          <span className='icon-prev' aria-hidden='true'></span>
                          <span className='sr-only'>Previous</span>
                        </a>
                        <a className='right carousel-control' href='#opas-carousel' role='button' data-slide='next'>
                          <span className='icon-next' aria-hidden='true'></span>
                          <span className='sr-only'>Next</span>
                        </a>
                      </div>
                    </div>
                  </React.Fragment>
                }
              </div>
            )
          })}
        </React.Fragment>
      }
      <div className='container-fluid mt-2'>
        <div className='row'>
          <div className='col-xs-12 col-md-8 col-lg-9'>
            <main className='main' id='main' role='main'>
              {RichText.render(homePage.title, linkResolver)}
              {RichText.render(homePage.content, linkResolver)}
              <div className='clearfix mt-4'>
                <h2 className="pull-left mt-0">Latest Properties</h2>
                <a href='/auction' className='btn btn-default pull-right' role='button'>View All</a>
              </div>
              <div className='row auction d-flex flex-wrap'>
                {bidJs.edges.map((item, index) => {
                  const endDate = format(item.node.endTime, 'ha on Mo MMMM YYYY');
                  return (
                    <div className='col-xs-6 col-sm-4 col-lg-3 d-flex flex-column'  key={`item-${index}`}>
                      <a className='thumbnail pos-rel flex-grow d-flex flex-column' href={`/auction/#!/itemDetails/340/${item.node.itemid}`}>
                        <span className='label label-primary pos-abs'>Lot {item.node.lotNumber}</span>
                        <Cloudinary url={item.node.imageUrls[0]} />
                        <div className='caption mt-auto'>
                          <small className='text-muted'>Ends: {endDate}</small>
                          <h3 className='h5 mb-0 text-muted' dangerouslySetInnerHTML={{__html: item.node.title}} />
                          <div className='text-center mt-3'><button className="btn btn-block btn-primary stretch">View</button></div>
                        </div>
                      </a>
                    </div>
                  )
                })}
              </div>
            </main>
          </div>
          <div className='col-xs-12 col-md-4 col-lg-3'>
            <aside>
              <div className='panel panel-primary'>
                <div className='panel-body text-center'>
                  <div>{RichText.render(homePage.countdown_title, linkResolver)}</div>
                  <Countdown date={homePage.countdown_deadline} zeroPadTime={2} zeroPadDays={2} renderer={renderer} />
                  <div>{RichText.render(homePage.countdown_text, linkResolver)}</div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const HomePage = props => {
  const doc = props.data.prismic.allHome_pages.edges.slice(0,1).pop();
  const bidJs = props.data.allBidJs;
  if(!doc) return null;

  return (
    <Layout>
      <SEO title={doc.node.meta_title} keywords={doc.node.meta_keywords} description={doc.node.meta_description} lang='en-gb' />
      <RenderBody homePage={doc.node} bidJs={bidJs}/>
    </Layout>
  )
}
export default HomePage
