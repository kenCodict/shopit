import { useContext } from 'react';
import { Card, Layout, ProductDetail } from '../components';
import { Context } from '../context';
import { GoToTop } from '../utils';
import Banner from '../components/Home/Banner';
import AboutUs from '../components/Home/About';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import DealsAndOffers from '../components/Home/DealsAndOffer';
import Testimonials from '../components/Home/Testimonials';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import NewsletterSignup from '../components/Home/NewsLetterSignup';
import CustomerSupport from '../components/Home/CustomerSupportCenter';
import SocialMediaIntegration from '../components/Home/SocialMediaHandle';

export const HomePage = () => {

    const context = useContext(Context);
    GoToTop();

    // const renderView = () => {
    //     if (context.filteredItems?.length > 0) {
    //         return (
    //             context.filteredItems?.map((item) => (
    //                 <Card key={item.id} item={item} />
    //             ))
    //         )
    //     } else {
    //         return (
    //             <p>No results found 😣</p>
    //         )
    //     }
            
    // }


    //console.log(filteredItems)

    // const [items, setItems] = useState(null);
    // useEffect(() => {
    //     fetch('https://api.escuelajs.co/api/v1/products')
    //         .then(resp => resp.json())
    //         .then(data => setItems(data))
    // }, []);

    return (
        <Layout>
            <Banner />
            <FeaturedProducts />
            <DealsAndOffers />
            <Testimonials />
            <AboutUs />
            <WhyChooseUs />
            <NewsletterSignup />
            <CustomerSupport />
            <SocialMediaIntegration />
            {/* <h1 className='mb-5 font-bold text-4xl'>Kencodict Tech</h1> */}
            
            {/* <form className='w-1/2 mb-8'>
                <input
                    type='text'
                    placeholder='Search product...'
                    className='border-2 rounded-lg w-full p-3'
                    onChange={(e) => context.setSearchByTitle(e.target.value)}
                />
            </form> */}

            {/* <div className='product-container gap-4  w-full max-w-screen-lg'>
                {
                    renderView()
                }   
            </div> */}
            {/* <ProductDetail /> */}
        </Layout>
    )
};