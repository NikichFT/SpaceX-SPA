import React from "react";
import './home.css';
import logo from '../../logo.svg';
import Main from '../../components/Main/Main'


const Home = ({ companies }) => {

   return (
	<>
	<Main/>
	<main className="main">
		<div className="container">
			<hgroup className="title">
				<h1>
					<img className="logo-title" src={logo} alt={companies.name}/>
				</h1>
				<h2 className="subtitle">
					{companies.summary}
				</h2>
			</hgroup>


			<div className="row">
				<table className="home_table home_table-manager">
					<caption className="home_table-title">
						Manager
					</caption>
					<thead>
						<tr>
							<td className="home_table-column table-column-left">CEO</td>
							<td className="home_table-column">{companies.ceo}</td>
						</tr>
						<tr>
							<td className="home_table-column table-column-left">COO</td>
							<td className="home_table-column">{companies.coo}</td>
						</tr>
						<tr>
							<td className="home_table-column table-column-left">CTO</td>
							<td className="home_table-column">{companies.cto}</td>
						</tr>
						<tr>
							<td className="home_table-column table-column-left">CTO PROPULSION</td>
							<td className="home_table-column">{companies.cto_propulsion}</td>
						</tr>


					</thead>
				</table>

				<table className="home_table home_table-location">
					<caption className="home_table-title">
						Location
					</caption>
					<thead>
						<tr>
							<td className="home_table-column table-column-left">State</td>
							<td className="home_table-column">{companies.headquarters.state}</td>
						</tr>
						<tr>
							<td className="home_table-column table-column-left">City</td>
							<td className="home_table-column">{companies.headquarters.city}</td>
						</tr>
						<tr>
							<td className="home_table-column table-column-left">Address</td>
							<td className="home_table-column">{companies.headquarters.address}</td>
						</tr>

					</thead>
				</table>

				<video id="video" autoPlay loop muted className="responsive-video" width="100%" height="100%" preload="auto">
					<source type="video/mp4" src="https://www.spacex.com/media/mission_reusability.mp4"/>
					<source type="video/webm" src="https://www.spacex.com/media/mission_reusability.webm"/>
				</video>
			</div>

		</div>

	</main>
	</>
	)
};


export default Home;
