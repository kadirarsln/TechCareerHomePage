import React from 'react'
/* import Footer from '../components/footer/Footer' */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import JobList from "../components/jobs/JobList";
import CardList from "../components/courses/CardList";
import TeknikSozluk from '../components/teknikSozluk/TeknikSozluk';
import Community from '../components/community/Community';
import CommunityNelerYaptik from '../components/communityNelerYaptik/CommunityNelerYaptik';
import Testimonials from '../components/testimonials/Testimonials';
import WhyTechcareer from "../components/whytechcareer/WhyTechcareer";
/* import Blog from "../components/blog/Blog" */

function Home() {
	return (
		<>
			<div>
				<JobList />
			</div>
			<div>
				<CardList />
			</div>
			{/* <div>
				<Blog />
			</div> */}
			<div>
				<TeknikSozluk />
			</div >
			<div>
				<Community />
			</div >
			<div>
				<CommunityNelerYaptik />
			</div >
			<div>
				<Testimonials />
			</div>
			<div>
				<WhyTechcareer />
			</div>

			{/* <div>
				<Footer />
			</div> */}

		</>
	)
}

export default Home