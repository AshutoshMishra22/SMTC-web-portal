import React from 'react';
import { Card } from 'component';
import { Flex } from 'utils/style';
import { Container, Section, Section2 } from './HomeStyle';

function Home() {
	//all circular will come from cms
	const allCircular = [
		{
			id: '1',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '19 July, 2023',
		},
		{
			id: '2',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '19 July, 2023',
		},
		{
			id: '3',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '19 July, 2023',
		},
		{
			id: '4',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '19 July, 2023',
		},
		{
			id: '5',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '19 July, 2023',
		},
		{
			id: '6',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '19 July, 2023',
		},
		{
			id: '6',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '09 July, 2023',
		},
		{
			id: '6',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '09 July, 2023',
		},
		{
			id: '6',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '09 July, 2023',
		},
		{
			id: '6',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '09 July, 2023',
		},
		{
			id: '6',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '09 July, 2023',
		},
		{
			id: '6',
			content:
				'This is a sample scrolling text that has scrolls in the upper direction.',
			date: '09 July, 2023',
		},
	];
	return (
		<Container>
			<Section id='home'>
				<mark className='heading1'>Get Ready to Soar at SMTC!</mark>
				<p>
					Experience world-class education and unforgettable adventures with
					SMTC. From rocket science to art history, we've got you covered. Join
					our community and discover your true potential!
				</p>
			</Section>
			<Flex justifyContent='center'>
				<Card style={{ width: '80%' }}>
					<Flex
						style={{
							gap: '12px',
							height: '-webkit-fill-available',
						}}
					>
						<div className='home-brief-bg-img' />
						<Flex
							style={{
								flex: '1.2',
								padding: '5rem',
								gap: '8px',
							}}
							flexDirection='column'
						>
							<mark className='heading2'>Get Ready to Soar at SMTC!</mark>
							<span className='home-brief-content'>
								At SMTC, we believe in empowering our students with the skills
								and knowledge they need to succeed in a rapidly changing world.
								From our cutting-edge curriculum to our exciting extracurricular
								activities, we offer a wealth of opportunities to help you reach
								your full potential. Join us today and start your journey to
								greatness!
							</span>
						</Flex>
					</Flex>
				</Card>
			</Flex>
			<Flex justifyContent='space-evenly' className='circular-content'>
				<Card style={{ flex: 1 }}>
					<article className='circular-content-heading'>
						<h4>
							<b>All Circulars</b>
						</h4>
					</article>
					<div className='circular-content-list' direction='up'>
						{allCircular.map((circular) => {
							return (
								<article className='circular'>
									<Flex key={circular.id} justifyContent='space-between'>
										<span>{circular.content}</span>
										<span>{circular.date}</span>
									</Flex>
								</article>
							);
						})}
					</div>
				</Card>
				<div className='circular-latest-content'>
					<Card style={{ flex: 1 }}>
						<article className='circular-content-heading'>
							<h4>
								<b>Latest Circulars</b>
							</h4>
						</article>
						<div className='circular-content-list' direction='up'>
							{allCircular.splice(0, 5).map((circular) => {
								return (
									<article className='circular'>
										<Flex key={circular.id} justifyContent='space-between'>
											<span>{circular.content}</span>
											<span>{circular.date}</span>
										</Flex>
									</article>
								);
							})}
						</div>
					</Card>
				</div>
			</Flex>
		</Container>
	);
}
export default Home;
