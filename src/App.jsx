import {
  Hero,
  PopularProducts,
  Subscribe,
  SuperQuality,
  CustomerReviews,
  Services,
  SpecialOffers,
  Footer
} from "./sections";
import Nav from "./components/Nav";


const App = () => (  // we are not using curly braces here since () helps to return immediately without using any return statement
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
    <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App;