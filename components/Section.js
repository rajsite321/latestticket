const Section = () => {
    return (
        <div className="tm-section tm-position-relative">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="tm-section-down-arrow">
          <polygon fill="#ee5057" points="0,0  100,0  50,60" />                   
        </svg> 
        <div className="container tm-pt-5 tm-pb-4">
          <div className="row text-center">
            <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">                            
              <i className="fa tm-fa-6x fa-legal tm-color-primary tm-margin-b-20" />
              <h3 className="tm-color-primary tm-article-title-1">Pellentesque accumsan arcu nec dolor tempus</h3>
              <p>Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida. Donec at felis libero. Mauris odio tortor.</p>
              <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">Continue reading...</a>
            </article>
            <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">                            
              <i className="fa tm-fa-6x fa-plane tm-color-primary tm-margin-b-20" />
              <h3 className="tm-color-primary tm-article-title-1">Duis scelerisque metus vel felis porttitor</h3>
              <p>Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida. Donec at felis libero. Mauris odio tortor.</p>
              <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">Continue reading...</a>                            
            </article>
            <article className="col-sm-12 col-md-4 col-lg-4 col-xl-4 tm-article">                           
              <i className="fa tm-fa-6x fa-life-saver tm-color-primary tm-margin-b-20" />
              <h3 className="tm-color-primary tm-article-title-1">Etiam aliquam arcu at mauris consectetur</h3>
              <p>Pellentesque at velit ante. Duis scelerisque metus vel felis porttitor gravida. Donec at felis libero. Mauris odio tortor.</p>
              <a href="#" className="text-uppercase tm-color-primary tm-font-semibold">Continue reading...</a>                           
            </article>
          </div>        
        </div>
      </div>
    );
}

export default Section;